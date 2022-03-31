<template>
  <div class="app-container">
    <Y-table v-bind="tables"></Y-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tables: {
        column: [
          { type: "index", label: "序号",width: 100 },
          { prop: "name", label: "标签名称" },
          { prop: "type", label: "说明" },
          { prop: "time", label: "创建日期" },
        ],
        data:[
            {
                name:'月卡即将到期当天',
                type:'月卡即将到期当天',
                time:'2021-04-20 14:56:31'
            },
            {
                name:'月卡即将到期1-3天',
                type:'月卡即将到期1-3天(后包含,前不包含)',
                time:'2021-04-20 14:56:31'
            },
            {
                name:'月卡即将到期4-7天',
                type:'月卡即将到期4-7天(后包含,前不包含)',
                time:'2021-04-20 14:56:31'
            },
            {
                name:'年卡即将到期当天',
                type:'年卡即将到期当天',
                time:'2021-04-20 14:56:31'
            },
            {
                name:'年卡将到期1-7天',
                type:'年卡将到期1-7天(后包含,前不包含)',
                time:'2021-04-20 14:56:31'
            },
            {
                name:'年卡即将到期8-15天',
                type:'年卡即将到期8-15天(后包含,前不包含)',
                time:'2021-04-20 14:56:31'
            },
        ]
      },
    };
  },
};
</script>

<style>
</style>