import React, { useState } from 'react'
import QRCode from "react-qr-code";
import "./Qrcode.css"
function Qrcode() {

    const [input, setInput] = useState('');

    return (
        <div>
            <h2>QR code Generator</h2>
            <div className='Qrcode-container'>
                <div className='input-container'>
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                </div>
                <div className='qrcode-block'>
                    < QRCode value={input} />
                </div>
            </div>
        </div >
    )
}

export default Qrcode