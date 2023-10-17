import React from 'react'

function Cards(props) {
    console.log(props);
    const { image, para, title } = props
    return (
        <>
            <div className='card'>
                <img src={image} alt="" />


                <div className='title'>
                    <h3>{title}</h3>
                    <p>{para}</p>

                </div>
            </div>
        </>
    )
}

export default Cards