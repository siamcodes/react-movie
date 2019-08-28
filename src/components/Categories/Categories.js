import React, { Component } from 'react';
import './Categories.css';

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Categories',
            act: 0,
            index: '',
            datas: []
        }
    } 

    componentDidMount() {
        this.refs.name.focus();
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log('try');

        let datas = this.state.datas;
        let name = this.refs.name.value;
        let address = this.refs.address.value;

        if (this.state.act === 0) {   //new
            let data = {
                name, address
            }
            datas.push(data);
        } else {                      //update
            let index = this.state.index;
            datas[index].name = name;
            datas[index].address = address;
        }

        this.setState({
            datas: datas,
            act: 0
        });

        this.refs.myForm.reset();
        this.refs.name.focus();
    }

    onRemove = (i) => {
        let datas = this.state.datas;
        datas.splice(i, 1);
        this.setState({
            datas: datas
        });

        this.refs.myForm.reset();
        this.refs.name.focus();
    }

    onEdit = (i) => {
        let data = this.state.datas[i];
        this.refs.name.value = data.name;
        this.refs.address.value = data.address;

        this.setState({
            act: 1,
            index: i
        });

        this.refs.name.focus();
    }  


    render() {  
        let datas = this.state.datas;
        return (
            <div>
                <h2>{this.state.title} </h2>
                <form ref="myForm" className="myForm">
                    <input type="text" ref="name" placeholder="your name" className="myInput" />
                    <input type="text" ref="address" placeholder="your address" className="myInput" />
                    <button onClick={(e) => this.onSubmit(e)} className="myButton">submit </button>
                </form>
                <pre>
                    {datas.map((data, i) =>
                        <li key={i} className="myList">
                            {i + 1}. {data.name}, {data.address}
                            <button onClick={() => this.onRemove(i)} className="myButton">remove </button>
                            <button onClick={() => this.onEdit(i)} className="myButton">edit </button>
                        </li>
                    )}
                </pre>
                    
            </div>
        )
    }
}
export default Categories;