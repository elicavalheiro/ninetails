<template>
  <input type="text" :placeholder="title" :id="value" :name="value">
</template>

<script>
export default {
  name: 'Input',
  props: ['title', 'value']
}
</script>

<style lang="scss" scoped>
input {
  background: #f1f1f1;
  border: none;
  padding: 15px 20px;
  border-radius: 15px;
  margin: 10px 0;
  font-size: 18px;
  width: 100%;
  font-family: 'Ubuntu', sans-serif;
  
  &::placeholder {
    color: #505050;
  }
}
</style>