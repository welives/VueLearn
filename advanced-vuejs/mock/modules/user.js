import { Random } from 'mockjs'
// 这里mock三条数据,模拟数据库里的数据
const userData = {
  users: [
    {
      id: 1,
      username: 'admin',
      password: 'admin',
      avatar: Random.dataImage('60x60'),
      name: Random.cname(),
      age: Random.integer(10, 40),
      email: Random.email()
    },
    {
      id: 2,
      username: 'editor',
      password: '123456',
      avatar: Random.dataImage('60x60'),
      name: Random.cname(),
      age: Random.integer(10, 40),
      email: Random.email()
    },
    {
      id: 3,
      username: 'guest01',
      password: '123456',
      avatar: Random.dataImage('60x60'),
      name: Random.cname(),
      age: Random.integer(10, 40),
      email: Random.email()
    }
  ]
}
export default {
  // 在这里模拟后端处理登陆验证的逻辑
  login(request) {
    const { username, password } = JSON.parse(request.body)
    let data = false
    userData.users.some((v) => {
      // 如果post过来的数据和上面三条mock数据中的相匹配,则验证通过
      if (v.username === username && v.password === password) {
        data = v
      }
    })
    if (data) {
      // 这里进行数据组装,返回给axios的response
      return { code: 20000, msg: '登录成功', data, token: Random.guid() }
    }
    return { code: 20001, msg: '用户名或密码错误' }
  },
  logout() {
    return { code: 20000, msg: '退出成功' }
  }
}
