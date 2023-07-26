import React, { useEffect, type FC } from 'react';
import './App.css';
import Header from './component/Header';
import Home from 'pages/Home';
import Form from 'pages/AddForm';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import Store from 'Redux/Store';
import { Routes, Route } from 'react-router-dom'
import UserList from 'pages/UserView';
import UpdateUser from 'pages/UpdateUser';
import axios from 'axios';

const App: FC = () => {

  const fetchData = async () => {
    const results = await axios.get('http://localhost:8000/user');
    console.log(results);
    
  };

  useEffect(() => {
    fetchData()
  },[])

  return (
    <Provider store={Store}>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/user/add' element={<Form/>} />
          <Route path='/user/edit/:code' element={<UpdateUser/>} />
          <Route path='/user/:code' element={<UserList/>} />
        </Routes>
        <ToastContainer className='toast-position'
        position='bottom-right'></ToastContainer>
      </div>
    </Provider>
  );
};

export default App;
