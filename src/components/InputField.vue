<template>
  <textarea
  rows="1"
    style="white-space: pre; overflow: scroll;" wrap="off"
  >
  </textarea>
</template>

<script>
export default {
  name: 'inputField',
};
</script>

<style lang="less" scoped>
  textarea {
    width: 100%;
    border: none;
    border-bottom: 1px solid rgb(224, 224, 224);
    font-size: 13px;
    min-height: 20px;
    height: 20px;
    overflow: hidden;
    resize: none;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent;

    white-space:nowrap;
  overflow:scroll;

    &:focus {
      outline: none;
    }
  }
</style>
