import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Signin.css';
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';

class Signin extends Component {
    constructor(props) {
        super(props);

    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {

        return (
            <Row style={{alignContent:'center'}}>
                <Col md={7}>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Checkbox>Remember me</Checkbox> 
                            <Link className="login-form-forgot" to="/forgot">Forgot password </Link>
                            <Button type="primary" htmlType="submit" className="login-form-button"> Log in</Button>
                            Or <Link to="/signup">register now!</Link>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        )
    }
}

export default Signin;