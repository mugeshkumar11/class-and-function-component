import React, { Component } from 'react'
import srcImg1 from './story-1.jpg'
import srcImg2 from './stage-2.jpg'
import srcImg3 from './stage-3.jpg'
import srcImg4 from './stage-4.jpg'
import './class.css'

export class Class extends Component {
  render() {
    return (
        <div>
        <section className={'header'}>
        <section className={'container'}>
          <div className={'headflex'}>
      
            <div className={'head1'}>
            <i className={"bi bi-facebook"}></i>
            <input type={'text'} placeholder={'search for facebook'}/>
            </div>
            <div className={'head2'}>
            <i className={"bi bi-house-door"}></i>
            <i className={"bi bi-play-btn"}></i>
            <i className={"bi bi-house-fill"}></i>
            <i className={"bi bi-people-fill"}></i>
            <i className={"bi bi-controller"}></i>
            </div>
            <div className={'head3'}>
            <i className={"bi bi-dice-6"}></i>
            <i className={"bi bi-messenger"}></i>
            <i className={"bi bi-bell"}></i>
            <i className={"bi bi-person-circle"}></i>
            </div>

          </div>
        </section>
         </section>
         <Fclass/>
         </div>
    )
  }
}

export default Class

export class Fclass extends Component {
  render() {
    return (
        <section className={'content'}>
        <section className={'container'}>
          <div className={'contentflex'}>
            <div className={'content1'}>
             <h3><i className={'bi bi-person-circle'}></i>mugeshkumar</h3>
             <h3><i className={"bi bi-people-fill"}></i>Friends</h3>
             <h3><i className={"bi bi-people-fill"}></i>Groups</h3>
             <h3> <i className={"bi bi-house-fill"}></i>Marketplace</h3>
             <h3><i className={"bi bi-play-btn"}></i>Watch</h3>
             <h3><i className={"bi bi-clock"}></i>Saved</h3>
             <h3><i className={"bi bi-flag"}></i>Pages</h3>
             <h3><i className={"bi bi-calendar4-event"}></i>Events</h3>
             <h3><i className={"bi bi-calendar2-x"}></i>Most recent</h3>
             <h3><i className={"bi bi-star"}></i>Favourite</h3>
             <h3><i className={"bi bi-chevron-down"}></i>see more</h3> 
            </div>
            <div className={'content2'}>
               <div className={'box1'}>
                <h4>stories</h4>
                <h4>reels</h4>
                <h4>rooms</h4>
               </div>
               <div className={'boxstory'}>
                <div className={'story1'}>
                <img src={srcImg1}/>
                <p>create story</p>
                </div>
                <div className={'story2'}>
                <img src={srcImg2}/>
                </div>
                <div className={'story3'}>
                <img src={srcImg3}/>
                </div>
                <div className={'story4'}>
                <img src={srcImg4}/>
                </div>
               </div>
               <div className={'postbox'}>
                <div className={'postinput'}>
                <i className={'bi bi-person-circle'}></i>
                <input type={'text'} placeholder={'whats on your mind on mugesh?'}/>
                </div>
                <div className={'hline'}></div>
                <div className={'posticon'}>
                  <h4><i className={"bi bi-camera-video"}></i>Live video</h4>
                  <h4><i className={"bi bi-file-image"}></i>Image/video</h4>
                  <h4><i className={"bi bi-emoji-laughing"}></i>feeling</h4>
                </div>
             </div>
             <div className={'photopost'}>
            
               <div className={'postimage'}>
               <i className={'bi bi-person-circle'}></i>
               <h4>mugeshkumar</h4>
               <span><i className={"bi bi-three-dots"}></i></span>
               </div>
               <img src={srcImg1}/>
      
             </div>
             <div className={'photopost'}>
            
            <div className={'postimage'}>
            <i className={'bi bi-person-circle'}></i>
            <h4>mugeshkumar</h4>
            <span><i className={"bi bi-three-dots"}></i></span>
            </div>
            <img src={srcImg2}/>
      
          </div>
                
            </div>
            
            <div className={'content3'}>
              <div className='chatbox1'>
                <h4>sponsored</h4>
                <div className={'hrline'}></div>
                </div>
              <div className={'chatbox'}>
                <h4>contacts</h4>
                
                <div className={'chaticons'}>
                <i className={"bi bi-camera-video"}></i>
                <i class="bi bi-search"></i>
                <i class="bi bi-three-dots"></i>
                </div>
              </div>
              <div className={'chatlist'}>
                <h4><i className={'bi bi-person-circle'}></i>simeon</h4>
                <h4><i className={'bi bi-person-circle'}></i>sakthi</h4>
                <h4><i className={'bi bi-person-circle'}></i>arul jk</h4>
                <h4><i className={'bi bi-person-circle'}></i>nagaraj</h4>
                <h4><i className={'bi bi-person-circle'}></i>mani</h4>
                <h4><i className={'bi bi-person-circle'}></i>mani</h4>
                <h4><i className={'bi bi-person-circle'}></i>jeba</h4>
                <h4><i className={'bi bi-person-circle'}></i>venky</h4>
                <h4><i className={'bi bi-person-circle'}></i>ari</h4>
                <h4><i className={'bi bi-person-circle'}></i>ponvannan</h4>
                <h4><i className={'bi bi-person-circle'}></i>magesh</h4>
                <h4><i className={'bi bi-person-circle'}></i>sabari</h4>
                <h4><i className={'bi bi-person-circle'}></i>manoj</h4>
              </div>
      
            </div>
          </div>
        </section>
      </section>
    )
  }
}



