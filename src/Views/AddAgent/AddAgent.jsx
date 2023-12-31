import React, { useState } from 'react'
import Header from '../../components/Header/Header';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const AddAgent = () => {
    const [category, setCategory] = useState();
    const [file, setFile] = useState();

    function handleSelect(e) {
        setCategory(e);

    }

    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  return (
    <>
         <section className="main-layout">
                <Header />
                <div className='page-content'>
                    <div className="addproperty-container">
                        <h3>Add Property</h3>
                        <div className='addproperty-input-container'>
                            <p>Enter property name</p>
                            <input type="text" id='propertyName' className="text" />
                            <p>Property Description</p>
                            <textarea type="text-area" id="propertyDescription" className="description" style={{ width: "100%", borderRadius: "10px", marginBottom: "30px", padding: "10px" }}>
                            </textarea>
                            <div className='d-flex'>
                                <DropdownButton
                                    alignright="true"
                                    title={category ?? "All"}
                                    id="dropdown-menu"
                                    onSelect={(e) => {
                                        handleSelect(e);
                                    }}
                                    style={{ color: "var(--Text-color-dark)" }}
                                >
                                    <Dropdown.Item id="dropdown-menu-align-left" eventKey="ALL" style={{ width: "100px" }}>
                                        All
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        id="dropdown-menu-align-left"
                                        eventKey="Apartment"
                                    >
                                        Apartment
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        id="dropdown-menu-align-left"
                                        eventKey="Villa"
                                    >
                                        Villa
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        id="dropdown-menu-align-left"
                                        eventKey="Farmhouse"
                                    >
                                        Farmhouse
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        id="dropdown-menu-align-left"
                                        eventKey="Townhouse"
                                    >
                                        Townhouse
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        id="dropdown-menu-align-left"
                                        eventKey="Duptex"
                                    >
                                        Duptex
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        id="dropdown-menu-align-left"
                                        eventKey="Studio"
                                    >
                                        Studio
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        id="dropdown-menu-align-left"
                                        eventKey="Chalet"
                                    >
                                        Chalet
                                    </Dropdown.Item>
                                </DropdownButton>
                                <input type="number" id='propertyPrice' className="number" placeholder='$ Enter Property Price' style={{ marginLeft: "20px" }} />
                            </div>
                            <p>Enter Location</p>
                            <input type="text" id='location' className="text" />
                            <input type="file" id="image" className="file" onChange={handleChange} />
                            {/* <button className='btn btn-primary' onClick={() => { handleSubmit() }}>Submit</button> */}
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default AddAgent