import React, { Component } from 'react';
import './Footer.css';
import { Row, Col } from 'antd';

class Footer extends Component {

    render() {
        return (
            <div>
                <Row style={{ backgroundColor: '#b3e5fc', color: '#000', paddingLeft: 2 }}>
                    <Col span={24}>Copyright@2019 </Col>
                </Row>
            </div>
        )
    }
}
export default Footer;