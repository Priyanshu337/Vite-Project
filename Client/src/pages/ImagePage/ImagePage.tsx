import React from 'react'
import ShowImage from '../../component/ShowImage/ShowImage'
import "./ImagePage.css"

interface imgDisp {
    value: any
}

function ImagePage({ value }: imgDisp) {
    return (
        <div className='image-class'>
            <p className='heading-container'>This is image page</p>
            <ShowImage val={value} />
        </div>
    )
}

export default ImagePage;