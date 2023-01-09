import React, {Component} from 'react'
// import PropTypes from 'prop-types'

class TotalCategorias extends Component {

    constructor (props) {
        super (props)
        this.state = {
            test: 'test'
        
        }
    }

    apiCall (url, consecuencia){
        fetch(url)
        .then(response => response.json())
        .then(data => consecuencia(data))
        .catch(error => console.log(error))
    }
    
    componentDidMount(){

        this.apiCall('http://hosteria-dh.onrender.com/API/totalCategorias', this.mostrarInfo)

        // this.apiCall('http://hosteria-dh.onrender.com/API/users', this.mostrarInfo)

        // this.apiCall('https://pokeapi.co/api/v2/pokemon/ditto', this.mostrarInfo)

        // this.apiCall('http://localhost:3001/API/totalCategorias', this.mostrarInfo)

        // this.apiCall('https://restcountries.com/v3.1/currency/pen', this.mostrarInfo)
    
    }

    mostrarInfo = (data) => {
        let m = data.total
        // console.log(data)
        this.setState({
            // api: 'p'
            
            // api: s.map((item, i) => <li key = {i + item}>{item}</li>)
            api: m
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

export default TotalCategorias