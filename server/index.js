import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import pg from "pg";


const port = 5000;
const app = express();

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database : "perntodo",
    password : "5760",
    port : 5432,
})
db.connect();
//middlewares
app.use(cors());
app.use(express.json())
// app.use(bodyParser.urlencoded({extended: true}));

//post a new todo
app.post("/todo" , async (req , res) => {
    try 
    {
        const description = req.body.description;
        const added = await db.query("INSERT INTO todo (description) VALUES ($1) RETURNING *" , [description]);
        res.json(added.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

//get all todos
app.get("/todo" , async (req , res) => {
    try {
        const allTodo = await db.query("SELECT * FROM todo");
        res.json(allTodo.rows);
        console.log(allTodo.rows)
    } catch (err) {
        console.error(err.message);
    }
})

//get a specific todo
app.get("/todo/:id" , async (req , res) => {
try {
    const specifId = (req.params.id);
    const todos = await db.query("SELECT * FROM todo WHERE id = ($1)" , [specifId]);
    console.log(specifId);
    res.json(todos.rows[0]);
} catch (err) {
    console.error(err.message);
}
})

//update a description
app.put("/todo/:id" , async (req , res) => {
    try{
        const id = req.params.id;
        const des = req.body.description;
        const updated = await db.query("UPDATE todo SET description = $1 WHERE id = $2 RETURNING *" ,
            [des , id]
        )
        res.json(updated.rows[0]);
    } catch(err) {
        console.error(err.message);
    }
})

//delete route
app.delete("/todo/:id" , async (req , res) => {
try {
    const id = req.params.id;
    const deleted = await db.query("DELETE FROM todo WHERE id = $1 RETURNING *" , [id]);
    res.json(deleted.rows[0]);
} catch (err) {
    console.error(err.message);
}
})


app.listen(port , () => {
    console.log(`server is listening on port ${port}`);
})