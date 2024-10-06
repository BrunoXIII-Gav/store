const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2')
const app = express()
const port = 5000

const db = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'formulario_web_cv',
})

db.connect( err => {
    if (err) {
        console.error('Error conectando a mysql', err);
        return;
    } 
    console.log('Conectado a la base de datos')
});

app.use(cors());

app.use(bodyParser.json());

app.post('/send',(req,res)=>{
    const {name,email,message} = req.body;
    const query = 'INSERT INTO form_recibido(Nombre,correo,mensaje) VALUES (?,?,?)';
    db.query(query,[name,email,message], (err,result) =>{
        if (err) {
            console.error('Error al insertar los datos',err)
            res.status(500).send('Error al guardar el mensaje');
            return;
        } 
        res.send('Datos insertados correctamente');
    });
});

app.listen(port, ()=>{
    console.log(`Servidor funcionando en el puerto:${port}`);
})