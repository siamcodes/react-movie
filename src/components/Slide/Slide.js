import React, { Component } from 'react';
import '../Slide/Slide.css';
import { Carousel } from 'antd';

export default class Slide extends Component {
    render() {
        return (
            <div className="ant-carousel">
                <Carousel autoplay>
                    <div>
                        <img src={`/slides/pic1.png`} />
                    </div>
                    <div>
                        <img src={`/slides/pic2.png`} />
                    </div>
                    <div>
                        <img src={`/slides/pic3.png`} />
                    </div>
                    <div>
                        <img src={`/slides/pic4.png`} />
                    </div>
                </Carousel>
            </div>
        )
    }
}
