<template>
  <div class="gnome">
    <img
      src="/gifs/dwarf_head.gif"
      alt=""
      class="gnome__part gnome__part_head"
    />
    <img
      src="/gifs/dwarf_shoulder.gif"
      alt=""
      class="gnome__part gnome__part_shoulder"
    />
    <img
      src="/gifs/dwarf_нandcuff.gif"
      alt=""
      class="gnome__part gnome__part_нandcuff"
    />
    <img src="/gifs/dwarf_ax.gif" alt="" class="gnome__part gnome__part_ax" />
    <div class="gnome__wrapper">
      <div class="gnome__alert">
        <p class="gnome__text">
          {{!available ? 'Вскрывай сундуки из моей сокровищницы! Ищи несметные богатства!' : 'Молодец! Для начала игры нажми кнопку "Играть"'}}
        </p>
      </div>
      <AppBtn
        class="gnome__btn"
        title="Играть"
        type="grey"
        :disabled="!available || disabledBtn"
        @click="startGame()"
      />
    </div>
  </div>
</template>

<script>
import AppBtn from "@/components/AppBtn";
export default {
  components: {
    AppBtn,
  },
  props: {
    available: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      disabledBtn: false,
    };
  },
  methods: {
    startGame() {
      if (this.available) {
        this.$emit("start:game");
        this.disabledBtn = true;
      }
      setTimeout(() => (this.disabledBtn = false), 1200);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables";
.gnome {
  background-image: url("/images/game_gnome.png");
  background-repeat: no-repeat;
  margin-top: -20px;
  margin-left: -5px;
  width: 367px;
  height: 770px;
  background-position-x: -91px;
  position: relative;
  &__wrapper {
    padding-top: 161px;
    z-index: 1;
    position: relative;
  }
  &__alert {
    background-image: url("/images/game_alert.png");
    background-repeat: no-repeat;
    width: 329px;
    height: 309px;
    text-align: center;
  }
  &__text {
    color: $dark;
    font-size: 22px;
    line-height: 22px;
    font-weight: bold;
    padding: 170px 20px 20px;
  }
  &__btn {
    margin-top: 56px;
    margin-left: 47px;
  }
  &__part {
    position: absolute;
    z-index: 0;
    &_head {
      top: 55px;
      right: 108px;
    }
    &_shoulder {
      top: 121px;
      right: 15px;
    }
    &_нandcuff {
      top: 140px;
      left: 120px;
    }
    &_ax {
      top: 215px;
      left: 107px;
    }
  }
}
</style>