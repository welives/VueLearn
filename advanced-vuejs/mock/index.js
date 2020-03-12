import Mock from 'mockjs'
import Info from './info.js'
Mock.mock('/api/test', 'get', () => {
  return Info.page1
})
