const express = require("express");
const app = express();
const conexionBD = require("./conexion.js");

app.set("port", process.env.PORT || 3000);
app.set("json spaces", 2);
app.use(express.json());

// Rutas
app.get("/", (req, res) => {
    res.json({ "Title": "Bienvenido a la tienda." });
});

// Clientes
app.post("/clientes", (req, res) => {
    const nombre = req.body.nombre;
    if (!nombre) return res.status(400).json({ error: "Nombre es requerido" });
    conexionBD.agregarCliente(nombre, (err, insertId) => {
        if (err) return res.status(500).json({ error: "Error al agregar cliente" });
        res.status(201).json({ mensaje: "Cliente creado", id: insertId });
    });
});

app.get("/clientes", (req, res) => {
    conexionBD.obtenerClientes((err, clientes) => {
        if (err) return res.status(500).json({ error: "Error al obtener clientes" });
        res.json(clientes);
    });
});


app.get("/clientes/:id", (req, res) => {
    const id = req.params.id;
    conexionBD.obtenerClientePorId(id, (err, cliente) => {
        if (err) return res.status(500).json({ error: "Error al obtener cliente" });
        if (!cliente) return res.status(404).json({ error: "Cliente no encontrado" });
        res.json(cliente);
    });
});

app.patch("/clientes/:id", (req, res) => {
    const nombre = req.body.nombre;
    const id = req.params.id;
    if (!nombre) return res.status(400).json({ error: "Nombre es requerido" });
    conexionBD.actualizarCliente(nombre, id, (err, actualizado) => {
        if(err) return res.status(500).json({ error : "Error al actualizar el cliente"});
        if (!actualizado) return res.status(404).json({ error: "Cliente no encontrado" });
        res.status(200).json({ mensaje: "Cliente actualizado", id: id , nombre: nombre});
    })
})

app.delete("/clientes/:id", (req, res) => {
    const id = req.params.id;
    conexionBD.eliminarCliente(id, (err, eliminado) => {
        if (err) return res.status(500).json({ error : "Error al eliminar el cliente"});
        if (!eliminado) return res.status(404).json({ error: "Cliente no encontrado" });
        res.status(200).json({ mensaje: "Cliente eliminado"});
    })
})


// Categorias
app.post("/categorias", (req, res) => {
    const nombre = req.body.nombre;
    if (!nombre) return res.status(400).json({ error: "Nombre es requerido" });
    conexionBD.agregarCategoria(nombre, (err, insertId) => {
        if (err) return res.status(500).json({ error: "Error al agregar categoria" });
        res.status(201).json({ mensaje: "Categoria creada", id: insertId });
    });
});

app.get("/categorias", (req, res) => {
    conexionBD.obtenerCategorias((err, categorias) => {
        if (err) return res.status(500).json({ error: "Error al obtener categorias" });
        res.json(categorias);
    });
});


app.get("/categorias/:id", (req, res) => {
    const id = req.params.id;
    conexionBD.obtenerCategoriaPorId(id, (err, categoria) => {
        if (err) return res.status(500).json({ error: "Error al obtener categoria" });
        if (!categoria) return res.status(404).json({ error: "Categoria no encontrada" });
        res.json(categoria);
    });
});

app.patch("/categorias/:id", (req, res) => {
    const nombre = req.body.nombre;
    const id = req.params.id;
    if (!nombre) return res.status(400).json({ error: "Nombre es requerido" });
    conexionBD.actualizarCategoria(nombre, id, (err, actualizado) => {
        if(err) return res.status(500).json({ error : "Error al actualizar la categoria"});
        if (!actualizado) return res.status(404).json({ error: "Categoria no encontrada" });
        res.status(200).json({ mensaje: "Categoria actualizada", id: id , nombre: nombre});
    })
})

app.delete("/categorias/:id", (req, res) => {
    const id = req.params.id;
    conexionBD.eliminarCategoria(id, (err, eliminado) => {
        if(err) return res.status(500).json({ error : "Error al eliminar la categoria"});
        if (!eliminado) return res.status(404).json({ error: "Categoria no encontrada" });
        res.status(200).json({ mensaje: "Categoria eliminada"});
    })
})


