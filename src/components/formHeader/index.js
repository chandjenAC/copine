import React from 'react'
import "./formHeader.css"

const FormHeader = ({ campaignFormState }) => {
    return (
        <div className="form-header-root">
            {Object.values(campaignFormState).map(value=>{
                return (
                    <div key={value.header} className="form-header-item">
                       <p className="body-1">{value.header}</p>
                       <div className={value.isCompleted? "form-header-progress-bar form-header-progress-bar-complete" : "form-header-progress-bar"}/>
                    </div>                    
                )
            })}
        </div>
    )
}

export default FormHeader
