<template>
  <h1 v-if="authStatus === 'authenticating'">{{ authStatus }}</h1>
  <router-view v-else />
</template>

<script>
import useAuth from './modules/auth/composables/useAuth'


export default {
  setup() {

    // con esto cargamos el store , y el localstore
    const { authStatus, checkAuthStatus } = useAuth();
    checkAuthStatus();
    return {
      authStatus
    }
  }
}

</script>