// Productos
app.post("/categorias/:categoria/productos", (req, res) => {
    const idcategoria = req.params.categoria;
    const {nombre, precio, stock} = req.body;
    if (!nombre || !precio || !stock) return res.status(400).json({ error: "Se necesita información para crear el producto" });
    conexionBD.agregarProducto(nombre, precio, stock, idcategoria, (err, insertId) => {
        if (err) return res.status(500).json({ error: "Error al agregar producto" });
        res.status(201).json({ mensaje: "Producto creado", id: insertId });
    });
});


app.get("/categorias/:categoria/productos", (req, res) => {
    const id_categoria = req.params.categoria;
    const { precio, stock } = req.query;

    if (precio) {
        if (!['asc', 'desc'].includes(precio)) {
            return res.status(400).json({ error: "Valor de ordenación no válido. Debe ser 'asc' o 'desc'." });
        }
        conexionBD.obtenerProductosOrdenadosPorPrecio(id_categoria, precio, (err, productos) => {
            if (err) return res.status(500).json({ error: "Error al obtener productos ordenados por precio" });
            res.json(productos);
        });
    } else if (stock) {
        if (!['asc', 'desc'].includes(stock)) {
            return res.status(400).json({ error: "Valor de ordenación no válido. Debe ser 'asc' o 'desc'." });
        }
        conexionBD.obtenerProductosOrdenadosPorStock(id_categoria, stock, (err, productos) => {
            if (err) return res.status(500).json({ error: "Error al obtener productos ordenados por stock" });
            res.json(productos);
        });
    } else {
        conexionBD.obtenerProductos(id_categoria, (err, productos) => {
            if (err) return res.status(500).json({ error: "Error al obtener productos" });
            res.json(productos);
        });
    }
});

app.get("/categorias/:categoria/productos/oferta", (req, res) => {
    const categoria_id = req.params.categoria;
    conexionBD.obtenerProductosEnOferta(categoria_id, (err, productos) => {
        if (err) return res.status(500).json({ error: "Error al obtener productos en oferta" });
        res.json(productos);
    });
});

app.get("/categorias/:categoria/productos/:id", (req, res) => {
    const id = req.params.id;
    conexionBD.obtenerProductoPorId(id, (err, producto) => {
        if (err) return res.status(500).json({ error: "Error al obtener producto" });
        if (!producto) return res.status(404).json({ error: "Producto no encontrado" });
        res.json(producto);
    });
});

app.put("/categorias/:categoria/productos/:id", (req, res) => {
    const { nombre, precio, stock, en_oferta } = req.body;
    const categoria_id = req.params.categoria;
    const id = req.params.id;
    if (!nombre || !precio || !stock)
        return res.status(400).json({ error: "Se necesita información para actualizar el producto" });
    conexionBD.actualizarProducto(nombre, precio, stock, categoria_id, en_oferta, id, (err, actualizado) => {
        if(err) {
            console.log(err);
            return res.status(500).json({ error : "Error al actualizar el producto"});
        }
        if (!actualizado) return res.status(404).json({ error: "Producto no encontrado" });
        res.status(200).json({ mensaje: "Producto actualizado", id: id , nombre: nombre, precio: precio, stock: stock, categoria_id: categoria_id, en_oferta: en_oferta});
    })
})


app.patch("/categorias/:categoria/productos/:id", (req, res) => {
    const { precio, en_oferta }= req.body;
    const id = req.params.id;
    if (!precio)
        return res.status(400).json({ error: "Se necesita el precio para actualizar el producto" });
    conexionBD.actualizarOfertaProducto(precio, en_oferta, id, (err, actualizado) => {
        if(err) {
            console.log(err);
            return res.status(500).json({ error : "Error al actualizar el producto"});
        }
        if (!actualizado) return res.status(404).json({ error: "Producto no encontrado" });
        res.status(200).json({ mensaje: "Oferta del producto actualizado", id: id, precio: precio, en_oferta: en_oferta});
    })
})


app.delete("/categorias/:categoria/productos/:id", (req, res) => {
    const id = req.params.id;
    conexionBD.eliminarProducto(id, (err, eliminado) => {
        if(err) {
            console.log(err);
            return res.status(500).json({ error : "Error al eliminar el producto"});
        }
        if (!eliminado) return res.status(404).json({ error: "Producto no encontrado" });
        res.status(200).json({ mensaje: "Producto eliminado"});
    })
})


// Iniciando el servidor
app.listen(app.get("port"), () => {
    console.log("Se levantó el Server en el puerto %d.", app.get("port"));
});