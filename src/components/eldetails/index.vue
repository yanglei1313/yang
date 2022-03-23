<template>
  <div>
    <el-form label-width="100px" inline>
      <el-form-item
        v-for="(v, i) in details"
        :key="i"
        class="details_item"
        :label="v.label + ': '"
      >
        <span class="details_item_value">{{ v.value }}</span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  name: "Eldetails",
  props: {
    details: { type: Array, default: [] },
  },
};
</script>

<style>
</style>