import React from 'react'

function Form() {
    return (
        <>
            <hr />
            <div className="col-md-8 offset-2 mt-5">
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea id="description" className="form-control" name="description" cols="30" rows="10"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div >
            <hr />
        </>
    )
}

export default Form
