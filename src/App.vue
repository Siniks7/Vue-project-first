<template>
  <div class="wrapper">
      <CurrentHeader></CurrentHeader>
    <div class="wrapper-content">
      <div class="container">
        <p>Hello World</p>
      </div>
    </div>
    <CurrentFooter></CurrentFooter>
  </div>
</template>

<script>
import CurrentHeader from '@/components/CurrentHeader.vue';
import CurrentFooter from '@/components/CurrentFooter.vue';
export default {
  name: 'App',
  components: 
    {CurrentHeader, CurrentFooter}
};
</script>

<style lang="scss">
</style>
