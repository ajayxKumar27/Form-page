'use client'

import Form from '@/Components/Form'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Home() {
  return (
     <main className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-4">
      <ToastContainer />
      <div className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-8">
        <Form />
      </div>
    </main>
  );
}
