<template>
  <div class="container">
    <div class="content">
      <img src="../assets/pokelogo.svg" alt="PokeCommerce">
      <form action="">
        <Input title="Nome" value="name" />
        <Input title="Email" value="email" />
        <Input title="Login" value="login" />
        <Input title="Senha" value="password" />
        <Button title="Cadastre-se" color="red" />
      </form>
      <a href="#">Já possui cadastro? Faça login aqui.</a>
      <a href="#">Quer saber mais sobre o PokeCommerce?</a>
    </div>
  </div>
</template>

<script>
import Input from '@/components/Input';
import Button from '@/components/Button';

export default {
  name: 'PokeCadastro',
  components: {
    Input,
    Button,
  }
}
</script>

<style lang="scss" scoped>
.container {
  background: url('../assets/bg.svg') no-repeat;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.content {
  width: 22%;
  margin-right: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & img {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
  }

  & form {
    width: 100%;
    display: flex;
    flex-direction: column;

    & button {
      width: 60%;
      align-self: flex-end;
      margin-top: 20px;
      margin-bottom: 40px;
    }
  }

  & a {
    color: #505050;
    margin-bottom: 30px;
  }
}
</style>