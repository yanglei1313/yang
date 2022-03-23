<script>
export default {
  name: "Dialog",
  props: {
    dialogVisible: { type: Boolean, default: false },
    title: { type: String, default: " " },
    width: { type: String, default: "50%" },
    center: { type: Boolean, default: false },
    tableProps: { type: Object, default: null },
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
    open() {
      if (this.tableProps.api) {
        this.tableProps.api().then((res) => {
          console.log(res);
        });
      }
    },
    fetchFilters(h) {
      if (!this.tableProps) return;
      return h("Y-table", {
        props: { ...this.tableProps },
      });
    },

    fetchDialog(h) {
      return h(
        "el-dialog",
        {
          props: {
            "show-close": false,
            "close-on-click-modal": false,
            "close-on-press-escape": false,
            visible: this.isVisible,
            ...this.$props,
          },
          on: {
            open: this.open,
          },
        },
        [
          this.fetchFilters(h),
          h("div", { class: "dialog-footer", slot: "footer" }, [
            h("el-button", { props: { type: "primary" } }, "确定"),
            h(
              "el-button",
              { on: { click: () => (this.isVisible = false) } },
              "取消"
            ),
          ]),
        ]
      );
    },
  },

  render(h) {
    return this.fetchDialog(h);
  },
};
</script>

<style>
</style>