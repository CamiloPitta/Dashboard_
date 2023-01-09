import React, {Component} from 'react'
// import PropTypes from 'prop-types'

class ListadoProductos extends Component {

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

        // this.apiCall('http://localhost:3001/API/actividades', this.mostrarInfo)

        // this.apiCall('http://localhost:3001/API/actividad/5', this.mostrarInfo)

       
    
    }

    mostrarInfo = (data) => {

        let m = data.products
        // console.log(data)
        // let s = ['a', 's', 'd', 'f']
        this.setState({
            // api: 'p'
            
            api: m.map((item, i) => <li key = {i + item}>{item.nombre}</li>)
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

export default ListadoProductos