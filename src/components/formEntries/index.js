import React, { Fragment } from 'react'
import "./formEntries.css"

const FormEntries = ({ activeFormKey, campaingFormData, audiences, handleSelectAudience, handleChangeBudget, handleSelectAd, handleSelectNoAdYet }) => {

    return (
        <div className="form-entries-root">
            {activeFormKey ==="audience" && (
                <Fragment>
                    {audiences.map((audience)=>(
                        <button 
                            key={audience}
                            className={audience===campaingFormData.audience? "form-entries-button form-entries-button-selected" : "form-entries-button"} 
                            onClick={()=>handleSelectAudience(audience)}
                        >
                            {audience}
                        </button>
                    ))}
                </Fragment>
            )}
            {activeFormKey === "ad" && (
                <>
                    <input
                        className="form-entries-file-input"
                        type="file"
                        id="file-input"
                        placeholder={""}
                        onChange={handleSelectAd}
                    />
                    <label htmlFor="file-input" className="form-entries-file-input-label">
                        <span className="material-icons v-align-middle margin-right-10">
                            file_upload
                        </span> 
                        {!campaingFormData.ad.selectedAd? "UPLOAD AD" : campaingFormData.ad.selectedAd.name }
                    </label>
                    <button 
                        className={campaingFormData.ad.noAdYetSelected? "form-entries-button form-entries-button-selected" : "form-entries-button"} 
                        onClick={handleSelectNoAdYet}
                    >
                         I DON'T HAVE AN AD YET
                    </button>
                </>
            )}
            {activeFormKey === "budget" && (
                <input
                    className="form-entries-input"
                    type="number"
                    value={campaingFormData.budget}
                    onChange={handleChangeBudget}
                />
            )}
            {activeFormKey === "review" && (
                <div>
                    <p className="body-1">AUDIENCE</p>
                    <p className="body-2">{campaingFormData.audience}</p>
                    <p className="body-1">BUDGET</p>
                    <p className="body-2">{`USD ${campaingFormData.budget}`}</p> 
                </div>
            )}
        </div>
    )
}

export default FormEntries
