import Mock from 'mockjs'
import Info from './info.js'
Mock.mock('http://127.0.0.1/main.php?cid=1', 'post', () => {
  return Info.page1
})
