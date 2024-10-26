<template>
  <div class="wrapper">
      <CurrentHeader />
    <div class="wrapper-content">
      <div class="container">
        <router-view />
      </div>
    </div>
    <CurrentFooter />
  </div>
</template>

<script>
import CurrentFooter from '@/components/CurrentFooter.vue';
import CurrentHeader from '@/components/CurrentHeader.vue';
export default {
  name: 'App',
  components: 
    {CurrentHeader, CurrentFooter}
};
</script>

<style lang="scss">
</style>
