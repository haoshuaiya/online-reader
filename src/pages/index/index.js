import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'
import pdfBg from '../../image/pdf-bg.png'
export default class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      list: [{
        name: '2017~2018学年江苏南京鼓楼区南京师范大学附属中学树人学校初一上学期期末语文试卷',
        id: '1'
      }, {
        name: '2017~2018学年江苏南京鼓楼区南京师范大学附属中学树人学校初一上学期期末语文答案',
        id: '2'
      }, {
        name: '2017~2018学年江苏南京鼓楼区南京师范大学附属中学树人学校初一上学期期末语文试卷',
        id: '3'
      }, {
        name: '2017~2018学年江苏南京鼓楼区南京师范大学附属中学树人学校初一上学期期末语文答案',
        id: '4'
      }, {
        name: '2017~2018学年江苏南京玄武区南京外国语学校初一上学期期末语文试卷',
        id: '5'
      }, {
        name: '2017~2018学年江苏南京玄武区南京外国语学校初一上学期期末语文答案',
        id: '6'
      }]
    }
  }

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount() {

  }

  componentDidMount() {
    // if (process.env.TARO_ENV === 'weapp') {
    //   Taro.setTopBarText({
    //     text: 'hello world'
    //   })
    // }
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  openDoc(id) {
    Taro.showLoading({
      title: '下载中...'
    })
    Taro.downloadFile({
      url: `https://www.hnfoqc.cn/index.php?id=${id}`,
      success: res => {
        Taro.hideLoading()
        Taro.openDocument({
          filePath: res.tempFilePath
        })
      }
    })
  }

  onShareAppMessage(res) {
    return {
      title: '资料通',
      path: '/pages/index/index'
    }
  }

  render() {
    return (
      <View className='index'>
        <View className='head'>文档列表</View>
        <View className='file-wrap'>
          {
            this.state.list.map(item => {
              return <View className='list-item' key={item.id} onClick={this.openDoc.bind(this, item.id)}>
                <image src={pdfBg} />
                {item.name}
              </View>
            })
          }
        </View>
      </View>
    )
  }
}

