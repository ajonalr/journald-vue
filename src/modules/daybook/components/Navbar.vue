<template>
  <nav class="navbar bg-dark">
    <a class="navbar-brand text-white">
      <img src="@/assets/logo.png" alt="Vue Logo" height="24" class="d-inline-block align-text-top mx-2">
      {{username}}
    </a>

    <div class="d-flex">
      <button class="btn btn-outline-info mx-2"><i class="fa fa-sign-out-alt" aria-hidden="true" @click="onLogout"></i></button>
    </div>

  </nav>
</template>

<script>
import useAuth from '@/modules/auth/composables/useAuth'
import { useRouter } from 'vue-router'

export default {

  setup() {
    const router = useRouter()
    const { username, logout } = useAuth()
    return {
      username,
      onLogout: () => {
        logout()
        router.push({ name: 'login' })
      }
    }
  }
}
</script>