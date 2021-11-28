import React from 'react'
import "./formTitle.css"

const FormTitle = ({ activeForm }) => {
    return (
        <div className="form-title-root">
            <p className="sub-title-1 margin-top-84">{activeForm.title}</p>
            <p className="sub-title-2 margin-0">{activeForm.caption}</p>
        </div>
    )
}

export default FormTitle
