import React, { Component } from 'react';
import './Signup.css';

class Signup extends Component {
    render() {
        return (
            <div style={{ textAlign: 'center', maxWidth:500 }}>
                <form className="myForm">
                    <h2>สมัครสมาชิก</h2>
                    <label for="username" className="myLabel"> <span>Username</span>
                        <input type="text" name="username" className="myInput" />
                    </label>
                    <label for="password" className="myLabel"> <span>Password</span>
                        <input type="password" name="password" className="myInput" />
                    </label>
                    <label for="confirmpassword" className="myLabel"> <span>Confirm Password</span>
                        <input type="password" name="confirmpassword" className="myInput" />
                    </label>
                    <hr />
                    <label for="firstname" className="myLabel"> <span>Firstname</span>
                        <input type="text" name="firstanem" className="myInput" />
                    </label>
                    <label for="lastname" className="myLabel"> <span>Lastname</span>
                        <input type="text" name="lastneme" className="myInput" />
                    </label>
                    <label className="myLabel">
                        <span></span>
                        <button className="myButton">บันทึกข้อมูล</button>
                    </label>
                </form>
            </div>
        )
    }
}
export default Signup;