<template>
  <div class="boxc">
    <el-card shadow="hover" class="el-box-card">
      <Y-filters ref="filters" :filters="filters" label-width="90px" />

    </el-card>
    <el-card shadow="hover" class="el-box-card">
      <Y-table
        ref="dataTable"
        :column="column_01"
        :data="list"
        :column-width="columnWidth"
        :stripe="false"
        :border="false"
      ></Y-table>

    </el-card>
  </div>
</template>

<script>
import { getList } from "@/api/table";

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "gray",
        deleted: "danger",
      };
      return statusMap[status];
    },
  },
  data() {
    return {
      columnWidth: "200px",
      list: null,
      listLoading: true,
      data_01: [],
      filters: [
        { key: "companyCode", mold: "input", label: "用户ID", value: "" },
        {
          key: "planMode",
          filterable: true,
          mold: "select",
          label: "用户名",
          value: "",
          props: { value: "id", label: "name" },
          options: [],
        },
        {
          key: "warehousingNo",
          mold: "input",
          label: "订单号",
          value: "",
        },
        {
          key: "planStatus",
          mold: "select",
          label: "支付流水号",
          value: "",
          props: { value: "id", label: "name" },
        },
        {
          key: "billNoticeNo",
          mold: "input",
          label: "支付方式",
          value: "",
        },

        { key: "whouseCname", mold: "input", label: "支付状态", value: "" },
        { key: "carNo", mold: "input", label: "平台来源", value: "" },
        { key: "driverName", mold: "input", label: "支付时间段", value: "" },
        {
          key: "warehousingDate",
          label: "日期",
          mold: "date",
          type: "date",
          value: "",
          span: 8,
        },
         {
          mold: 'button',
          label: ' ',
          type: 'primary',
          icon:"el-icon-search",
          value: '搜索',
          plain:false,
          click: () => {
           console.log(111);
          },
        },
        {
          mold: 'button',
          label: '',
          type: 'primary',
          icon:"el-icon-circle-plus-outline",
          plain:false,
          value: '添加用户',
          click: () => {
           
           console.log(111);
           

           console.log(this.$refs.filters.getValues());
          },
        },
      ],
      column_01: Object.freeze([
        { type: "index" },
        { prop: "id", label: "用户ID" },
        { prop: "username", label: "用户名" },
        { prop: "nickname", label: "昵称" },
        { prop: "member_type", label: "会员等级" },
        { prop: "vip_start_at", label: "会员开始日期" },
        { prop: "vip_end_at", label: "会员结束日期" },
        { prop: "remaining_days", label: "会员时长" },
        { prop: "all_money", label: "Now贝数" },
        { prop: "all_mopractice_minute_countney", label: "听课时长" },
        { prop: "practice_course_count", label: "听课数" },
        { prop: "coin_count", label: "连续天数" },
        { prop: "age", label: "年龄" },
        { prop: "gender", label: "性别" },
        { prop: "adv", label: "地区" },
        { prop: "login_type", label: "登录方式" },
        { prop: "created_at", label: "注册时间" },
        { prop: "end_at", label: "最后一次登录" },
        {
          label: "操作",
          fixed: "right",
          minWidth: 200,
          actions: () => [
            {
              class: "success",
              label: "详情",
              click: ({ row }) => console.log(row),
            },
            {
              class: "success",
              label: "详情",
              click: ({ row }) => console.log(row),
            },
          ],
        },
      ]),
    };
  },
  created() {
    this.fetchData();



  },
  methods: {
    fetchData() {
      this.listLoading = true;
      getList().then((response) => {
        this.list = response.data.items;
        this.listLoading = false;
      });
    },
  },
};
</script>
