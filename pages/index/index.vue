<template>
  <div class="mx-auto flex flex-row justify-center items-center ">
      <div class="flex flex-col items-center mr-28">
                  <NuxtLink
            to="/send"
            class=""
        >
            <span class="material-icons text-5xl opacity-75">
                upload
            </span>
        </NuxtLink>
        <div class="text-xs opacity-50">
            Send
        </div>
      </div>
            <div class="flex flex-col items-center ml-28">
        <NuxtLink
            to="/receive"
            class="" 
        >
            <span class="material-icons text-5xl opacity-75">
                download
            </span>
        </NuxtLink>
        <div class="text-xs opacity-50">
            Receive
        </div>
      </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>