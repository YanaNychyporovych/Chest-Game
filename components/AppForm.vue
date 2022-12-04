<template>
  <form class="form">
    <img src="/images/logo-form.png" alt="" class="form__logo" />
    <p class="form__text form__text_mb">1 игра = {{ gamePrice }} $</p>
    <h3 class="form__title">Вам доступно</h3>
    <ul class="form__list">
      <li class="form__list-item">
        <p class="form__text">Игр:</p>
        <p class="form__count">
          {{ gameCountAvailable }} <span class="form__currency"></span>
        </p>
      </li>
    </ul>
    <h3 class="form__title">Покупка:</h3>
    <ul class="form__list form__list_last">
      <li class="form__list-item">
        <p class="form__text">Игр:</p>
        <div class="form__count">
          {{ gameCount }}
          <div class="form__currency">
            <button
              type="button"
              class="form__arrow form__arrow_plus"
              @click="plusCount()"
            >
              <img src="/icons/arrow-top.svg" alt="icon-top" /></button
            ><button
              type="button"
              class="form__arrow form__arrow_minus"
              :class="{ disabled: gameCount <= 0 }"
              @click="minusCount()"
            >
              <img src="/icons/arrow-bottom.svg" alt="icon-bottom" />
            </button>
          </div>
        </div>
      </li>
      <li class="form__list-item">
        <p class="form__text">Сумма:</p>
        <p class="form__count">
          {{ totalPrice }}<span class="form__currency">$</span>
        </p>
      </li>
    </ul>
    <AppBtn :disabled="!gameCount" @click="buyGame()" />
  </form>
</template>

<script>
import AppBtn from "@/components/AppBtn";
export default {
  components: {
    AppBtn,
  },
  data() {
    return {
      gameCount: 0,
      gamePrice: 5,
      gameCountAvailable: 0,
    };
  },
  created() {
    this.$parent.$on("update:count", this.setValue);
  },
  computed: {
    totalPrice() {
      return this.gameCount * this.gamePrice;
    },
  },
  methods: {
    // Methods for counter
    plusCount() {
      this.gameCount++;
    },
    minusCount() {
      if (this.gameCount > 0) this.gameCount--;
    },
    // Methods for counter

    // Method for buying games
    buyGame() {
      if (this.gameCount) {
        this.gameCountAvailable = this.gameCountAvailable + this.gameCount;
        this.gameCount = 0;
        this.$emit("add:game", this.gameCountAvailable);
      }
    },

    // Method for changing count available games
    setValue(value) {
      this.gameCountAvailable = value;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables";
.form {
  padding: 25px 20px 50px;
  width: 273px;
  background-image: url("/images/form_bg.png");
  background-repeat: no-repeat;
  z-index: 1;
  position: relative;
  color: $grey-light;
  line-height: normal;
  &__logo {
    margin-left: -15px;
    margin-bottom: 16px;
  }
  &__text {
    &_mb {
      margin-bottom: 36px;
    }
  }
  &__title {
    color: white;
    font-size: 18px;
    margin-bottom: 5px;
    text-transform: uppercase;
    margin-top: 0;
  }
  &__list {
    margin-bottom: 57px;
    &_last {
      margin-bottom: 20px;
    }
  }
  &__list-item {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    text-transform: uppercase;
    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }
  &__count {
    font-size: 30px;
    text-transform: uppercase;
    line-height: 30px;
    text-shadow: -4px 6px 3px rgba(31, 32, 32, 0.4);
    color: $gold;
    display: flex;
    align-items: center;
  }
  &__currency {
    color: $grey;
    font-size: 24px;
    min-width: 15px;
    margin-left: 7px;
    display: block;
  }
  &__arrow {
    cursor: pointer;
    background-color: transparent;
    border: none;
    padding: 0;
    display: block;
    margin: 0;
    height: 13px;
    &.disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  }
}
</style>