<template>
  <div class="mt-3 d-flex align-items-center justify-content-center">
    <el-form
      v-if="!getToken"
      :model="loginForm"
      ref="loginForm"
      :rules="loginRules"
      label-width="80px"
      class="w-50"
    >
      <el-form-item label="用户名" prop="username">
        <el-input
          v-model="loginForm.username"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="loginForm.password"
          type="password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item class="text-center">
        <el-button
          type="primary"
          @click.native.prevent="login"
          :loading="loading"
          >{{ loading ? '登录中...' : '登录' }}</el-button
        >
        <el-button type="primary" @click.native.prevent="resetForm('loginForm')"
          >重填</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Mock',
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 4, message: '密码长度最少4位', trigger: 'blur' }
        ]
      },
      checked: true,
      loading: false
    }
  },
  computed: {
    ...mapGetters(['getToken'])
  },
  methods: {
    login() {
      this.$refs.loginForm.validate((valid) => {
        if (!valid) return
        this.loading = true
        // 套这一层异步执行是为了模拟真实登录
        setTimeout(() => {
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            this.loading = false
            this.$router.push({ name: 'index' })
            this.$parent.__initNavBar()
          })
        }, 500)
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped></style>
