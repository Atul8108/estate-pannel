import React from 'react'
import { BsBuildingFillCheck, BsFillTelephoneFill, BsThreeDots } from 'react-icons/bs'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import agentProfile from "../../assets/images/PropertyListImage/architecture.jpg"
import Header from '../../components/Header/Header'
import "./Agent.css"
import agent1 from "../../assets/images/profileImage/agent1.svg"
import agent2 from "../../assets/images/profileImage/ImageAgent2.svg"
import agent3 from "../../assets/images/profileImage/ImageAgent3.svg"
import agent4 from "../../assets/images/profileImage/ImageAgent 4.svg"
import agent5 from "../../assets/images/profileImage/ImageAgent5.png"

const Agent = () => {
  return (
    <>
      <section className="main-layout">
        <Header />
        <div className='page-content'>
          <div className="agent-page-container">
            <div
              className="d-flex"
              style={{ justifyContent: "space-between", alignItems: "center", marginBottom: "25px" }}
            >
              <h3>Agents List</h3>
              <button className="btn btn-primary m-0">+ Add Property</button>
            </div>
            <div className="agent-list-card">
              <div className="agent-info">
                <img src={agent1} alt="" />
                <div className="agent-info-left">
                  <div className="d-flex" style={{justifyContent:"space-between"}}>
                    <p style={{fontSize:"25px",fontWeight:"600"}}>Karen Eilla Boyette</p>
                    <button style={{border:"none", backgroundColor:"var(--white-color)",color:"var(--second-text-color)"}}><BsThreeDots/></button>
                  </div>
                  <p className='agent-info-left-p-style'>Real-Estate Agent</p>
                  
                  <div className="agent-info-left-subcontent">
                    <div className="row">
                      <div className="col-8">
                        <p className='agent-info-left-p-style'><MdEmail />&nbsp;&nbsp;kareneboyette@armyspy.com</p>
                      </div>
                      <div className="col">
                        <p className='agent-info-left-p-style'><MdLocationOn />&nbsp;&nbsp;Manchester</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-8">
                        <p className='agent-info-left-p-style'><BsFillTelephoneFill />&nbsp;&nbsp;+502-324-4194</p>
                      </div>
                      <div className="col-4">
                        <p className='agent-info-left-p-style'><BsBuildingFillCheck />&nbsp;&nbsp;15 Properties</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="agent-list-card">
              <div className="agent-info">
                <img src={agent2} alt="" />
                <div className="agent-info-left">
                <div className="d-flex" style={{justifyContent:"space-between"}}>
                    <p style={{fontSize:"25px",fontWeight:"600"}}>Karen Eilla Boyette</p>
                    <button style={{border:"none", backgroundColor:"var(--white-color)",color:"var(--second-text-color)"}}><BsThreeDots/></button>
                  </div>
                  <p className='agent-info-left-p-style'>Real-Estate Agent</p>
                  <div className="agent-info-left-subcontent">
                    <div className="row">
                      <div className="col-8">
                        <p className='agent-info-left-p-style'><MdEmail />&nbsp;&nbsp;kareneboyette@armyspy.com</p>
                      </div>
                      <div className="col">
                        <p className='agent-info-left-p-style'><MdLocationOn />&nbsp;&nbsp;Manchester</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-8">
                        <p className='agent-info-left-p-style'><BsFillTelephoneFill />&nbsp;&nbsp;+502-324-4194</p>
                      </div>
                      <div className="col-4">
                        <p className='agent-info-left-p-style'><BsBuildingFillCheck />&nbsp;&nbsp;15 Properties</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* remove it when api ready */}
              
            </div>
            <div className="agent-list-card">
              <div className="agent-info">
                <img src={agent3} alt="" />
                <div className="agent-info-left">
                <div className="d-flex" style={{justifyContent:"space-between"}}>
                    <p style={{fontSize:"25px",fontWeight:"600"}}>Karen Eilla Boyette</p>
                    <button style={{border:"none", backgroundColor:"var(--white-color)",color:"var(--second-text-color)"}}><BsThreeDots/></button>
                  </div>
                  <p className='agent-info-left-p-style'>Real-Estate Agent</p>
                  <div className="agent-info-left-subcontent">
                    <div className="row">
                      <div className="col-8">
                        <p className='agent-info-left-p-style'><MdEmail />&nbsp;&nbsp;kareneboyette@armyspy.com</p>
                      </div>
                      <div className="col">
                        <p className='agent-info-left-p-style'><MdLocationOn />&nbsp;&nbsp;Manchester</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-8">
                        <p className='agent-info-left-p-style'><BsFillTelephoneFill />&nbsp;&nbsp;+502-324-4194</p>
                      </div>
                      <div className="col-4">
                        <p className='agent-info-left-p-style'><BsBuildingFillCheck />&nbsp;&nbsp;15 Properties</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* remove it when api ready */}
              
            </div>
            <div className="agent-list-card">
              <div className="agent-info">
                <img src={agent4} alt="" />
                <div className="agent-info-left">
                <div className="d-flex" style={{justifyContent:"space-between"}}>
                    <p style={{fontSize:"25px",fontWeight:"600"}}>Karen Eilla Boyette</p>
                    <button style={{border:"none", backgroundColor:"var(--white-color)",color:"var(--second-text-color)"}}><BsThreeDots/></button>
                  </div>
                  <p className='agent-info-left-p-style'>Real-Estate Agent</p>
                  <div className="agent-info-left-subcontent">
                    <div className="row">
                      <div className="col-8">
                        <p className='agent-info-left-p-style'><MdEmail />&nbsp;&nbsp;kareneboyette@armyspy.com</p>
                      </div>
                      <div className="col">
                        <p className='agent-info-left-p-style'><MdLocationOn />&nbsp;&nbsp;Manchester</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-8">
                        <p className='agent-info-left-p-style'><BsFillTelephoneFill />&nbsp;&nbsp;+502-324-4194</p>
                      </div>
                      <div className="col-4">
                        <p className='agent-info-left-p-style'><BsBuildingFillCheck />&nbsp;&nbsp;15 Properties</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* remove it when api ready */}
              
            </div>
            <div className="agent-list-card">
              <div className="agent-info">
                <img src={agent5} alt="" />
                <div className="agent-info-left">
                <div className="d-flex" style={{justifyContent:"space-between"}}>
                    <p style={{fontSize:"25px",fontWeight:"600"}}>Karen Eilla Boyette</p>
                    <button style={{border:"none", backgroundColor:"var(--white-color)",color:"var(--second-text-color)"}}><BsThreeDots/></button>
                  </div>
                  <p className='agent-info-left-p-style'>Real-Estate Agent</p>
                  <div className="agent-info-left-subcontent">
                    <div className="row">
                      <div className="col-8">
                        <p className='agent-info-left-p-style'><MdEmail />&nbsp;&nbsp;kareneboyette@armyspy.com</p>
                      </div>
                      <div className="col">
                        <p className='agent-info-left-p-style'><MdLocationOn />&nbsp;&nbsp;Manchester</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-8">
                        <p className='agent-info-left-p-style'><BsFillTelephoneFill />&nbsp;&nbsp;+502-324-4194</p>
                      </div>
                      <div className="col-4">
                        <p className='agent-info-left-p-style'><BsBuildingFillCheck />&nbsp;&nbsp;15 Properties</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* remove it when api ready */}
              
            </div>
            <div className="agent-list-card">
              <div className="agent-info">
                <img src={agent3} alt="" />
                <div className="agent-info-left">
                <div className="d-flex" style={{justifyContent:"space-between"}}>
                    <p style={{fontSize:"25px",fontWeight:"600"}}>Karen Eilla Boyette</p>
                    <button style={{border:"none", backgroundColor:"var(--white-color)",color:"var(--second-text-color)"}}><BsThreeDots/></button>
                  </div>
                  <p className='agent-info-left-p-style'>Real-Estate Agent</p>
                  <div className="agent-info-left-subcontent">
                    <div className="row">
                      <div className="col-8">
                        <p className='agent-info-left-p-style'><MdEmail />&nbsp;&nbsp;kareneboyette@armyspy.com</p>
                      </div>
                      <div className="col">
                        <p className='agent-info-left-p-style'><MdLocationOn />&nbsp;&nbsp;Manchester</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-8">
                        <p className='agent-info-left-p-style'><BsFillTelephoneFill />&nbsp;&nbsp;+502-324-4194</p>
                      </div>
                      <div className="col-4">
                        <p className='agent-info-left-p-style'><BsBuildingFillCheck />&nbsp;&nbsp;15 Properties</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* remove it when api ready */}
              
            </div>
            <div className="agent-list-card">
              <div className="agent-info">
                <img src={agent1} alt="" />
                <div className="agent-info-left">
                <div className="d-flex" style={{justifyContent:"space-between"}}>
                    <p style={{fontSize:"25px",fontWeight:"600"}}>Karen Eilla Boyette</p>
                    <button style={{border:"none", backgroundColor:"var(--white-color)",color:"var(--second-text-color)"}}><BsThreeDots/></button>
                  </div>
                  <p className='agent-info-left-p-style'>Real-Estate Agent</p>
                  <div className="agent-info-left-subcontent">
                    <div className="row">
                      <div className="col-8">
                        <p className='agent-info-left-p-style'><MdEmail />&nbsp;&nbsp;kareneboyette@armyspy.com</p>
                      </div>
                      <div className="col">
                        <p className='agent-info-left-p-style'><MdLocationOn />&nbsp;&nbsp;Manchester</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-8">
                        <p className='agent-info-left-p-style'><BsFillTelephoneFill />&nbsp;&nbsp;+502-324-4194</p>
                      </div>
                      <div className="col-4">
                        <p className='agent-info-left-p-style'><BsBuildingFillCheck />&nbsp;&nbsp;15 Properties</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* remove it when api ready */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Agent