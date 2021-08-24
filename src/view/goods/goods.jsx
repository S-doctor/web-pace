import './index.scss'
import back from '../../assets/img/back.png'
import { Button, Progress } from 'antd-mobile'
import { useState, useEffect } from 'react'
import SaiderModel from './component/saiderModel'
import { useHistory } from 'react-router-dom'

function Goods (props) {
  const [isShow, setIsShow] = useState(false)
  const [title, setTitle] = useState('')
  const [yiLingQu, setYiLingQu] = useState(false)
  const [stuList, setStuList] = useState([])
  let history = useHistory()
  useEffect(() => {
    // 在这里发送请求获取参数
    setTimeout(() => {
      if (localStorage.getItem('token')) {
        setYiLingQu(true)
        btnClick()
      }
    }, 1000)
  }, [])
  const dialogTxt = (type) => {
    let title = type === 'gz' ? '规则' : '玩法'
    setTitle(title)
    setIsShow(true)
  }
  const close = () => {
    setIsShow(false)
  }
  const onWrapTouchStart = () => {

  }
  const btnClick = () => {
    // 验证是否有token
    let token = localStorage.getItem('token')
    if (token) {
      // 获取好运助力里面的list列表
      setTimeout(() => {
        let list = [{ img: '图片', name: '姓名1', time: '时间1', pic: '28.88' },
        { img: '图片', name: '姓名2', time: '时间222222222222222', pic: '28.8' },
        { img: '图片', name: '姓名3', time: '时间3', pic: '28.48' },
        { img: '图片', name: '姓名4', time: '时间4', pic: '28.00' },
        { img: '图片', name: '姓名5', time: '时间5', pic: '18.00' }
        ]
        setStuList(list)
      }, 1000)
      setYiLingQu(true)
    } else {
      //去到登录注册也
      history.push('/login')
    }

  }
  const lookDetails = () => {
    history.push('/lookDetails')
  }
  const progressOut = {
    style: {
      height: '0.3rem',
      backgroundColor: '#dfb394',
      borderRadius: '0.15rem'
    },
    barStyle: {
      border: '0.15rem solid #df4c3a',
      backgroundColor: '#df4c3a',
      borderRadius: '0.15rem 0 0 0.15rem'
    }
  }
  return (
    <div className="goods">
      <img src={back} alt="" />
      <div className="leftGz" onClick={() => dialogTxt('gz')}>
        规则
      </div>
      <div className="rightWf" onClick={() => dialogTxt('wf')}>
        玩法
      </div>
      <div className="btnBox" onClick={btnClick}>
        {yiLingQu ? '立即领取利是' : '立即发起集好运'}
      </div>
      <SaiderModel title={title} isShow={isShow} close={close} />
      <div className="progress">
        <Progress {...progressOut} percent={40} position="normal" appearTransition />
      </div>
      <div className="bottomText" onClick={lookDetails}>
        查看集好运记录
      </div>
      <ul className="hyzl">
        {
          stuList.length > 0 && stuList.map((item, index) => {
            return (
              <li key={index}>
                <div className="letf">
                  {item.img}
                </div>
                <div className="center">
                  <p>{item.name}</p>
                  <p>{item.time} </p>
                </div>
                <div className="right">
                  {item.pic}
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
export default Goods

