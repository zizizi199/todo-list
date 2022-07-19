import "antd/dist/antd.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Page/Home/Home";
import Login from "./Page/Login/Login";
import NotFound from "./Page/NotFound/NotFound";
import TodoList from "./Page/TodoList/TodoList";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
