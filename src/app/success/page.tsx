'use client'

import { useEffect, useState } from 'react'
import { FormData } from '@/types/FormData'

export default function SubmittedPage() {
  const [data, setData] = useState<FormData | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('formData')
    if (stored) {
      setData(JSON.parse(stored))
    }
  }, [])

  if (!data)
    return (
      <main className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-6">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md text-center">
          <p className="text-gray-500 text-lg">No submitted data found.</p>
        </div>
      </main>
    )

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-green-100 rounded-full p-3 mb-2">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-blue-700 mb-1">Submission Successful!</h2>
          <p className="text-gray-500 text-sm mb-8">Here's what you submitted:</p>
        </div>
        <ul className="divide-y divide-gray-200">
          <li className="py-3 flex flex-col sm:flex-row sm:items-center">
            <span className="font-semibold text-gray-700 w-32">Full Name:</span>
            <span className="text-gray-900 mt-1 sm:mt-0">{data.fullName}</span>
          </li>
          <li className="py-3 flex flex-col sm:flex-row sm:items-center">
            <span className="font-semibold text-gray-700 w-32">Email:</span>
            <span className="text-gray-900 mt-1 sm:mt-0">{data.email}</span>
          </li>
          <li className="py-3 flex flex-col sm:flex-row sm:items-center">
            <span className="font-semibold text-gray-700 w-32">Age:</span>
            <span className="text-gray-900 mt-1 sm:mt-0">{data.age}</span>
          </li>
          <li className="py-3 flex flex-col sm:flex-row sm:items-center">
            <span className="font-semibold text-gray-700 w-32">Gender:</span>
            <span className="text-gray-900 mt-1 sm:mt-0">{data.gender}</span>
          </li>
          <li className="py-3 flex flex-col sm:flex-row sm:items-start">
            <span className="font-semibold text-gray-700 w-32">Feedback:</span>
            <span className="text-gray-900 mt-1 sm:mt-0 break-words">{data.feedback}</span>
          </li>
        </ul>
        <div className="mt-8 flex justify-center">
          <a
            href="/"
            className="inline-block px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Submit Another Response
          </a>
        </div>
      </div>
    </main>
  )
}