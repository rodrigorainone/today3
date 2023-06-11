import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

const Productos = () => {


    const [estado, setestado] = useState('Pastas');
    const [productosVisual, setproductosVisual] = useState([]);
    const [loading, setloading] = useState(true)



    useEffect(() => {
        fetch(`../../json/${estado}.json`)
            .then(response => response.json())
            .then(data => {
                const productosAux = <ItemDetail productos={data} estadoAux={estado} />
                setproductosVisual(productosAux)
                setloading(false)
            })
    }, [estado])
    let classNameProductosView = 'productosView';
    if (estado === 'Helados') {
        classNameProductosView = 'productosViewHelados';
    }
    const handleCategoryClick = (category) => {
        setestado(category);
    };
    return (
        <>
            <section className='productos'>
                <div className="ProductosContainer">
                    <div className='navProductos'>
                        <ul>
                            <li className={estado === 'Pastas' ? 'active1' : ""} onClick={() => handleCategoryClick('Pastas')}>Pastas</li>
                            <li className={estado === 'Panificados' ? 'active1' : ""} onClick={() => handleCategoryClick('Panificados')}>Panificados</li>
                            <li className={estado === 'EmpanadasyTartas' ? 'active1' : ""} onClick={() => handleCategoryClick('EmpanadasyTartas')}>Empanadas y Tartas</li>
                            <li className={estado === 'Helados' ? 'active1' : ""} onClick={() => handleCategoryClick('Helados')}>Helados</li>
                            <li className={estado === 'Insumos' ? 'active1' : ""} onClick={() => handleCategoryClick('Insumos')}>Insumos</li>
                        </ul>
                    </div>
                    {loading ? <p className='Cargando'>Loading...</p> : (
                        <div className={classNameProductosView}>
                            {productosVisual}
                        </div>)}
                </div>
            </section>
        </>
    );
}






export default Productos;
