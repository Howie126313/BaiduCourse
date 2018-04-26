<template>
  <div id="albumList">
      <el-popover
      v-model="popShow"
      placement="bottom-start"
      :width="popoverWidth"
      visible-arrow
      trigger="click">
        <el-button slot="reference">已加入专辑</el-button>
        <div class="content">
          <div class="words f13 p5">已加入专辑</div>
          <div 
            v-for="(item, index) in data.list" 
            :key="index" 
            class="item f13 p5 tc">
            {{item.tag}}
          </div>
        </div>
      </el-popover>
  </div>
</template>

<script>
export default {
  props: {
    popoverWidth: {
      default: 50
    },
    id: {
      required: true
    },
    data: {
      required: true
    }
  },
  data () {
    return {
      popShow: false // 弹窗显示
    //   data: ''
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      console.log(this.data)
    //   this.getData()
    },
    // getData () {
    //   let url = this.$api.workTagByProduct
    //   let obj = {
    //     product_id: this.id
    //   }
    //   this.$post(url, obj).then(res => {
    //     console.log(res.data)
    //     // debugger
    //     this.data = res.data
    //     // res.data.list.length === 0 ? this.noData = true : this.noData = false
    //   }).catch(err => {
    //     console.warn('获取项目已加入专辑出错', err)
    //   })
    // },
    showPop () {
      this.popShow = true
    }
  }
}
</script>

<style scoped>
  #albumList .words {
    /* color: #A6A7A8; */
    color: red;
  }
</style>
