import React, {Component} from 'react'
// import PropTypes from 'prop-types'

class test extends Component {

    constructor (props) {
        super (props)
        this.state = {
            test: 'rrrr',
            api: 'p'
        }
    }

    apiCall (url, consecuencia){
        fetch(url)
        .then(response => response.json())
        .then(data => consecuencia(data))
        .catch(error => console.log(error))
    }
    
    componentDidMount(){
        this.apiCall('https://restcountries.com/v3.1/currency/pen', this.mostrarInfo)
    
    }

    mostrarInfo = (data) => {
        console.log('holi')
        this.setState({
            // api: {data.name.common}
        })
    }

    render() {
        return (
            <div>
                <h1> {this.state.api} </h1>
                
                
            </div>
        )
    }
    

}

export default test