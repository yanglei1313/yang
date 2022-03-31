<template>
  <div class="app-container">
    <Y-filters ref="filters" :filters="filters" label-width="90px" />
    <Y-table v-bind="tables"></Y-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tables: {
        column: [
          { prop: "id", label: "用户ID" },
          { prop: "date", label: "订单序号" },
          { prop: "second", label: "订单号" },
          { prop: "exerciseTime", label: "订单标题" },
          { prop: "recordTime", label: "单价" },
          { prop: "endTime", label: "会员时长(天)" },
          { prop: "endTime", label: "状态" },
          { prop: "endTime", label: "支付时间" },
          { prop: "endTime", label: "支付方式" },
          { prop: "endTime", label: "Now币" },
        ],
        data: [
          {
            name: "月卡即将到期当天",
            type: "月卡即将到期当天",
            time: "2021-04-20 14:56:31",
          },
          {
            name: "月卡即将到期1-3天",
            type: "月卡即将到期1-3天(后包含,前不包含)",
            time: "2021-04-20 14:56:31",
          },
          {
            name: "月卡即将到期4-7天",
            type: "月卡即将到期4-7天(后包含,前不包含)",
            time: "2021-04-20 14:56:31",
          },
          {
            name: "年卡即将到期当天",
            type: "年卡即将到期当天",
            time: "2021-04-20 14:56:31",
          },
          {
            name: "年卡将到期1-7天",
            type: "年卡将到期1-7天(后包含,前不包含)",
            time: "2021-04-20 14:56:31",
          },
          {
            name: "年卡即将到期8-15天",
            type: "年卡即将到期8-15天(后包含,前不包含)",
            time: "2021-04-20 14:56:31",
          },
        ],
      },

      filters: [
        { key: "companyCode", mold: "input", label: "订单号", value: "" },
        { key: "companyCode", mold: "input", label: "支付流水号", value: "" },
        {
          mold: "button",
          label: " ",
          icon: "el-icon-search",
          value: "搜索",
          plain: false,
          click: () => {
            console.log(1111);
          },
        },
      ],
    };
  },
};
</script>

<style>
</style>