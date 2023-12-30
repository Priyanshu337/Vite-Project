import React from 'react'
import ShowImage from '../../component/ShowImage/ShowImage'
import "./ImagePage.css"

interface imgDisp {
    value: any
}

function ImagePage({ value }: imgDisp) {
    return (
        <div className='image-class'>
            <h3>This is image page</h3>
            <ShowImage val={value} />
        </div>
    )
}

export default ImagePage;