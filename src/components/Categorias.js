import React, {Component} from 'react'
// import PropTypes from 'prop-types'

class Categorias extends Component {

    constructor (props) {
        super (props)
        this.state = {
            test: 'test',
        
        }
    }

    apiCall (url, consecuencia){
        fetch(url)
        .then(response => response.json())
        .then(data => consecuencia(data))
        .catch(error => console.log(error))
    }
    
    componentDidMount(){

        this.apiCall('http://hosteria-dh.onrender.com/API/actividades', this.mostrarInfo)

        // this.apiCall('https://restcountries.com/v3.1/currency/pen', this.mostrarInfo)

        // this.apiCall('http://localhost:3001/API/actividades', this.mostrarInfo)

       
    
    }

    mostrarInfo = (data) => {
        let m = data.countByCategory[0]
        // console.log(data)
        // let s = ['a', 's', 'd', 'f']
        this.setState({
            // api: 'p'
            
            api: m.map((item, i) => <li key = {i + item}>{item}</li>)
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

export default Categorias