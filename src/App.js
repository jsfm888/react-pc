import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '@/pages/login/Login'
import Layout from '@/pages/layout/Layout';

function App() {
  return (
    //路由配置
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
