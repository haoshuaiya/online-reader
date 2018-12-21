import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/login/index',
      "pages/reading/index",
      "pages/user/index"
    ],
    // "tabBar": {
    //   "list": [
    //     {
    //       "pagePath": "pages/index/index",
    //       "text": "首页"
    //     },
    //     {
    //       "pagePath": "pages/reading/index",
    //       "text": "整本书任务"
    //     }, {
    //       "pagePath": "pages/user/index",
    //       "text": "我的"
    //     }
    //   ]
    // },
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount() {
    Taro.login({
      success(res) {
        Taro.request({
          url: 'https://www.hnfoqc.cn/api/login/login',
          data: {
            code: res.code
          }
        })
      }
    })
  }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
