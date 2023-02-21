import React from 'react';
import { ToastContainer } from 'react-toastify';
import RoutesPage from './services/Routes';

export default function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <RoutesPage />
    </div>
  )
}
