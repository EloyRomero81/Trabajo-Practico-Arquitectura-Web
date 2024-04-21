# Bienvenido a la API de Servicios de Venta para Empresas
Esta API proporciona un servicio integral para empresas que desean vender sus productos de manera efectiva y eficiente. 

# Endpoints Disponibles:

## Productos
### REQUEST
- GET /productos: Obtiene una lista de todos los productos disponibles en el catálogo de la empresa.
### RESPONSE

### REQUEST
- GET /productos/{id}: Obtiene los detalles de un producto específico identificado por su ID.
  - id (int): El id del producto.

### RESPONSE
POST /productos: Permite crear un nuevo producto en el catálogo de la empresa.

### REQUEST
PUT /productos/{id}: Permite actualizar los detalles de un producto existente identificado por su ID.

### RESPONSE
DELETE /productos/{id}: Permite eliminar un producto del catálogo de la empresa.
GET /clientes: Obtiene una lista de todos los clientes registrados en la plataforma.
GET /clientes/{id}: Obtiene los detalles de un cliente específico identificado por su ID.
POST /clientes: Permite crear un nuevo perfil de cliente en la plataforma.
PUT /clientes/{id}: Permite actualizar los detalles de un cliente existente identificado por su ID.
DELETE /clientes/{id}: Permite eliminar un cliente de la plataforma.
