import React, { useState, useEffect } from 'react';

function Form({ store, currentSelected, cloningInitialized }) {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [isInputChanged, setInputChange] = useState(false);
    const [cloneInitFields, setCloneInitFields] = useState(true);

    // getting title from Form and change title state
    const getTitleFormInput = (e) => {
        // console.log(e.currentTarget.value);
        if (e.currentTarget.value !== null && e.currentTarget.value !== '') {
            setInputChange(true);
            setTitle(e.currentTarget.value);
        } else {
            setTitle('');
        }
    }

    // getting description from Form and change description state
    const getDescriptionForm = (e) => {
        if (e.currentTarget.value !== null && e.currentTarget.value !== '') {
            setInputChange(true);
            setDescription(e.currentTarget.value); //change state 
        } else {
            setDescription('');
        }
    }

    // processing/storing a new list
    const processingForm = (e) => {
        e.preventDefault(); // prevent the default form submissions
        store({
            id: Date.now(),
            text: title,
            description: description
        });
        setInputChange(false);
        setCloneInitFields(true);
        setTitle('');
        setDescription('');
    }

    // disable colone feature when user types something
    const setCloneToDisable = () => {
        setCloneInitFields(false);
    }


    useEffect(() => {
        // if user makes changes in the input
        if (isInputChanged && !cloningInitialized && !cloneInitFields) {
            return;
        }

        // if user click on clone btton, then select the selected item
        if (currentSelected !== null && currentSelected !== '' && currentSelected !== undefined && cloneInitFields) {
            let text = currentSelected[0].text;
            let description = currentSelected[0].description;
            setTitle(text);
            setDescription(description);
        }
    });

    return (
        <>
            <hr />
            <div className="col-md-8 offset-2 mt-5">
                <form onSubmit={processingForm}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text"
                            className="form-control"
                            id="title"
                            value={title || ''} // if we have title, pass that, otherwise ""
                            onChange={getTitleFormInput}
                            onClick={setCloneToDisable} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea id="description"
                            className="form-control"
                            name="description"
                            cols="30"
                            rows="10"
                            value={description || ''} // if we have description, pass that, otherwise ""
                            onChange={getDescriptionForm}
                            onClick={setCloneToDisable}
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div >
            <hr />
        </>
    )
}

export default Form
