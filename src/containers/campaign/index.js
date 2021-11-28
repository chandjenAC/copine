import React, { useState } from "react"
import FormHeader from "../../components/formHeader"
import FormTitle from "../../components/formTitle"
import FormEntries from "../../components/formEntries"
import "./campaign.css"
import FormActions from "../../components/formActions"

const campaignFormInitialState={
    audience:{
        header: "AUDIENCE",
        title: "SET YOUR AUDIENCE",
        caption: "Where should we display your advertising?",
        isActive: true,
        isCompleted: false,
        nextStepKey: "ad"
    },
    ad:{
        header: "AD",
        title: "YOUR AD",
        caption: "Please upload your Ad",
        isActive: false,
        isCompleted: false,
        nextStepKey: "budget",
        prevStepKey: "audience"
    },
    budget:{
        header: "BUDGET",
        title: "BUDGET",
        caption: "Please enter your budget",
        isActive: false,
        isCompleted: false,
        nextStepKey: "review",
        prevStepKey: "ad"
    },
    review:{
        header: "REVIEW",
        title: "REVIEW",
        caption: "Review your campaign",
        isActive: false,
        isCompleted: false,
        prevStepKey: "budget"
    }
}

const campaignFormDataInitialState={
    audience: "",
    ad:{
        noAdYetSelected: false,
        selectedAd:""
    },
    budget:"", 
}

const audiences=["ALL CINEMAS", "ARTHOUSE CINEMAS", "INDIVIDUAL SELECTION"]

const Campaign = () => {

    const [ campaignFormState, setCampaignFormState ] = useState(campaignFormInitialState)
    const [ campaingFormData, setCampaingFormData ] = useState(campaignFormDataInitialState)

    const activeFormKey = Object.keys(campaignFormState).find(key=>campaignFormState[key].isActive)

    const handleClickNext = () => {
        const formState = {...campaignFormState}
        formState[activeFormKey].isActive = false   
        formState[activeFormKey].isCompleted = true
        const nextStepKey = formState[activeFormKey].nextStepKey
        formState[nextStepKey].isActive = true
        setCampaignFormState(formState)
    }

    const handleClickBack = () => {
        const formState = {...campaignFormState}
        formState[activeFormKey].isActive = false  
        const prevStepKey = formState[activeFormKey].prevStepKey
        formState[prevStepKey].isActive = true
        setCampaignFormState(formState)
    }

    const handleSubmit = () => {
        console.log("Submitted values>>>>>>>>",campaingFormData)
    }

    const getNextButtonDisable = () => {
        switch (activeFormKey) {
            case "audience":
                return !campaingFormData.audience ? true : false

            case "ad":
                return ( campaingFormData.ad.selectedAd || campaingFormData.ad.noAdYetSelected ) ? false : true

            case "budget":
                return !campaingFormData.budget ? true : false
    
            default:
                break;
        }
    }

    const handleSelectAudience = (audience) => {
        setCampaingFormData((prevState) => ({...prevState, audience: audience}))
    }

    const handleChangeBudget = (event) => {
        setCampaingFormData((prevState) => ({...prevState, budget: event.target.value}))
    }

    const handleSelectNoAdYet = () => {
        setCampaingFormData((prevState) => ({...prevState, ad: { noAdYetSelected: true, selectedAd: "" }}))
    }

    const handleSelectAd = (event) => {
        setCampaingFormData((prevState) => ({...prevState, ad: { noAdYetSelected: false, selectedAd: event.target.files[0] }}))
    }

    return (
        <div className="campaign-form-root">
            <div className="campaign-form-container">
                <FormHeader campaignFormState={campaignFormState} />
                <FormTitle activeForm={campaignFormState[activeFormKey]}/>
                <FormEntries
                    activeFormKey={activeFormKey} 
                    campaingFormData={campaingFormData}
                    audiences={audiences}
                    handleSelectAudience={handleSelectAudience}
                    handleChangeBudget={handleChangeBudget}
                    handleSelectAd={handleSelectAd}
                    handleSelectNoAdYet={handleSelectNoAdYet}
                />
                <FormActions
                    activeFormKey={activeFormKey} 
                    getNextButtonDisable={getNextButtonDisable}
                    handleClickNext={handleClickNext}
                    handleClickBack={handleClickBack}
                    handleSubmit={handleSubmit}
                />
            </div>
        </div>
    )
}

export default Campaign
