import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Profile from './pages/profile';
import ErrorPage from './pages/error';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <Router>
      <Header/>
        <Routes>
          {/*Page d'acceuil*/}
          <Route exact path="/" element={<Home/>} />
          {/*Page login*/}
          <Route path="login" element={<Login/>} />
          {/*Page profil*/}
          <Route path="profile" element={<Profile/>} />
          {/*Page erreur*/}
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
