import React, {Component} from 'react'
// import PropTypes from 'prop-types'

class test extends Component {

    constructor (props) {
        super (props)
        this.state = {
            test: <p> rrrr </p>
        }
    }
    componentDidMount(){

    }
    componentDidUpdate(){

    }
    
    render() {
        return (
            <div>
                <h1> {this.state.test} </h1>
                
                
            </div>
        )
    }
    

}

export default test