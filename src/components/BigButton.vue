<template>
  <div class="button">
    <button type="button" v-on="$listeners">{{ label }}</button>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Click me'
    }
  }
}
</script>

<style scoped lang="scss">
.button > button {
  padding: 1em;
  border: 3px solid #222;
  background-color: transparent;
  font-family: 'Roboto Mono', serif;
  font-size: 24px;
  // width: auto;
  display: inline;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
}
</style>
