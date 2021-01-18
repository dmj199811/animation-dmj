<template>
  <div>
    <div class="group-page-box">
      <div class="page-title">
        用户组列表
        <el-button type="primary"
                   @click="addGroup"
                   style="margin-left:20px">添加用户组</el-button>
      </div>
      <el-table :data="groupData">
        <el-table-column label="序号">
          <template slot-scope="scope">
            {{scope.$index+1}}
          </template>
        </el-table-column>
        <el-table-column label="用户组名"
                         prop="name"></el-table-column>
        <el-table-column label="用户组描述"
                         prop="desc"></el-table-column>

        <el-table-column label="操作"
                         width="400px"
                         prop="">
          <template slot-scope="scope">
            <el-button @click="upDateGroup(scope.row)"
                       type="primary"
                       size="medium">操作用户</el-button>
            <el-button @click="upDateAuthority(scope.row)"
                       type="primary"
                       size="medium">操作权限</el-button>
            <el-button @click="deleteGroup(scope.row)"
                       type="danger"
                       size="medium">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog :visible.sync='addGroupDialog'
                 title="添加用户组">
        <el-form label-width="100px"
                 ref="groupAddForm"
                 :model="groupAdd"
                 :rules="groupAddRules">
          <el-form-item label="用户组名称"
                        prop="name">
            <el-input v-model="groupAdd.name"></el-input>
          </el-form-item>
          <el-form-item label="用户组描述"
                        prop="des">
            <el-input v-model="groupAdd.des"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer"
              class="dialog-footer">
          <el-button @click="addGroupDialog = false">取 消</el-button>
          <el-button type="primary"
                     @click="toSubmitAdd">确 定</el-button>
        </span>
      </el-dialog>
      <el-dialog :visible.sync='addGroupDialog'
                 title="添加用户组">
        <el-form label-width="100px"
                 ref="groupAddForm"
                 :model="groupAdd"
                 :rules="groupAddRules">
          <el-form-item label="用户组名称"
                        prop="name">
            <el-input v-model="groupAdd.name"></el-input>
          </el-form-item>
          <el-form-item label="用户组描述"
                        prop="des">
            <el-input v-model="groupAdd.des"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer"
              class="dialog-footer">
          <el-button @click="addGroupDialog = false">取 消</el-button>
          <el-button type="primary"
                     @click="toSubmitAdd">确 定</el-button>
        </span>
      </el-dialog>
      <el-dialog title="用户组内用户管理"
                 :visible.sync='updateGroupDialog'
                 width="700px">
        <el-transfer filterable
                     :filter-method="filterMethod"
                     filter-placeholder="请输入城市拼音"
                     v-model="value"
                     :titles="['用户组内', '用户组外']"
                     :data="data">
        </el-transfer>
        <span slot="footer"
              class="dialog-footer">
          <el-button @click="updateGroupDialog = false">取 消</el-button>
          <el-button type="primary"
                     @click="toSubmitUpdate">确 定</el-button>
        </span>
      </el-dialog>
      <el-dialog title="用户组权限管理"
                 :visible.sync='updateAuthoritypDialog'
                 width="700px">
        <el-transfer filterable
                     :filter-method="filterMethod"
                     filter-placeholder="请输入权限拼音"
                     v-model="value"
                     :titles="['用户组内', '用户组外']"
                     :data="data">
        </el-transfer>
        <span slot="footer"
              class="dialog-footer">
          <el-button @click="updateAuthoritypDialog = false">取 消</el-button>
          <el-button type="primary"
                     @click="toSubmitAuthoritypUpdate">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  data () {

    return {
      data: this.generateData(),
      value: [],
      groupData: [{ name: '测试', desc: '测试组描述', id: 1 }],
      addGroupDialog: false,
      updateGroupDialog: false,
      updateAuthoritypDialog: false,
      groupAdd: {
        name: '',
        des: ''
      },
      groupAddRules: {
        name: [{ required: true, message: '请输入用户组名称', trigger: 'change' }],
        des: [{ required: true, message: '请输入用户组描述', trigger: 'change' }],
      }
    }
  },
  methods: {
    generateData () {
      const data = [];
      const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
      const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
      cities.forEach((city, index) => {
        data.push({
          label: city,
          key: index,
          pinyin: pinyin[index]
        });
      });
      return data;
    },
    filterMethod (query, item) {
      return item.pinyin.indexOf(query) > -1;
    },
    addGroup () {
      this.addGroupDialog = true
    },
    toSubmitAdd () {
      this.$refs['groupAddForm'].validate((valid) => {
        if (valid) {
          console.log(this.groupAdd)
        } else {
          console.log('校验未通过')
        }
      })
    },
    upDateAuthority (data) {
      this.updateAuthoritypDialog = true
    },
    upDateGroup (data) {
      this.updateGroupDialog = true
      console.log(data)
    },
    toSubmitUpdate () {
      console.log(12341234)
    },
    toSubmitAuthoritypUpdate () {
      console.log(1234)
    }
  }
}
</script>
<style lang="less">
.group-page-box {
  width: 1100px;
  margin: 20px auto;
  .page-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
  }
}
</style>