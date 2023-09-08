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

    function test() {
        console.log("TEST")
        alert("TEST")
    }

    return (
        <div className="new-eboard-form">
            <h2>New Eboard Post</h2>
            <form onSubmit={submitForm}>
                <div className="new-eboard-input">
                    <input onChange={updateFormData} value={formData.image} type="text" name="image" placeholder="Image URL Here" />
                    <button className="upload-image" type="click" onClick={test}>Choose File📁</button>
                    <input onChange={updateFormData} value={formData.battery} type="text" name="battery" placeholder="Battery Specs Here" />
                    <input onChange={updateFormData} value={formData.motor} type="text" name="motor" placeholder="Motor Specs Here" />
                    <input onChange={updateFormData} value={formData.gear_ratio} type="text" name="gear_ratio" placeholder="Gear Ratio Here" />
                    <input onChange={updateFormData} value={formData.top_speed} type="number" name="top_speed" placeholder="Top Speed Here" />
                </div>
                <div className="submit-button">
                    <button type="submit" value="Add Eboard">Submit Post</button>
                </div>
            </form>
        </div>
    )
}

export default NewEboardsForm;