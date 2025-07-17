import { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
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
            // Create mailto link
            const subject = encodeURIComponent(formData.topic);
            const body = encodeURIComponent(
                `Dear Sbu Red Racing Team,\n\n${formData.message}\n\nsincerely,\n${formData.firstName} ${formData.lastName}`
            );
            
            const mailtoLink = `mailto:fsae.sbu@gmail.com?subject=${subject}&body=${body}`;
            
            // Open mailto link
            window.location.href = mailtoLink;
        }
    };

    const getFieldClasses = (fieldName) => {
        const hasError = touched[fieldName] && errors[fieldName];
        return `w-full px-1 py-3 border-b-2 bg-transparent focus:outline-none transition-colors duration-200 text-gray-900 dark:text-white ${
            hasError 
                ? 'border-red-500 focus:border-red-500' 
                : 'border-gray-300 dark:border-[#808080] focus:border-red-500'
        }`;
    };

    const getTextareaClasses = (fieldName) => {
        const hasError = touched[fieldName] && errors[fieldName];
        return `w-full px-1 py-2 border-b-2 bg-transparent focus:outline-none transition-colors duration-200 text-gray-900 dark:text-white resize-none ${
            hasError 
                ? 'border-red-500 focus:border-red-500' 
                : 'border-gray-300 dark:border-[#808080] focus:border-red-500'
        }`;
    };

    return (
        <div className="bg-gray-50 dark:bg-black p-8 rounded-lg sticky top-4 self-start mb-8 lg:mb-0">
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
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
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
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
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
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
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
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
    );
}

export default ContactForm;