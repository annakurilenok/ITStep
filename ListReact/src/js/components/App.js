// import { useState } from "react";
// import H1 from "../../heders/H1";

// function uid() {
//     return `${Date.now()}_${Math.random().toString(16).slice(2)}`;
// }

// export default function App() {
//     const [tasks, setTasks] =  useState([]);
//     const [text, setText] = useState('');

//     function addNewTask(event) {
//         event.preventDefault();

//         // {id: 123123, text: 'Задача 1', status: 1}

        
//         const newTasks = [
//              ...tasks,
//              {id: uid(),
//             text: text,
//             status: 0}
//         ];

//         setTasks(newTasks);
//         console.log(tasks);

        
//     }

//     return (
//         <>
//         <H1 headerText="ToDo" />
//         <div class="container-form" onSubmit={addNewTask}>
//             <input type="text" placeholder="Новая задача..." class="new-task" onChange={ (e) => setText(e.target.value) }/>
//             <button class="app" type="submit">Добавить</button>
//         </div>
//         <div class="tasks">
//             {
//                 tasks.map(function(task){
//                     return(
                        
//                     )
//                 })
//             }
//             <div class="tasks-container">
//                 <input type="checkbox" /> 
//                 <label for="" class="task">Задача 1</label>
//             </div>
//             <button class="close">❌</button>
//         </div>


        
// </>
//     )
// }