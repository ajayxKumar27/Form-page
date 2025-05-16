'use client'

import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { useState } from 'react'

export default function Form() {
    const [form, setForm] = useState({
        fullName: '',
        email: '',
        age: '',
        gender: '',
        feedback: ''
    })
    const [errors, setErrors] = useState<{ [key: string]: string }>({})
    const router = useRouter()

    const validate = () => {
        const newErrors: { [key: string]: string } = {}
        if (!form.fullName.trim()) {
            newErrors.fullName = 'Full name is required'
        }
        if (!form.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/.test(form.email)) {
            newErrors.email = 'Invalid email'
        }
        if (!form.age.trim()) {
            newErrors.age = 'Age is required'
        } else if (isNaN(Number(form.age)) || Number(form.age) < 10 || Number(form.age) > 70) {
            newErrors.age = 'Age must be between 10 and 70'
        }
        if (!form.gender) {
            newErrors.gender = 'Gender is required'
        }
        if (!form.feedback.trim()) {
            newErrors.feedback = 'Feedback is required'
        }
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        setErrors({ ...errors, [e.target.name]: '' })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (validate()) {
            localStorage.setItem('formData', JSON.stringify(form));
            toast.success('Form submitted successfully!');
            router.push('/success');
        }
    }

    const handleReset = () => {
        setForm({
            fullName: '',
            email: '',
            age: '',
            gender: '',
            feedback: ''
        })
        setErrors({})
    }

    return (
        <div className="max-w-md mx-auto bg-white">
            <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">Feedback Form</h1>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${errors.fullName ? 'border-red-400' : 'border-gray-300'
                            }`}
                    />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${errors.email ? 'border-red-400' : 'border-gray-300'
                            }`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">Age</label>
                    <input
                        type="number"
                        name="age"
                        value={form.age}
                        onChange={handleChange}
                        placeholder="Enter your age"
                        className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${errors.age ? 'border-red-400' : 'border-gray-300'
                            }`}
                    />
                    {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age}</p>}
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">Gender</label>
                    <select
                        name="gender"
                        value={form.gender}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${errors.gender ? 'border-red-400' : 'border-gray-300'
                            }`}
                    >
                        <option value="">Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                    {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>}
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">Feedback</label>
                    <textarea
                        name="feedback"
                        value={form.feedback}
                        onChange={handleChange}
                        placeholder="Your feedback"
                        className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none min-h-[80px] ${errors.feedback ? 'border-red-400' : 'border-gray-300'
                            }`}
                    />
                    {errors.feedback && <p className="text-red-500 text-xs mt-1">{errors.feedback}</p>}
                </div>

                <div className="flex justify-between mt-8">
                    <button
                        type="button"
                        onClick={handleReset}
                        className="w-[48%] py-2 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition cursor-pointer"
                    >
                        Reset
                    </button>
                    <button
                        type="submit"
                        className="w-[48%] py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition cursor-pointer"
                    >
                        Submit
                    </button>

                </div>
            </form>
        </div>
    )
}