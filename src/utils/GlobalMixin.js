export default {
  data() {
    return {
      mixinTotalResult: [],
    }
  },
  methods: {
    mixinTabSort(e, data = {}) {
      return new Promise((resolve) => {
        data.sort = e.column.columnKey ? e.column.columnKey : e.prop
        data.order = e.order
        resolve(e.order ? data : {})
      })
    },
  }
}
