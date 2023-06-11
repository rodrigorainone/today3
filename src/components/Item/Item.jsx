import React from 'react';
import { Link } from 'react-router-dom';


const Item = ({data}) => {  
    const buttonClass = data.texto ? 'boton' : 'boton2';
    const cardClass = data.texto ? 'card' : 'card2';
       
    return (
        
              <div className={cardClass} >
                    <div className='card-img'>
                        <img src={`../../imgs/${data.img}.jpg`} className="" alt="..." />
                    </div>                    
                    <div className="cardInfo">
                        <h5 className="card-title">{data.nombre}</h5>   
                        {data.texto && <p>{data.texto}</p>}                 
                        <Link  to={"ws"}><button className={buttonClass}><i className="fa-brands fa-whatsapp whatsapp"></i> Hacé tu pedido</button></Link>
                    </div>
               </div>   
        
    );
}

export default Item;
