import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
    render() {
        return (
            <div>
               <h2>Profile </h2> 
                <img src={'./images/pic1.jpg'} className="thumnail" />
                <img src={'./images/pic2.jpg'} className="thumnail" />
                <img src={'./images/pic3.jpg'} className="thumnail" />
                <img src={'./images/pic4.jpg'} className="thumnail" />
                <img src={'./images/pic6.jpg'} className="thumnail" />
                <img src={'./images/pic7.jpg'} className="thumnail" />
                <img src={'./images/pic8.jpg'} className="thumnail" />
            </div>
        )
    }
}
export default Profile;