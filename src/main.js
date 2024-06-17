import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// App.config.errorHandler = (err, vm, info) => {
//   // 用来捕获所有子组件上的错误
// };

// 沙盒化后，除常用内置全局对象外（Math、Date），还想访问其他全局属性可在这里添加
// 比如 Html 模板中不可以访问 window，可以在这里全局引入 window，window 就可以被访问
// App.config.globalProperties.window = window

// 注册一个全局组件
// App.component("CustomComponent", CustomComponent)

createApp(App).mount('#app')
