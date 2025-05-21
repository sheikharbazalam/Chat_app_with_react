import React from 'react';
import Typical from 'react-typical'

export default function Profile() {
  return (
    <div className ="profile-container">
        <div className="profile-parent">
            <div className="profile-details">
                <div className="colz">
                    <a href="https://www.facebook.com/arbazmessi.12">
                        <i className='fa fa-facebook-square'></i>
                    </a>
                    <a href="#">
                        <i className='fa fa-google-plus--square'></i>
                    </a>
                    <a href="https://www.instagram.com/messiarbaz/">
                        <i className='fa fa-instagram'></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UC-bfA02E5JvtLgZeaxvB5AQ">
                        <i className='fa fa-youtube-square'></i>
                    </a>
                    <a href="https://twitter.com/TheSpoof4">
                        <i className='fa fa-twitter'></i>
                    </a>
                </div>
               
               <div class="profile-details-name">
                   <span className='primary-text'>
                       {" "}
                       Hello I AM <span className='highlighted-text'>DRJD</span>
                   </span>
                   </div>
                   <div className='profile-details-role'>
                       <span className='primary-text'>
                           {" "}
                           <h1>
{" "}
<Typical 
loop={Infinity}
steps={[
    "Enthusiastic Dev 😛", 
    1000,
    "Front-End Developer 😎", 
    1000,
    "Web Developer🐼 ", 
    1000,
    "UI/UX DESigner 🤦🏾‍♂️", 
    1000,
    "Web Design 👤", 
    1000,
]}


/>
                           </h1>
                       </span>
                   </div>
               </div>
                </div>
                </div>
  )
}
