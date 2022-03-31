<template>
  <div class="app-container">
    <Y-table v-bind="tables">
      <template v-slot:date="{}">
        <el-image
          style="width: 100px; height: 100px"
          src="https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg"
          :preview-src-list="srcList"
        >
        </el-image>
      </template>
    </Y-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      srcList: [
        "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
        "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg",
      ],
      tables: {
        column: [
          { type: "index", label: "序号", width: 100 },
          { prop: "name", label: "标签名称" },
          { prop: "type", label: "说明" },
          { prop: "date", label: "头像" },
          { prop: "time", label: "创建日期" },
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
    };
  },
};
</script>

<style>
</style>