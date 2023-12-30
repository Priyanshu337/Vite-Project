import React from 'react'
import { Link } from 'react-router-dom';
import "./HomePage.css"
function HomePage() {

    return (
        <div>
            <h3 style={{ color: "black" }}>Welcome to Home Page</h3>
            <div className='homepage-container'>
                <div className='homepage-child-container'>
                    <Link to="/Counter">
                        <div className='first-card'>
                            <div className='counter-container'>
                                <h3>Counter</h3>
                                <div>
                                    <p>Counter By Priyanshu</p>
                                </div>
                            </div>
                        </div>
                    </Link>


                    <Link to="/Multiverse">
                        <div className='secound-card'>
                            <div className='multiverse-container'>
                                <h3>Multiverse</h3>
                                <div>
                                    <p>Multiverse By Priyanshu</p>
                                </div>
                            </div>
                        </div>
                    </Link>


                    <Link to="/Qrcode">
                        <div className='third-card'>
                            <div className='Qrcode-container'>
                                <h3>QrCode</h3>
                                <div>
                                    <p>QR Code By Priyanshu</p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/TodoList">
                        <div className='third-card'>
                            <div className='Todolist-container'>
                                <h3>Todo-List</h3>
                                <div>
                                    <p>Todo-List By Priyanshu</p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <div className='fourth-card'>
                        <p>Hello4</p>
                    </div>
                    <div className='fifth-card'>
                        <p>Hello5</p>
                    </div>
                    <div className='sixth-card'>
                        <p>Hello6</p>
                        <p>World</p>

                    </div>
                </div>
                {/* <input type='text'> </input> */}
            </div>
        </div>
    )
}

export default HomePage;