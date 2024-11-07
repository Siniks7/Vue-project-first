<template>
  <div class="tags-list">
    <div
      class="tag-item"
      v-for="tag in items"
      :key="tag"
      @click="$emit('onItemClick', tag)"
      :class="{ isPreview: isPreview }"
    >
      <span>{{ tag }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    isPreview: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.tags-list {
  display: flex;
  justify-content: center;
  padding: 10px 0;
}
.tag-item {
  padding: 8px 22px;
  margin-right: 10px;
  background-color: #fff;
  border-radius: 22px;
  user-select: none;
  cursor: pointer;
  &.isPreview {
    padding: 0;
    cursor: default;
    color: #444ce0;
    &:before {
      content: '#';
    }
  }
  &:last-child {
    margin-right: 0;
  }
}
</style>
