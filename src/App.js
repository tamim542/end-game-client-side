import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import CompleteTask from './Component/CompleteTask/CompleteTask';
import ToDoList from './Component/ToDoList/ToDoList';
import Calender from './Component/Calender/Calender';
import About from './Component/About/About';

function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/completetask" element={<CompleteTask />} />
        <Route path="/todolist" element={<ToDoList />} />
        <Route path="calender" element={<Calender />} />
       
      </Routes>
    </div>
  );
}

export default App;
