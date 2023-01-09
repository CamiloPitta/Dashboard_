import React, {Component} from 'react'
// import PropTypes from 'prop-types'

class ultimoProducto extends Component {

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

        this.apiCall('http://hosteria-dh.onrender.com/API/ultimoProducto', this.mostrarInfo)

        // this.apiCall('https://restcountries.com/v3.1/currency/pen', this.mostrarInfo)

        // this.apiCall('http://localhost:3001/API/ultimoProducto', this.mostrarInfo)

       
    
    }

    mostrarInfo = (data) => {
        let d = []
        d.push(data.nombre)
        // d.push(data.tipo)
        d.push(data.valor)
        d.push(data.descripcion)
        
        // console.log(data)
        // let s = ['a', 's', 'd', 'f']
        this.setState({
            // api: 'p'
            
            api: d.map((item, i) => <li key = {i + item}>{item}</li>)
            // api: 'pl'
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

export default ultimoProducto