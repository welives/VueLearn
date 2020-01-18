<template>
  <div class="mt-3">
    <z-form :form="form" :validate="validate">
      <z-form-item label="用户名" name="username">
        <input
          id="username"
          v-model="form.username"
          type="text"
          class="form-control"
          v-focus
        />
      </z-form-item>
      <z-form-item label="邮箱" name="email">
        <input
          id="email"
          v-model="form.email"
          type="text"
          class="form-control"
        />
      </z-form-item>
      <z-form-item>
        <button type="submit" class="btn btn-primary">提交</button>
      </z-form-item>
    </z-form>
  </div>
</template>

<script>
import zForm from './z-form.vue'
import zFormItem from './z-form-item.vue'
export default {
  name: 'formDemo',
  components: {
    zForm,
    zFormItem
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus()
      }
    }
  },
  data() {
    return {
      form: {
        username: '',
        email: ''
      },
      validate: [
        {
          name: 'username',
          validate: {
            required: {
              data: true,
              msg: '用户名不能为空'
            },
            rule: {
              data: 'username',
              msg: '用户名格式错误'
            }
          }
        },
        {
          name: 'email',
          validate: {
            required: {
              data: true,
              msg: '邮箱不能为空'
            },
            rule: {
              data: 'email',
              msg: '邮箱格式错误'
            }
          }
        }
      ]
    }
  }
}
</script>

<style scoped></style>
