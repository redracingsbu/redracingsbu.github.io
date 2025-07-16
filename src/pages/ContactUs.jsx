import { useState } from 'react';
import Discord from '../icons/Discord.jsx';
import Instagram from '../icons/Instagram.jsx';
import LinkedIn from '../icons/LinkedIn.jsx';

function ContactUs() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        topic: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched({
            ...touched,
            [name]: true
        });
        validateField(name, formData[name]);
    };

    const validateField = (name, value) => {
        let error = '';
        
        if (!value || value.trim() === '') {
            error = 'This field is required';
        } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
            error = 'Please enter a valid email address';
        }
        
        setErrors(prev => ({
            ...prev,
            [name]: error
        }));
        
        return error;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newErrors = {};
        Object.keys(formData).forEach(key => {
            const error = validateField(key, formData[key]);
            if (error) newErrors[key] = error;
        });
        
        const allTouched = {};
        Object.keys(formData).forEach(key => {
            allTouched[key] = true;
        });
        setTouched(allTouched);
        
        if (Object.keys(newErrors).length === 0) {
            console.log('Form submitted:', formData);
        }
    };

    const getFieldClasses = (fieldName) => {
        const hasError = touched[fieldName] && errors[fieldName];
        return `w-full px-1 py-3 border-b-2 bg-transparent focus:outline-none transition-colors duration-200 text-gray-900 ${
            hasError 
                ? 'border-red-500 focus:border-red-500' 
                : 'border-gray-300 focus:border-red-500'
        }`;
    };

    const getTextareaClasses = (fieldName) => {
        const hasError = touched[fieldName] && errors[fieldName];
        return `w-full px-1 py-2 border-b-2 bg-transparent focus:outline-none transition-colors duration-200 text-gray-900 resize-none ${
            hasError 
                ? 'border-red-500 focus:border-red-500' 
                : 'border-gray-300 focus:border-red-500'
        }`;
    };

    return (
        <div className="flex-1 bg-white pt-8 lg:pt-32 px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="max-w-4xl mx-auto lg:mx-0 lg:ml-12">
                    <h1 className="text-5xl lg:text-6xl font-bold text-black-900 mb-12">
                        Contact Us
                    </h1>
                    
                    <div className="space-y-8 text-lg lg:text-xl text-black-700 leading-relaxed">
                        <p>
                            Have any questions? Just want to reach out? Shoot our team an email!
                        </p>
                        
                        <p>
                            Alternatively, dm us on instagram or linkedin, or send a message in our discord server.
                        </p>
                        
                        <div className="pt-8">
                            <p className="text-2xl lg:text-3xl font-mono text-black-800 mb-8">
                                fsae.sbu@gmail.com
                            </p>
                            
                            <div className="flex space-x-12">
                                <a 
                                    href="https://www.linkedin.com/company/redracingsbufsae/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-black-600 hover:text-gray-600 transition-colors duration-200"
                                >
                                    <LinkedIn className="w-8 h-8" />
                                </a>
                                <a 
                                    href="" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-black-600 hover:text-gray-600 transition-colors duration-200"
                                >
                                    <Instagram className="w-8 h-8" />
                                </a>
                                <a 
                                    href="https://discord.gg/K2RYYcz5jA" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-black-600 hover:text-gray-600 transition-colors duration-200"
                                >
                                    <Discord className="w-8 h-8" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-4xl mx-auto lg:mx-0 lg:mr-12">
                    <div className="bg-gray-50 p-8 rounded-lg sticky top-4 self-start">
                        <form onSubmit={handleSubmit} noValidate className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="relative">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        First
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={getFieldClasses('firstName')}
                                        required
                                    />
                                    {touched.firstName && errors.firstName && (
                                        <p className="absolute text-red-500 text-xs mt-1">{errors.firstName}</p>
                                    )}
                                </div>
                                <div className="relative">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Last
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={getFieldClasses('lastName')}
                                        required
                                    />
                                    {touched.lastName && errors.lastName && (
                                        <p className="absolute text-red-500 text-xs mt-1">{errors.lastName}</p>
                                    )}
                                </div>
                            </div>

                            <div className="relative">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={getFieldClasses('email')}
                                    required
                                />
                                {touched.email && errors.email && (
                                    <p className="absolute text-red-500 text-xs mt-1">{errors.email}</p>
                                )}
                            </div>

                            <div className="relative">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Topic
                                </label>
                                <input
                                    type="text"
                                    name="topic"
                                    value={formData.topic}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={getFieldClasses('topic')}
                                    required
                                />
                                {touched.topic && errors.topic && (
                                    <p className="absolute text-red-500 text-xs mt-1">{errors.topic}</p>
                                )}
                            </div>

                            <div className="relative">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    rows="3"
                                    className={getTextareaClasses('message')}
                                    required
                                />
                                {touched.message && errors.message && (
                                    <p className="absolute text-red-500 text-xs mt-1">{errors.message}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 text-lg uppercase tracking-wide transition-colors duration-200"
                            >
                                SEND
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;