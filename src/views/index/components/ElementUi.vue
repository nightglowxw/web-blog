<template>
  <div class="container">
    <input @input="onInput" :value="localValue" />
    <span>{{ localValue }}</span>
    ------------
    <br>
    <br>
    <br>
    <br>
    <input type="color" />
    <p id="colorMe">点击选择颜色</p>
    <form method="post">
      <input type="range" name="range" min="0" max="100" step="1" value="" />
    </form>

    <form action="" method="get">
      <label for="boyfriend">请选择您心仪的男朋友</label>
      <input list="boyfriends" name="boyfriend" id="boyfriend" />
      <datalist id="boyfriends">
        <option value="张清博"></option>
        <option value="彭于晏"></option>
        <option value="梁朝伟"></option>
        <option value="胡歌"></option>
        <option value="吴彦祖"></option>
      </datalist>

      <input type="submit" />
    </form>
    <form oninput="x.value=parseInt(a.value) * parseInt(b.value)">
      <input type="number" id="a" value="0" />
      * <input type="number" id="b" value="0" /> =
      <output name="x" for="a b"></output>
    </form>
    <p>普通文本 <mark>突出显示的文本</mark></p>
    <ul class="content-editable" contenteditable="true">
      <li>1. 数据一</li>
      <li>2. 数据二</li>
      <li>3. 数据三</li>
    </ul>

    <details>
      <summary>Click Here to get the user details</summary>
      <table>
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>地址</th>
          <th>工作</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Rose</td>
          <td>北京</td>
          <td>Web前端</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jack</td>
          <td>上海</td>
          <td>产品测试</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Tom</td>
          <td>南京</td>
          <td>数据分析</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Jerry</td>
          <td>杭州</td>
          <td>网络安全</td>
        </tr>
      </table>
    </details>

    <el-button type="text">我是text按钮</el-button>
    <el-image style="width: 50px; height: 50px"></el-image>
    <el-form
      :label-position="labelPosition"
      label-width="80px"
      :model="formLabelAlign"
      label-suffix="+"
      :inline="true"
    >
      <el-form-item label="名称">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-input v-model="formLabelAlign.region"></el-input>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input v-model="formLabelAlign.type"></el-input>
      </el-form-item>
    </el-form>
    <div>
      <span>头上一片晴天，心中一个想念</span>
      <el-divider content-position="left">少年包青天</el-divider>
      <span>饿了别叫妈, 叫饿了么</span>
      <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
      <span>为了无法计算的价值</span>
      <el-divider content-position="right">阿里云</el-divider>
    </div>
    <div class="block">
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :icon="activity.icon"
          :type="activity.type"
          :color="activity.color"
          :size="activity.size"
          :timestamp="activity.timestamp"
        >
          {{ activity.content }}
        </el-timeline-item>
      </el-timeline>
    </div>
    <div>
      <el-calendar :range="['2019-03-04', '2019-03-24']"> </el-calendar>
    </div>
    <div>
      <el-collapse accordion>
        <el-collapse-item>
          <template slot="title">
            一致性 Consistency<i class="header-icon el-icon-info"></i>
          </template>
          <div>
            与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
          </div>
          <div>
            在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
          </div>
        </el-collapse-item>
        <el-collapse-item title="反馈 Feedback">
          <div>
            控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
          </div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </el-collapse-item>
        <el-collapse-item title="效率 Efficiency">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>
            清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
          </div>
          <div>
            帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
          </div>
        </el-collapse-item>
        <el-collapse-item title="可控 Controllability">
          <div>
            用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
          </div>
          <div>
            结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div>
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3 class="medium">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div>
      <el-steps :active="1">
        <el-step title="步骤 1" icon="el-icon-edit"></el-step>
        <el-step title="步骤 2" icon="el-icon-upload"></el-step>
        <el-step title="步骤 3" icon="el-icon-picture"></el-step>
      </el-steps>
      <div style="height: 300px">
        <el-steps direction="vertical" :active="1">
          <el-step title="步骤 1"></el-step>
          <el-step title="步骤 2"></el-step>
          <el-step
            title="步骤 3"
            description="这是一段很长很长很长的描述性文字"
          ></el-step>
        </el-steps>
      </div>
    </div>
    <div>
      <el-descriptions title="自定义样式列表" :column="3" border>
        <el-descriptions-item
          label="用户名"
          label-class-name="my-label"
          content-class-name="my-content"
          >kooriookami</el-descriptions-item
        >
        <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
        <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
        <el-descriptions-item label="备注">
          <el-tag size="small">学校</el-tag>
        </el-descriptions-item>
        <el-descriptions-item
          label="联系地址"
          :contentStyle="{ 'text-align': 'right' }"
          >江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item
        >
      </el-descriptions>
    </div>
    <div>
      <el-skeleton style="width: 240px">
        <template slot="template">
          <el-skeleton-item
            variant="image"
            style="width: 240px; height: 240px"
          />
          <div style="padding: 14px">
            <el-skeleton-item variant="p" style="width: 50%" />
            <div
              style="
                display: flex;
                align-items: center;
                justify-items: space-between;
              "
            >
              <el-skeleton-item variant="text" style="margin-right: 16px" />
              <el-skeleton-item variant="text" style="width: 30%" />
            </div>
          </div>
        </template>
      </el-skeleton>
      <el-skeleton :rows="6" animated />
    </div>
    <div>
      <el-badge :value="12" class="item">
        <el-button size="small">评论</el-button>
      </el-badge>
      <el-badge :value="3" class="item">
        <el-button size="small">回复</el-button>
      </el-badge>
      <el-badge :value="1" class="item" type="primary">
        <el-button size="small">评论</el-button>
      </el-badge>
      <el-badge :value="2" class="item" type="warning">
        <el-button size="small">回复</el-button>
      </el-badge>

      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item class="clearfix">
            评论
            <el-badge class="mark" :value="12" />
          </el-dropdown-item>
          <el-dropdown-item class="clearfix">
            回复
            <el-badge class="mark" :value="3" />
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <!-- <div>
      <el-row>
        <el-col
          :span="8"
          v-for="(o, index) in 2"
          :key="o"
          :offset="index > 0 ? 2 : 0"
        >
          <el-card :body-style="{ padding: '0px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
            <div style="padding: 14px">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div> -->
  </div>
</template>
<script>
export default {
  name: 'ElementUi',
  data() {
    return {
      localValue: '',
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      },
      currentDate: new Date(),
      activities: [
        {
          content: '支持使用图标',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-more',
          color: '#409eff'
        },
        {
          content: '支持自定义颜色',
          timestamp: '2018-04-03 20:46',
          color: '#0bbd87'
        },
        {
          content: '支持自定义尺寸',
          timestamp: '2018-04-03 20:46',
          size: 'large',
          color: '#e26237'
        },
        {
          content: '默认样式的节点',
          timestamp: '2018-04-03 20:46',
          color: '#cf4444'
        }
      ]
    }
  },
  created() {
    this.sessionStorage()
  },
  methods: {
    onInput(v) {
      this.localValue = v.target.value
      console.log(this.localValue)
    },
    sessionStorage() {
      console.log('5555')
      sessionStorage.setItem('name', '你好呀')
      sessionStorage.setItem('name2', 'uuu')
      // sessionStorage.setItem('name')
      // sessionStorage.clear()
    }
  }
}
</script>
<style scoped lang="less">
.container {
  padding: 20px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}

.clearfix:after {
  clear: both;
}

.my-label {
  background: #e1f3d8;
}

.my-content {
  background: #fde2e2;
}
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
