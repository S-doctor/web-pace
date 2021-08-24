import Header from "./component/header";
import Footer from "./component/footer";
import './index.scss'
function content () {
  return (
    <div className="context">
      <div >
        <div className="header"> <Header /></div>
        <div>
          这个是中间的内容
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}
export default content;