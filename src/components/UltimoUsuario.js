import React, {Component} from 'react'
// import PropTypes from 'prop-types'

class UltimoUsuario extends Component {

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

        this.apiCall('http://hosteria-dh.onrender.com/API/ultimoUsuario', this.mostrarInfo)

        // this.apiCall('https://restcountries.com/v3.1/currency/pen', this.mostrarInfo)

        // this.apiCall('http://localhost:3001/API/ultimoUsuario', this.mostrarInfo)

       
    
    }

    mostrarInfo = (data) => {
        let h = []
        h.push(data.nombre)
        h.push(data.email)
        h.push(data.usuario)
        // console.log(data)
        // let s = ['a', 's', 'd', 'f']
        this.setState({
            // api: 'p'
            
            api: h.map((item, i) => <li key = {i + item}>{item}</li>)
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

export default UltimoUsuario