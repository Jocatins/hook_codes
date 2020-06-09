import React, { Component } from 'react'

class Class extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count: 0
        }
    }
    increaseCount = () => {
        this.setState({
            count: this.state.count + 3
        })
    }
    
    render() {
        return (
            <div>
                <button onClick={this.increaseCount}>type{this.state.count}</button>
            </div>
        )
    }
}

export default Class
