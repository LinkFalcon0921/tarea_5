## This is a server created using the framework Express and Node.js to save contacts 
## using Mongo Cloud as a database.

### configurations
#### it start on 4040 port by default. The console avises the port that it will connect.

### Has 2 get points:
#### http://host:port/ that redirect to http://host:port/contact.
#### http://host:port/contact that redirect to contacts registered.

### Has 1 post point:
#### http://host:port/contact that save contacts as object.
#### { name: info, apellido: info, telefono: info } : object example

![preview get server](images/get_Post.jpg)