let baseDeDatos = require("mysql2");
let conexion = baseDeDatos.createConnection({
    host: "localhost",
    database: "tp_aw",
    user: "root",
    password: "argtr3488"
});

conexion.connect(function(err) {
    if(err) throw err;
    console.log("Conexion a la base de datos exitosa.");
});

// CLientes
function agregarCliente(nombre, callback) {
    const query = "INSERT INTO cliente (nombreCliente) VALUES (?)";
    conexion.query(query, [nombre], (err, result) => {
        if (err) {
            return callback(err);
        }
        callback(null, result.insertId);
    });
}

function obtenerClientes(callback) {
    const query = "SELECT * FROM cliente";
    conexion.query(query, (err, results) => {
        if (err) {
            return callback(err);
        }
        callback(null, results);
    });
}

function obtenerClientePorId(id, callback) {
    const query = "SELECT * FROM cliente WHERE idCliente = ?";
    conexion.query(query, [id], (err, result) => {
        if (err) {
            return callback(err);
        }
        callback(null, result[0]); 
    });
}

function actualizarCliente(nombre, id, callback) {
    const query = "UPDATE cliente SET nombreCliente = ? WHERE idCliente = ?";
    conexion.query(query, [nombre, id], (err, result) => {
        if (err) {
            return callback(err);
        }
        callback(null, result.affectedRows > 0); 
    });
}

function eliminarCliente(id, callback) {
    const query = "DELETE FROM cliente WHERE idCliente = ?";
    conexion.query(query, [id], (err, result) => {
        if (err) {
            return callback(err);
        }
        callback(null, result.affectedRows > 0); 
    });
}


// Categorias
function agregarCategoria(nombre, callback) {
    const query = "INSERT INTO categorias (nombreCategoria) VALUES (?)";
    conexion.query(query, [nombre], (err, result) => {
        if (err) {
            return callback(err);
        }
        callback(null, result.insertId);
    });
}

function obtenerCategorias(callback) {
    const query = "SELECT * FROM categorias";
    conexion.query(query, (err, results) => {
        if (err) {
            return callback(err);
        }
        callback(null, results);
    });
}

function obtenerCategoriaPorId(id, callback) {
    const query = "SELECT * FROM categorias WHERE idcategorias = ?";
    conexion.query(query, [id], (err, result) => {
        if (err) {
            return callback(err);
        }
        callback(null, result[0]); 
    });
}

function actualizarCategoria(nombre, id, callback) {
    const query = "UPDATE categorias SET nombreCategoria = ? WHERE idcategorias = ?";
    conexion.query(query, [nombre, id], (err, result) => {
        if (err) {
            return callback(err);
        }
        callback(null, result.affectedRows > 0); 
    });
}

function eliminarCategoria(id, callback) {
    const query = "DELETE FROM categorias WHERE idcategorias = ?";
    conexion.query(query, [id], (err, result) => {
        if (err) {
            return callback(err);
        }
        callback(null, result.affectedRows > 0); 
    });
}


// Productos
function agregarProducto(nombre, precio, stock, categoria_id, callback) {
    const query = "INSERT INTO productos (nombreProducto, precio, stock, categoria_id) VALUES (?,?,?,?)";
    conexion.query(query, [nombre, precio, stock, categoria_id], (err, result) => {
        if (err) {
            return callback(err);
        }
        callback(null, result.insertId);
    });
}

function obtenerProductosOrdenadosPorPrecio(categoria_id, orden, callback) {
    let query = "SELECT * FROM productos WHERE categoria_id = ? ORDER BY precio ";
    if (orden === "desc") query += "DESC";
    else query += "ASC";
    conexion.query(query, [categoria_id],(err, results) => {
        if (err) {
            console.log(err);
            return callback(err);
        }
        callback(null, results);
    });
}

function obtenerProductosOrdenadosPorStock(categoria_id, stock, callback) {
    let query = "SELECT * FROM productos WHERE categoria_id = ? ORDER BY stock ";
    if (stock === "desc") query += "DESC";
    else query += "ASC";
    conexion.query(query, [categoria_id],(err, results) => {
        if (err) {
            console.log(err);
            return callback(err);
        }
        callback(null, results);
    });
}

function obtenerProductos(categoria_id, callback) {
    let query = "SELECT * FROM productos WHERE categoria_id = ?";
    conexion.query(query, [categoria_id],(err, results) => {
        if (err) {
            console.log(err);
            return callback(err);
        }
        callback(null, results);
    });
}

function obtenerProductoPorId(id, callback) {
    const query = "SELECT * FROM productos WHERE idproductos = ?";
    conexion.query(query, [id], (err, result) => {
        if (err) {
            return callback(err);
        }
        callback(null, result[0]); 
    });
}

function obtenerProductosEnOferta(categoria_id, callback) {
    const query = "SELECT * FROM productos WHERE en_oferta = 1 AND categoria_id = ?";
    conexion.query(query, [categoria_id], (err, results) => {
        if (err) {
            return callback(err);
        }
        callback(null, results);
    });
}

function actualizarProducto(nombre, precio, stock, categoria_id, en_oferta, id, callback) {
    const query = "UPDATE productos SET nombreProducto = ?, precio = ?, stock = ?, categoria_id = ?, en_oferta = ? WHERE idproductos = ?";
    conexion.query(query, [nombre, precio, stock, categoria_id, en_oferta, id], (err, result) => {
        if (err) {
            return callback(err);
        }
        callback(null, result.affectedRows > 0); 
    });
}

function actualizarOfertaProducto(precio, en_oferta, id, callback) {
    const query = "UPDATE productos SET precio = ?, en_oferta = ? WHERE idproductos = ?";
    conexion.query(query, [precio, en_oferta, id], (err, result) => {
        if (err) {
            return callback(err);
        }
        callback(null, result.affectedRows > 0); 
    });
}


function eliminarProducto(id, callback) {
    const query = "DELETE FROM productos WHERE idproductos = ?";
    conexion.query(query, [id], (err, result) => {
        if (err) {
            return callback(err);
        }
        callback(null, result.affectedRows > 0); 
    });
}

module.exports = {
    agregarCliente,
    obtenerClientes,
    obtenerClientePorId,
    actualizarCliente,
    eliminarCliente,
    agregarCategoria,
    obtenerCategorias,
    obtenerCategoriaPorId,
    actualizarCategoria,
    eliminarCategoria,
    agregarProducto,
    obtenerProductosOrdenadosPorPrecio,
    obtenerProductosOrdenadosPorStock,
    obtenerProductos,
    obtenerProductoPorId,
    obtenerProductosEnOferta,
    actualizarOfertaProducto,
    actualizarProducto,
    eliminarProducto
};
