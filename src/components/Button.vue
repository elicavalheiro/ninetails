<template>
  <button :style="colors[color]">{{title}}</button>
</template>

<script>
export default {
  name: 'Button',
  props: ['title', 'color'],
  data(){
    return {
      colors: {
        red: { background: '#FE654D' },
        blue: { background: '#7F8DE0' },
        red_border: { border: '1px solid #FE654D', background: 'none', color: '#FE654D' },
        blue_border: { border: '1px solid #7F8DE0', background: 'none', color: '#7F8DE0' }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  color: white;
  font-family: 'Ubuntu', sans-serf;
  font-size: 18px;
  font-weight: 700;
  padding: 15px 50px;
  border: none;
  border-radius: 15px;
}
</style>