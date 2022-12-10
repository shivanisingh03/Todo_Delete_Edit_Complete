// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
function App() {
  const [todo, setTodo] = useState("")
  const [allTodos, setAllTodos] = useState([])

  return (
    <div >
      <table>
        <h1 id="heding">WELCOME MAKE YOUR OWN TODO</h1>

        {/* //Taking input ---> when i called input it will change every time  */}
        <input type="text" placeholder="Enter a todo" onChange={(event1) => {
          setTodo(event1.target.value)
        }} />
        <button id="add" onClick={() => {
          if (todo.trim().length > 0) {

            setAllTodos([...allTodos, todo])
          }
        }}>Add Todo</button>

        {
          allTodos.map((item, index) => {
            return (
              <div>
                <h1 id="h1hello"> {item}</h1>


                <button id="deleteButton" onClick={() => {
                  let newdata = [...allTodos]
                  newdata.splice(index, 1);
                  setAllTodos(newdata)
                }}>Delete</button>

                <button id='editButton' onClick={() => {
                  let newArr = [...allTodos]
                  let editedText = prompt("Enter something")
                  if (editedText.trim().length > 0) {
                    newArr[index] = editedText
                  }
                  // newArr[index]=editedText
                  setAllTodos(newArr)
                }}>Edit</button>




                <button id='editButton' onClick={() => {
                  let newArr = [...allTodos]
                  newArr[index] = <del>{item}</del>
                  setAllTodos(newArr)
                }}>Complete</button>
              </div>
            )
          })
        }
      </table>
    </div>
  )
}
export default App





