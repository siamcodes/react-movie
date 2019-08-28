import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render() {  
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <img src="images/pic1.jpg" className="img-fluid" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <img src="images/pic2.jpg" className="img-fluid" />
                    </div>
                    <div className="col-8">
                        <img src="images/pic3.jpg" className="img-fluid" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-7">
                        <img src="images/pic4.jpg" className="img-fluid" />
                    </div>
                    <div className="col-5">
                        <img src="images/pic5.jpg" className="img-fluid" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <img src="images/pic6.jpg" className="img-fluid" />
                    </div>
                    <div className="col-3">
                        <img src="images/pic7.jpg" className="img-fluid" />
                    </div>
                    <div className="col-3">
                        <img src="images/pic8.jpg" className="img-fluid" />
                    </div>
                    <div className="col-3">
                        <img src="images/pic9.jpg" className="img-fluid" />
                    </div>
                </div> 
            </div>
        )
    }
}
export default About;