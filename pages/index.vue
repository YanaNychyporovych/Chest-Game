<template>
  <div class="home">
    <div class="home__wrapper">
      <img src="/images/fire.png" alt="fire" class="fire" />
      <AppFire class="interact-fire" />
      <div class="game">
        <div class="game__wrapper">
          <div class="game__container">
            <AppLogo class="home__logo" />
            <div class="game__items">
              <AppChestBox
                v-for="item in items"
                :key="item.id"
                :item="item"
                class="game__box"
              />
            </div>
            <p class="game__description">
              Для игры Вам необходимо купить попытки, а затем нажать кнопку
              “ИГРАТЬ”
            </p>
          </div>
          <div class="game__gnome">
            <AppGnome
              :available="!!gameCountAvailable"
              @start:game="startGame()"
            />
          </div>
        </div>
      </div>
      <div class="home__form">
        <AppForm @add:game="availableGame" />
      </div>
    </div>
    <AppModal
      v-if="showModal"
      :description="
        !isSuccessfully
          ? 'Поздравляем! Вы выиграли'
          : 'Не повезло! Попробуйте еще раз'
      "
      @close:modal="closeModal()"
    />
  </div>
</template>

<script>
import AppFire from "@/components/AppFire";
import AppLogo from "@/components/AppLogo";
import AppForm from "@/components/AppForm";
import AppBtn from "@/components/AppBtn";
import AppChestBox from "@/components/AppChestBox";
import AppGnome from "@/components/AppGnome";
import AppModal from "@/components/AppModal";
export default {
  name: "IndexPage",
  components: {
    AppFire,
    AppLogo,
    AppForm,
    AppBtn,
    AppChestBox,
    AppGnome,
    AppModal,
  },
  data() {
    return {
      activeGame: false,
      isSuccessfully: false,
      showModal: false,
      gameCountAvailable: 0,
      activeItem: null,
      items: [],
      countBox: 8,
    };
  },
  mounted() {
    for (let i = 0; i <= this.countBox; i++) {
      this.items.push({
        id: i,
        isOpen: false,
        isSuccessfully: false,
      });
    }
  },
  methods: {
    availableGame(count) {
      this.gameCountAvailable = count;
    },

    // Method for starting game
    getRandomInt(max) {
      return Math.floor(Math.random() * max);
    },
    async startGame() {
      if (this.gameCountAvailable) {
        const random = this.getRandomInt(8);
        await this.findActiveItem(random);
        this.isSuccessfully = !this.isSuccessfully;
        this.gameCountAvailable--;
        this.$emit("update:count", this.gameCountAvailable);
        this.openModal();
      }
    },

    // Find active item and change params
    findActiveItem(random) {
      const activeItem = this.items.find((el) => el.id === random);
      this.activeItem = activeItem;
      activeItem.isOpen = true;
      activeItem.isSuccessfully = this.isSuccessfully;
    },

    // Methods for modals
    openModal() {
      setTimeout(() => (this.showModal = true), 900);
    },
    closeModal() {
      this.showModal = false;
      this.items.forEach((element) => {
        element.isOpen = false;
      });
    },
    // Methods for modals
  },
};
</script>

<style lang="scss" scoped>
.home {
  &__wrapper {
    background-image: url("/images/game_bg.png");
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    padding-top: 122px;
    position: relative;
  }
  .interact-fire {
    position: absolute;
    z-index: 0;
    left: 41px;
    top: 125px;
    transform: rotate(30deg);
    pointer-events: none;
    z-index: 0;
  }
  .fire {
    position: absolute;
    left: -125px;
    top: 138px;
    z-index: 0;
  }
  &__logo {
    margin-bottom: 15px;
  }
  &__game {
    z-index: 1;
  }
  &__form {
    padding-top: 103px;
    z-index: 2;
    &::before {
      content: "";
      position: absolute;
      background-image: url("/images/game_form.png");
      background-repeat: no-repeat;
      height: 100%;
      min-height: 100vh;
      width: 37.2%;
      top: 0;
      right: 0;
      z-index: 0;
    }
  }
}
.game {
  z-index: 1;
  &__wrapper {
    display: flex;
  }
  &__container {
    max-width: 510px;
  }
  &__items {
    display: flex;
    flex-wrap: wrap;
  }
  &__description {
    max-width: 307px;
    margin: 0 auto;
    font-size: 16px;
    line-height: 20px;
    font-family: "PT Sans";
    text-shadow: 0 0 30px #1f2020;
    color: white;
    text-align: center;
  }
  &__box {
    margin-right: 6px;
    &:nth-child(3n) {
      margin-right: 0;
    }
  }
}
</style>
