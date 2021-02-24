<template>
  <!-- 企业应用集成平台物理部署图_5 -->
  <div class="box">
    <div class="show-box"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  mounted () {
    let phoneDomList = {
      "name": "ebank", "line": "line_ebank",
      "style_list": [{ "height": "100px", "width": "36px" }, { "width": "120px", "height": "76px", "padding-right": "", "padding-left": "", "padding-bottom": "", "padding-top": "46px" }, { "width": "120px", "height": "76px", "padding-right": "", "padding-left": "64px" }, { "width": "120px", "height": "76px", "padding-right": "" }, { "width": "200px", "height": "16px", "padding-bottom": "" }, { "width": "104px", "height": "60px", "padding-bottom": "" }, { "width": "118px", "height": "60px", "padding-bottom": "" }, { "width": "138px", "height": "40px", "padding-bottom": "" }, { "width": "134px", "height": "56px", "padding-bottom": "" }, { "width": "96px", "height": "56px", "padding-bottom": "" }, { "width": "34px", "height": "144px", "padding-bottom": "" }],
      "children": [{ "name": "外部客户?福州", "text_top": "", "text_right": "", "status": "B", "type": "6", "left": "340.14", "top": "20.00", "style": 0 }, { "name": "域名解析服务?福州", "text_top": "", "text_right": "", "status": "B", "type": "6", "left": "413.00", "top": "20.00", "style": 0 }, { "name": "负载均衡设备?福州", "text_top": "", "text_right": "", "status": "B", "type": "6", "left": "538.08", "top": "42.00", "style": "1" }, { "name": "负载均衡设备?上海", "text_top": "", "text_right": "", "status": "B", "type": "6", "left": "1283.03", "top": "43.00", "style": "1" }, { "name": "web服务 (NGINX)?福州", "text_top": "", "text_right": "", "status": "B", "type": "5", "left": "719.91", "top": "44.00", "style": "2" }, { "name": "管理用户（内部机构）?上海", "text_top": "", "text_right": "", "status": "B", "type": "8", "left": "1077.62", "top": "43.89", "style": "3" }, { "name": "web服务 (NGINX) ?上海", "text_top": "", "text_right": "", "status": "B", "type": "5", "left": "1468.67", "top": "46.07", "style": "2" }, { "name": "数据中心互联网区域1(福州)?福州", "text_top": "", "text_right": "", "status": "B", "type": "1", "left": "863.87", "top": "69.00", "style": "4" }, { "name": "数据中心互联网区域1(上海)?上海", "text_top": "", "text_right": "", "status": "B", "type": "7", "left": "1630.87", "top": "69.00", "style": "4" }, { "name": "服务前置 （会话管理）?福州", "text_top": "", "text_right": "", "status": "B", "type": "9", "left": "335.00", "top": "178.00", "style": "5" }, { "name": "ANSIBLE?福州", "text_top": "", "text_right": "", "status": "B", "type": "9", "left": "452.00", "top": "178.00", "style": "5" }, { "name": "incoming?福州", "text_top": "", "text_right": "", "status": "B", "type": "9", "left": "569.00", "top": "178.00", "style": "5" }, { "name": "批处理服务?福州", "text_top": "", "text_right": "", "status": "B", "type": "9", "left": "686.00", "top": "178.00", "style": "5" }, { "name": "后台管理 nginx?福州", "text_top": "", "text_right": "", "status": "B", "type": "9", "left": "801.00", "top": "178.00", "style": "5" }, { "name": "后台数据库?福州", "text_top": "", "text_right": "", "status": "B", "type": "9", "left": "931.00", "top": "181.00", "style": "6" }, { "name": "服务前置 （会话管理）?上海", "text_top": "", "text_right": "", "status": "B", "type": "9", "left": "1088.00", "top": "177.00", "style": "5" }, { "name": "ANSIBLE ?上海", "text_top": "", "text_right": "", "status": "B", "type": "9", "left": "1205.00", "top": "177.00", "style": "5" }, { "name": "incoming 拷贝?上海", "text_top": "", "text_right": "", "status": "B", "type": "9", "left": "1322.00", "top": "177.00", "style": "5" }, { "name": "批处理服务?上海", "text_top": "", "text_right": "", "status": "B", "type": "9", "left": 1439, "top": 177, "style": "5" }, { "name": "后台管理 nginx?上海", "text_top": "", "text_right": "", "status": "B", "type": "9", "left": "1556.00", "top": "177.00", "style": "5" }, { "name": "后台数据库?上海", "text_top": "", "text_right": "", "status": "B", "type": "9", "left": "1683.00", "top": "177.00", "style": "6" }, { "name": "redis?福州", "text_top": "", "text_right": "", "status": "B", "type": "8", "left": "331.00", "top": "255.00", "style": "7" }, { "name": "redis?上海", "text_top": "", "text_right": "", "status": "B", "type": "8", "left": "1084.00", "top": "255.00", "style": "7" }, { "name": "zookeeper集群?福州", "text_top": "", "text_right": "", "status": "B", "type": "8", "left": "913.00", "top": "250.00", "style": "7" }, { "name": "zookeeper集群?上海", "text_top": "", "text_right": "", "status": "B", "type": "8", "left": "1666.00", "top": "250.00", "style": "7" }, { "name": "solr搜索服务 SOLR CLOUD?福州", "text_top": "", "text_right": "", "status": "B", "type": "9", "left": "349.00", "top": "348.00", "style": "8" }, { "name": "数据库?福州", "text_top": "客户基础 ", "text_right": "", "status": "B", "type": "9", "left": "360.00", "top": "443.00", "style": "6" }, { "name": "数据库?上海", "text_top": "客户基础 ", "text_right": "", "status": "B", "type": "9", "left": "1115.00", "top": "444.00", "style": "6" }, { "name": "solr搜索服务 SOLR CLOUD?上海", "text_top": "", "text_right": "", "status": "B", "type": "9", "left": "1101.00", "top": "348.00", "style": "8" }, { "name": "缴费服务?福州", "text_top": "", "text_right": "", "status": "B", "type": "9", "left": "517.00", "top": "452.00", "style": "9" }, { "name": "信用卡服务?福州", "text_top": "", "text_right": "", "status": "B", "type": "9", "left": "621.00", "top": "452.00", "style": "9" }, { "name": " 交易服务?福州", "text_top": "核心", "text_right": "", "status": "B", "type": "9", "left": "725.00", "top": "452.00", "style": "9" }, { "name": "缴费服务?上海", "text_top": "", "text_right": "", "status": "B", "type": "9", "left": "1270.00", "top": "452.00", "style": "9" }, { "name": "投资服务?福州", "text_top": "理财 ", "text_right": "", "status": "B", "type": "9", "left": "516.00", "top": "363.00", "style": "9" }, { "name": "投资服务?上海", "text_top": "理财 ", "text_right": "", "status": "B", "type": "9", "left": "1269.00", "top": "363.00", "style": "9" }, { "name": "汇款服务?福州", "text_top": "转账 ", "text_right": "", "status": "B", "type": "9", "left": "619.00", "top": "364.00", "style": "9" }, { "name": "查询服务?福州", "text_top": "", "text_right": "", "status": "B", "type": "9", "left": "724.00", "top": "363.00", "style": "9" }, { "name": "汇款服务?上海", "text_top": "转账 ", "text_right": "", "status": "B", "type": "9", "left": 1373, "top": 363, "style": "9" }, { "name": "查询服务?上海", "text_top": "", "text_right": "", "status": "B", "type": "9", "left": "1475.00", "top": "363.00", "style": "9" }, { "name": "信用卡服务?上海", "text_top": "", "text_right": "", "status": "B", "type": "9", "left": 1374, "top": 452, "style": "9" }, { "name": " 交易服务?上海", "text_top": "核心", "text_right": "", "status": "B", "type": "9", "left": 1478, "top": 452, "style": "9" }, { "name": "兴币应用服务?福州", "text_top": "", "text_right": "", "status": "B", "type": "10", "left": "832.00", "top": "363.00", "style": "10" }, { "name": "兴币应用服务?上海", "text_top": "", "text_right": "", "status": "B", "type": "10", "left": "1584.00", "top": "363.00", "style": "10" }, { "name": "服务注册中心?福州", "text_top": "", "text_right": "", "status": "B", "type": "9", "left": "931.00", "top": "317.00", "style": "6" }, { "name": "配置中心?福州", "text_top": "", "text_right": "", "status": "B", "type": "9", "left": "931.00", "top": "384.00", "style": "6" }, { "name": "服务管理中心?福州", "text_top": "", "text_right": "", "status": "B", "type": "9", "left": "930.00", "top": "449.00", "style": "6" }, { "name": "数据库?福州", "text_top": "客户基础 ", "text_right": "", "status": "B", "type": "9", "left": "346.00", "top": "561.00", "style": "9" }, { "name": "数据库?福州", "text_top": "业务 ", "text_right": "", "status": "B", "type": "9", "left": "457.00", "top": "562.00", "style": "9" }, { "name": "数据库?福州", "text_top": "历史 ", "text_right": "", "status": "B", "type": "9", "left": "569.00", "top": "562.00", "style": "9" }, { "name": " 数据库?福州", "text_top": "积分", "text_right": "", "status": "B", "type": "9", "left": "681.00", "top": "562.00", "style": "9" }, { "name": "nas存储?福州", "text_top": "", "text_right": "", "status": "B", "type": "9", "left": "793.00", "top": "562.00", "style": "9" }, { "name": "日志管理中心?福州", "text_top": "", "text_right": "", "status": "B", "type": "9", "left": "931.00", "top": "557.00", "style": "6" }, { "name": "日志查看中心?福州", "text_top": "", "text_right": "", "status": "B", "type": "9", "left": "931.00", "top": "628.00", "style": "6" }, { "name": "统一存储?福州", "text_top": "", "text_right": "", "status": "B", "type": "8", "left": "432.00", "top": "656.00", "style": "7" }, { "name": "数据中心生产区域2(福州)?福州", "text_top": "", "text_right": "", "status": "B", "type": "1", "left": "689.87", "top": "663.00", "style": "4" }, { "name": "服务注册中心?上海", "text_top": "", "text_right": "", "status": "B", "type": "9", "left": "1684.00", "top": "317.00", "style": "6" }, { "name": "配置中心?上海", "text_top": "", "text_right": "", "status": "B", "type": "9", "left": "1684.00", "top": "383.00", "style": "6" }, { "name": "服务管理中心?上海", "text_top": "", "text_right": "", "status": "B", "type": "9", "left": "1684.00", "top": "449.00", "style": "6" }, { "name": "日志管理中心?上海", "text_top": "", "text_right": "", "status": "B", "type": "9", "left": "1683.00", "top": "557.00", "style": "6" }, { "name": "日志查看中心?上海", "text_top": "", "text_right": "", "status": "B", "type": "9", "left": "1684.00", "top": "628.00", "style": "6" }, { "name": "61?上海", "text_top": "", "text_right": "", "status": "B", "type": "9", "left": 1546, "top": 562, "style": "9" }, { "name": "数据库?上海", "text_top": "业务", "text_right": "", "status": "B", "type": "9", "left": 1210, "top": 562, "style": "9" }, { "name": "数据库?上海", "text_top": "客户基础 ", "text_right": "", "status": "B", "type": "9", "left": "1098.00", "top": "562.00", "style": "9" }, { "name": "数据库?上海", "text_top": "历式", "text_right": "", "status": "B", "type": "9", "left": "1322.00", "top": "562.00", "style": "9" }, { "name": "数据库?上海", "text_top": "积分", "text_right": "", "status": "B", "type": "9", "left": "1434.00", "top": "562.00", "style": "9" }, { "name": "nas存储?上海", "text_top": "", "text_right": "", "status": "B", "type": "9", "left": "1546.00", "top": "562.00", "style": "9" }, { "name": "统一存储?上海", "text_top": "", "text_right": "", "status": "B", "type": "8", "left": "1185.00", "top": "656.00", "style": "7" }, { "name": "数据中心生产区域2(上海)?上海", "text_top": "", "text_right": "", "status": "B", "type": "1", "left": "1442.87", "top": "663.00", "style": "4" }]
    }
    console.log(phoneDomList.style_list)
    let domStr = `<div name="ebank" class="tuopu_paper"><img src="` + require(`./img/${phoneDomList.line}.png`) + `" alt="" class="tuopu_line">`
    console.log(phoneDomList.children)
    phoneDomList.children.forEach((item) => {

      domStr += `<div name="` + item.name + `"  class="name_box ` + item.status + '_' + item.type + ` outline_none" style="left: ` + item.left + `px; top: ` + item.top + `px; background-image: url(` + require('./img/' + item.status + item.type + '.png') + `);`;
      for (var property in phoneDomList.style_list[item.style]) {
        console.log(phoneDomList.style_list[item.style][property])
        domStr += property + `:` + phoneDomList.style_list[item.style][property] + `;`
      }
      domStr += ` ">` + (item.text_top ? (`<div class="text_top">` + item.text_top + ` </div>`) : '') + (item.text_right ? (`<div class="text_right">` + item.text_right + ` </div>`) : '') + `<div> ` + this.removeWhy(item.name) + ` </div></div>`
    })
    domStr += `</div>`
    $('.show-box').html(domStr)
    let b = {
      '192.166.130.20': 'W',
      '192.166.130.21': 'W',
      '192.166.130.22': 'W',
      '192.166.130.23': 'W',
      '192.166.130.24': 'W',
      '192.166.130.25': 'W',
      '192.166.130.26': 'W',
      '192.166.130.27': 'W',
      '192.166.130.28': 'W',
      '192.166.130.29': 'W',
      '192.166.130.30': 'W',
      '192.166.130.31': 'W',
      '192.166.130.32': 'W',
      '192.166.130.16': 'W',
      '192.166.130.17': 'W',
      '192.166.130.18': 'W',
      '192.166.130.19': 'W',
      '192.166.130.37': 'E',
      '192.166.130.38': 'W',
    }
    this.dataToArrayPhone(b)
    this.fullScreen()
    window.onresize = () => {
      this.fullScreen()
    }
  },
  methods: {
    removeWhy (val) {
      if (!val) return "";

      return String(val).split("?")[0];
    },
    dataToArrayPhone (data) {
      let arr2 = document.getElementsByClassName('statusChange')
      for (let i = 0; i < arr2.length; i++) {
        if (data[arr2[i].dataset.name] == 'N') {
        }
        else if (data[arr2[i].dataset.name] == 'W') {
          arr2[i].classList.add('bg1-warning')

        } else if (data[arr2[i].dataset.name] == 'E') {
          arr2[i].classList.add('bg1-error')
        }
      }
    },
    fullScreen () {
      $('.box').css('transform', `scale(${document.documentElement.clientWidth / 3840},${document.documentElement.clientHeight / 1440})`)
    },

  }
}
</script>
<style lang="less" >
.box {
  text-align: left;
  transform-origin: 0 0;
  width: 3840px;
  height: 1440px;
  transform-origin: 0 0;
}
.show-box {
  width: 2150px;
  height: 770px;
  position: relative;
}
.check-box {
  display: flex;
}
.check-box span {
  height: 75px;
  line-height: 75px;
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
</style>