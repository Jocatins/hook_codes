import React, { Component } from 'react'

class ClassTimer extends Component {
    interval
    constructor(props) {
        super(props)
    
        this.state = {
            timer: 0
        }
    }
    componentWillMount(){
        this.interval = setInterval(() => {
            this.setState(prevState => ({timer: prevState.timer + 1}))
        }, 700)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    render() {
        return (
            <div>
                class timer - {this.state.timer}
                <button onClick={() => clearInterval(this.interval)}>ClearTimer</button>
            </div>
        )
    }
}

export default ClassTimer

