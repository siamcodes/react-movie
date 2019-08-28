import React, { Component } from "react";
import "./Signin.css";
import auth from "../../firebase"

class Signin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            currentUser: null,
            message: ''
        }
    }

    onChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    onSubmit = e => {
        e.preventDefault()

        const { email, password } = this.state
        // TODO: implement signInWithEmailAndPassword()
        auth
            .signInWithEmailAndPassword(email, password)
            .then(response => {
                this.setState({
                    currentUser: response.user
                })
            })
            .catch(error => {
                this.setState({
                    message: error.message
                })
            })
    }

    logout = e => {
        e.preventDefault()
        auth.signOut().then(response => {
            this.setState({
                currentUser: null
            })
        })
    }

    render() {
        const { message, currentUser } = this.state

        if (currentUser) {
            return (
                <div>
                    <p>Hello {currentUser.email}</p>
                    <button onClick={this.logout}>Logout</button>
                </div>
            )
        }

        return (
            <div style={{ textAlign: 'center', maxWidth:500 }}>
                <form onSubmit={this.onSubmit} className="myForm">
                    {message ? <p style={{display: 'block', backgroundColor:'red', padding:10, color:'white'}}>{message}</p> : null} 
                    <h2> เข้าสู่ระบบผู้ใช้งาน </h2>
                    <label for="email" className="myLabel"><span>Email</span>
                        <input type="email" name="email" className="myInput" onChange={this.onChange} />
                    </label>
                    <label for="password" className="myLabel"><span>Password</span>
                        <input type="password" name="password" className="myInput" onChange={this.onChange} />
                    </label>
                    <label className="myLabel">
                        <span></span>
                        <button className="myButton"> Sign In </button>
                    </label>
                </form>
            </div>
        )
    }
}

export default Signin;