import React from 'react'
import Header from '../../components/Header/Header'
import "./MyProfile.css"
import demopic from "../../assets/images/demopic.svg"

const MyProfile = () => {
    return (
        <>
            <section className="main-layout">
                <Header />
                <div className='page-content'>
                <div className="page-content-container">
                    <h3>My Profile</h3>
                    <div className="myprofile-container">
                        <div className="right-img-container">
                            <img src={demopic} alt='' />
                        </div>
                        <div className="left-input-container">
                            {/* name,admin,address, 3 input field address,phonenumber,email, and ... */}
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default MyProfile