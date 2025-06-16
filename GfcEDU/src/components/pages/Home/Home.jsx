import React from 'react'
import meta from '../../../assets/img/meta.jpeg'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import './Home.css'

function Home() {
    const reactSite = () => {
        window.open("https://legacy.reactjs.org/");
    }

    const reactYtb = () => {
        window.open("https://www.youtube.com/watch?v=wIyHSOugGGw")
    }

  return (
      <section>
          <div className="conatiner">
              <div className="home-container">
                  <div className="home-content">
                      <h2 className='section_title'>learn everything free!!</h2>
                      <p>mastering trading technology with GFCEdu</p>

                      <div className="home-btns">
                          <button className='register-btn' onClick={reactSite}>Get satrt</button>
                          <button className='register-btn' onClick={reactYtb}>Wacth now!</button>
                      </div>
                      
                  </div>
                  <div className="home-img">
                      <div className="home-img-wrapper">
                          <div className="box-01">
                              <div className="box-img">
                                  <img src={meta} alt="" />
                              </div>
                          </div>
                      </div>
                      
                  </div>
                  <div className="whatsapp-container">
                      <h5>500+students</h5>
                      <AiOutlineWhatsApp/>
                  </div>
                  <div className="support">
                      <h5>Active Support</h5>
                  </div>
              </div>
          </div>
    </section>
  )
}

export default Home
