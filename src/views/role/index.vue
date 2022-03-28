<template>
  <div class="app-container">
    <el-button class="ybtn" @click="addRole">新增角色</el-button>
    <Y-table v-bind="tables"  @page-change="requistionpageChange" v-loading="listLoading"></Y-table>

    <el-dialog
      :visible.sync="dialogVisible"
      :title="dialogType === 'edit' ? '编辑角色' : '新增角色'"
      @close="closeDialog"
    >
      <el-form
        :model="role"
        label-width="80px"
        label-position="left"
        v-loading="loading"
      >
        <el-form-item label="角色名称">
          <el-input v-model="role.name" placeholder="请输入角色名称" />
        </el-form-item>
        <!-- <el-form-item label="角色说明">
          <el-input
            v-model="role.description"
            :autosize="{ minRows: 2, maxRows: 4 }"
            type="textarea"
            placeholder="请输入角色说明"
          />
        </el-form-item> -->
        <el-form-item label="角色权限">
          <el-tree
            ref="tree"
            :props="props"
            :data="treeDate"
            show-checkbox
            node-key="id"
            @check-change="handleCheckChange"
            default-expand-all
          ></el-tree>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveRole" :loading="loading"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getAuthTree, getRole, editRole ,deleteRole} from "@/api/role";

export default {
  data() {
    return {
      listLoading:false,
      loading: false,
      role: {
        name: "",
        auth_ids: [],
      },
      dialogVisible: false,
      treeDate: [],
      dialogType: "new",
      props: {
        label: "name",
        children: "lists",
      },
      tables: {
        pageInfo: { currentPage: 1, pageSize: 15, total: 0 },
        column: Object.freeze([
          { prop: "id", label: "角色id" },
          { prop: "name", label: "角色名称" },
          // { prop: "description", label: "角色概述" },
          {
            label: "操作",
            fixed: "right",
            minWidth: 100,
            actions: () => [
              {
                class: "pirmary",
                label: "编辑权限",
                click: ({ row }) => {
                  console.log(row);
                  this.dialogType = "edit";
                  this.dialogVisible = true;
                  this.role = {...this.role,...row};
                  if (Array.isArray(row.auth_ids)) {
                    this.$nextTick(() => {
                      this.$refs.tree.setCheckedKeys(row.auth_ids);
                    });
                  }
                },
              },
              {
                class: "danger",
                label: "删除",
                click: this.deleteRole,
              },
            ],
          },
        ]),
        data: [],
      },
    };
  },
  created() {
    this.fetch();
    this.fetchTree();
    console.log(this.$globalRouter,111111111111);
  },
  methods: {
    requistionpageChange(pageInfo){
      this.tables.pageInfo = {...this.tables.pageInfo,...pageInfo}
      this.fetch()
    },

    saveRole() {
      // console.log(this.$refs.tree.getCheckedKeys());
      if (this.role.name == "") {
        this.$message({
          message: "请输入角色名称",
          type: "error",
        });
        return;
      }
      this.loading = true;
      this.role.auth_ids = this.$refs.tree.getCheckedKeys();
      console.log(this.role.auth_ids);
      editRole(this.role).then((res) => {
        this.loading = false;
        this.closeDialog();
        this.dialogVisible = false;
        this.fetch();
      }).catch((err) =>{
        this.loading = false;

      })
    },

    deleteRole({row}) {
      console.log(row);
      this.$confirm('此操作将永久删除该角色, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deleteRole({id:row.id}).then((res) =>{
            this.$message({
            type: 'success',
            message: '删除成功!'
          });
          })
          this.fetch()
          
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },

    closeDialog() {
      this.$refs.tree.setCheckedKeys([]);
      this.role.name = "";
    },

    addRole() {
      this.dialogType = "add";
      this.dialogVisible = true;
    },

    fetch() {
      this.listLoading = true
      getRole({
        page: this.tables.pageInfo.currentPage,
        pagesize: this.tables.pageInfo.pageSize,
      }).then((res) => {
        this.listLoading = false
        this.tables.pageInfo.total = res.result.count;
        this.tables.data = res.result.lists;
         this.tables.data.forEach((item) =>{
           item.auth_ids = [...item.auth_ids]
         })
      });
    },

    handleCheckChange() {
      let res = this.$refs.tree.getCheckedNodes();
      this.role.auth_ids = res.map((item) => item.id);
    },

    fetchTree() {
      getAuthTree().then((res) => {
        this.treeDate = res.result.lists;
        console.log(this.treeDate);
      });
    },
  },
};
</script>

<style>
</style>