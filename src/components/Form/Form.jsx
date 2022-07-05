import {React, useState} from 'react'

function Form({ inputCallback }) {

    const [datos, setDatos] = useState({
        nombre: '',
        email: '', 
        telefono: ''
    })

    const handleInputChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
        inputCallback(datos)
    }

    const sendData = (e) => {
        e.preventDefault()
    }

  return (
    <div style={{margin: "2%"}}>
        <h3>Formulario de contacto:</h3>
        <form className='row' onSubmit={sendData}>
            <div className='col-md-3'>
                <input 
                    placeholder="Ingrese nombre" 
                    className="form-control" 
                    type="text"
                    name="nombre"
                    onChange={handleInputChange}
                ></input>
            </div>
            <div className="col-md-3">
                <input 
                    placeholder="Ingrese email" 
                    className="form-control" 
                    type="email"
                    name="email"
                    onChange={handleInputChange}
                ></input>
            </div>
            <div className="col-md-3">
                <input 
                    placeholder="Ingrese numero telefonico" 
                    className="form-control"
                    type="number"
                    name="telefono"
                    onChange={handleInputChange}
                ></input>
            </div>
        </form>
    </div>
  )
}

export default Form