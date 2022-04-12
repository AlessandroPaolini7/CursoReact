const producto = 
    {
        id:1,
        nombre:'Producto 1',
        precio:'$100.00',
        imagen:'https://picsum.photos/200/300/?random',
        detalle:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    }
    
const traerProducto = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(producto);
        },2000);
    });
}

export default traerProducto
