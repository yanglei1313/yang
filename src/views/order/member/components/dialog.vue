<template>
  <div>
    <el-dialog :visible.sync="isVisible" title="添加订单">
      <el-form :model="formObj" label-width="80px" label-position="left">
        <el-form-item label="用户ID">
          <el-input
            v-model="formObj.username"
            placeholder="请输入不加区号的手机号"
          ></el-input>
        </el-form-item>
        <el-form-item label="订单标题">
          <el-input v-model="formObj.nickname"></el-input>
        </el-form-item>
        <el-form-item label="产品">
          <el-select style="width:100%" v-model="formObj.nickname"></el-select>
        </el-form-item>
        <el-form-item label="购买数量">
          <el-input v-model="formObj.nickname"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="formObj.gender">
            <el-radio label="不设置">不设置</el-radio>
            <el-radio label="苹果">苹果</el-radio>
            <el-radio label="安卓">安卓</el-radio>
          </el-radio-group>
        </el-form-item>
           <el-form-item label="支付金额">
          <el-input v-model="formObj.nickname"></el-input>
        </el-form-item>
           <el-form-item label="支付时间">
          <el-input v-model="formObj.nickname"></el-input>
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
        <el-button type="primary" @click="save">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { addUser } from "@/api/role";
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
        { label: 3, value: "不设置" },
        { label: 6, value: "微信" },
        { label: 9, value: "支付宝" },
        { label: 12, value: "华为" },
        { label: 15, value: "苹果" },
        { label: 18, value: "oppo" },
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
    save() {
      // console.log(this.formObj);
      // addUser(this.formObj).then((res) =>{
      //   console.log(res);

      this.close();
      // })
    },
  },
};
</script>

<style>
</style>