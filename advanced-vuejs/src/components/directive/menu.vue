<template>
  <div class="mt-3">
    <ul class="list-group">
      <li
        v-for="(item, index) in list"
        :key="index"
        v-menu="item.menu"
        class="list-group-item"
      >
        {{ item.name }}
      </li>
    </ul>
    <div v-menu="menu">
      <img
        src="https://edu-image.nosdn.127.net/3c432149e7754b43b5d2d8f3e9e8224e.jpg"
        alt=""
        class="w-100"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubMenu',
  directives: {
    menu: {
      inserted(el, binding) {
        // 监听鼠标右键
        el.addEventListener('contextmenu', (e) => {
          // 取消默认行为
          e.preventDefault()
          const getSubmenu = () => {
            return document.querySelector('#submenu')
          }
          // 关闭之前的菜单
          const removeSubmenu = () => {
            const submenu = getSubmenu()
            if (submenu) {
              submenu.remove()
            }
          }
          removeSubmenu()
          // 拿到鼠标坐标
          const left = e.x
          const top = e.y
          let list = ''
          // 构建菜单列表
          for (let i = 0; i < binding.value.length; i++) {
            list += `<li class="list-group-item list-group-item-primary list-group-item-action">${binding.value[i].name}</li>`
          }
          // 构建菜单
          const template = `<div id="submenu"><div style="position: fixed;top: 0;left: 0;bottom: 0;right: 0;z-index: 9998;"></div><ul class="list-group" style="width: 200px;position: fixed;top: ${top}px;left: ${left}px;z-index: 9999;">${list}</ul></div>`
          // 渲染到页面
          el.innerHTML += template

          // 给蒙版添加点击事件
          const submenu = getSubmenu()
          submenu.children[0].addEventListener('click', () => {
            // 关闭菜单
            removeSubmenu()
          })

          // 给菜单添加点击事件
          const li = submenu.querySelectorAll('.list-group-item')
          for (let i = 0; i < li.length; i++) {
            li[i].addEventListener('click', () => {
              console.log(binding.value[i].name)
            })
          }
        })
      }
    }
  },
  data() {
    return {
      list: [
        {
          name: '列表一',
          menu: [{ name: '列表一 - 选项一' }, { name: '列表一 - 选项二' }]
        },
        {
          name: '列表二',
          menu: [{ name: '列表二 - 选项一' }, { name: '列表二 - 选项二' }]
        }
      ],
      menu: [{ name: '编辑' }, { name: '删除' }]
    }
  }
}
</script>

<style scoped></style>
