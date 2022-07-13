<template>
  <div class="container">
    <div class="timeline">
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
    <el-divider content-position="center">「更新中」</el-divider>
    <el-collapse accordion>
      <el-collapse-item>
        <template slot="title"> Css </template>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card class="box-card">
          <el-collapse accordion class="item2">
            <el-collapse-item title="flex">
              <div>
                与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
              </div>
              <div>
                在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-card>
      </el-collapse-item>
      <el-collapse-item title="Js">
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
      </el-collapse-item>
      <el-collapse-item title="Vue">
        <div>vue</div>
        <div>
          清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
        </div>
        <div>
          帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
        </div>
      </el-collapse-item>
      <el-collapse-item title="微信小程序">
        <div>微信小程序</div>
        <div>
          结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
        </div>
      </el-collapse-item>
      <el-collapse-item title="代码练习">
        <!-- <el-page-header @back="goBack" content="详情页面"> </el-page-header> -->
        <el-card>
          <el-collapse>
            <!-- title -->
            <el-collapse-item title="label 两种使用方式">
              <span
                >label 有两种使用方式，一是嵌套，二是通过 id
                绑定。它可以用于关联绑定表单组件， 浏览器会将用户对 label
                关联范围的焦点转移到绑定的表单组件上。</span
              >
              <el-card>
                <div>
                  <div>点我不会触发焦点</div>
                  <input type="text" />
                </div>
                <div><label for="aaa">方法一：点我触发焦点</label></div>
                <div>
                  <input type="text" id="aaa" />
                </div>
                <label>
                  <div>方法二：点我触发焦点</div>
                  <input type="text" />
                </label>
                <div></div>
              </el-card>
            </el-collapse-item>
          </el-collapse>
        </el-card>
      </el-collapse-item>
      <el-collapse-item title="其他">
        <div class="two">
          <div class="title"></div>
          <div class="content"></div>
        </div>
        <div class="two">
          <div class="title"></div>
          <div class="content"></div>
        </div>
        <div class="two">
          <div class="title"></div>
          <div class="content"></div>
        </div>
        <div class="two">
          <div class="title">
            <a href="/">2、浅拷贝的实现方式</a>
          </div>
          <div class="content">
            <h3>Object.assign()</h3>
            <div class="box"></div>
            <el-button @click="fnTwo">浅拷贝</el-button>
          </div>
        </div>
        <div class="one">
          <div class="title">
            <a href=""> 1、表单输入绑定 </a>
          </div>
          <div class="content">
            <h3>文本</h3>
            <input v-model.lazy="message" placeholder="edit me" />
            <span>.lazy</span>
            <br />
            <input v-model.number="message" placeholder="edit me" />
            <span>.number</span>
            <br />
            <input v-model.trim="message" placeholder="edit me" />
            <span>.trim</span>
            <p>Message is: {{ message }}</p>
            <br />
            <h3>多行文本</h3>
            <span>Multiline message is:</span>
            <p style="white-space: pre-line">{{ message }}</p>
            <br />
            <textarea
              v-model="message"
              placeholder="add multiple lines"
            ></textarea>
            <br />
            <h3>复选框</h3>
            <input type="checkbox" id="checkbox" v-model="checked" />
            <label for="checkbox">{{ checked }}</label>
            <br />
            <br />
            <input
              type="checkbox"
              id="jack"
              value="Jack"
              v-model="checkedNames"
            />
            <label for="jack">Jack</label>
            <input
              type="checkbox"
              id="john"
              value="John"
              v-model="checkedNames"
            />
            <label for="john">John</label>
            <input
              type="checkbox"
              id="mike"
              value="Mike"
              v-model="checkedNames"
            />
            <label for="mike">Mike</label>
            <br />
            <span>Checked names: {{ checkedNames }}</span>
            <br />
            <h3>单选按钮</h3>
            <div id="example-4">
              <input type="radio" id="one" value="One" v-model="picked" />
              <label for="one">One</label>
              <br />
              <input type="radio" id="two" value="Two" v-model="picked" />
              <label for="two">Two</label>
              <br />
              <span>Picked: {{ picked }}</span>
            </div>
            <br />
            <h3>选择框</h3>
            <div id="example-5">
              <select v-model="selected">
                <option disabled value="">请选择</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>
              <span>Selected: {{ selected }}</span>
            </div>
            <br />
            <div id="example-6">
              <select v-model="selected" multiple style="width: 50px">
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>
              <br />
              <span>Selected: {{ selected }}</span>
            </div>
            <!-- <br />
            <select v-model="selected">
              <option v-for="option in options" v-bind:value="option.value">
                {{ option.text }}
              </option>
            </select>
            <span>Selected: {{ selected }}</span> -->
            <br />
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
export default {
  name: 'CodeView',
  data() {
    return {
      // timeline
      activities: [
        {
          content: '垂直居中对齐',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-more'
        },
        {
          content: 'vue生命周期',
          timestamp: '2018-04-03 20:46',
          color: '#0bbd87'
        },
        {
          content: ' promise',
          timestamp: '2018-04-03 20:46',
          size: 'large'
        },
        {
          content: '组件传参',
          timestamp: '2018-04-03 20:46'
        }
      ],
      // two
      obj1: {
        person: { name: 'kobe', age: 41 },
        sports: 'basketball',
        aaa: 'aaa'
      },
      // one
      // 的v-model value
      message: '',
      // 复选框
      checked: false,
      checkedNames: [],
      picked: '',
      selected: '',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ]
    }
  },
  methods: {
    fnTwo() {
      console.log('obj1', this.obj1)
      const obj2 = { ...this.obj1 }
      obj2.person.name = 'wade'
      obj2.sports = 'football'
      console.log('obj1', this.obj1)
      // console.log(this)
      // console.log('obj1', this.obj1)
      // var obj2 = Object.assign({}, this.obj1)
      // obj2.person.name = 'wade'
      // obj2.sports = 'football'
      // console.log('obj1', this.obj1)
    }
  }
}
</script>
<style scoped lang="less">
.container {
  position: relative;
  padding: 10px 0 0 15px;
  .timeline {
    left: -228px;
    top: 153px;
    position: absolute;
  }
  .title {
    margin: 5px;
  }
  .content {
    margin: 5px;
  }
}
a:hover {
  color: #fff;
  background-color: @mainColor;
}
.item2 {
  margin: 10px;
}
</style>
