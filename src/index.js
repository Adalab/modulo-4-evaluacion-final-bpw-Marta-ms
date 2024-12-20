const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

//BONUS 2
require ('dotenv').config(); 

const api = express();

api.use(cors());
api.use(express.json({ limit: "25mb" }));



// función para conectarme a la DB
async function getDBConnection() {
    const connection = await mysql.createConnection({
        host: "mysql-204d9115-martamoyaser.b.aivencloud.com",
        user: process.env.USER_DB,
        password: process.env.PASSWORD_DB,
        database: "international_music",
        port: process.env.PORT
    });
    connection.connect();
    return connection;
}



const port = 5001;
api.listen(port, () => {
    console.log(`Server is running. Go to http://localhost:${port}`);
})



//Endpoints CRUD
/*
1 seleccionar todos los grupos de mi db - SELECT
2 obtener un grupo por su ID  - 
3 añadir nuevo grupo
4 modificar el género - UPDATE
5 eliminar un grupo - DELETE
*/ 

//1 (GET -- /api/music) ver todas mis bandas
api.get("/api/music", async (req, res) => {
    const connection = await getDBConnection();
    const query = "SELECT * FROM music";
    const [result] = await connection.query(query);
    // console.log(result);
    connection.end();
    res.status(200).json({
        info: { count: result.length }, // número de elementos del resultado
        results: result
    })
})

//2 (GET -- /api/music/id) seleccionar una banda por su id
api.get("/api/music/:id", async (req, res) => {
    const idBand = req.params.id; // recojo el id que me envía frontend a través de url params
    const connection = await getDBConnection();
    const query = "SELECT * FROM music WHERE idMusic = ?";
    const [result] = await connection.query(query, [idBand]);
    console.log(result);
    connection.end();
    res.status(200).json({
        success: true,
        result: result[0]
    });
})


//3 (POST -- /api/music ) añadir nueva banda
api.post("/api/music", async (req, res) => {
    console.log(req.body);
    const { name, country, genre } = req.body;
    
    //si frontend no me envía los datos, le lanzo un error
    if (!name || !country || !genre) {

        //respuesta de error
        res.status(400).json({
            success: false,
            message: "Bad request"
        })
    } else {
        const connection = await getDBConnection();
        const query = "INSERT INTO music(name, country, genre ) VALUES (?, ?, ?)";
        const [result] = await connection.query(query, [name, country, genre ]);
        
        console.log(result);
        connection.end();
        
        res.status(201).json({
            success: true,
            id: result.insertId // el id del registro que acabo de añadir en la DB
        });
    }
})


//4 (PUT, UPDATE -- /api/music/:id) actualizar valores

api.put("/api/music/:id", async(req, res) => {
    const id = req.params.id;
    console.log("ver id ", req.body );

    const { name, country, genre } = req.body;
    const connection = await getDBConnection();
    const query = "UPDATE music SET name = ?, country = ?, genre = ? WHERE idMusic = ?";
    const [result] = await connection.query(query, [
        name, country, genre, id
    ]);
    connection.end();
    res.status(200).json({ success: true });
})

//5 (DELETE -- /api/music/:id) eliminar una banda

api.delete("/api/music/:id", async (req, res) => {
    const connection = await getDBConnection();
    const query = "DELETE from music WHERE idMusic = ?";
    const [result] = await connection.query(query, [req.params.id]);
    // console.log(result);
    res.status(200).json({ success: true });
})




//BONUS
/*
1. Contempla el manejo de errores en los endpoints.
2. Instala dotenv para gestionar la contraseña y datos de acceso a la base de datos
con variables de entorno.
3. Puedes subir el servidor de la API a algún servicio como Render para que esté disponible en Internet.
4. Puedes agregar un carpeta configurada con un servidor de estáticos en el que haya una pequeña
aplicación Frontend que permita consultar alguno de los endpoint del API.
5. Puedes instalar y configurar la librería Swagger para generar una página web con la documentación
de los endpoints de vuestra API

*/ 