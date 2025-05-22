import { useEffect, useRef, useState } from "react"

export default function Step1(props) {
    const {
        className = '',
        onValidate,
        onChange,
        savedInfo,
    } = props;

    const [info, setInfo] = useState({
        name: {
            label: 'Name',
            value: null,
            type: 'text',
            regex: /^(?=.{3,}$)(?:[A-Z][a-z]+)(?: [A-Z][a-z]+)*$/,
            placeholder: 'e.g. Stephen King'
        },
        email: {
            label: 'Email Address',
            value: null,
            type: 'email',
            regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            placeholder: 'e.g. stephenking@lorem.com'
        },
        phone: {
            label: 'Phone Number',
            value: null,
            type: 'tel',
            regex: /^\+\d{10,15}$|^\+\d{1,3}( \d{3}){3}$/,
            placeholder: 'e.g. +1 234 567 890',
        },
    })

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
    })

    const finalValidation = info.name.value && info.email.value && info.phone.value && Object.values(errors).every(val => val === '');
    const mounted = useRef(false)
    useEffect(() => {
        if (mounted.current) {
            onValidate(finalValidation);
            finalValidation && onChange({
                name: info.name.value,
                email: info.email.value,
                phone: info.phone.value,
            })
        } else {
            mounted.current = true;
        }

    }, [info.name.value, info.email.value, info.phone.value, finalValidation])

    useEffect(() => {
        savedInfo && setInfo((prev) => ({
            ...prev,
            name: { ...prev.name, value: savedInfo.name },
            email: { ...prev.email, value: savedInfo.email },
            phone: { ...prev.phone, value: savedInfo.phone },
        }))
    }, [savedInfo])

    // Watch for changes
    useEffect(() => {
        setErrors(prev => {
            const newErrors = { ...prev };


            for (const [key, field] of Object.entries(info)) {
                if (field.value === null) {
                    // Skip validation until user interacts
                    continue;
                }

                if (field.value?.trim() === '') {
                    newErrors[key] = `${field.label} is required`;
                } else if (field.regex && !field.regex.test(field.value)) {
                    newErrors[key] = `Invalid ${field.label.toLowerCase()}`;
                } else {
                    newErrors[key] = '';
                }
            }

            return newErrors;
        });
    }, [info.name.value, info.email.value, info.phone.value])

    return (
        <>
            <div className={`step-1 d-stack gap-3 ${className}`}>
                {
                    Object.entries(info).map(([key, val], i) =>
                        <div key={key}>
                            <div className="d-flex gap-2 justify-content-between small">
                                <p>{val.label}</p>
                                {errors[key] &&
                                    <p className="text-danger fw-semibold">{errors[key]}</p>
                                }
                            </div>
                            <input type={val.type} className={`form-control mt-1 fw-semibold ${errors[key] ? 'is-invalid' : ''}`} placeholder={val.placeholder} value={info[key]?.value || ''} onChange={(e) => { setInfo((prev) => ({ ...prev, [key]: { ...prev[key], value: e.target.value } })) }} />
                        </div>
                    )
                }
            </div>
        </>
    )
}