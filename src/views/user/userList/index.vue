<template>
  <div class="app-container">
    <div>
      <Y-filters ref="filters" :filters="filters" label-width="90px" />
    </div>

    <!-- <Y-details :details="details"/> -->
    <!-- <Y-form ref="formRef" :molds="List"></Y-form> -->
    <Y-table
      ref="dataTable"
      :column="tables.column"
      :data="tables.data"
      :column-width="tables.columnWidth"
      :stripe="false"
      :border="false"
      :page-info="tables.pageInfo"
      @page-change="pageChange"
    ></Y-table>
    <keep-alive>
      <Y-dialog
        :dialog-visible="visible"
        :title="dialogTitle"
        :close-on-click-modal="false"
        @close="dialogClose"
        :tableProps="tables"
      >
      </Y-dialog>
    </keep-alive>
    <el-tree
      :props="props"
      :data="treeDate"
      show-checkbox
      @check-change="handleCheckChange"
      @check="treeCkeck"
    ></el-tree>
    <div></div>
  </div>
</template> 

<script>
import { getList, getFormList } from "@/api/table";
import { getAuthTree, getAuth } from "@/api/role";
import { setListValue } from "@/utils/tools";

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
      treeDate: [],
      props: {
        label: "name",
        children: "lists",
      },
      List: [
        { label: "属性编码", key: "attrSeq", mold: "input" },
        { label: "属性名称", key: "attrName", mold: "input" },
        { label: "备注", key: "remark", mold: "input" },
        { label: "排序", key: "sort", mold: "input" },
      ], // 属性表单数据
      details: [
        { label: "审批类型", key: "approvalTypeName", value: "" },
        { label: "发起人", key: "userName", value: "" },
        { label: "发起时间", key: "initiateTime", value: "" },
      ],
      visible: false,
      dialogTitle: "测试标题",
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
          mold: "button",
          label: " ",
          icon: "el-icon-search",
          value: "搜索",
          plain: false,
          click: () => {
            this.visible = true;
            console.log(this.visible);
          },
        },
        {
          mold: "button",
          label: "",
          icon: "el-icon-circle-plus-outline",
          plain: false,
          value: "添加用户",
          click: () => {
            console.log(111);

            console.log(this.$refs.filters.getValues());
          },
        },
      ],

      tables: {
        pageInfo:{ currentPage: 1, pageSize: 50, total: 0 },
        api: getFormList,
        data: null,
        columnWidth: "200px",
        column: Object.freeze([
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
                class: "pirmary",
                label: "详情",
                click: ({ row }) => console.log(row),
              },
              {
                class: "warning",
                label: "详情",
                click: ({ row }) => console.log(row),
              },
              {
                class: "danger",
                label: "详情",
                click: ({ row }) => console.log(row),
              },
            ],
          },
        ]),
      },
    };
  },
  created() {
    this.fetchData();
    this.fetchTree();
    // console.log(this.$route);
    // const obj = {
    //   approvalTypeName: "特殊类型",
    //   userName: "哈哈哈哈哈",
    //   initiateTime: "昨天",
    // };
    // setListValue(this.details, obj);
    // console.log(this.details);
    console.log(this.$store.state.account.user, 111111111111);
  },
  methods: {
    treeCkeck() {
      console.log(arguments);
    },
    handleCheckChange(data, checked, indeterminate) {
      console.log(data, checked, indeterminate);
    },
    dialogClose() {
      this.visible = false;
    },
    fetchTree() {
      getAuthTree().then((res) => {
        console.log(res);
        this.treeDate = res.result.lists;
        console.log(this.treeDate);
      });
    },
    pageChange(){},
    fetchData() {
      // this.listLoading = true;
      const pageInfo = {
        page: this.tables.pageInfo.currentPage,
        pagesize: this.tables.pageInfo.pageSize,
      };
      getAuth(pageInfo).then((response) => {
        // this.tables.data = response.data.items;
        // this.listLoading = false;
        console.log(response);
        this.tables.data = response.result.lists
      });
    },
  },
};
</script>
