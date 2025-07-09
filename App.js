
import { useState } from 'react';
import './App.css';
import 'react-notifications/lib/notifications.css';

function App() {

  let [todolist, setTodolist] = useState([])

 let saveToDoList = (Event) => {
  Event.preventDefault(); // ✅ Move this to the top

  let toname = Event.target.toname.value.trim();

  if (!toname) return alert("Please enter a task");

  if (!todolist.includes(toname)) {
    let finaldolist = [...todolist, toname];
    setTodolist(finaldolist);

    // ✅ Clear the input field
    Event.target.toname.value = "";
  } else {
    alert("Already exists");
  }
};

let list= todolist.map((value,index)=>{
  return(
    <ToDoListItems value={value} key={index} keynumber={index}
     todolist={todolist}
     setTodolist={setTodolist}/>
  )
})
  return (
    <div className='App'>
      <h1> TODO LIST</h1>
      <form onSubmit={saveToDoList}>
        <input className='text' name='toname' /><button>save</button>
      </form>

      <div className='Divouter'>
       <ul>
      {list}
       </ul>
      </div>
    </div>



  )
}
export default App;

function ToDoListItems({ value, keynumber, todolist, setTodolist }) {
  let deleteRow = () => {
    let finallist = todolist.filter((v, i) => i !== keynumber);
    setTodolist(finallist);
  };

  return (
    <li>
      {value}
      <span onClick={deleteRow} style={{ cursor: 'pointer', color: 'red' }}>
        &times;
      </span>
    </li>
  );
}
