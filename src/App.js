import './App.css';
import LogoOneBanc from './img/logo_onebanc.png';
import QR from './img/qr.png';
import RegularBank from './img/regular_bank.png';
import OnebancMan from './img/onebanc_man.png';
import Line from './img/line.png'

function App() {
  return (
    <div className="App">
      <div className="App-left">
        <img src={LogoOneBanc} className="logo-onebanc" alt="Logo"></img>
        <br></br>
        <br></br>
        <br></br>
        <p className="heading">RE:</p>
        <p className="heading">THINK</p>
        <p className="heading">SUPPORT</p>
        <br></br>
        <p className="subheading">We are a Neo Bank and are here to re-imagine and re-invent Banking.</p>
        <p className="subheading">We are cool and simply awesome!</p>
        <br></br>
        <br></br>
        <div className="email-container">
          <p className="email-text">Get an early invitation for our Beta release.</p>
          <div className="email-input-container">
            <input type="email" placeholder="Enter Email Address" className="input-email" />
            <button className="submit-btn">
              <i class="fas fa-arrow-right" style={{fontSize: "1rem"}}></i>
            </button>
          </div>
        </div>      
        <br></br>
        <br></br>
        <br></br>
        <img src={QR} alt="QR" />
        <br></br>
        <br></br>
        <p className="t-and-c">Terms & Conditions | Privacy Policy</p>
        <p className="copyright">2021 © OneBanc Technologies Pvt. Ltd.</p>
      </div>
      <div className="App-center">
      </div>
      <div className="App-right">
        <div>
          <i class="fas fa-gift"></i>
          <i class="fas fa-piggy-bank"></i>
          <i class="fas fa-chart-line"></i>
          <i class="fas fa-wallet"></i>
          
          <img src={RegularBank} className="regular-bank" alt="regular"/>
          <p className="hashtag">#RegularBank</p>
        </div>
        <img src={Line} className="line" alt="line"/>
        <div>
          <img src={OnebancMan} className="onebanc-man" alt="onebanc"/>
          <p className="hashtag">#OneBanc</p>
        </div>
      </div>
    </div>
  );
}

export default App;
