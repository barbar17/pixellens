'use client';

import { Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ToastProvider() {
  return <ToastContainer
    theme="dark"
    closeOnClick
    transition={Flip}
    autoClose={2000}
  />;
}