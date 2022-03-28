<template>
  <div>
    <el-dialog :visible.sync="isVisible" title="添加用户">
      <el-form :model="formObj" label-width="80px" label-position="left">
        <el-form-item label="登录手机号">
          <el-input
            v-model="formObj.username"
            placeholder="请输入不加区号的手机号"
          ></el-input>
        </el-form-item>
        <el-form-item label="昵称">
          <el-input v-model="formObj.nickname"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="formObj.gender">
            <el-radio label="不设置">不设置</el-radio>
            <el-radio label="女">女</el-radio>
            <el-radio label="男">男</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="年龄段">
          <el-radio-group v-model="formObj.range_age">
            <el-radio
              v-for="item in ageList"
              :key="item.label"
              :label="item.value"
              >{{ item.value }}</el-radio
            >
          </el-radio-group>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="close">取 消</el-button>
        <el-button type="primary" @click="save" 
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {addUser} from "@/api/role"
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      formObj: {
        username: "",
        nickname: "",
        gender: "",
        range_age: "",
      },
      ageList: [
        { label: 3, value: "25岁以下" },
        { label: 6, value: "25~35" },
        { label: 9, value: "36~45" },
        { label: 12, value: "46~55" },
        { label: 15, value: "55~65" },
        { label: 18, value: "65岁以上" },
      ],
    };
  },
  computed: {
    isVisible: {
      get() {
        return this.dialogVisible;
      },
      set() {
        this.close();
      },
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
    save(){
        console.log(this.formObj);
        addUser(this.formObj).then((res) =>{
          console.log(res);
          
          this.close()
        })
    }
  },
};
</script>

<style>
</style>