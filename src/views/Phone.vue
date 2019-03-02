<template>
  <div class="about">
    <h1>Here we want to animate a phone, work in progress, based on
      <a href="https://codepen.io/sdras/pen/YNpaoJ">this</a>
    </h1>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1600 900"
      aria-labelledby="title"
      class="phone-svg"
    >
      <rect x="0" y="0" width="100%" height="100%" fill="purple"></rect>
      <circle cx="50%" cy="50%" r="90" fill="white"></circle>
      <g style="isolation:isolate">
        <g id="Layer_1" data-name="Layer 1">
          <path
            id="phonebase"
            d="M454.5,248.4l-.5,8.9-52,60c-5.3,8.7-28.7,4.7-28.7,4.7L141.4,261.4h0l-.7-.2h-.1a4.5,4.5,0,0,1-3.2-3.4h0v-.5a0,0,0,0,1,0,0l-.6-11.3Z"
            transform="translate(0 58)"
            fill="black"
          ></path>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.phone-svg {
  max-width: 1300px;
  margin: 0 auto;
  display: table;
}
</style>