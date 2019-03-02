<template>
  <div class="container">
    <div class="sun-container">
      <transition name="fade">
        <div :class="sunClasses" v-if="!sunIsHidden">
          <span></span>
        </div>
      </transition>
    </div>
    <div class="text">Click the buttons to manipulate the sun!</div>
    <BigButton :label="buttonText" @click="toggle()"/>
    <div class="push"></div>
    <BigButton :label="'toggle blur'" @click="toggleBlur()"/>
    <div class="push"></div>
    <BigButton :label="'Change color'" @click="changeColor()"/>
  </div>
</template>

<script>
// @ is an alias to /src
import BigButton from '@/components/BigButton.vue'

export default {
  name: 'sun',
  components: { BigButton },
  data() {
    return {
      buttonText: '',
      sunIsHidden: false,
      isBlurred: false,
      isDark: false
    }
  },
  created() {
    this.showMsg = 'Show the sun'
    this.hideMsg = 'Hide the sun'
    this.setButtonText()
  },
  computed: {
    sunClasses() {
      return [this.isBlurred ? 'blur' : '', this.isDark ? 'dark' : '', 'sun']
    }
  },
  methods: {
    toggle() {
      this.sunIsHidden = !this.sunIsHidden
      this.setButtonText()
    },
    setButtonText() {
      if (this.sunIsHidden) this.buttonText = 'Show the sun'
      else this.buttonText = 'Hide the sun'
    },
    toggleBlur() {
      this.isBlurred = !this.isBlurred
    },
    changeColor() {
      console.log('change color')
      this.isDark = !this.isDark
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  align-content: center;
}

.sun-container {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  height: 200px;
  margin-bottom: 3em;
}

$red-top: rgb(229, 88, 142);
$midway: rgb(250, 192, 154);
$light-bottom: rgb(252, 234, 164);

.sun {
  border-radius: 50%;
  background-color: $red-top;
  //background-image: linear-gradient($red-top, $midway);
  background-image: linear-gradient($red-top, $midway, $light-bottom);
  width: 100%;
  height: 100%;
  filter: blur(1px);
  transition: filter 0.4s ease-out, background-image 0.4s ease-in-out;
  // transition: background-image 0.4s ease-in-out;
  // -webkit-transition: background-image 0.4s ease-in-out;
}

.dark {
  // transition: background-image 0.4s ease-in-out;
  // -webkit-transition: background-image 0.4s ease-in-out;
  background-image: linear-gradient($red-top, $red-top);
}

.text {
  font-family: 'Roboto Mono', serif;
  font-size: 36px;
  margin-bottom: 2em;
  filter: blur(0.5px);
}

.blur {
  filter: blur(25px);
}

.push {
  height: 2em;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
