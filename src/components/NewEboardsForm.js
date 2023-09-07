import React, {useState} from "react";

function NewEboardsForm({addNewEboards}) {
    const defaultForm = {
        image: "",
        battery: "",
        motor: "",
        gear_ratio: "",
        top_speed: "",
        likes: 0,
        comment: []
    }

    const [formData, setFormData] = useState(defaultForm)

    function submitForm(e) {
        e.preventDefault();

        addNewEboards(formData);
        
        setFormData(defaultForm);
    }

    function updateFormData(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return (
        <div className="new-eboard-form">
            <h2>New Eboard</h2>
            <form onSubmit={submitForm}>
                <div className="new-eboard-input">
                    <input onChange={updateFormData} value={formData.image} type="text" name="image" placeholder="Image URL Here" />
                    <input onChange={updateFormData} value={formData.battery} type="text" name="battery" placeholder="Battery Specs Here" />
                    <input onChange={updateFormData} value={formData.motor} type="text" name="motor" placeholder="Motor Specs Here" />
                    <input onChange={updateFormData} value={formData.gear_ratio} type="text" name="gear_ratio" placeholder="Gear Ratio Here" />
                    <input onChange={updateFormData} value={formData.top_speed} type="number" name="top_speed" placeholder="Top Speed Here" />
                </div>
                <button className="submit_button" type="submit" value="Add Eboard">Add New Eboard</button>        
            </form>
        </div>
    )
}

export default NewEboardsForm;