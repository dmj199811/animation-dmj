<template>
  <div class="excel-deal-container">
    <div class="excel-deal-box">
      <el-tabs v-model="activeName"
               @tab-click="handleClick">
        <el-tab-pane label="工作任务跟踪"
                     name="first">
          <div class="base-box">
            <el-button @click="addTable1Data(1)"
                       type="primary"
                       style="float:right;margin-right:10px">添加</el-button>
            <el-button @click="download1"
                       type="primary"
                       style="float:right;margin-right:10px">下载模版</el-button>
            <div class="base-title">
              工作任务跟踪后台数据列表
            </div>
            <el-table :data='tableData1'>
              <template v-for="(item,index) in column1">
                <el-table-column :key="index"
                                 :prop='item.value'
                                 :label='item.name'></el-table-column>
              </template>
              <el-table-column prop=''
                               label='操作'>
                <template slot-scope="scope">
                  <el-button type="text"
                             @click="updateTable1(scope.row,scope.$index,1)">修改</el-button>
                  <el-button type="text"
                             @click="deleteTable1(scope.$index,1)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="base-box">
            <div class="base-title">
              工作任务跟踪本地excel数据列表
            </div>
            <div class="local-box">
              <div class="btn-box">
                <el-upload ref="upload1"
                           class="upload-box"
                           action="/"
                           multiple
                           :limit="1"
                           :on-exceed='handlerOut'
                           :http-request='excelDeal'
                           :on-remove='handlerRemove(1)'
                           :file-list="fileList">
                  <el-button size="small"
                             type="primary">本地预览</el-button>
                  <div slot="tip"
                       class="el-upload__tip">请上传你的excel文件</div>
                </el-upload>
                <el-button @click="submitTable1"
                           style="position:absolute;top:0px;left :140px"
                           :disabled='tableDataLoacl1.length==0'
                           size="small"
                           type="primary">确认上传</el-button>

              </div>
            </div>
            <div class="tableBox">
              <el-table :data='tableDataLoacl1'>
                <template v-for="(item,index) in column1">
                  <el-table-column :key="index"
                                   :prop='item.value'
                                   :label='item.name'></el-table-column>

                </template>
                <el-table-column prop=''
                                 label='操作'>
                  <template slot-scope="scope">
                    <el-button type="text"
                               @click="updateTable1(scope.row,scope.$index,2)">修改</el-button>
                    <el-button type="text"
                               @click="deleteTable1(scope.$index,2)">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <!-- <el-button @click="download">下载</el-button> -->
            </div>
          </div>

        </el-tab-pane>
        <el-tab-pane label="全年重要时点提示"
                     name="second">
          <div class="base-box">
            <el-button @click="addTable1Data(2)"
                       type="primary"
                       style="float:right;margin-right:10px">添加</el-button>
            <el-button @click="download1"
                       type="primary"
                       style="float:right;margin-right:10px">下载模版</el-button>
            <div class="base-title">
              全年重要时点提示后台数据列表
            </div>
            <el-table :data='tableData2'>
              <template v-for="(item,index) in column2">
                <el-table-column :key="index"
                                 :prop='item.value'
                                 :label='item.name'></el-table-column>

              </template>
              <el-table-column prop=''
                               label='操作'>
                <template slot-scope="scope">
                  <el-button type="text"
                             @click="updateTable1(scope.row,scope.$index,3)">修改</el-button>
                  <el-button type="text"
                             @click="deleteTable1(scope.$index,3)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="base-box">
            <div class="base-title">
              全年重要时点提示本地excel数据列表
            </div>
            <div class="local-box">
              <div class="btn-box">
                <el-upload ref="upload1"
                           class="upload-box"
                           action="/"
                           multiple
                           :limit="1"
                           :on-exceed='handlerOut'
                           :http-request='excelDeal'
                           :on-remove='handlerRemove(2)'
                           :file-list="fileList">
                  <el-button size="small"
                             type="primary">本地预览</el-button>
                  <div slot="tip"
                       class="el-upload__tip">请上传你的excel文件</div>
                </el-upload>
                <el-button @click="submitTable1"
                           style="position:absolute;top:0px;left :140px"
                           :disabled='tableDataLoacl1.length==0'
                           size="small"
                           type="primary">确认上传</el-button>

              </div>
            </div>
            <div class="tableBox">
              <el-table :data='tableDataLoacl2'>
                <template v-for="(item,index) in column2">
                  <el-table-column :key="index"
                                   :prop='item.value'
                                   :label='item.name'></el-table-column>

                </template>
                <el-table-column prop=''
                                 label='操作'>
                  <template slot-scope="scope">
                    <el-button type="text"
                               @click="updateTable1(scope.row,scope.$index,4)">修改</el-button>
                    <el-button type="text"
                               @click="deleteTable1(scope.$index)">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <!-- <el-button @click="download">下载</el-button> -->
            </div>
          </div>

        </el-tab-pane>
        <el-tab-pane label="节假日事项提示"
                     name="third">
          <div class="base-box">
            <el-button @click="addTable1Data(3)"
                       type="primary"
                       style="float:right;margin-right:10px">添加</el-button>
            <el-button @click="download1"
                       type="primary"
                       style="float:right;margin-right:10px">下载模版</el-button>
            <div class="base-title">
              节假日事项提示后台数据列表
            </div>
            <el-table :data='tableData3'>
              <template v-for="(item,index) in column2">
                <el-table-column :key="index"
                                 :prop='item.value'
                                 :label='item.name'></el-table-column>

              </template>
              <el-table-column prop=''
                               label='操作'>
                <template slot-scope="scope">
                  <el-button type="text"
                             @click="updateTable1(scope.row,scope.$index,5)">修改</el-button>
                  <el-button type="text"
                             @click="deleteTable1(scope.$index)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="base-box">
            <div class="base-title">
              节假日事项提示本地excel数据列表
            </div>
            <div class="local-box">
              <div class="btn-box">
                <el-upload ref="upload1"
                           class="upload-box"
                           action="/"
                           multiple
                           :limit="1"
                           :on-exceed='handlerOut'
                           :http-request='excelDeal'
                           :on-remove='handlerRemove(3)'
                           :file-list="fileList">
                  <el-button size="small"
                             type="primary">本地预览</el-button>
                  <div slot="tip"
                       class="el-upload__tip">请上传你的excel文件</div>
                </el-upload>
                <el-button @click="submitTable1"
                           style="position:absolute;top:0px;left :140px"
                           :disabled='tableDataLoacl1.length==0'
                           size="small"
                           type="primary">确认上传</el-button>

              </div>
            </div>
            <div class="tableBox">
              <el-table :data='tableDataLoacl3'>
                <template v-for="(item,index) in column2">
                  <el-table-column :key="index"
                                   :prop='item.value'
                                   :label='item.name'></el-table-column>

                </template>
                <el-table-column prop=''
                                 label='操作'>
                  <template slot-scope="scope">
                    <el-button type="text"
                               @click="updateTable1(scope.row,scope.$index,6)">修改</el-button>
                    <el-button type="text"
                               @click="deleteTable1(scope.$index)">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <!-- <el-button @click="download">下载</el-button> -->
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
      <el-dialog :visible.sync='table1DialogVisible'
                 title="工作任务跟踪">
        <el-form :model="updateData1"
                 ref="form1"
                 :rules="rule1"
                 label-width="110px">
          <el-form-item label="项目名称"
                        prop="name">
            <el-input v-model="updateData1.name"></el-input>
          </el-form-item>
          <el-form-item label="开始日期"
                        prop="startTime">
            <el-input v-model="updateData1.startTime"></el-input>
          </el-form-item>
          <el-form-item label="结束日期"
                        prop="endTime">
            <el-input v-model="updateData1.endTime"></el-input>
          </el-form-item>
          <el-form-item label="时间进度"
                        prop="timeRate">
            <el-input v-model="updateData1.timeRate"></el-input>
          </el-form-item>
          <el-form-item label="实际完工进度"
                        prop="realRate">
            <el-input v-model="updateData1.realRate"></el-input>
          </el-form-item>
          <el-form-item label="偏差"
                        prop="errorRanger">
            <el-input v-model="updateData1.errorRanger"></el-input>
          </el-form-item>
          <el-form-item label="是否完成"
                        prop="status">
            <el-select v-model="updateData1.status">
              <el-option label="是"
                         value="是"></el-option>
              <el-option label="否"
                         value="否"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"
                       @click="updateLocal1">修改</el-button>
            <el-button @click="table1DialogVisible =false">取消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
      <el-dialog :visible.sync='table2DialogVisible'
                 title="全年重要时点提示">
        <el-form :model="updateData2"
                 ref="form2"
                 :rules="rule2"
                 label-width="110px">
          <el-form-item label="时期"
                        prop="date">
            <el-input v-model="updateData2.date"></el-input>
          </el-form-item>
          <el-form-item label="主要活动"
                        prop="main_action">
            <el-input v-model="updateData2.main_action"></el-input>
          </el-form-item>
          <el-form-item label="工作要求"
                        prop="work_require">
            <el-input v-model="updateData2.work_require"></el-input>
          </el-form-item>
          <el-form-item label="牵头处室"
                        prop="lead_office">
            <el-input v-model="updateData2.lead_office"></el-input>
          </el-form-item>
          <el-form-item label="协办"
                        prop="assist">
            <el-input v-model="updateData2.assist"></el-input>
          </el-form-item>
          <el-form-item label="计划完成时间"
                        prop="plan_finish">
            <el-input v-model="updateData2.plan_finish"></el-input>
          </el-form-item>
          <el-form-item label="落实情况"
                        prop="practicable">
            <el-input v-model="updateData2.practicable"></el-input>
          </el-form-item>
          <el-form-item label="完成率"
                        prop="completion_rate">
            <el-input v-model="updateData2.completion_rate"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"
                       @click="updateLocal2">修改</el-button>
            <el-button @click="table2DialogVisible =false">取消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
      <el-dialog :visible.sync='table3DialogVisible'
                 title="修改工作任务跟踪">
        <el-form :model="updateData3"
                 ref="form3"
                 :rules="rule2"
                 label-width="110px">
          <el-form-item label="时期"
                        prop="date">
            <el-input v-model="updateData3.date"></el-input>
          </el-form-item>
          <el-form-item label="主要活动"
                        prop="main_action">
            <el-input v-model="updateData3.main_action"></el-input>
          </el-form-item>
          <el-form-item label="工作要求"
                        prop="work_require">
            <el-input v-model="updateData3.work_require"></el-input>
          </el-form-item>
          <el-form-item label="牵头处室"
                        prop="lead_office">
            <el-input v-model="updateData3.lead_office"></el-input>
          </el-form-item>
          <el-form-item label="协办"
                        prop="assist">
            <el-input v-model="updateData3.assist"></el-input>
          </el-form-item>
          <el-form-item label="计划完成时间"
                        prop="plan_finish">
            <el-input v-model="updateData3.plan_finish"></el-input>
          </el-form-item>
          <el-form-item label="落实情况"
                        prop="practicable">
            <el-input v-model="updateData3.practicable"></el-input>
          </el-form-item>
          <el-form-item label="完成率"
                        prop="completion_rate">
            <el-input v-model="updateData3.completion_rate"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"
                       @click="updateLocal3">修改</el-button>
            <el-button @click="table3DialogVisible =false">取消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import XLSX from './xlsx';

