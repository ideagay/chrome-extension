<template>
  <div class="options">
        <h2>设置提醒时间</h2>
        <input type="time" v-model="time" step="3600" max="17:00">
        <button type="button" @click="setTime">确定</button>
  </div>
</template>

<script>
export default {
  name: "options",
  data () {
    return {
      time: ''
    }
  },
  methods: {
      setTime () {
        if (Number(this.time.replace(/:/,'')) > 1700) {
          return alert('点饭时间5点截止,提醒不生效');
        }
        localStorage.setItem('notice_time', this.time);
        chrome.extension.getBackgroundPage().setClock();
      }
  },
  mounted() {
      this.time = localStorage.getItem('notice_time') || '16:00';
      localStorage.setItem('notice_time', this.time);
  }
};
</script>

<style lang="less">
</style>
