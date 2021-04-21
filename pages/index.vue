<template>
  <div class="h-screen flex flex-col justify-center items-center">
    <div class="text-8xl mb-16 h-auto opacity-50 relative">
      <NuxtLink to="/" class="opacity-100 absolute -top-4 -left-24 cursor-pointer" v-if="showBack">
        <span class="material-icons text-3xl">
          arrow_back
        </span>
      </NuxtLink>
      AirPass
    </div>
    <NuxtChild class="h-64 py-4 px-12"/>
  </div>
</template>

<script>
export default {
  computed: {
    showBack() {
      return this.$nuxt.$route.name !== 'index'
    }
  }
}
</script>

<style>

</style>
