<template>
  <div class="back">
    <div class="img-container test_tuopo"
         id="tuopu_box">
      <el-dialog :visible.sync="console_visible"
                 width="300"
                 :modal="false"
                 :close-on-click-modal="false">
        <span slot="footer">
          <el-button @click="console(showIngBack.children)">
            children</el-button>

          <el-button @click="console(showIngBack.style_list)">style_list</el-button>
          <el-button @click="console(form)">选中单个</el-button>
          <el-button @click="console(showIngBack)">全部</el-button>
          <el-button @click="console_visible = false">Cancel</el-button>
        </span>
      </el-dialog>
      <div class="check-box">
        <span class="relation"
              data-num="0">关联系统关系图</span>
        <span class="checked"
              data-num="1">物理部署图</span>
        <div>
          <el-button @click="console_visible = true">导出</el-button>
          <el-button @click="reOrder">重新命名</el-button>
          <el-button @click="
              showIngBack.children.find(
                (item) => item.name == '接入分发层'
              ).status = 'E'
            ">status_test</el-button>
          <el-button @click="download">下载</el-button>
          <el-button @click="style_list_visible = !style_list_visible">
            style_list_visible</el-button>
          <el-select v-model="target"
                     @change="changeShowing()"
                     placeholder="请选择">
            <el-option v-for="item in back_list"
                       :key="item.value"
                       :label="item.name"
                       :value="item.name">
            </el-option>
          </el-select>
        </div>
      </div>
      <div v-if="!!showIngBack.name"
           :name="showIngBack.name"
           ref="showIngBack_box"
           class="tuopu_paper"
           @mousemove="mousemove_back(showIngBack, $event)">
        <img class="tuopu_line"
             :src="
            webpack
              ? require(`./img/${showIngBack.line}.png`)
              : 'img/tuopu/' + showIngBack.line + '.png'
          "
             alt="" />
        <div v-for="(item, index) in showIngBack.children"
             :key="item.name + item.left+item.top"
             :name="item.name"
             :tabindex="index"
             class="name_box"
             :class="[
            item.status + '_' + item.type,
            { outline_none: item.name != mousedown },
          ]"
             @keyup.enter="editing && showIt(item, index)"
             @keyup.delete="editing && deleteIt(item, index)"
             @keyup.right="
            editing && ((edit_visible = true), (chose_namebox = item))
          "
             @mousedown="editing && mousedown_item(item, $event)"
             @mouseup="down = false"
             :style="{
            left: item.left + 'px',
            top: item.top + 'px',
            backgroundImage: webpack
              ? 'url('+require(`./img/${item.status + item.type}.png`)+')'
              : 'url(img/tuopu/' + item.status + item.type + '.png)',
            ...showIngBack.style_list[item.style],
          }">
          <div class="text_top"
               v-show="item.text_top != ''">
            {{ item.text_top }}
          </div>
          <div class="text_right"
               v-show="item.text_right != ''">
            {{ item.text_right }}
          </div>
          <div class="flex_1"
               v-show="item.text_right != ''"></div>
          <div>
            {{ item.name | removeWhy }}
          </div>
        </div>
      </div>
    </div>
    <el-card :style="{
        position: 'fixed',
        right: '10px',
        bottom: '20px',
        transform: form_scale,
      }"
             v-if="editing">
      <el-form ref="form"
               :model="form"
               label-width="80px">
        <el-form-item v-for="item of Object.keys(form)"
                      :key="item"
                      :label="item"
                      :prop="item">
          <el-input v-if="['name', 'text_top', 'text_right'].includes(item)"
                    v-model="form[item]"></el-input>

          <el-input type="number"
                    v-if="['style', 'type', 'left', 'top'].includes(item)"
                    v-model="form[item]"></el-input>

          <select v-if="['status'].includes(item)"
                  v-model="form[item]"
                  placeholder="">
            <option v-for="item in statusOption"
                    :value="item.value"
                    :key="item.value">
              {{ item.label }}
            </option>
          </select>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card :style="{
        position: 'fixed',
        left: '10px',
        bottom: '110px',
        transform: form_scale,
        width: '600px',
        height: '450px',
        'transform-origin': '0 0',
      }"
             v-if="editing"
             v-show="style_list_visible">
      <el-table :data="showIngBack.style_list"
                size="mini"
                :height="400"
                :row-class-name="
          ({ row, rowIndex }) => {
            return rowIndex == form.style ? 'chose_style' : '';
          }
        ">
        <el-table-column type="index"
                         width="20"> </el-table-column>
        <el-table-column v-for="item in style_table_config"
                         :key="item"
                         :label="item">
          <template slot-scope="scope">
            <el-input size="mini"
                      v-model="scope.row[item]"></el-input>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-dialog title="提示"
               :visible.sync="edit_visible"
               width="800px"
               :close-on-click-modal="false">
      x<el-input-number v-model="interval_config.x"
                       :step="10"></el-input-number>
      y<el-input-number v-model="interval_config.y"
                       :step="10"></el-input-number>
      n<el-input-number v-model="interval_config.n"
                       :step="1"></el-input-number>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="edit_visible = false">取 消</el-button>
        <el-button type="primary"
                   @click="enter_interval">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
