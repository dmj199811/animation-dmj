<template>
  <div class="trobule-container">
    <div class="system-box">
      系统列表
      <el-select v-model="systemID">
        <el-option v-for="(item,index) in systemList"
                   :value="item.id"
                   :label="item.name"
                   :key="index"></el-option>
      </el-select>
      <el-button style="margin-left:20px"
                 type="primary"
                 @click="systemSubmit">设置当前系统为展示系统</el-button>
    </div>
    <div class="inner-container"
         v-show="sysType==1">

      <div class="simple-box">
        <span class="title">基础信息</span>
        <el-button type="primary"
                   v-show="editStatus"
                   style="float:right"
                   @click="editStatus=!editStatus;editBaseData=baseData"
                   size="medium">编辑</el-button>
        <el-button v-show="!editStatus"
                   style="float:right"
                   @click="editStatus=!editStatus"
                   size="medium"> 取消</el-button>
        <el-button type="primary"
                   v-show="!editStatus"
                   style="float:right"
                   @click="submitBasicData"
                   size="medium">确认</el-button>
        <div class="basic-box">
          <div class="left">
            <div class="line-box">
              <div class="name-box">
                最近一次演练日
              </div>
              <div class="content-box">
                <p v-if='editStatus'>{{baseData.date}}</p>
                <el-date-picker v-model="editBaseData.date"
                                v-else
                                type="datetime"
                                value-format="yyyyMMdd HH:mm"
                                placeholder="选择日期时间">
                </el-date-picker>
              </div>
            </div>
            <div class="line-box">
              <div class="name-box"
                   style="height:66px;line-height:66px">
                预计RTO
              </div>
              <div class="content-box"
                   style="height:66px;line-height:26px;padding-top:10px">
                <p v-if='editStatus'>
                  {{baseData.RTO}}
                </p>
                <el-input type="textarea"
                          :rows="2"
                          v-model="editBaseData.RTO"
                          v-else>
                </el-input>
              </div>
            </div>
            <div class="line-box">
              <div class="name-box">
                安全等级
              </div>
              <div class="content-box">
                <p v-if='editStatus'>
                  {{baseData.safeLv}}
                </p>
                <el-input v-model="editBaseData.safeLv"
                          v-else>
                </el-input>
              </div>
            </div>
            <div class="line-box">
              <div class="name-box">
                一致性对比
              </div>
              <div class="content-box">
                <p v-if='editStatus'>
                  {{baseData.compare}}
                </p>
                <el-input v-model="editBaseData.compare"
                          v-else>
                </el-input>
              </div>
            </div>
            <div class="line-box">
              <div class="name-box">
                故障现象描述
              </div>
              <div class="content-box">
                <p v-if='editStatus'>
                  {{baseData.describe}}
                </p>
                <el-input v-model="editBaseData.describe"
                          v-else>
                </el-input>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="line-box">
              <div class="name-box">
                用户
              </div>
              <div class="content-box">
                <p v-if='editStatus'>
                  {{baseData.user}}
                </p>
                <el-input v-model="editBaseData.user"
                          v-else>
                </el-input>
              </div>
            </div>
            <div class="line-box">
              <div class="name-box"
                   style="height:66px;line-height:66px">
                部署地
              </div>
              <div class="content-box"
                   style="height:66px;line-height:26px;padding-top:10px">
                <p v-if='editStatus'>
                  {{baseData.address}}
                </p>
                <el-input type="textarea"
                          :rows="2"
                          v-model="editBaseData.address"
                          v-else>
                </el-input>
              </div>
            </div>
            <div class="line-box">
              <div class="name-box">
                RTO设计指标
              </div>
              <div class="content-box">
                <p v-if='editStatus'>
                  {{baseData.rto1}}
                </p>
                <el-input v-model="editBaseData.rto1"
                          v-else>
                </el-input>
              </div>
            </div>
            <div class="line-box">
              <div class="name-box">
                RPO设计指标
              </div>
              <div class="content-box">
                <p v-if='editStatus'>
                  {{baseData.rpo1}}
                </p>
                <el-input v-model="editBaseData.rpo1"
                          v-else>
                </el-input>
              </div>
            </div>
            <div class="line-box">
              <div class="name-box">
                故障处理进展
              </div>
              <div class="content-box">
                <p v-if='editStatus'>
                  {{baseData.trobule}}
                </p>
                <el-input v-model="editBaseData.trobule"
                          v-else>
                </el-input>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="simple-box"
           style="height:400px">
        <div class="simple2-btn-box">
          <el-button type="primary"
                     v-show="editStatus"
                     @click="addPerson()"
                     size="medium">新增</el-button>
        </div>

        <el-tabs v-model="activeName">
          <el-tab-pane label="系统负责人"
                       name="1">
            <el-table height="300px"
                      :header-cell-style="{background:'#DAE3F1',color:'#001034'}"
                      :cell-style="{color:'#001034'}"
                      :row-style='backgroundChange'
                      :data="simple2Data1">
              <el-table-column prop=''
                               label='序号'>
                <template slot-scope="scope">{{scope.$index+1}}</template>
              </el-table-column>
              <el-table-column prop='person'
                               label='人员'>
                <template slot-scope="scope">
                  <p v-if='scope.row.edit'>
                    {{scope.row.person}}
                  </p>
                  <el-input v-model="simple2Data1Change[scope.$index].person"
                            size="mini"
                            v-else>
                  </el-input>
                </template>
              </el-table-column>
              <el-table-column prop='status'
                               label='是否到场'>
                <template slot-scope="scope">
                  <p v-if='scope.row.edit'>
                    {{scope.row.status}}
                  </p>
                  <el-select v-else
                             v-model="simple2Data1Change[scope.$index].status">
                    <el-option value="是"
                               label="是"></el-option>
                    <el-option value="否"
                               label="否"></el-option>
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column prop=''
                               label='操作'>
                <template slot-scope='scope'>
                  <div v-if="scope.row.edit">
                    <i class="el-icon-edit-outline"
                       @click="editPerson(scope.$index,1)"
                       style="margin-right: 20px;color:#67C23A"></i>
                    <i class="el-icon-delete"
                       @click="deleteDialogShow(simple2Data1,'系统负责人')"
                       style="color:#409EFF"></i>
                  </div>
                  <div v-else>
                    <i class="el-icon-check"
                       @click="submitSimple2Change(scope.$index,1)"
                       style="margin-right: 20px;color:#F56C6C"></i>
                    <i class="el-icon-close"
                       @click="simple2Data1[scope.$index].edit=true"
                       style="color:#409EFF"></i>
                  </div>
                </template>

              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="研发人员"
                       name="2">
            <el-table height="300px"
                      :header-cell-style="{background:'#DAE3F1',color:'#001034'}"
                      :cell-style="{color:'#001034'}"
                      :row-style='backgroundChange'
                      :data="simple2Data2">
              <el-table-column prop=''
                               label='序号'>
                <template slot-scope="scope">{{scope.$index+1}}</template>
              </el-table-column>
              <el-table-column prop='person'
                               label='人员'>
                <template slot-scope="scope">
                  <p v-if='scope.row.edit'>
                    {{scope.row.person}}
                  </p>
                  <el-input v-model="simple2Data2Change[scope.$index].person"
                            size="mini"
                            v-else>
                  </el-input>
                </template>
              </el-table-column>
              <el-table-column prop='status'
                               label='是否到场'>
                <template slot-scope="scope">
                  <p v-if='scope.row.edit'>
                    {{scope.row.status}}
                  </p>
                  <el-select v-else
                             v-model="simple2Data2Change[scope.$index].status">
                    <el-option value="是"
                               label="是"></el-option>
                    <el-option value="否"
                               label="否"></el-option>
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column prop=''
                               label='操作'>
                <template slot-scope='scope'>
                  <div v-if="scope.row.edit">
                    <i class="el-icon-edit-outline"
                       @click="editPerson(scope.$index,2)"
                       style="margin-right: 20px;color:#67C23A"></i>
                    <i class="el-icon-delete"
                       @click="deleteDialogShow(simple2Data2,'研发人员')"
                       style="color:#409EFF"></i>
                  </div>
                  <div v-else>
                    <i class="el-icon-check"
                       @click="submitSimple2Change(scope.$index,2)"
                       style="margin-right: 20px;color:#F56C6C"></i>
                    <i class="el-icon-close"
                       @click="simple2Data2[scope.$index].edit=true"
                       style="color:#409EFF"></i>
                  </div>
                </template>

              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="业务人员"
                       name="3">
            <el-table height="300px"
                      :header-cell-style="{background:'#DAE3F1',color:'#001034'}"
                      :cell-style="{color:'#001034'}"
                      :row-style='backgroundChange'
                      :data="simple2Data3">
              <el-table-column prop=''
                               label='序号'>
                <template slot-scope="scope">{{scope.$index+1}}</template>
              </el-table-column>
              <el-table-column prop='person'
                               label='人员'>
                <template slot-scope="scope">
                  <p v-if='scope.row.edit'>
                    {{scope.row.person}}
                  </p>
                  <el-input v-model="simple2Data3Change[scope.$index].person"
                            size="mini"
                            v-else>
                  </el-input>
                </template>
              </el-table-column>
              <el-table-column prop='status'
                               label='是否到场'>
                <template slot-scope="scope">
                  <p v-if='scope.row.edit'>
                    {{scope.row.status}}
                  </p>
                  <el-select v-else
                             v-model="simple2Data3Change[scope.$index].status">
                    <el-option value="是"
                               label="是"></el-option>
                    <el-option value="否"
                               label="否"></el-option>
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column prop=''
                               label='操作'>
                <template slot-scope='scope'>
                  <div v-if="scope.row.edit">
                    <i class="el-icon-edit-outline"
                       @click="editPerson(scope.$index,3)"
                       style="margin-right: 20px;color:#67C23A"></i>
                    <i class="el-icon-delete"
                       @click="deleteDialogShow(simple2Data3,'业务人员')"
                       style="color:#409EFF"></i>
                  </div>
                  <div v-else>
                    <i class="el-icon-check"
                       @click="submitSimple2Change(scope.$index,3)"
                       style="margin-right: 20px;color:#F56C6C"></i>
                    <i class="el-icon-close"
                       @click="simple2Data3[scope.$index].edit=true"
                       style="color:#409EFF"></i>
                  </div>
                </template>

              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="其他支持人员"
                       name="4">
            <el-table height="300px"
                      :header-cell-style="{background:'#DAE3F1',color:'#001034'}"
                      :cell-style="{color:'#001034'}"
                      :row-style='backgroundChange'
                      :data="simple2Data4">
              <el-table-column prop=''
                               label='序号'>
                <template slot-scope="scope">{{scope.$index+1}}</template>
              </el-table-column>
              <el-table-column prop='person'
                               label='人员'>
                <template slot-scope="scope">
                  <p v-if='scope.row.edit'>
                    {{scope.row.person}}
                  </p>
                  <el-input v-model="simple2Data4Change[scope.$index].person"
                            size="mini"
                            v-else>
                  </el-input>
                </template>
              </el-table-column>
              <el-table-column prop='status'
                               label='是否到场'>
                <template slot-scope="scope">
                  <p v-if='scope.row.edit'>
                    {{scope.row.status}}
                  </p>
                  <el-select v-else
                             v-model="simple2Data4Change[scope.$index].status">
                    <el-option value="是"
                               label="是"></el-option>
                    <el-option value="否"
                               label="否"></el-option>
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column prop=''
                               label='操作'>
                <template slot-scope='scope'>
                  <div v-if="scope.row.edit">
                    <i class="el-icon-edit-outline"
                       @click="editPerson(scope.$index,4)"
                       style="margin-right: 20px;color:#67C23A"></i>
                    <i class="el-icon-delete"
                       @click="deleteDialogShow(simple2Data4,'其他支持人员')"
                       style="color:#409EFF"></i>
                  </div>
                  <div v-else>
                    <i class="el-icon-check"
                       @click="submitSimple2Change(scope.$index,4)"
                       style="margin-right: 20px;color:#F56C6C"></i>
                    <i class="el-icon-close"
                       @click="simple2Data4[scope.$index].edit=true"
                       style="color:#409EFF"></i>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="simple-box">
        重要时间节点
        <div style="height:14px"></div>
        <div class="simple3-btn-box">
          <el-button type="primary"
                     @click="timeNodeAdd">新增</el-button>
        </div>
        <div style="height:20px"></div>
        <el-table height="300px"
                  :header-cell-style="{background:'#DAE3F1',color:'#001034'}"
                  :cell-style="{color:'#001034'}"
                  :row-style='backgroundChange'
                  :data="simple3TimeData">
          <el-table-column prop=''
                           label='序号'>
            <template slot-scope="scope">{{scope.$index+1}}</template>
          </el-table-column>
          <el-table-column prop='conid'
                           label='时间节点'>
            <template slot-scope="scope">
              <p v-if='scope.row.edit'>
                {{scope.row.conid}}
              </p>
              <el-input v-model="simple3TimeDataChange[scope.$index].conid"
                        size="mini"
                        v-else>
              </el-input>
            </template>
          </el-table-column>
          <el-table-column prop='config'
                           label='时间'>
            <template slot-scope="scope">
              <p v-if='scope.row.edit'>{{scope.row.config}}</p>
              <el-date-picker v-model="simple3TimeDataChange[scope.$index].config"
                              v-else
                              type="datetime"
                              value-format="yyyyMMdd HH:mm"
                              placeholder="选择日期时间">
              </el-date-picker>
            </template>
          </el-table-column>
          <el-table-column prop=''
                           label='操作'>
            <template slot-scope='scope'>
              <div v-if="scope.row.edit">
                <i class="el-icon-edit-outline"
                   @click="editTimeNode(scope.$index)"
                   style="margin-right: 20px;color:#67C23A"></i>
                <i class="el-icon-delete"
                   @click="deleteDialogShow(submitSimple3,'重要时间节点')"
                   style="color:#409EFF"></i>
              </div>
              <div v-else>
                <i class="el-icon-check"
                   @click="submitSimple3Change(scope.$index)"
                   style="margin-right: 20px;color:#F56C6C"></i>
                <i class="el-icon-close"
                   @click="submitSimple3Change[scope.$index].edit=true"
                   style="color:#409EFF"></i>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="simple-box">
        故障汇报情况
        <div style="height:14px"></div>
        <div class="simple3-btn-box">
          <el-button type="primary"
                     @click="trobuleNodeAdd">新增</el-button>
          <el-button type="primary"
                     @click="pageJump">发送故障短信</el-button>
        </div>
        <div style="height:20px"></div>
        <el-table height="300px"
                  :header-cell-style="{background:'#DAE3F1',color:'#001034'}"
                  :cell-style="{color:'#001034'}"
                  :row-style='backgroundChange'
                  :data="simple4TrobuleData">
          <el-table-column prop=''
                           label='序号'>
            <template slot-scope="scope">{{scope.$index+1}}</template>
          </el-table-column>
          <el-table-column prop='time'
                           label='时间节点'>
            <template slot-scope="scope">
              <p v-if='scope.row.edit'>{{scope.row.time}}</p>
              <el-date-picker v-model="simple4TrobuleDataChange[scope.$index].time"
                              v-else
                              type="datetime"
                              value-format="yyyyMMdd HH:mm"
                              placeholder="选择日期时间">
              </el-date-picker>

            </template>
          </el-table-column>
          <el-table-column prop='name'
                           label='汇报对象'>
            <template slot-scope="scope">
              <p v-if='scope.row.edit'>
                {{scope.row.name}}
              </p>
              <el-input v-model="simple4TrobuleDataChange[scope.$index].name"
                        size="mini"
                        v-else>
              </el-input>
            </template>
          </el-table-column>
          <el-table-column prop='status'
                           label='是否完成'>
            <template slot-scope="scope">
              <p v-if='scope.row.edit'>{{scope.row.status}}</p>
              <el-select v-else
                         v-model="simple4TrobuleDataChange[scope.$index].status">
                <el-option value="是"
                           label="是"></el-option>
                <el-option value="否"
                           label="否"></el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column prop=''
                           label='操作'>
            <template slot-scope='scope'>
              <div v-if="scope.row.edit">
                <i class="el-icon-edit-outline"
                   @click="editTrobuleNode(scope.$index)"
                   style="margin-right: 20px;color:#67C23A"></i>
                <i class="el-icon-delete"
                   @click="deleteDialogShow(submitSimple4,'故障汇报情况')"
                   style="color:#409EFF"></i>
              </div>
              <div v-else>
                <i class="el-icon-check"
                   @click="submitSimple4Change(scope.$index)"
                   style="margin-right: 20px;color:#F56C6C"></i>
                <i class="el-icon-close"
                   @click="simple4TrobuleData[scope.$index].edit=true"
                   style="color:#409EFF"></i>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="inner-container"
         v-show="sysType==2">
      <div class="simple-box">
        <span class="title">基础信息</span>
        <el-button type="primary"
                   v-show="editStatus2"
                   style="float:right"
                   @click="editStatus2=!editStatus2;editBaseData2=baseData2"
                   size="medium">编辑</el-button>
        <el-button v-show="!editStatus2"
                   style="float:right"
                   @click="editStatus2=!editStatus2"
                   size="medium"> 取消</el-button>
        <el-button type="primary"
                   v-show="!editStatus2"
                   style="float:right"
                   @click="submitBasicData2"
                   size="medium">确认</el-button>
        <div class="basic-box">
          <div class="left">
            <div class="line-box">
              <div class="name-box">
                最近一次演练日
              </div>
              <div class="content-box">
                <p v-if='editStatus2'>{{baseData2.date}}</p>
                <el-date-picker v-model="editBaseData2.date"
                                v-else
                                type="datetime"
                                value-format="yyyyMMdd HH:mm"
                                placeholder="选择日期时间">
                </el-date-picker>
              </div>
            </div>
            <div class="line-box">
              <div class="name-box"
                   style="height:66px;line-height:66px">
                预计RTO
              </div>
              <div class="content-box"
                   style="height:66px;line-height:26px;padding-top:10px">
                <p v-if='editStatus2'>
                  {{baseData2.RTO}}
                </p>
                <el-input type="textarea"
                          :rows="2"
                          v-model="editBaseData2.RTO"
                          v-else>
                </el-input>
              </div>
            </div>

          </div>
          <div class="right">
            <div class="line-box">
              <div class="name-box">
                用户
              </div>
              <div class="content-box">
                <p v-if='editStatus2'>
                  {{baseData2.user}}
                </p>
                <el-input v-model="editBaseData2.user"
                          v-else>
                </el-input>
              </div>
            </div>
            <div class="line-box">
              <div class="name-box"
                   style="height:66px;line-height:66px">
                部署地
              </div>
              <div class="content-box"
                   style="height:66px;line-height:26px;padding-top:10px">
                <p v-if='editStatus2'>
                  {{baseData2.address}}
                </p>
                <el-input type="textarea"
                          :rows="2"
                          v-model="editBaseData2.address"
                          v-else>
                </el-input>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="simple-box"
           style="height:400px">
        <div class="simple2-btn-box">
          <el-button type="primary"
                     @click="addPerson2"
                     size="medium">新增</el-button>
        </div>

        <el-tabs v-model="activeName2">
          <el-tab-pane label="网络港"
                       name="5">
            <el-table height="300px"
                      :header-cell-style="{background:'#DAE3F1',color:'#001034'}"
                      :cell-style="{color:'#001034'}"
                      :row-style='backgroundChange'
                      :data="areaSimple2Data1">
              <el-table-column prop=''
                               label='序号'>
                <template slot-scope="scope">{{scope.$index+1}}</template>
              </el-table-column>
              <el-table-column prop='person'
                               label='人员'>
                <template slot-scope="scope">
                  <p v-if='scope.row.edit'>
                    {{scope.row.person}}
                  </p>
                  <el-input v-model="areaSimple2Data1Change[scope.$index].person"
                            size="mini"
                            v-else>
                  </el-input>
                </template>
              </el-table-column>
              <el-table-column prop='status'
                               label='是否到场'>
                <template slot-scope="scope">
                  <p v-if='scope.row.edit'>
                    {{scope.row.status}}
                  </p>
                  <el-select v-else
                             v-model="areaSimple2Data1Change[scope.$index].status">
                    <el-option value="是"
                               label="是"></el-option>
                    <el-option value="否"
                               label="否"></el-option>
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column prop=''
                               label='操作'>
                <template slot-scope='scope'>
                  <div v-if="scope.row.edit">
                    <i class="el-icon-edit-outline"
                       @click="editPerson(scope.$index,5)"
                       style="margin-right: 20px;color:#67C23A"></i>
                    <i class="el-icon-delete"
                       @click="deleteDialogShow(simple2Data1,'系统负责人')"
                       style="color:#409EFF"></i>
                  </div>
                  <div v-else>
                    <i class="el-icon-check"
                       @click="submitSimple2Change(scope.$index,5)"
                       style="margin-right: 20px;color:#F56C6C"></i>
                    <i class="el-icon-close"
                       @click="areaSimple2Data1[scope.$index].edit=true"
                       style="color:#409EFF"></i>
                  </div>
                </template>

              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="其他支持人员"
                       name="6">
            <el-table height="300px"
                      :header-cell-style="{background:'#DAE3F1',color:'#001034'}"
                      :cell-style="{color:'#001034'}"
                      :row-style='backgroundChange'
                      :data="areaSimple2Data2">
              <el-table-column prop=''
                               label='序号'>
                <template slot-scope="scope">{{scope.$index+1}}</template>
              </el-table-column>
              <el-table-column prop='person'
                               label='人员'>
                <template slot-scope="scope">
                  <p v-if='scope.row.edit'>
                    {{scope.row.person}}
                  </p>
                  <el-input v-model="areaSimple2Data2Change[scope.$index].person"
                            size="mini"
                            v-else>
                  </el-input>
                </template>
              </el-table-column>
              <el-table-column prop='status'
                               label='是否到场'>
                <template slot-scope="scope">
                  <p v-if='scope.row.edit'>
                    {{scope.row.status}}
                  </p>
                  <el-select v-else
                             v-model="areaSimple2Data2Change[scope.$index].status">
                    <el-option value="是"
                               label="是"></el-option>
                    <el-option value="否"
                               label="否"></el-option>
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column prop=''
                               label='操作'>
                <template slot-scope='scope'>
                  <div v-if="scope.row.edit">
                    <i class="el-icon-edit-outline"
                       @click="editPerson(scope.$index,6)"
                       style="margin-right: 20px;color:#67C23A"></i>
                    <i class="el-icon-delete"
                       @click="deleteDialogShow(areaSimple2Data2,'其他支持人员')"
                       style="color:#409EFF"></i>
                  </div>
                  <div v-else>
                    <i class="el-icon-check"
                       @click="submitSimple2Change(scope.$index,6)"
                       style="margin-right: 20px;color:#F56C6C"></i>
                    <i class="el-icon-close"
                       @click="areaSimple2Data2[scope.$index].edit=true"
                       style="color:#409EFF"></i>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="simple-box">
        关键网络设备列表
        <div style="height:14px"></div>
        <div class="simple3-btn-box">
          <el-button type="primary"
                     @click="intNodeAdd">新增</el-button>
        </div>
        <div style="height:20px"></div>
        <el-table height="300px"
                  :header-cell-style="{background:'#DAE3F1',color:'#001034'}"
                  :cell-style="{color:'#001034'}"
                  :row-style='backgroundChange'
                  :data="areaIntList">
          <el-table-column prop=''
                           label='序号'>
            <template slot-scope="scope">{{scope.$index+1}}</template>
          </el-table-column>
          <el-table-column prop='name'
                           label='设备名称'>
            <template slot-scope="scope">
              <p v-if='scope.row.edit'>
                {{scope.row.device_name_ch}}
              </p>
              <el-input v-model="areaIntListChange[scope.$index].device_name_ch"
                        size="mini"
                        v-else>
              </el-input>
            </template>
          </el-table-column>
          <el-table-column prop='conid'
                           label='英文名'>
            <template slot-scope="scope">
              <p v-if='scope.row.edit'>
                {{scope.row.device_name_en}}
              </p>
              <el-input v-model="areaIntListChange[scope.$index].device_name_en"
                        size="mini"
                        v-else>
              </el-input>
            </template>
          </el-table-column>
          <el-table-column prop='conid'
                           label='主机ip'>
            <template slot-scope="scope">
              <p v-if='scope.row.edit'>
                {{scope.row.ip_address}}
              </p>
              <el-input v-model="areaIntListChange[scope.$index].ip_address"
                        size="mini"
                        v-else>
              </el-input>
            </template>
          </el-table-column>
          <el-table-column prop=''
                           label='操作'>
            <template slot-scope='scope'>
              <div v-if="scope.row.edit">
                <i class="el-icon-edit-outline"
                   @click="editIntNode(scope.$index)"
                   style="margin-right: 20px;color:#67C23A"></i>
                <i class="el-icon-delete"
                   @click="deleteDialogShow(areaIntList,'重要时间节点')"
                   style="color:#409EFF"></i>
              </div>
              <div v-else>
                <i class="el-icon-check"
                   @click="submitIntChange(scope.$index)"
                   style="margin-right: 20px;color:#F56C6C"></i>
                <i class="el-icon-close"
                   @click="areaIntListChange[scope.$index].edit=true"
                   style="color:#409EFF"></i>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="simple-box">
        承载重要系统列表
        <div style="height:14px"></div>
        <div class="simple3-btn-box">
          <el-button type="primary"
                     @click="bearNodeAdd">新增</el-button>
        </div>
        <div style="height:20px"></div>
        <el-table height="300px"
                  :header-cell-style="{background:'#DAE3F1',color:'#001034'}"
                  :cell-style="{color:'#001034'}"
                  :row-style='backgroundChange'
                  :data="areaBearData">
          <el-table-column prop=''
                           label='序号'>
            <template slot-scope="scope">{{scope.$index+1}}</template>
          </el-table-column>
          <el-table-column prop='key_system_name_ch'
                           label='系统名称'>
            <template slot-scope="scope">
              <p v-if='scope.row.edit'>
                {{scope.row.key_system_name_ch}}
              </p>
              <el-input v-model="areaBearDataChange[scope.$index].key_system_name_ch"
                        size="mini"
                        v-else>
              </el-input>
            </template>
          </el-table-column>
          <el-table-column prop=''
                           label='操作'>
            <template slot-scope='scope'>
              <div v-if="scope.row.edit">
                <i class="el-icon-edit-outline"
                   @click="editBearNode(scope.$index)"
                   style="margin-right: 20px;color:#67C23A"></i>
                <i class="el-icon-delete"
                   @click="deleteDialogShow(areaBearData,'承载重要系统列表')"
                   style="color:#409EFF"></i>
              </div>
              <div v-else>
                <i class="el-icon-check"
                   @click="submitBearChange(scope.$index)"
                   style="margin-right: 20px;color:#F56C6C"></i>
                <i class="el-icon-close"
                   @click="areaBearDataChange[scope.$index].edit=true"
                   style="color:#409EFF"></i>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="simple-box">
        重要线路列表
        <div style="height:14px"></div>
        <div class="simple3-btn-box">
          <el-button type="primary"
                     @click="lineNodeAdd">新增</el-button>
        </div>
        <div style="height:20px"></div>
        <el-table height="300px"
                  :header-cell-style="{background:'#DAE3F1',color:'#001034'}"
                  :cell-style="{color:'#001034'}"
                  :row-style='backgroundChange'
                  :data="areaLineData">
          <el-table-column prop=''
                           label='序号'>
            <template slot-scope="scope">{{scope.$index+1}}</template>
          </el-table-column>
          <el-table-column prop='line_name_ch'
                           label='线路名称'>
            <template slot-scope="scope">
              <p v-if='scope.row.edit'>
                {{scope.row.line_name_ch}}
              </p>
              <el-input v-model="areaSystemDataChange[scope.$index].line_name_ch"
                        size="mini"
                        v-else>
              </el-input>
            </template>
          </el-table-column>
          <el-table-column prop='key_system_name_ch'
                           label='线路英文'>
            <template slot-scope="scope">
              <p v-if='scope.row.edit'>
                {{scope.row.line_name_en}}
              </p>
              <el-input v-model="areaSystemDataChange[scope.$index].line_name_en"
                        size="mini"
                        v-else>
              </el-input>
            </template>
          </el-table-column>
          <el-table-column prop=''
                           label='操作'>
            <template slot-scope='scope'>
              <div v-if="scope.row.edit">
                <i class="el-icon-edit-outline"
                   @click="editTimeNode(scope.$index)"
                   style="margin-right: 20px;color:#67C23A"></i>
                <i class="el-icon-delete"
                   @click="deleteDialogShow(areaSystemData,'重要线路列表')"
                   style="color:#409EFF"></i>
              </div>
              <div v-else>
                <i class="el-icon-check"
                   @click="submitSimple3Change(scope.$index)"
                   style="margin-right: 20px;color:#F56C6C"></i>
                <i class="el-icon-close"
                   @click="areaSystemDataChange[scope.$index].edit=true"
                   style="color:#409EFF"></i>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="simple-box">
        重要时间节点
        <div style="height:14px"></div>
        <div class="simple3-btn-box">
          <el-button type="primary"
                     @click="timeNodeAdd">新增</el-button>
        </div>
        <div style="height:20px"></div>
        <el-table height="300px"
                  :header-cell-style="{background:'#DAE3F1',color:'#001034'}"
                  :cell-style="{color:'#001034'}"
                  :row-style='backgroundChange'
                  :data="simple3TimeData">
          <el-table-column prop=''
                           label='序号'>
            <template slot-scope="scope">{{scope.$index+1}}</template>
          </el-table-column>
          <el-table-column prop='conid'
                           label='时间节点'>
            <template slot-scope="scope">
              <p v-if='scope.row.edit'>
                {{scope.row.conid}}
              </p>
              <el-input v-model="simple3TimeDataChange[scope.$index].conid"
                        size="mini"
                        v-else>
              </el-input>
            </template>
          </el-table-column>
          <el-table-column prop='config'
                           label='时间'>
            <template slot-scope="scope">
              <p v-if='scope.row.edit'>{{scope.row.config}}</p>
              <el-date-picker v-model="simple3TimeDataChange[scope.$index].config"
                              v-else
                              type="datetime"
                              value-format="yyyyMMdd HH:mm"
                              placeholder="选择日期时间">
              </el-date-picker>
            </template>
          </el-table-column>
          <el-table-column prop=''
                           label='操作'>
            <template slot-scope='scope'>
              <div v-if="scope.row.edit">
                <i class="el-icon-edit-outline"
                   @click="editTimeNode(scope.$index)"
                   style="margin-right: 20px;color:#67C23A"></i>
                <i class="el-icon-delete"
                   @click="deleteDialogShow(submitSimple3,'重要时间节点')"
                   style="color:#409EFF"></i>
              </div>
              <div v-else>
                <i class="el-icon-check"
                   @click="submitSimple3Change(scope.$index)"
                   style="margin-right: 20px;color:#F56C6C"></i>
                <i class="el-icon-close"
                   @click="submitSimple3Change[scope.$index].edit=true"
                   style="color:#409EFF"></i>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="simple-box">
        故障汇报情况
        <div style="height:14px"></div>
        <div class="simple3-btn-box">
          <el-button type="primary"
                     @click="trobuleNodeAdd">新增</el-button>
          <el-button type="primary"
                     @click="pageJump">发送故障短信</el-button>
        </div>
        <div style="height:20px"></div>
        <el-table height="300px"
                  :header-cell-style="{background:'#DAE3F1',color:'#001034'}"
                  :cell-style="{color:'#001034'}"
                  :row-style='backgroundChange'
                  :data="simple4TrobuleData">
          <el-table-column prop=''
                           label='序号'>
            <template slot-scope="scope">{{scope.$index+1}}</template>
          </el-table-column>
          <el-table-column prop='time'
                           label='时间节点'>
            <template slot-scope="scope">
              <p v-if='scope.row.edit'>{{scope.row.time}}</p>
              <el-date-picker v-model="simple4TrobuleDataChange[scope.$index].time"
                              v-else
                              type="datetime"
                              value-format="yyyyMMdd HH:mm"
                              placeholder="选择日期时间">
              </el-date-picker>

            </template>
          </el-table-column>
          <el-table-column prop='name'
                           label='汇报对象'>
            <template slot-scope="scope">
              <p v-if='scope.row.edit'>
                {{scope.row.name}}
              </p>
              <el-input v-model="simple4TrobuleDataChange[scope.$index].name"
                        size="mini"
                        v-else>
              </el-input>
            </template>
          </el-table-column>
          <el-table-column prop='status'
                           label='是否完成'>
            <template slot-scope="scope">
              <p v-if='scope.row.edit'>{{scope.row.status}}</p>
              <el-select v-else
                         v-model="simple4TrobuleDataChange[scope.$index].status">
                <el-option value="是"
                           label="是"></el-option>
                <el-option value="否"
                           label="否"></el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column prop=''
                           label='操作'>
            <template slot-scope='scope'>
              <div v-if="scope.row.edit">
                <i class="el-icon-edit-outline"
                   @click="editTrobuleNode(scope.$index)"
                   style="margin-right: 20px;color:#67C23A"></i>
                <i class="el-icon-delete"
                   @click="deleteDialogShow(submitSimple4,'故障汇报情况')"
                   style="color:#409EFF"></i>
              </div>
              <div v-else>
                <i class="el-icon-check"
                   @click="submitSimple4Change(scope.$index)"
                   style="margin-right: 20px;color:#F56C6C"></i>
                <i class="el-icon-close"
                   @click="simple4TrobuleData[scope.$index].edit=true"
                   style="color:#409EFF"></i>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <el-dialog :title="addPersonDialogTitle"
               :visible.sync="simple2DialogVisible"
               width="400px"
               :before-close="handleClose">
      <el-form ref="form"
               :model="simple2DialogForm"
               label-width="80px">
        <el-form-item label="人员">
          <el-input v-model="simple2DialogForm.name"></el-input>
        </el-form-item>
        <el-form-item label="是否到场">
          <el-select v-model="simple2DialogForm.region"
                     placeholder="请选择是否到场">
            <el-option label="是"
                       value="是"></el-option>
            <el-option label="否"
                       value="否"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="simple2DialogVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="simple2DialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="新增重要时间节点"
               :visible.sync="timeDialogVisible"
               width="400px"
               :before-close="handleClose">
      <el-form ref="form"
               :model="timeDialogForm"
               label-width="80px">
        <el-form-item label="时间节点">
          <el-input v-model="timeDialogForm.conid"></el-input>
        </el-form-item>
        <el-form-item label="时间">
          <el-date-picker v-model="timeDialogForm.config"
                          type="datetime"
                          value-format="yyyyMMdd HH:mm"
                          placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
      </el-form>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="timeDialogVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="submitTimeNode">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="新增关键网络设备"
               :visible.sync="intDialogVisible"
               width="400px"
               :before-close="handleClose">
      <el-form ref="form"
               :model="intDialogForm"
               label-width="80px">
        <el-form-item label="设备名称">
          <el-input v-model="intDialogForm.device_name_ch"></el-input>
        </el-form-item>
        <el-form-item label="英文名">
          <el-input v-model="intDialogForm.device_name_en"></el-input>
        </el-form-item>
        <el-form-item label="ip地址">
          <el-input v-model="intDialogForm.ip_address"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="intDialogVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="submitIntNode">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="新增重要设备线路"
               :visible.sync="sysDialogVisible"
               width="400px"
               :before-close="handleClose">
      <el-form ref="form"
               :model="sysDialogForm"
               label-width="80px">
        <el-form-item label="设备名称">
          <el-input v-model="sysDialogForm.device_name_ch"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="sysDialogVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="submitSysNode">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="新增重要线路列表"
               :visible.sync="lineDialogVisible"
               width="400px"
               :before-close="handleClose">
      <el-form ref="form"
               :model="lineDialogForm"
               label-width="80px">
        <el-form-item label="设备名称">
          <el-input v-model="lineDialogForm.line_name_ch"></el-input>
        </el-form-item>
        <el-form-item label="设备名称">
          <el-input v-model="lineDialogForm.line_name_eh"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="lineDialogVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="submitLineNode">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="新增承载重要系统"
               :visible.sync="bearDialogVisible"
               width="400px"
               :before-close="handleClose">
      <el-form ref="form"
               :model="bearDialogForm"
               label-width="80px">
        <el-form-item label="设备名称">
          <el-input v-model="bearDialogForm.key_system_name_ch"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="bearDialogVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="submitBearNode">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="新增故障汇报情况"
               :visible.sync="TrobuleDialogVisible"
               width="400px"
               :before-close="handleClose">
      <el-form ref="form"
               :model="TrobuleDialogForm"
               label-width="80px">
        <el-form-item label="时间节点">
          <el-date-picker v-model="TrobuleDialogForm.time"
                          type="datetime"
                          value-format="yyyyMMdd HH:mm"
                          placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="汇报对象">
          <el-input v-model="TrobuleDialogForm.person"></el-input>
        </el-form-item>
        <el-form-item label="是否完成">
          <el-select v-model="TrobuleDialogForm.status">
            <el-option value="是"
                       label="是"></el-option>
            <el-option value="否"
                       label="否"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="TrobuleDialogVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="submitTrobuleNode">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="确认删除"
               :visible.sync="deleteDialogVisible"
               width="400px"
               :before-close="handleClose">
      是否要删除该条信息
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="deleteDialogVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="deleteData">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      systemID: '',
      systemList: [{ name: '上海', id: 1 }, { name: '北京', id: 2 }, { name: '深圳', id: 2 }],
      editStatus: true,
      editStatus2: true,
      addPersonDialogTitle: '',
      baseData: {
        RTO: '张江-》福州 ：38分52秒；张江-》福州 ：38分52秒；张江-》福州 ：38分52秒；张江-》福州 ：38分52秒；',
        date: '20200924 02:02',
        safeLv: 4,
        compare: '通过',
        describe: '核心系统发生异常告警，影响对外服务',
        user: '外行客户',
        address: '张江机房；外高桥机房；马江机房',
        rto1: '30分钟',
        rpo1: '30分钟',
        trobule: '异地灾备系统对外服务，业务验证进行中'
      },
      editBaseData: {},
      baseData2: {
        RTO: '张江-》福州 ：38分52秒；张江-》福州 ：38分52秒；张江-》福州 ：38分52秒；张江-》福州 ：38分52秒；',
        date: '20200924 02:02',
        safeLv: 4,
        compare: '通过',
        describe: '核心系统发生异常告警，影响对外服务',
        user: '外行客户',
        address: '张江机房；外高桥机房；马江机房',
        rto1: '30分钟',
        rpo1: '30分钟',
        trobule: '异地灾备系统对外服务，业务验证进行中'
      },
      editBaseData2: {},
      activeName: '1',
      activeName2: '5',
      simple2DialogVisible: false,
      simple2Data1: [{ person: '程书翰', status: '是', edit: true }, { person: '程书翰', status: '是', edit: true }, { person: '程书翰', status: '是', edit: true }, { person: '程书翰', status: '是', edit: true }, { person: '程书翰', status: '是', edit: true }, { person: '程书翰', status: '是', edit: true }, { person: '程书翰', status: '是', edit: true }, { person: '程书翰', status: '是', edit: true }],
      areaSimple2Data1: [{ person: '曾潘', status: '是', edit: true }, { person: '曾潘', status: '是', edit: true }, { person: '曾潘', status: '是', edit: true }, { person: '曾潘', status: '是', edit: true }, { person: '曾潘', status: '是', edit: true }, { person: '程书翰', status: '是', edit: true }, { person: '程书翰', status: '是', edit: true }, { person: '程书翰', status: '是', edit: true }],
      simple2Data2: [{ person: '程书翰', status: '是', edit: true }, { person: '程书翰', status: '是', edit: true }, { person: '程书翰', status: '是', edit: true }, { person: '程书翰', status: '是', edit: true }, { person: '程书翰', status: '是', edit: true }, { person: '程书翰', status: '是', edit: true }, { person: '程书翰', status: '是', edit: true }, { person: '程书翰', status: '是', edit: true }],
      areaSimple2Data2: [{ person: '李营', status: '是', edit: true }, { person: '李营', status: '是', edit: true }, { person: '李营', status: '是', edit: true }, { person: '李营', status: '是', edit: true }, { person: '程书翰', status: '是', edit: true }, { person: '程书翰', status: '是', edit: true }, { person: '程书翰', status: '是', edit: true }, { person: '程书翰', status: '是', edit: true }],
      simple2Data3: [{ person: '程书翰', status: '是', edit: true }, { person: '程书翰', status: '是', edit: true }, { person: '程书翰', status: '是', edit: true }, { person: '程书翰', status: '是', edit: true }, { person: '程书翰', status: '是', edit: true }, { person: '程书翰', status: '是', edit: true }, { person: '程书翰', status: '是', edit: true }, { person: '程书翰', status: '是', edit: true }],
      simple2Data4: [{ person: '程书翰', status: '是', edit: true }, { person: '程书翰', status: '是', edit: true }, { person: '程书翰', status: '是', edit: true }, { person: '程书翰', status: '是', edit: true }, { person: '程书翰', status: '是', edit: true }, { person: '程书翰', status: '是', edit: true }, { person: '程书翰', status: '是', edit: true }, { person: '程书翰', status: '是', edit: true }],
      simple2Data1Change: [],
      areaSimple2Data1Change: [],
      simple2Data2Change: [],
      areaSimple2Data2Change: [],
      simple2Data3Change: [],
      simple2Data4Change: [],
      simple2DialogForm: {},
      simple3TimeData: [{ conid: '故障发送', config: '20200819 12:23', edit: true }, { conid: '故障发生2', config: '20200819 12:23', edit: true }, { conid: '故障发生3', config: '20200819 12:40', edit: true }],
      simple3TimeDataChange: [],
      areaSystemData: [{ key_system_name_ch: '上海外联区网络', id: '12', edit: true }, { key_system_name_ch: '上海外联区网络', id: '12', edit: true }, { key_system_name_ch: '上海外联区网络', id: '12', edit: true }],
      areaSystemDataChange: [],
      areaIntList: [{ device_name_ch: 'SCW区汇聚交换机1', device_name_en: 'CIB7-SC95SW-3A0601', ip_address: '192.169.254.1', id: 10, edit: true }, { device_name_ch: 'SCW区汇聚交换机1', device_name_en: 'CIB7-SC95SW-3A0601', ip_address: '192.169.254.1', id: 10, edit: true }],
      areaIntListChange: [],
      areaLineData: [{ line_name_ch: 'SCW区汇聚交换机1', line_name_en: '1234123sdfasd', id: 10, edit: true }, { line_name_ch: 'SCW区汇聚交换机1', line_name_en: '1234123sdfasd', id: 10, edit: true }],
      areaLineDataChange: [],
      areaBearData: [{ key_system_name_ch: '福州网页', id: 10, edit: true }, { key_system_name_ch: '福州网页', id: 10, edit: true }],
      areaBearDataChange: [],
      timeDialogVisible: false,
      timeDialogForm: {},
      simple4TrobuleData: [{ name: '模拟发送', time: '20200819 12:23', edit: true, status: '是' },
      { name: '模拟发送', time: '20200819 12:23', edit: true, status: '是' },
      { name: '模拟123发送', time: '20200819 12:23', edit: true, status: '是' },
      { name: '模拟发送2', time: '20200819 12:23', edit: true, status: '是' },
      { name: '模拟123发送', time: '20200819 12:23', edit: true, status: '是' },
      { name: '模拟44发送', time: '20200819 12:23', edit: true, status: '是' },
      { name: '模拟44发送', time: '20200819 12:23', edit: true, status: '是' }],
      simple4TrobuleDataChange: [],
      TrobuleDialogVisible: false,
      TrobuleDialogForm: {},
      intDialogForm: {},
      sysDialogForm: {},
      lineDialogForm: {},
      bearDialogForm: {},
      sysDialogVisible: false,
      lineDialogVisible: false,
      deleteDialogVisible: false,
      intDialogVisible: false,
      bearDialogVisible: false,
      sysType: 2,

    }
  },
  mounted () {
    this.$store.dispatch('changePageShow', { pageShow: false })
  },
  methods: {
    systemSubmit () {
      console.log(this.systemID)
    },
    submitBasicData () {
      this.baseData = this.editBaseData
      this.editStatus = !this.editStatus
    },
    submitBasicData2 () {
      this.baseData2 = this.editBaseData2
      this.editStatus2 = !this.editStatus2
    },
    backgroundChange ({ row, rowIndex }) {
      if (rowIndex % 2 == 1) {
        return { background: '#EEF5FF' }
      }
    },
    addPerson (type) {
      if (this.activeName == '1') {
        this.addPersonDialogTitle = '系统负责人'
      } else if (this.activeName == '2') {
        this.addPersonDialogTitle = '研发人员'
      } else if (this.activeName == '3') {
        this.addPersonDialogTitle = '业务人员'
      } else if (this.activeName == '4') {
        this.addPersonDialogTitle = '其他支持人员'
      }
      this.simple2DialogVisible = true
    },
    addPerson2 (type) {
      console.log(this.activeName2)
      if (this.activeName2 == '5') {
        this.addPersonDialogTitle = '网络港'
      } else if (this.activeName2 == '6') {
        this.addPersonDialogTitle = '其他支持人员'
      }
      this.simple2DialogVisible = true
    },
    editPerson (index, type) {
      if (type == 1) {
        this.simple2Data1Change = this.simple2Data1
        this.simple2Data1[index].edit = false
      } else if (type == 2) {
        this.simple2Data2Change = this.simple2Data2
        this.simple2Data2[index].edit = false
      } else if (type == 3) {
        this.simple2Data3Change = this.simple2Data3
        this.simple2Data3Change[index].edit = false
      } else if (type == 4) {
        this.simple2Data4Change = this.simple2Data4
        this.simple2Data4[index].edit = false
      } else if (type == 5) {
        console.log(1234)
        this.areaSimple2Data1Change = this.areaSimple2Data1
        this.areaSimple2Data1[index].edit = false
      } else if (type == 6) {
        this.areaSimple2Data2Change = this.areaSimple2Data2
        this.areaSimple2Data2[index].edit = false
      }
    },

    submitSimple2Change (index, type) {
      if (type == 1) {
        this.simple2Data1[index] = this.simple2Data1Change[index]
        this.simple2Data1[index].edit = true
      } else if (type == 2) {
        this.simple2Data2[index] = this.simple2Data2Change[index]
        this.simple2Data2[index].edit = true
      } else if (type == 3) {
        this.simple2Data3[index] = this.simple2Data3Change[index]
        this.simple2Data3[index].edit = true
      } else if (type == 4) {
        this.simple2Data4[index] = this.simple2Data4Change[index]
        this.simple2Data4[index].edit = true
      } else if (type == 5) {
        this.areaSimple2Data1[index] = this.areaSimple2Data1Change[index]
        this.areaSimple2Data1[index].edit = true
      } else if (type == 6) {
        this.areaSimple2Data2[index] = this.areaSimple2Data2Change[index]
        this.areaSimple2Data2[index].edit = true
      }
    },
    editTimeNode (index) {
      this.simple3TimeDataChange = this.simple3TimeData
      this.simple3TimeData[index].edit = false
    },
    submitSimple3Change (index) {
      this.simple3TimeData[index] = this.simple3TimeDataChange[index]
      this.simple3TimeData[index].edit = true
    },
    editIntNode (index) {
      this.areaIntListChange = this.areaIntList
      this.areaIntList[index].edit = false
    },
    editBearNode (index) {
      this.areaBearDataChange = this.areaBearData
      this.areaBearData[index].edit = false
    },
    submitBearChange (index) {
      this.areaBearData[index] = this.areaBearDataChange[index]
      this.areaBearData[index].edit = true
    },
    submitIntChange (index) {
      this.areaIntList[index] = this.areaIntListChange[index]
      this.areaIntList[index].edit = true
    },
    timeNodeAdd () {
      this.timeDialogVisible = true
    },
    intNodeAdd () {
      this.intDialogVisible = true
    },
    sysNodeAdd () {
      this.sysDialogVisible = true
    },
    lineNodeAdd () {
      this.lineDialogVisible = true
    },
    bearNodeAdd () {
      this.bearDialogVisible = true
    },

    submitTimeNode () {
      this.timeDialogVisible = false
    },
    submitIntNode () {
      this.intDialogVisible = false
    },
    submitSysNode () {
      this.sysDialogVisible = false
    },
    submitLineNode () {
      this.lineDialogVisible = false
    },
    submitBearNode () {
      this.bearDialogVisible = false
    },
    trobuleNodeAdd () {
      this.TrobuleDialogVisible = false
    },
    editTrobuleNode (index) {
      this.simple4TrobuleDataChange = this.simple4TrobuleData
      this.simple4TrobuleData[index].edit = false
    },
    submitSimple4Change (index) {
      this.simple4TrobuleData[index] = this.simple4TrobuleDataChange[index]
      this.simple4TrobuleData[index].edit = true
    },
    submitTrobuleNode () {
      console.log(this.TrobuleDialogForm)
      this.TrobuleDialogVisible = false
    },
    pageJump () {
      console.log('q4r')
    },
    deleteDialogShow (data, type) {
      console.log(data, type)
      this.deleteDialogVisible = true
    },
    deleteData () {
      console.log('删除')
      this.deleteDialogVisible = false
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    }
  }
}
</script>

