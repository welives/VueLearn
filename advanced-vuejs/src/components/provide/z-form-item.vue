<template>
  <div class="form-group">
    <label :for="name">{{ label }}</label>
    <slot></slot>
    <div :class="status === 1 ? 'valid-feedback' : 'invalid-feedback'">
      {{ msg }}
    </div>
  </div>
</template>

<script>
let rules = {
  username: /^[a-zA-Z0-9_-]{4,16}$/,
  email: /^([a-zA-Z0-9_\-\.])+\@([a-zA-Z0-9_\-\.])+\.([a-zA-Z]{2,4})$/
}
export default {
  name: 'ZFormItem',
  props: ['label', 'name'],
  // 接收父组件注入的属性
  inject: ['form', 'validate'],
  // 页面渲染完成后
  data() {
    return {
      status: 0, // 0失败,1成功
      msg: '验证失败',
      valis: {},
      elm: false
    }
  },
  mounted() {
    // 拿到插槽对应的输入框
    let el = this.$slots.default[0]
    if (!el) return
    this.elm = el.elm

    // 初始化验证规则
    this.validate.forEach((v) => {
      if (v.name === this.name) {
        this.valis = v.validate
      }
    })

    // 监听字段变化
    this.$watch(`form.${this.name}`, (newValue) => {
      // 验证数据是否合法
      // 1.验证是否必填
      if (this.valis.required.data) {
        if (newValue === '') {
          // 给当前的element添加一个class
          this.check('fail', this.valis.required.msg)
          return
        }
      }
      // 2.验证其他规则
      if (this.valis.rule && this.valis.rule.data) {
        let currentRule = rules[this.valis.rule.data]
          ? rules[this.valis.rule.data]
          : this.valis.rule.data
        if (!currentRule.test(newValue)) {
          return this.check('fail', this.valis.rule.msg)
        }
      }
      // 成功的提示
      this.check('success', '验证通过')
    })
  },
  methods: {
    check(flag, msg) {
      let status = flag === 'success'
      let obj = {
        status: status ? 1 : 0,
        msg: msg,
        before: status ? 'is-invalid' : 'is-valid',
        after: status ? 'is-valid' : 'is-invalid'
      }
      this.status = obj.status
      this.msg = obj.msg
      if (this.elm.className.indexOf(obj.after) !== -1) return
      if (this.elm.className.indexOf(obj.before) !== -1) {
        return (this.elm.className = this.elm.className.replace(
          obj.before,
          obj.after
        ))
      }
      this.elm.className += ` ${obj.after}`
    }
  }
}
</script>

<style scoped></style>
