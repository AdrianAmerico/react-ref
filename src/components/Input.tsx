import React, { forwardRef, InputHTMLAttributes } from 'react'

interface InputPorps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    name: string
    placeholder: string
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputPorps> =
    ({ label, name, placeholder, ...rest }, ref) => {
        return (
            <div className="input-block">
                <label htmlFor={name}>{label}</label>
                <input
                    type="text"
                    placeholder={placeholder}
                    autoFocus
                    ref={ref}
                    {...rest}
                />
            </div>
        )
    }

export default forwardRef(Input)
