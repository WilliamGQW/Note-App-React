import React from 'react'

function CardStyle({ children }) {
    return (
        <>
            <div className="card mb-3">
                <div className="card-body">
                    {children}
                </div>
            </div>
        </>
    )
}

export default CardStyle