export default {
  mounted () {
    console.log(this)
  },
  data () {
    return {
      activeName: 'first',
      fileList: [],
      tableData1: [],
      tableData2: [],
      tableData3: [],
      tableDataLoacl1: [],
      tableDataLoacl2: [],
      tableDataLoacl3: [],
      column1: [{
        name: '项目名称',
        value: 'name'
      }, {
        name: '开始日期',
        value: 'startTime'
      }, {
        name: '结束日期',
        value: 'endTime'
      }, {
        name: '时间进度',
        value: 'timeRate'
      }, {
        name: '实际完工进度',
        value: 'realRate'
      }, {
        name: '偏差',
        value: 'errorRanger'
      }, {
        name: '是否完成',
        value: 'status'
      }],
      rule1: {
        name: [
          { required: true, message: '请输入项目名称', trigger: 'change' }
        ],
        startTime: [
          { required: true, message: '请输入开始日期', trigger: 'change' }
        ],
        endTime: [
          { required: true, message: '请输入结束日期', trigger: 'change' }
        ],
        timeRate: [
          { required: true, message: '请输入时间进度', trigger: 'change' }
        ],
        realRate: [
          { required: true, message: '请输入实际完工进度', trigger: 'change' }
        ],
        errorRanger: [
          { required: true, message: '请输入偏差', trigger: 'change' }
        ],
        status: [
          { required: true, message: '请选择是否完成', trigger: 'change' }
        ]
      },
      column2: [{
        name: '时期',
        value: 'date'
      }, {
        name: '主要活动',
        value: 'main_action'
      }, {
        name: '工作要求',
        value: 'work_require'
      }, {
        name: '牵头处室',
        value: 'lead_office'
      }, {
        name: '协办',
        value: 'assist'
      }, {
        name: '计划完成时间',
        value: 'plan_finish'
      }, {
        name: '落实情况',
        value: 'practicable'
      }, {
        name: '完成率',
        value: 'completion_rate'
      }],
      rule2: {
        date: [
          { required: true, message: '请输入时期', trigger: 'change' }
        ],
        main_action: [
          { required: true, message: '请输入主要活动', trigger: 'change' }
        ],
        work_require: [
          { required: true, message: '请输入工作要求', trigger: 'change' }
        ],
        lead_office: [
          { required: true, message: '请输入牵头处室', trigger: 'change' }
        ],
        assist: [
          { required: true, message: '请输入协办', trigger: 'change' }
        ],
        plan_finish: [
          { required: true, message: '请输入计划完成时间', trigger: 'change' }
        ],
        practicable: [
          { required: true, message: '请输入落实情况', trigger: 'change' }
        ],
        completion_rate: [
          { required: true, message: '请输入完成率', trigger: 'change' }
        ]
      },
      //  {
      //   name: 'period',
      //   value: ''
      // }
      updateData1: {},
      updateData2: {},
      updateData3: {},
      updateIndex: '',
      updateIndex2: '',
      updateIndex2: '',
      isAdd1: false,
      isAdd2: false,
      table1DialogVisible: false,
      table2DialogVisible: false,
      table3DialogVisible: false,
    };
  },
  methods: {
    download1 () {
      console.log('下载')
    },
    addTable1Data (type) {
      if (type === 1) {
        this.table1DialogVisible = true
        this.updateData1 = {}
        this.isAdd1 = true
      } else if (type === 2) {
        this.table2DialogVisible = true
        this.updateData2 = {}
        this.isAdd2 = true
      } else if (type === 3) {
        this.table2DialogVisible = true
        this.updateData3 = {}
        this.isAdd3 = true
      }
    },
    deleteTable1 (index, type) {
      if (type === 1) {
        this.tableDataLoacl1.splice(index, 1)
      } else if (type === 2) {
        this.tableDataLoacl2.splice(index, 1)
      } else if (type === 3) {
        this.tableDataLoacl3.splice(index, 1)
      }
    },
    updateLocal1 () {
      this.$refs["form1"].validate((valid) => {
        if (valid) {
          if (this.isAdd1) {
            console.log(JSON.parse(JSON.stringify(this.updateData1)), '添加')
            return
          }
          this.$set(this.tableDataLoacl1, this.updateIndex, JSON.parse(JSON.stringify(this.updateData1)))
          this.$forceUpdate()
          this.table1DialogVisible = false
        } else {
          console.log('error submit!!');
          return false;
        }
      });

    },
    updateLocal2 () {
      this.$refs["form2"].validate((valid) => {
        if (valid) {
          if (this.isAdd2) {
            console.log(JSON.parse(JSON.stringify(this.updateData2)), '添加')
            return
          }
          this.$set(this.tableDataLoacl2, this.updateIndex2, JSON.parse(JSON.stringify(this.updateData2)))
          this.$forceUpdate()
          this.table2DialogVisible = false
        } else {
          console.log('error submit!!');
          return false;
        }
      });

    },
    updateLocal3 () {
      this.$refs["form3"].validate((valid) => {
        if (valid) {
          if (this.isAdd3) {
            console.log(JSON.parse(JSON.stringify(this.updateData3)), '添加')
            return
          }
          this.$set(this.tableDataLoacl3, this.updateIndex3, JSON.parse(JSON.stringify(this.updateData3)))
          this.$forceUpdate()
          this.table3DialogVisible = false
        } else {
          console.log('error submit!!');
          return false;
        }
      });

    },
    updateTable1 (data, index, type) {
      console.log(type)
      if (type === 1) {
        this.updateData1 = JSON.parse(JSON.stringify(data))
        this.updateIndex = index
        this.table1DialogVisible = true
      } else if (type == 2) {
        this.updateData1 = JSON.parse(JSON.stringify(data))
        this.updateIndex = index
        this.table1DialogVisible = true
      } else if (type === 3) {
        this.updateData2 = JSON.parse(JSON.stringify(data))
        this.updateIndex2 = index
        this.table2DialogVisible = true
      } else if (type === 4) {
        this.updateData2 = JSON.parse(JSON.stringify(data))
        this.updateIndex2 = index
        this.table2DialogVisible = true
      } else if (type === 5) {
        this.updateData3 = JSON.parse(JSON.stringify(data))
        this.updateIndex3 = index
        this.table3DialogVisible = true
      } else if (type === 6) {
        this.updateData3 = JSON.parse(JSON.stringify(data))
        this.updateIndex3 = index
        this.table3DialogVisible = true
      }

    },
    submitTable1 () {
      console.log(this.tableDataLoacl1)
    },
    handleClick (tab, event) {
      // console.log(tab, event);
    },
    handlerRemove (type) {
      if (type === 1) {
        this.tableDataLoacl1 = []
      } else if (type === 2) {
        this.tableDataLoacl2 = []
      } else if (type === 3) {
        this.tableDataLoacl3 = []
      }
      // this.column1 = []
    },
    handlerOut () {
      this.$message("请删除已上传excel后继续上传")
    },
    excelDeal (e) {
      if (!e.file) {
        return
      }
      let arr = ['xls', 'xlsx']
      //获取格式
      let type = e.file.name.split('.')[e.file.name.split('.').length - 1]
      let type1 = arr.some(item => item === type)
      if (!type1) {
        //数据格式错误
        this.$message.error('数据格式错误，请重新上传')
        return
      }
      this.file2Xce(e.file).then(tabJson => {
        if (tabJson && tabJson.length > 0) {
          const curData = tabJson[0] || {};
          if (this.activeName === 'first') {
            this.tableDataLoacl1 = curData.list.map((item) => {
              let obj = {
                name: item['项目名称'],
                startTime: item['开始日期'],
                endTime: item['结束日期'],
                timeRate: item['时间进度（%）'],
                realRate: item['实际完工进度（%）'],
                errorRanger: item['偏差'],
                status: item['是否完成'],
              }
              let arr = Object.key()
              console.log(arr)
              return obj
            })
          } else if (this.activeName === 'second') {
            this.tableDataLoacl2 = curData.list.map((item) => {
              return {
                name: item['时期'],
                startTime: item['主要活动'],
                endTime: item['工作要求'],
                timeRate: item['牵头处室'],
                realRate: item['协办'],
                errorRanger: item['计划完成时间'],
                status: item['落实情况'],
                completion_rate: item['完成率'],
              }
            })
          } else if (this.activeName === 'third') {
            this.tableDataLoacl3 = curData.list.map((item) => {
              return {
                name: item['时期'],
                startTime: item['主要活动'],
                endTime: item['工作要求'],
                timeRate: item['牵头处室'],
                realRate: item['协办'],
                errorRanger: item['计划完成时间'],
                status: item['落实情况'],
                completion_rate: item['完成率'],
              }
            })
          }

          // this.column1 = Object.keys(this.tableDataLoacl1[0])
        }
      });
    },
    file2Xce (file) {
      return new Promise(function (resolve, reject) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const data = e.target.result;
          this.wb = XLSX.read(data, {
            type: "binary"
          });
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

<style>
.excel-deal-box {
  width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 10px;
  background-color: white;
}
.tableBox {
  margin-top: 10px;
}
.base-box {
  width: 1150px;
  margin: 10px auto;
  box-sizing: border-box;
  padding: 20px;
  box-shadow: 0px 2px 5px 0px rgba(113, 113, 113, 0.5);
}
.base-title {
  font-size: 16px;
  font-weight: bold;
  line-height: 40px;
}
.base-box:last-child {
  margin-top: 30px;
}
.upload-box {
  display: inline-block;
}
.btn-box {
  position: relative;
}
</style>