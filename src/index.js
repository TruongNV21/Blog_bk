const express = require("express");
const morgan = require("morgan");
const path = require("path");
const handlebars = require("express-handlebars").engine;

const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "nhantran79",
    database: "blogdb",
});


const app = express();
const port = 3000;

const route = require("./routes/index.js");
const { log } = require("console");
// =================SQL================

// ========================================

// Middleware
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

//static file config
app.use(express.static(path.join(__dirname, "public")));

//http logger
app.use(morgan("combined"));

//Template engine
app.engine("hbs", handlebars({ extname: ".hbs" }));
app.set("view engine", ".hbs");

//Chinh sua duong dan khi khong dung theo cau truc ban dau cua express-handlebars
app.set("views", path.join(__dirname, "resource/views"));

//Routes
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);

    // connection.query('SELECT * FROM news;',(err, result,fields)=>{
    //     if(err){
    //         console.log('Connect Failed');
    //     }
    //     console.log('Connect done!')
    // })
});
