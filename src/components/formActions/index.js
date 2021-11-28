import React from 'react'
import "./formActions.css"

const FormActions = ({ activeFormKey, getNextButtonDisable, handleClickNext, handleClickBack, handleSubmit }) => {
    return (
        <div className="form-actions-root">
            {activeFormKey !=="audience" && (
                <button
                 className="form-action-button form-action-back-button"
                 onClick={handleClickBack}
                >
                    BACK
                </button>
            )}
            {activeFormKey !=="review" && (
                <button
                 className="form-action-button form-action-next-button"
                 onClick={handleClickNext}
                 disabled={getNextButtonDisable()}
                 >
                     NEXT
                </button>
            )}
            {activeFormKey ==="review" && (
                <button
                 className="form-action-button form-action-next-button"
                 onClick={handleSubmit}
                 >
                     SUBMIT
                </button>
            )}
        </div>
    )
}

export default FormActions
