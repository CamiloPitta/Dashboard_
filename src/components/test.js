import React, {Component} from 'react'
// import PropTypes from 'prop-types'

class test extends Component {

    constructor (props) {
        super (props)
        this.state = {
            test: 'rrrr',
        
        }
    }

    apiCall (url, consecuencia){
        fetch(url,{
            'mode': 'cors',
            'headers': {'Access-Control-Allow-Origin': '*'}
        })
        .then(response => response.json())
        .then(data => consecuencia(data))
        .catch(error => console.log(error))
    }
    
    componentDidMount(){
        this.apiCall('https://restcountries.com/v3.1/currency/pen', this.mostrarInfo)

        // this.apiCall('http://localhost:3001/API/actividad/5', this.mostrarInfo)

       
    
    }

    mostrarInfo = (data) => {
        let m = data[0].name.common
        console.log(data)
        let s = ['a', 's', 'd', 'f']
        this.setState({
            // api: 'p'
            
            api: s.map((item, i) => <li key = {i + item}>{item}</li>)
            // api: data
        })
    }

    render() {
        return (
            <div>
                {/* <h1> {this.state.api.map(user => (
                    <div>key = {user.name}</div>
                ))} </h1> */}
                <h1> {this.state.api} </h1>
                
                
            </div>
        )
    }
    

}

export default test