# Bienvenido a la API de Servicios de Venta para Empresas
Esta API proporciona un servicio integral para empresas que desean vender sus productos de manera efectiva y eficiente. 

# Endpoints Disponibles:

## Productos
### REQUEST
- GET /productos: Obtiene una lista de todos los productos disponibles en el catálogo de la empresa.
### RESPONSE
- ### Código: Descripción
- 200: La operación se ha realizado con éxito.
- 400: La operación no se ha podido ejecutar debido a un error en el Request.
- 500: Error del servidor al procesar el Request.

### REQUEST
- GET /productos/{id}: Obtiene los detalles de un producto específico identificado por su ID.
  - id (int): El id del producto.
### RESPONSE
- ### Código: Descripción
- 200: La operación se ha realizado con éxito.
- 400: La operación no se ha podido ejecutar debido a un error en el Request o el ID no existe.
- 500: Error del servidor al procesar el Request.

### REQUEST
- POST /productos: Permite crear un nuevo producto en el catálogo de la empresa.
### RESPONSE
- ### Código: Descripción
- 200: La operación se ha realizado con éxito.
- 400: La operación no se ha podido ejecutar debido a un error en el Request.
- 500: Error del servidor al procesar el Request.

### REQUEST
- PUT /productos/{id}: Permite actualizar los detalles de un producto existente identificado por su ID.
  - id (int): El id del producto.
### RESPONSE
- ### Código: Descripción
- 200: La operación se ha realizado con éxito.
- 400: La operación no se ha podido ejecutar debido a un error en el Request o el ID no existe.
- 500: Error del servidor al procesar el Request.

### REQUEST
- DELETE /productos/{id}: Permite eliminar un producto del catálogo de la empresa.
    - id (int): El id del producto.
### RESPONSE
- ### Código: Descripción
- 200: La operación se ha realizado con éxito.
- 400: La operación no se ha podido ejecutar debido a un error en el Request o el ID no existe.
- 500: Error del servidor al procesar el Request.

### REQUEST
- GET /clientes: Obtiene una lista de todos los clientes registrados en la plataforma.
### RESPONSE
- ### Código: Descripción
- 200: La operación se ha realizado con éxito.
- 400: La operación no se ha podido ejecutar debido a un error en el Request.
- 500: Error del servidor al procesar el Request.

### REQUEST
- GET /clientes/{id}: Obtiene los detalles de un cliente específico identificado por su ID.
  - id (int): El id del producto.  
### RESPONSE
- ### Código: Descripción
- 200: La operación se ha realizado con éxito.
- 400: La operación no se ha podido ejecutar debido a un error en el Request o el ID no existe.
- 500: Error del servidor al procesar el Request.

### REQUEST
- POST /clientes: Permite crear un nuevo perfil de cliente en la plataforma.
### RESPONSE
- ### Código: Descripción
- 200: La operación se ha realizado con éxito.
- 400: La operación no se ha podido ejecutar debido a un error en el Request.
- 500: Error del servidor al procesar el Request.

### REQUEST
- PUT /clientes/{id}: Permite actualizar los detalles de un cliente existente identificado por su ID.
  - id (int): El id del producto.
### RESPONSE
- ### Código: Descripción
- 200: La operación se ha realizado con éxito.
- 400: La operación no se ha podido ejecutar debido a un error en el Request o el ID no existe.
- 500: Error del servidor al procesar el Request.

### REQUEST
- DELETE /clientes/{id}: Permite eliminar un cliente de la plataforma.
  - id (int): El id del producto.
### RESPONSE
- ### Código: Descripción
- 200: La operación se ha realizado con éxito.
- 400: La operación no se ha podido ejecutar debido a un error en el Request o el ID no existe.
- 500: Error del servidor al procesar el Request.
