<template>
  <div>
    使用xlsx组件读取上传excel表格数据文件原生写法：
    <div class="proto">
      <input type="file"
             id="file"
             @change="readFile">
    </div>
    <div class="tableBox">
      <el-table :data='tableData'>
        <template v-for="(item,index) in column">
          <el-table-column :key="index"
                           :prop='item'
                           :label='item'></el-table-column>
        </template>
      </el-table>
      <el-button @click="download">下载</el-button>
    </div>
  </div>
</template>
<script>
import XLSX from './xlsx';


export default {
  mounted () {
  },
  data () {
    return {
      tableData: [],
      column: []
    }
  },
  methods: {
    time2 (time = +new Date()) {

      var date = new Date(time + 8 * 3600 * 1000); // 增加8小时
      console.log(new Date().getTime())
      console.log(date)
      return date.toJSON().substr(0, 19).replace('T', ' ');

    },
    download () {
      var aoa = [
        ['姓名', '性别', '年龄', '注册时间'],
        ['张三', '男', 18, new Date()],
        ['李四', '女', 22, new Date()]
      ];
      var sheet = XLSX.utils.aoa_to_sheet(aoa);
      this.openDownloadDialog(this.sheet2blob(sheet), '导出.xlsx');
    },
    openDownloadDialog (url, saveName) {
      if (typeof url == 'object' && url instanceof Blob) {
        url = URL.createObjectURL(url); // 创建blob地址
      }
      var aLink = document.createElement('a');
      aLink.href = url;
      aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
      var event;
      if (window.MouseEvent) event = new MouseEvent('click');
      else {
        event = document.createEvent('MouseEvents');
        event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      }
      aLink.dispatchEvent(event);
    },
    // 将一个sheet转成最终的excel文件的blob对象，然后利用URL.createObjectURL下载
    sheet2blob (sheet, sheetName) {
      sheetName = sheetName || 'sheet1';
      var workbook = {
        SheetNames: [sheetName],
        Sheets: {}
      };
      workbook.Sheets[sheetName] = sheet;
      // 生成excel的配置项
      var wopts = {
        bookType: 'xlsx', // 要生成的文件类型
        bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
        type: 'binary'
      };
      var wbout = XLSX.write(workbook, wopts);
      var blob = new Blob([s2ab(wbout)], { type: "application/octet-stream" });
      // 字符串转ArrayBuffer
      function s2ab (s) {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
      }
      return blob;
    },
    upload1 (file) {
      console.log(file)
    },
    readFile (e) {
      var uploadComponent = document.getElementById('file')
      var data = uploadComponent.files[0]
      // this.test(data)
      if (!data) {
        return
      }
      let arr = ['xls', 'xlsx']
      //获取格式
      let type = data.name.split('.')[data.name.split('.').length - 1]
      let type1 = arr.some(item => item === type)
      if (!type1) {
        //数据格式错误
        this.$message.error('数据格式错误，请重新上传')
        return
      }
      this.file2Xce(data).then(tabJson => {
        if (tabJson && tabJson.length > 0) {
          const curData = tabJson[0] || {};
          this.tableData = curData.list
          console.log(this.tableData, '=========')
          this.column = Object.keys(this.tableData[0])
        }
      });
    },
    test (file) {
      const reader2 = new FileReader();
      reader2.readAsBinaryString(file)
      reader2.onload = function (e) {
        const data = e.target.result;
        this.$message('图片上传成功')
      }
      reader2.onerror = function (e) {
        this.$message('图片上传失败，请重试')
      }
    },
    //数据格式转化
    file2Xce (file) {
      return new Promise(function (resolve, reject) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const data = e.target.result;
          console.log(e, '------')
          this.wb = XLSX.read(data, {
            type: "binary"
          });
          console.log(this.wb)
          const result = [];
          this.wb.SheetNames.forEach(sheetName => {
            const list = XLSX.utils.sheet_to_json(this.wb.Sheets[sheetName]);
            result.push({
              name: sheetName,
              list,
              total: list.length || 0
            });
          });
          console.log(result)
          resolve(result);
        };
        reader.readAsBinaryString(file);
      });
    }
  }
}
</script>
<style lang="less">
.tableBox {
  margin: 0 100px;
}
</style>