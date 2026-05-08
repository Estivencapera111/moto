
// ID DEL PRODUCTO QUE SE ESTA EDITANDO
let productoEditando = null;



async function agregarProducto(){

   
    const nombre =
    document.getElementById('nombre').value;

    const descripcion =
    document.getElementById('descripcion').value;

    const categoria =
    document.getElementById('categoria').value;

    const precio =
    document.getElementById('precio').value;

    const cantidad =
    document.getElementById('cantidad').value;

    const imagen =
    document.getElementById('imagen').value;



    if(productoEditando){

        
        const { error } = await client

        .from('productos')

        .update({

            nombre,
            descripcion,
            categoria,
            precio,
            cantidad,
            imagen

        })

        .eq('id', productoEditando);


        // SI HAY ERROR
        if(error){

            alert(error.message);

        }else{

            alert("Producto actualizado");

            // LIMPIAR ID
            productoEditando = null;

            // LIMPIAR FORMULARIO
            limpiarFormulario();

            // RECARGAR PRODUCTOS
            obtenerProductos();
        }

    }else{

        const { error } = await client

        .from('productos')

        .insert([{

            nombre,
            descripcion,
            categoria,
            precio,
            cantidad,
            imagen

        }]);


        // SI HAY ERROR
        if(error){

            alert(error.message);

        }else{

            alert("Producto agregado");

            // LIMPIAR FORMULARIO
            limpiarFormulario();

            // RECARGAR PRODUCTOS
            obtenerProductos();
        }
    }
}




async function obtenerProductos(){

    // CONSULTAR TABLA
    const { data } = await client

    .from('productos')

    .select('*');


    // OBTENER TABLA HTML
    const tabla =
    document.getElementById('tablaProductos');


    // LIMPIAR TABLA
    tabla.innerHTML = "";


    // RECORRER PRODUCTOS
    data.forEach(producto => {

        tabla.innerHTML += `

        <tr>

            <td>
                ${producto.nombre}
            </td>

            <td>
                ${producto.categoria}
            </td>

            <td>
                $${producto.precio}
            </td>

            <td>
                ${producto.cantidad}
            </td>

            <td>

                <button
                onclick="editarProducto(${producto.id})"
                class="btn-primary">

                    Editar

                </button>

                <button
                onclick="eliminarProducto(${producto.id})"
                class="btn-secondary">

                    Eliminar

                </button>

            </td>

        </tr>

        `;
    });
}



async function editarProducto(id){

    // BUSCAR PRODUCTO
    const { data } = await client

    .from('productos')

    .select('*')

    .eq('id', id)

    .single();


    // GUARDAR ID
    productoEditando = id;


    // LLENAR INPUTS
    document.getElementById('nombre').value =
    data.nombre;

    document.getElementById('descripcion').value =
    data.descripcion;

    document.getElementById('categoria').value =
    data.categoria;

    document.getElementById('precio').value =
    data.precio;

    document.getElementById('cantidad').value =
    data.cantidad;

    document.getElementById('imagen').value =
    data.imagen;


    // MENSAJE
    alert("Editando producto");
}




async function eliminarProducto(id){

    // ELIMINAR PRODUCTO
    await client

    .from('productos')

    .delete()

    .eq('id', id);


    // RECARGAR TABLA
    obtenerProductos();
}




function limpiarFormulario(){

    document.getElementById('nombre').value = "";

    document.getElementById('descripcion').value = "";

    document.getElementById('categoria').value = "";

    document.getElementById('precio').value = "";

    document.getElementById('cantidad').value = "";

    document.getElementById('imagen').value = "";
}