import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import "./AddProperty.css"
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { PROPERTY } from '../../Api/localStorage'
import { db } from "../../firebase"
import { collection, addDoc } from "firebase/firestore";
import { doc, setDoc, getDocs,onSnapshot } from "firebase/firestore";

const AddProperty = () => {
    const [category, setCategory] = useState();
    const [file, setFile] = useState();
    const [data, setData] = useState()

    useEffect(() => {
        setData(JSON.parse(PROPERTY()) || [])
    }, [])

    useEffect(() => {
        fetchData()
    }, [])

    // fetching the all data from the firebase database 
    async function fetchData() {
        // const snapShot = await getDocs(collection(db, "estate admin pannel"));

        // const propertyList = snapShot.docs.map((doc) => {
        //     return {
        //         id: doc.id,
        //         ...doc.data()
        //     }
        // })
        // console.log(propertyList)
        // setData(propertyList)

        const property = await onSnapshot(collection(db ,"estate admin pannel"),(snapShot)=>{
            const propertyList = snapShot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                console.log(propertyList)
                setData(propertyList)
        }) 
    }

    async function handleSubmit() {
        let localData = []
        let propertyName = document.getElementById("propertyName")
        let propertyDescription = document.getElementById("propertyDescription")
        let propertyPrice = document.getElementById("propertyPrice")
        let location = document.getElementById("location")
        // let propertyInfo = {
        //     "id": new Date().valueOf(),
        //     "propertyName": propertyName?.value,
        //     "propertyDescription": propertyDescription?.value,
        //     "category": category,
        //     "propertyPrice": "$" + propertyPrice?.value,
        //     "location": location?.value,
        //     "image": file
        // }
        // localData = [...data, propertyInfo];
        // setData(localData)
        // localStorage.setItem("PropertyDetails", JSON.stringify(localData))


        // Adding data to firebase removing the localhost data 
        const docRef = await addDoc(collection(db, "estate admin pannel"), {
            // "id": new Date().valueOf(),
            "propertyName": propertyName?.value,
            "propertyDescription": propertyDescription?.value,
            "category": category,
            "propertyPrice": "$" + propertyPrice?.value,
            "location": location?.value,
            "image": file
        });
        propertyName.value = null;
        propertyDescription.value = null;
        setCategory()
        propertyPrice.value = null;
        location.value = null;
    }

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
                            <button className='btn btn-primary' onClick={() => { handleSubmit() }}>Submit</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddProperty