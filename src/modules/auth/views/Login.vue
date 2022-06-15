<template>
  <span class="login100-form-title p-b-41"> Ingresar </span>
  <form class="login100-form validate-form p-b-33 p-t-5" @submit.prevent="login">
    <div class="wrap-input100 validate-input" data-validate="Enter username">
      <input class="input100" type="text" placeholder="Correo" v-model="user.email" required />
      <span class="focus-input100" data-placeholder="&#xe82a;"></span>
    </div>

    <div class="wrap-input100 validate-input" data-validate="Enter password">
      <input class="input100" type="password" placeholder="Contraseña" v-model="user.password" required />
      <span class="focus-input100" data-placeholder="&#xe80f;"></span>
    </div>

    <div class="container-login100-form-btn m-t-32">
      <button class="login100-form-btn" type="submit">Login</button>
    </div>

    <div class="container-login100-form-btn m-t-32">
      <router-link :to="{ name: 'registro' }">¿No tienes cuenta?</router-link>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue';
import useAuth from '../composables/useAuth';
import Swal from "sweetalert2";
import { useRouter } from "vue-router";
export default {

  setup() {
    const router = useRouter();
    const user = ref({
      email: '',
      password: '',
    })
    const { loginUser } = useAuth();
    return {
      user,
      login: async () => {
        const { ok, resp } = await loginUser(user.value)
        if(!ok) Swal.fire('Error', 'Error al Iniciar Sesion', 'error')
        else router.push({ name: 'no-entry' })

        Swal.fire({
          title: 'Iniciando...!',
          icon: 'success',
          timer: 2000,
          text: 'Espera un momento'
        })

      }
    }
  }

};
</script>

<style>
</style>