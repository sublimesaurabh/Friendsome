import React, { Component } from 'react';
import "bootstarp/dist/css/bootstrap.min.css"
class App extends Component {
    constructor() {
        super()
        this.state = {
            fullname: '',
            email: '',
            major: ''
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeMajor = this.changeMajor.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
    }

    changeFullName(event) {
        this.setState({
            fullname: event.target.value
        })
    }

    changeMajor(event) {
        this.setState({
            major: event.target.value
        })
    }

    changeEmail(event) {
        this.setState({
            email: event.target.value
        })
    }
    render() {
        return ( <
            div >
            <
            div className = 'container' >
            <
            div className = 'form-div' >
            <
            form >
            <
            input type = 'text'
            placeholder = 'Full Name'
            onChange = { this.changeFullName }
            value = { this.state.fullname }
            className = 'form-control form-control' /
            >

            <
            input type = 'text'
            placeholder = 'Major'
            onChange = { this.changeFullName }
            value = { this.state.major }
            className = 'form-control form-control'

            /
            >
            <
            input type = 'text'
            placeholder = 'E-mail'
            onChange = { this.changeEmail }
            value = { this.state.email }
            className = 'form-control form-control' /
            >

            <
            input type = 'submit'
            className = 'btn btn-danger btm-block'
            value = 'submit' / >
            <
            /form> <
            /div> <
            /div> <
            /div>
        );
    }
}

export default App;