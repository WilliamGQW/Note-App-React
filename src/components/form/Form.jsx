import React, { useState, useEffect } from 'react';

function Form({ store, currentSelected }) {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    // getting title from Form and change title state
    const getTitleFormInput = (e) => {
        // console.log(e.currentTarget.value);
        if (e.currentTarget.value !== null && e.currentTarget.value !== '') {
            setTitle(e.currentTarget.value);
        }
    }

    // getting description from Form and change description state
    const getDescriptionForm = (e) => {
        if (e.currentTarget.value !== null && e.currentTarget.value !== '') {
            setDescription(e.currentTarget.value); //change state 
        }
    }

    // processing/storing a new list
    const processingForm = (e) => {
        e.preventDefault(); // prevent the default form submission
        store({
            id: Date.now(),
            text: title,
            description: description
        });
    }

    useEffect(() => {
        if (currentSelected !== null && currentSelected !== '' && currentSelected) {
            // console.log("shit" + currentSelected);
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
                            value={title || ''}
                            onChange={getTitleFormInput} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea id="description"
                            className="form-control"
                            name="description"
                            cols="30"
                            rows="10"
                            value={description || ''}
                            onChange={getDescriptionForm}
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
