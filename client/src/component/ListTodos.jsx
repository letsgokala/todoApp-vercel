import React, { useState, useEffect } from "react";
import EditTodo from "./EditTodo";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios"

function ListTodos(){
    const [todos , setTodos] = useState([])

    async function getTodos(){
        try {
            const response = await axios.get("/todo")
            setTodos(response.data)

        } catch (err) {
            console.error(err.message)
        }
    }
    console.log(todos);

    async function deleteTodo(id){
        try {
            const deleteItem = await axios.delete(`/todo/${id}`);
            console.log(deleteItem);
            setTodos(todos.filter(todo => {
                return todo.id !== id
            }))
            
        } catch (err) {
            console.error(err.message);
        }

    }
    

    useEffect(() => {
        getTodos()
    }, [])

    return <>

        <table className="table mt-5 text-center">
        <thead>
        <tr className="mb-5">
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        {todos.map((todo) => { //we should put these inside curly braces otherwise
            return (
            <tr key={todo.id}>
                <td><li className="text-start">{todo.description}</li></td>
                <td><EditTodo todo={todo}/></td>
                <td><button onClick={() => {deleteTodo(todo.id)}} className="btn btn-danger"><DeleteIcon /></button></td>
            </tr> 
            )
            {/*in the above code we wanted to pass the deleteTodo function the id but if we did that it will 
                immediately call the funciton so we made another arrow function and we called it there */}
        })}
        {/* inside the map function we should return the elements we want otherwise it won't be rendered  */}
        
        </tbody>
    </table>
    </>
}
export default ListTodos;