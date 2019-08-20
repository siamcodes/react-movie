import React, { Component } from 'react';
import { DatePicker, message, Alert } from 'antd';
import './About.css';

class About extends Component {
    state = {
        date: null,
    };

    handleChange = date => {
        message.info(`Selected Date: ${date ? date.format('YYYY-MM-DD') : 'None'}`);
        this.setState({ date });
    };

    render() {
        const { date } = this.state;
        
        return (
            <div>About Page
                        <div style={{ width: 400, margin: '100px auto' }}>
                    <DatePicker onChange={this.handleChange} />
                    <div style={{ marginTop: 20 }}>
                        Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
                        <Alert message={`Selected Date: ${date ? date.format('YYYY-MM-DD') : 'None'}`} type="success" />
                    </div>
                </div>
            </div>
        )
    }
}
export default About;