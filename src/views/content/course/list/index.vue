<template>
  <div class="app-container">
    <Y-filters ref="filters" :filters="filters" label-width="90px" />
    <Y-table v-bind="tables"></Y-table>
    <addDialog :dialogVisible="visible" @close="addDialogClose"> </addDialog>
  </div>
</template>

<script>
import addDialog from "@/views/order/member/components/dialog.vue";
export default {
  components: { addDialog },
  data() {
    return {
      visible: false,
      tables: {
        column: [
          { prop: "id", label: "用户ID" },
          { prop: "username", label: "用户名" },
          { prop: "second", label: "订单序号" },
          { prop: "exerciseTime", label: "订单号" },
          { prop: "recordTime", label: "订单标题" },
          { prop: "endTime", label: "单价" },
          { prop: "endTime", label: "会员时长(天)" },
          { prop: "status", label: "状态" },
          { prop: "endTime", label: "支付时间" },
          { prop: "endTime", label: "支付方式" },
          { prop: "endTime", label: "Now币" },
          { prop: "endTime", label: "优惠码" },
          { prop: "endTime", label: "产品Id" },
          { prop: "endTime", label: "支付流水号" },
          { prop: "endTime", label: "退款金额" },
          { prop: "endTime", label: "备注信息" },
          { prop: "endTime", label: "平台" },
          { prop: "endTime", label: "渠道" },
          { prop: "endTime", label: "课程来源" },
          { prop: "endTime", label: "创建日期" },
          { prop: "endTime", label: "退款", fixed: "right" },
          {
            label: "操作",
            fixed: "right",
            minWidth: 200,
            actions: () => [
              {
                class: "danger",
                label: "修改",
                click: ({ row }) => console.log(row),
              },
            ],
          },
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
        { key: "companyCode", mold: "input", label: "用户名", value: "" },
        { key: "companyCode", mold: "input", label: "订单号", value: "" },
        { key: "companyCode", mold: "input", label: "支付流水号", value: "" },
        {
          key: "planMode",
          filterable: true,
          mold: "select",
          label: "付款方式",
          value: "",
          props: { value: "id", label: "name" },
          options: [],
        },
        {
          key: "planMode",
          filterable: true,
          mold: "select",
          label: "支付状态",
          value: "",
          props: { value: "id", label: "name" },
          options: [],
        },
        {
          key: "planMode",
          filterable: true,
          mold: "select",
          label: "平台",
          value: "",
          props: { value: "id", label: "name" },
          options: [],
        },
        {
          key: "planMode",
          filterable: true,
          mold: "select",
          label: "产品",
          value: "",
          props: { value: "id", label: "name" },
          options: [],
        },
        {
          key: "warehousingDate",
          label: "时间段",
          mold: "date",
          type: "daterange",
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
        {
          mold: "button",
          label: " ",
          icon: "el-icon-circle-plus-outline",
          value: "添加",
          plain: false,
          click: () => {
            console.log(1111);
            this.visible = true;
          },
        },
      ],
    };
  },
  methods: {
    addDialogClose() {
      this.visible = false;
    },
  },
};
</script>

<style>
</style>