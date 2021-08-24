import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

function Login () {
    let [formList, setFormList] = useState({})
    let history = useHistory();
    const submit = () => {
        // 在这里进行提交验证
        console.log('=======', formList)
        setTimeout(() => {
            localStorage.setItem('token', '0990')
            history.push('/goods')
        }, 1000)
    }
    const changge = (e, type) => {
        // console.log(type)
        let form = {
            ...formList,
            [type]: e.target.value
        }
        setFormList(form)
    }
    return (
        <div>
            <label htmlFor="">
                账号:
                <input type="text" onChange={(e) => changge(e, 'name')} />
            </label>
            <label htmlFor="">
                密码:
                <input type="passWord" onChange={(e) => changge(e, 'password')} />
            </label>

            <button onClick={submit}>按钮</button>
        </div>
    )
}
export default Login;