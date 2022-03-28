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
          { type: "index", label: "序号" },
          { prop: "id", label: "用户ID" },
          { prop: "date", label: "日期" },
          { prop: "second", label: "时长<秒>" },
          { prop: "exerciseTime", label: "练习时长" },
          { prop: "recordTime", label: "记录时间" },
          { prop: "endTime", label: "最后更新时间" },
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
        { key: "companyCode", mold: "input", label: "用户ID", value: "" },
        {
          key: "warehousingDate",
          label: "日期",
          mold: "date",
          type: "date",
          value: "",
          span: 8,
        },
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