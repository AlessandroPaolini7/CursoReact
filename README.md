Para este proyecto elegí simular un e-commerce de productos electrónicos. Desde hardware hasta tablets.
 
La lógica utilizada no sale de los temas vistos en clase, ni tampoco incluí dependencias extras por npm. 

Los datos para el ItemListContainer los traigo desde firebase. Cuando se selecciona una categoría, mediante
una query compara el id de la categoria con el campo category de los productos, si la categoria seleccionada es igual a la categoria del producto, imprime el mismo.
 Para el ItemDetailContainer, se lo va a buscar directamente al producto por su id unívoco de la base de datos.
obtener un único objeto (producto) que tiene un id unívoco.
 Para mostrar el carrito lo hago con un map, trayéndolo desde el contexto. Le doy la opción al usuario de eliminar cada ítem con el botón de Eliminar a la derecha. Una vez que se ejecuta el botón, con la función RemoveFromCart traida del contexto, se elimina. Funciona con un filter, el cual retorna los productos que no tienen el mismo id del eliminado.
 Para finalizar la compra lo que hice fue un formulario, en el cual validé cada uno de sus datos. Si completa los campos correspondientes de forma correcta, se crea una orden de venta y se agrega a la base de datos. 
 Luego de llenar bien el formulario, se muestra un div con los datos del comprador y el id de su compra. 
