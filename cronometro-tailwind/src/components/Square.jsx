import React from 'react'

const Square = ({ number }) => {
    return (
        <div className="w-40 h-40 bg-gradient-to-b from-purple-200 to-purple-500 rounded-2xl relative border-2 border-white" style={{ boxShadow: 'inset 0 -80px 80px rgba(0,0,0,0.3)' }}>
            {/* Número centralizado pixel-perfect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl font-bold text-white">
                {number}
            </div>
        </div>
    )
}


export default Square