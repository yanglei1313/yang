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
          { prop: "name", label: "会员名称" },
          { prop: "type", label: "类型" },
          { prop: "time", label: "创建日期" },
        ],
        data:[
            {
                name:'免费会员',
                type:'vip_free',
                time:'2021-04-20 14:56:31'
            },
            {
                name:'免费会员',
                type:'vip_free',
                time:'2021-04-20 14:56:31'
            },
            {
                name:'免费会员',
                type:'vip_free',
                time:'2021-04-20 14:56:31'
            },
            {
                name:'免费会员',
                type:'vip_free',
                time:'2021-04-20 14:56:31'
            },
            {
                name:'免费会员',
                type:'vip_free',
                time:'2021-04-20 14:56:31'
            },
            {
                name:'免费会员',
                type:'vip_free',
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