<style lang="less">
.trobule-container {
  background: #f8f8f8;
  font-size: 16px;
  overflow: hidden;
  p {
    margin: 0;
    padding: 0;
  }
  .el-dialog__header {
    border-bottom: 1px solid #e2e6ee;
  }
  .system-box {
    width: 1124px;
    margin: 0 auto;
    margin-top: 20px;
  }
}
.inner-container {
  width: 1124px;
  margin: 20px auto;
  .simple-box {
    background: white;
    position: relative;
    border-radius: 3px;
    margin: 20px 0;
    box-shadow: 0px 2px 5px 0px rgba(113, 113, 113, 0.5);
    padding: 20px;
    box-sizing: border-box;
    .simple2-btn-box {
      position: absolute;
      top: 16px;
      right: 20px;
      z-index: 1000;
    }
    .simple3-btn-box {
      position: absolute;
      top: 16px;
      right: 20px;
      z-index: 1000;
    }
    .el-tabs__nav-wrap::after {
      background: none;
    }
    .title {
      font-size: 23px;
    }
    .basic-box {
      margin-top: 20px;
      border: 1px solid #e2e6ee;
      & > div {
        width: 50%;
        vertical-align: top;
      }
      div {
        display: inline-block;
        box-sizing: border-box;
      }
      .right {
        border-left: 1px solid #e2e6ee;
      }
      .line-box {
        min-height: 45px;
        line-height: 45px;
        border-bottom: 1px solid #e2e6ee;
        .name-box {
          width: 155px;
          color: #001034;
          text-align: right;
          background: #eef5ff;
          padding-right: 5px;
          border-right: 1px solid #e2e6ee;
          vertical-align: top;
        }
        .content-box {
          width: 385px;
          height: 45px;
          padding-left: 2px;
          padding-right: 2px;
          vertical-align: top;
          overflow: auto;
          .el-input__inner {
            border: 1px solid #147fe7;
          }
        }
      }
      .line-box:last-child {
        border: none;
      }
    }
  }
}
</style>