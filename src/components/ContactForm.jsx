import { useCallback, useState } from 'react';
import { CONTACT_EMAIL } from '../utils/socialLinks.js';

function getRequiredError(value) {
    if (!value || value.trim() === '') return 'This field is required';
    return '';
}

function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',

        topic: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const validateField = useCallback((name, value) => {
        const error = getRequiredError(value);

        setErrors((prev) => ({
            ...prev,
            [name]: error,
        }));

        return error;
    }, []);

    const handleChange = useCallback(({ target: { name, value } }) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => (prev[name] ? { ...prev, [name]: '' } : prev));
    }, []);

    const handleBlur = useCallback(({ target: { name, value } }) => {
        setTouched((prev) => ({ ...prev, [name]: true }));
        validateField(name, value);
    }, [validateField]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const keys = Object.keys(formData);
        const newErrors = {};

        keys.forEach((key) => {
            const error = validateField(key, formData[key]);
            if (error) newErrors[key] = error;
        });

        setTouched(Object.fromEntries(keys.map((key) => [key, true])));

        if (Object.keys(newErrors).length === 0) {
            // Track form submission with GoatCounter
            if (window.goatcounter && window.goatcounter.count) {
                window.goatcounter.count({
                    path: 'contact-submit',
                    title: 'Contact Form Submitted',
                    event: true,
                });
            }

            // Create mailto link
            const subject = encodeURIComponent(formData.topic);
            const body = encodeURIComponent(
                `Dear Sbu Red Racing Team,\n\n${formData.message}\n\nsincerely,\n${formData.firstName} ${formData.lastName}`
            );

            const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

            // Open mailto link
            window.location.href = mailtoLink;
        }
    };

    const inputBaseClassName =
        'w-full px-1 border-b-2 bg-transparent focus:outline-none transition-colors duration-200 text-gray-900 dark:text-white';
    const errorClassName = 'border-red-500 focus:border-red-500';
    const okClassName = 'border-gray-300 dark:border-[#808080] focus:border-red-500';

    const getControlClasses = (fieldName, { isTextarea } = {}) => {
        const hasError = touched[fieldName] && errors[fieldName];
        const padding = isTextarea ? 'py-2 resize-none' : 'py-3';
        return `${inputBaseClassName} ${padding} ${hasError ? errorClassName : okClassName}`;
    };

    const fields = [
        { name: 'firstName', label: 'First', type: 'text', grid: true },
        { name: 'lastName', label: 'Last', type: 'text', grid: true },
        { name: 'topic', label: 'Topic', type: 'text' },
        { name: 'message', label: 'Message', type: 'textarea', rows: 3 },
    ];

    const gridFields = fields.filter((f) => f.grid);
    const nonGridFields = fields.filter((f) => !f.grid);

    const renderField = ({ name, label, type, rows }) => {
        const showError = touched[name] && errors[name];
        const controlId = `contact-${name}`;
        const errorId = `contact-${name}-error`;
        const commonProps = {
            id: controlId,
            name,
            value: formData[name],
            onChange: handleChange,
            onBlur: handleBlur,
            required: true,
            'aria-invalid': Boolean(showError),
            'aria-describedby': showError ? errorId : undefined,
        };

        return (
            <div className="relative">
                <label
                    htmlFor={controlId}
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                    {label}
                </label>
                {type === 'textarea' ? (
                    <textarea
                        {...commonProps}
                        rows={rows}
                        className={getControlClasses(name, { isTextarea: true })}
                    />
                ) : (
                    <input
                        {...commonProps}
                        type={type}
                        className={getControlClasses(name)}
                    />
                )}
                {showError && (
                    <p
                        id={errorId}
                        role="alert"
                        className="absolute text-red-500 text-xs mt-1"
                    >
                        {errors[name]}
                    </p>
                )}
            </div>
        );
    };

    return (
        <div className="bg-[#191919] p-8 rounded-lg sticky top-4 self-start mb-8 lg:mb-0">
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {gridFields.map(renderField)}
                </div>

                {nonGridFields.map(renderField)}

                <button
                    type="submit"
                    className="rr-btn-primary py-3 px-8 text-lg"
                >
                    SEND
                </button>
            </form>
        </div>
    );
}

export default ContactForm;