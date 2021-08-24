import { Modal, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile'
function saiderModel(props) {
  let { isShow, title, close } = props
  console.log(close)
  const gz = () => {
    return (
      <div style={{ height: 100, overflow: 'scroll' }} >
        这是规则
        <br />
         这是规则
        <br />
         这是规则
        <br />
         这是规则
        <br />
         这是规则
        <br />
         这是规则
        <br />
      </div>
    )
  }
  const wf = () => {
    return (
      <div style={{ height: 100, overflow: 'scroll' }}>
        这是玩法
        <br />
         这是玩法
        <br />
         这是玩法
        <br />
         这是玩法
        <br />
         这是玩法
        <br />
         这是玩法
        <br />
      </div>
    )
  }
  return (
    <Modal
      visible={isShow}
      transparent
      maskClosable={false}
      title={title}
      footer={[
        {
          text: 'Ok',
          onPress: () => {
            close()
          },
        },
      ]}
    // wrapProps={{ onTouchStart: onWrapTouchStart }}
    // afterClose={() => {
    //   alert('afterClose')
    // }}
    >
      {title === '规则' ? gz() : wf()}
    </Modal>
  )
}
export default saiderModel;