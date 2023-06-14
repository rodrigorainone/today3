import React from 'react';
import { useNavigate } from 'react-router-dom';


const Contacto = () => {

     const datosFormulario = React.useRef();
     
    const handleSubmit = (e) => {
        e.preventDefault();
        const datForm = new FormData(datosFormulario.current);
        const cliente = Object.fromEntries(datForm);
        // Aquí puedes realizar las acciones necesarias con los datos del formulario
        console.log(cliente.nombre);

        const url = `https://api.whatsapp.com/send?phone=2613340137&text=		
		*¿Cuál es tu nombre?*%0A
		${cliente.nombre}%0A
		*¿Cuál es tu Telefono?*%0A
		${cliente.telefono}%0A
		*Indica tu email*%0A
		${cliente.email}%0A
		*Indica Tu Consulta :*%0A
		${cliente.comentarios}%0A `     

        window.open(url);
      };

    return (
        <div className='contactoContainer'>
            <div className='contactoContainerSub'>                
                <div className='infoTopContacto'>
                    <p className='tituloInfoTopContacto'>Contáctenos</p>
                    <div className='redesInfoTopContacto'>
                        <p><i className="fa-brands fa-whatsapp whatsapp3"></i> 2613340137</p>
                        <p><i className="fa-brands fa-instagram instagram"></i> todayhechocomoencasa</p>                     
                        <p><i className="fa-brands fa-facebook-f facebook"></i> Today .Hecho como en Casa</p>
                        <p><i className="fa-solid fa-location-dot location"></i> Mendoza - Argentina</p>
                    </div>
                </div>
                <div className='contactoFormContainer'>
                    <p>Por favor complete el formulario para dejar su consulta o comentario</p>
                    <form className='formulario' onSubmit={handleSubmit}  ref={datosFormulario}>
                        <div className='contenedorDatos'>   
                            <div className='contenedorDatos1'>
                                <label htmlFor="nombre">Nombre y Apellido</label>
                                <input type="text" id="nombre"  name="nombre" required/>
                            </div>

                            <div className='contenedorDatos2'>
                                <label htmlFor="telefono">Teléfono</label>
                                <input type="tel" id="telefono" name="telefono"  required/>

                            </div>

                            <div className='contenedorDatos3'>
                                <label htmlFor="email">E-mail</label>              
                                <input type="email" id="email" name="email" required/>
                            </div>             

                        </div>
                        <div className='contenedorDatosComent'>
                            <label htmlFor="comentarios">Comentarios</label>
                            <textarea id="comentarios" name="comentarios" required></textarea>
                        </div>                  

                        <input className='botonSubmit' type="submit" value="Enviar" />
                    </form>     
                </div>
            </div>
        </div>
    );
}

export default Contacto;
