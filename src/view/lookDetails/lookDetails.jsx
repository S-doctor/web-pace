import { useEffect, useState } from 'react'
import './index.scss'
function LookDetails () {
  let [list, setList] = useState([])
  useEffect(() => {
    // 发送请求获取列表
    setTimeout(() => {
      let arr = [
        { time: '时间戳1', money: '88.1' },
        { time: '时间戳2', money: '88.2' },
        { time: '时间戳3', money: '88.3' },
        { time: '时间戳4', money: '88.4' },
        { time: '时间戳5', money: '88.5' }
      ]
      setList(arr)
    }, 1000)
  }, [])
  return (
    <div className="lookDetails">
      <ul>
        {list.length > 0 && list.map((item, index) => (
          <li className="li" key={index}>
            <span>item.time</span>
            <span></span>
            <span>获得红包{item.money}元</span>
          </li>
        ))}
      </ul>
    </div>
  )

}
export default LookDetails;