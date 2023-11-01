import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import "./MyProfile.css"
import demopic from "../../assets/images/demopic.svg"
import AGENTDATA from "../../Api/localStorage"
import PropertyList from '../../components/PropertyList/PropertyList'
import { Dropdown, DropdownButton } from 'react-bootstrap'

const MyProfile = () => {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]) || null);
    }

    const [category, setCategory] = useState();

    function handleSelect(e) {
      setCategory(e);
    }
  
    return (
        <>
            <section className="main-layout">
                <Header />
                <div className='page-content'>
                    <div className="page-content-container">
                        <h3>My Profile</h3>
                        <div className="myprofile-container">
                            <div className="right-img-container" >
                                <img src={demopic} alt='' />
                                <input type="file" onChange={handleChange} placeholder='Change Photo' />

                            </div>
                            <div className="profile-img">
                                {
                                    file?.length ? <img src={file} alt={file.name} /> : <img src="https://cdn.dribbble.com/users/2105015/screenshots/5908543/media/48e47ad5a8b1ea3a387ec5b2187c0ce6.png" alt="img" />
                                }
                            </div>
                            <div className="left-input-container">
                                <p style={{fontSize:"30px",fontWeight:"500", marginBottom:"10px"}}>Karen Eilla Boyette</p>
                                <p className='m-0'>Admin</p>
                                <form>
                                    <label>Address</label>
                                    <input type="text" className="text" />
                                    <label>Phone Number</label>
                                    <input type='number' className='PhoneNumber' maxLength={10} placeholder='1234567890' required />
                                    <label>Email</label>
                                    <input type="e-mail" className="email" placeholder='abc@gmail.com' />
                                </form>

                            </div>
                        </div>
                        <div className="property-list-container">
                            <div className="property-list-filter-btn">
                                <div className="left-content">
                                    <p>Property List</p>
                                </div>
                                <div className="right-content">
                                    <button type="submit" className="btn btn-primary m-0">
                                        Popular
                                    </button>
                                    <button type="submit" className="btn btn-primary m-0">
                                        Recommended
                                    </button>
                                    <button type="submit" className="btn btn-primary m-0">
                                        Newest
                                    </button>
                                    <DropdownButton
                                        alignright="true"
                                        title={category ?? "Most Recent"}
                                        id="dropdown-menu-align-left"
                                        onSelect={(e) => {
                                          handleSelect(e);
                                        }}
                                        style={{ color: "var(--Text-color-dark)" }}
                                    >
                                        <Dropdown.Item id="dropdown-menu-align-left" eventKey="ALL">
                                            All
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            id="dropdown-menu-align-left"
                                            eventKey="Most Recent"
                                        >
                                            Most Recent
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            id="dropdown-menu-align-left"
                                            eventKey="One Week"
                                        >
                                            One Week
                                        </Dropdown.Item>
                                    </DropdownButton>
                                </div>
                            </div>
                            <div className="view-property-container">
                                <PropertyList />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MyProfile