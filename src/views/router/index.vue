<template>
  <div class="app-container">
    <div class="routerBox">
      <div class="treeBox">
        <div>路由列表</div>
        <el-tree
          ref="tree"
          :props="props"
          :data="treeDate"
          node-key="id"
          @check-change="handleCheckChange"
          :expand-on-click-node="false"
          :render-content="renderContent"
        >
          ></el-tree
        >
      </div>
      <div class="formBox">
        <el-form
          :model="menu"
          ref="form"
          label-position="right"
          label-width="100px"
          v-loading="loading"
        >
          <el-form-item label="父级ID" prop="pid">
            <el-tooltip
              content="值为0时表示顶级节点"
              class="item"
              effect="dark"
              placement="right"
            >
              <el-input v-model="menu.pid" readonly />
            </el-tooltip>
          </el-form-item>
          <el-form-item label="名称" prop="label">
            <el-input v-model="menu.name" />
          </el-form-item>
          <el-form-item label="菜单名称" prop="title">
            <el-input v-model="menu.title" />
          </el-form-item>
          <el-form-item label="路由URL" prop="path">
            <el-input v-model="menu.path" @keyup.native="menuPath" />
          </el-form-item>
          <el-form-item label="排序" prop="auto_sort">
            <el-input v-model="menu.auto_sort" :max="100" :min="0" />
          </el-form-item>
          <el-form-item label="描述" prop="describe">
            <el-input v-model="menu.describe" />
          </el-form-item>
          <el-form-item label="组件" prop="component">
            <el-autocomplete
              v-model="menu.component"
              style="width: 100%"
              :fetch-suggestions="(str, cb) => cb(suggestions)"
              placeholder=""
              value-key="label"
              @select="(item) => (menu.component = item.value)"
            />
            <span v-show="!['Layout', 'Child'].includes(menu.component)"
              >组件路径:{{ menu.component }}</span
            >
          </el-form-item>
          <el-form-item label="是否隐藏" prop="hidden">
            <el-switch
              v-model="menu.hidden"
              active-text="是"
              inactive-text="否"
            />
          </el-form-item>
        </el-form>

        <el-button class="subBtn ybtn" @click="test" :disabled="loading"
          >提交</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { getAuthTree, addAuth, modifyAuth } from "@/api/role";

export default {
  data() {
    return {
      loading: false,
      treeDate: [],
      props: {
        label: "name",
        children: "lists",
      },
      menu: this.initMenu(),
      suggestions: [
        { value: "Layout", label: "一级菜单" },
        { value: "Child", label: "二级菜单" },
        { value: "@/views/", label: "List 模版" },
      ],
    };
  },
  created() {
    this.fetchTree();

    var p = +'code_3'.slice(5)
    console.log(p);
  },

  methods: {
    isUrl(path) {
      return (
        [
          "http://",
          "/http://",
          "https://",
          "/https://",
          "www.",
          "/www.",
        ].findIndex((item) => path.startsWith(item)) >= 0
      );
    },
    menuPath() {
      const isUrl = this.isUrl(this.menu.path);
      if (!isUrl && !this.menu.path.startsWith("/")) {
        this.menu.path = "/" + this.menu.path;
      } else if (isUrl && this.menu.path.startsWith("/")) {
        this.menu.path = this.menu.path.substr(1);
      }
    },
    reset() {
      this.fetchTree()
      this.resetForm()
    },
    resetForm() {
      this.$refs.form.clearValidate();
      this.$refs.form.resetFields();
      this.menu = this.initMenu();
    },
    save() {
      addAuth(this.menu).then((res) => {
        console.log(res);
        this.loading = false;
        this.reset()
      });
    },
    update() {
      modifyAuth(this.menu).then((res) => {
        console.log(res);
        this.loading = false;
        this.reset()
      });
    },
    test() {
      console.log(this.menu);
      this.loading = true;
      if (this.menu.id) {
        this.update();
      } else {
        this.save();
      }
    },
    handleCheckChange() {
      let res = this.$refs.tree.getCheckedNodes();
      console.log(res);
    },
    initMenu() {
      return {
        id: "",
        name: "",
        title: "",
        describe: "",
        code: "",
        isPublic: false,
        path: "",
        component: "",
        isEnable: true,
        auto_sort: "",
        pid: 0,
        icon: "",
        group: "",
      };
    },
    handleNumChange(val) {
      this.menu.auto_sort = val;
    },
    fetchTree() {
      getAuthTree().then((res) => {
        console.log(res);
        this.treeDate = res.result.lists;
        console.log(this.treeDate);
      });
    },
    append(data) {
      console.log(data);
      this.menu.pid = data.id;
    },

    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex((d) => d.id === data.id);
      children.splice(index, 1);
    },
    edit(node, data) {
      console.log(node);
      console.log(data);
      this.menu = { ...this.menu, ...data };
      console.log(this.menu);
    },
    renderContent(h, { node, data, store }) {
      return (
        <span class="custom-tree-node">
          <span>{node.label}</span>
          <span>
            <el-button
              size="mini"
              type="text"
              on-click={() => this.append(data)}
            >
              新增
            </el-button>
            <el-button
              size="mini"
              type="text"
              on-click={() => this.edit(node, data)}
            >
              编辑
            </el-button>
            <el-button
              size="mini"
              type="text"
              on-click={() => this.remove(node, data)}
            >
              删除
            </el-button>
            
          </span>
        </span>
      );
    },
  },
};
</script>

<style>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
.routerBox {
  display: flex;
  justify-content: center;
  width: 100%;
}
.treeBox {
  width: 50%;
  padding: 10px;
  height: 500px;

  background-color: #fff;
  text-align: center;
}
.formBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 500px;
  background-color: #fff;
  padding: 10px;
  border-left: 2px solid #ccc;
}
.subBtn {
  margin: auto;
}
</style>