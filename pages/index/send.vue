<template>
  <div class="mx-auto flex flex-col justify-start items-center ">
    <div class="material-icons text-5xl opacity-75">
        cloud_done
    </div>
    <div class="text-xs opacity-50">
        Successfully uploaded file
    </div>
    <div class="mt-16 text-xs opacity-50">
        Use this code to retrieve it:
    </div>
    <div class="mt-4 mb-2 text-2xl opacity-75 cursor-pointer border-2 rounded-xl bg-white px-4 py-2" @click="copyCode">
        aid930
    </div>
    <div class="text-xs opacity-50">
        (Click to copy)
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        copyCode() {
            console.log('Copied')
        }
    }
}
</script>

<style>

</style>