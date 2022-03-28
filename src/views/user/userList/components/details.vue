<template>
  <div>
    <el-dialog :visible.sync="isVisible" title="用户详情">
      <Y-details :details="rowData" />

      <div slot="footer" class="dialog-footer">
        <el-button @click="close">取 消</el-button>
        <el-button type="primary" @click="close">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false,
    },
    rowData: {
      type: Object,
      default: {},
    },
  },

  computed: {
    isVisible: {
      get() {
        return this.dialogVisible;
      },
      set() {
        this.close();
      },
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style>
</style>