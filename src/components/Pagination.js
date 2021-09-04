import React from 'react'

const Pagination = ({ totalPages, handleClick }) => {
    const pages = [...Array(totalPages).keys()].map(num => num + 1)
    console.log(pages)

    return (
        <div>
            {pages.map(num => (
                <button onClick={() => handleClick(num)} key={num}>
                    {num}
                </button>
            ))}
        </div>
    )
}

export default Pagination
