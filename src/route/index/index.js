import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import './style.less'
import Modal from '../../components/modal'
import Timer from '../../components/timer'
import Title from '../../components/title'
import Footer from '../../components/footer'
class App extends React.Component {
  state = {
    temp: false,
  }
  liClick(e) {
    this.setState({
      temp: true
    });
  }
  render() {
    const { temp } = this.state;
    return (
      <div>
        <div className='bg'></div>
        <div className='over'></div>
        <div className='container'>
          <Title />
          <Timer />
          <div className="content">
            <ul>
              <li>
                <Link to="/resume" id="introduce" title="resume"></Link>
              </li>
              <li>
                <a href="http://scaum.cn:8080/" title="blog" id="blog"></a>
              </li>
              <li>
                <Link to="/Journey" id="foot" title="foot"></Link>
              </li>
              <li>
                <a href="https://github.com/szmscau" id="github" title="github"></a>
              </li>
              <li>
                <a href="mailto:shenzhiming999@126.com" id="email" title="email"></a>
              </li>
              <li onClick={this.liClick.bind(this)}>
                <a id="wechat" title='wechat'></a>
              </li>
            </ul>
          </div>
          <div className="sunshine" />
        </div>
        <Modal show={temp} />
        <Footer index={true} position='fixed'/>
      </div>
    );
  }
}
export default App;