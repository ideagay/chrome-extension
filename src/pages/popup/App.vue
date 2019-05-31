<template>
  <div id="popup">
    <qrcode></qrcode>
  </div>
</template>

<script>
import Qrcode from './qrcode.vue'

export default {
  name: 'popup',
  components: {
    Qrcode
  }
}
</script>

<style lang="less">
#popup{
  
}
</style>
