import React from 'react'

function Loading() {
    return (
        <div style={{ textAlign: "center" }}>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loading