const componentsContext = require.context("./img", false, /.png$/);

const projectImgs = componentsContext.keys().map(componentsContext);
// let file_list = projectImgs.map(item=> {return {item.replace(/\/assets\/img\//,'')} })
let file_list = {};
projectImgs.forEach((item) => {
  file_list[item.replace(/\/assets\/img\//, "").split(".")[0]] = item;
});

console.log(file_list);
let webpack = true;
import { tuopu_config } from './config.js'
//引入到webpakc中
export default {
  data () {
    return {
      resData: { "19.20.20.199": "E" },
      target: "ebank",
      down: false,
      editing: true,
      webpack: webpack,
      mousedown: false,
      form_scale: "(1,1)",
      dialogVisible: false,
      edit_visible: false,
      console_visible: false,
      style_list_visible: false,
      interval_config: {
        x: "",
        y: "",
        n: "",
      },
      chose_namebox: {},
      style_table_config: [],
      down_to_enter: 0,
      e_box_dis: [0, 0],
      back_list: tuopu_config,
      chosen_form: "",
      showIngBack: {
        style_list: [],
      },
      out_pos: [0, 0],
      out_offset: [],
      form: {},
      statusOption: [
        { value: "E", label: "E" },
        { value: "W", label: "W" },
        { value: "N", label: "N" },
        { value: "B", label: "B" },
      ],
    };
  },
  mounted () {
    this.changeShowing();
    this.$nextTick(() => {
      // if (this.webpack) {
      //   this.$refs.showIngBack_box.style.transform = `scale(${
      //     document.documentElement.clientWidth / 3840
      //   },${document.documentElement.clientHeight / 1440})`;
      // }
    });

    // Object.keys(this.resData).forEach((item) => {
    //   this.showIngBack.children.find(
    //     (child) => child.name == item
    //   ).status = this.resData[item];
    // });
  },
  methods: {
    changeShowing () {
      this.showIngBack = this.back_list.find(
        (item) => item.name == this.target
      );
      console.log(this.showIngBack)
      this.style_table_config = [];
      this.showIngBack.style_list.forEach((item) => {
        Object.keys(item).forEach((key) => {
          if (!this.style_table_config.includes(key)) {
            this.style_table_config.push(key);
          }
        });
      });
      //
      let x = 0;
      let y = 0;
      let startX = 325;
      let startY = 0;
      let col = 0;
      let row = 0;
      let intervalx = 150;
      let intervaly = 100;
      let mx = 1500;
      //先加名字后填充,必须有name
      this.showIngBack.children = this.showIngBack.children.map((item) => {
        let x = col * intervalx + startX;
        let y = row * intervaly + startY;
        col++;
        if (col * intervalx > mx) {
          (col = 0), row++;
        }
        let obj = {
          name: item.name,
          text_top: item.text_top || "",
          text_right: item.text_right || "",
          status: item.status || "N",
          type: item.type || 0,
          left: item.left || x,
          top: item.top || y,
          style: item.style || 0,
        };
        return obj;
      });
      console.log(JSON.stringify(this.showIngBack), '-----')
    },
    whyName (a) {
      // a.forEach((item, index) => {
      //   if (item.left < 1077 && !String(item.name).includes("?")) {
      //     a[index].name = a[index].name + "?福州";
      //   }
      // });
      // a.forEach((item, index) => {
      //   if (item.left > 1077 && !String(item.name).includes("?")) {
      //     a[index].name = a[index].name + "?上海";
      //   }
      // });
      // b = a.map(item.name.includes("福州"));
      // c = a.map(item.name.includes("上海"));
    },
    showIt (box, { x = "", y = "" }) {
      //对于children来说name就是name就是id
      this.down_to_enter++;
      let that = this;
      let newName = "";

      let obj = JSON.parse(JSON.stringify(box));
      function rename (oldname) {
        newName = oldname + 1;
        if (
          that.showIngBack.children.filter((item) => item.name == newName)
            .length > 0
        ) {
          rename(newName);
        }
      }

      rename(obj.name);
      obj.name = newName;
      if (x === "") {
        obj.left = Number(obj.left) + this.down_to_enter * 50;
        obj.top = Number(obj.top) + this.down_to_enter * 50;
      } else {
        obj.left = Number(obj.left) + this.down_to_enter * x;
        obj.top = Number(obj.top) + this.down_to_enter * y;
      }
      this.showIngBack.children.push(obj);
    },
    enter_interval () {
      this.edit_visible = false;
      for (let index = 0; index < this.interval_config.n; index++) {
        this.showIt(this.chose_namebox, {
          x: this.interval_config.x,
          y: this.interval_config.y,
        });
      }
    },
    reOrder () {
      let i = 0;

      for (let key in this.showIngBack.children) {
        this.showIngBack.children[key].name = i++;
      }
    },
    console (x) {
      console.log(JSON.stringify(x));
    },
    deleteIt (item, index) {
      this.showIngBack.children.splice(index, 1);
      this.mousedown = false;
    },
    mousedown_item (item, e) {
      this.scale = [
        document.documentElement.clientWidth / 3840,
        document.documentElement.clientHeight / 1440,
      ];
      if (webpack) {
        this.scale = [1, 1];
      }

      this.down = true;
      this.mousedown = item.name;
      this.down_to_enter = 0;
      //this.scale = [0.8, 0.8];
      this.form = item;
      this.out_offset = [
        this.$refs.showIngBack_box.getBoundingClientRect().left,
        this.$refs.showIngBack_box.getBoundingClientRect().top,
      ];
      this.e_box_dis = [
        e.clientX - this.out_offset[0] - item.left * this.scale[0],
        e.clientY - this.out_offset[1] - item.top * this.scale[1],
      ];
    },
    download () {
      const aTag = document.createElement("a");
      const blob = new Blob([JSON.stringify(this.showIngBack)]);

      aTag.download = "showIngBackchildren";
      aTag.style = "display: none";
      aTag.href = URL.createObjectURL(blob);
      document.body.appendChild(aTag);
      aTag.click();

      setTimeout(function () {
        document.body.removeChild(aTag);
        window.URL.revokeObjectURL(blob);
      }, 100);
    },
    mousemove_back (back, e, index) {
      if (this.down) {
        let item = this.showIngBack.children.find(
          (item) => item.name == this.mousedown
        );
        item.left = (
          (e.clientX - this.e_box_dis[0] - this.out_offset[0]) /
          this.scale[0]
        ).toFixed(2);
        item.top = (
          (e.clientY - this.e_box_dis[1] - this.out_offset[1]) /
          this.scale[1]
        ).toFixed(2);
      }
    },
    guid () {
      function S4 () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      }
      return (
        S4() +
        S4() +
        "-" +
        S4() +
        "-" +
        S4() +
        "-" +
        S4() +
        "-" +
        S4() +
        S4() +
        S4()
      );
    },
  },
  filters: {
    removeWhy (val) {
      if (!val) return "";

      return String(val).split("?")[0];
    },
  },
};
</script>

<style>
.back /deep/ .el-card__body {
  padding: 5px;
}
.back {
  height: 1440px;
  width: 3840px;
  transform-origin: 0 0;
}
.check-box {
  display: flex;
}
.check-box span {
  height: 75px;
  line-height: 75px;
}
.test_tuopo {
  height: 1030px;
  width: 2150px;
}
.tuopu_paper {
  position: relative;

  width: 100%;
  height: calc(100% - 260px);
  color: #fff;
  display: flex;
  justify-content: center;
  transform-origin: 0 0;
}
.tuopu_line {
  width: 1500px;
  height: 720px;
}

.name_box {
  position: absolute;
  background-size: 100% 100%;
  padding: 0 10px;

  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  /* transform: translate(-50%, -50%);
  transform-origin: 50% 50%; */
  display: flex;
  flex-wrap: wrap;
}
.name_box > div {
  text-align: center;

  cursor: pointer;
}
.text_top {
  width: 100%;
}
.flex_1 {
  flex: 1;
}

.outline_none {
  outline: none;
}

.tuopu_header {
  display: flex;
}
.top_botton {
  display: inline-block;
  width: 100px;
  height: 50px;
}
[name="本外币核心业务系统"] {
  font-size: 16px;
  line-height: 18px;
}
[name="ebank"] {
  font-size: 14px;
  line-height: 16px;
}
.el-table .chose_style {
  background: red;
}
</style>