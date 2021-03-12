<template>
  <div class="outer">
      <div class="middle">
          <div class="mx-auto w-1/2 min-h-1/2 text-center bg-gray-200">
              <h3>Upload a file:</h3>
              <div class="text-center mx-auto">
                <input type="file">
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.outer {
  display: table;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.middle {
  display: table-cell;
  vertical-align: middle;
}
</style>