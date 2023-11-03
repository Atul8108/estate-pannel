import React, { useEffect, useState } from 'react'
import { BsBuildingFillCheck, BsFillTelephoneFill, BsThreeDots } from 'react-icons/bs'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import agent4 from "../../assets/images/profileImage/ImageAgent 4.svg"
import agent2 from "../../assets/images/profileImage/ImageAgent2.svg"
import agent3 from "../../assets/images/profileImage/ImageAgent3.svg"
import agent5 from "../../assets/images/profileImage/ImageAgent5.png"
import agent1 from "../../assets/images/profileImage/agent1.svg"
import { Link } from 'react-router-dom'


const AgentListCard = () => {
  const [data, setData] = useState([
    {
      name: "Karen Eilla Boyette",
      agentType: "Real-Estate Agent",
      email: "kareneboyette@armyspy.com",
      phonenumber: "+5023244194",
      location: "Manchester",
      numberOfProperty: 10,
      img:agent2,
      agentId:1
    },
    {
      name: "Walter Devid Moye",
      agentType: "Real-Estate Agent",
      email: "walterdevidmoye@armyspy.com",
      phonenumber: "+4573244147",
      location: "Chicago, Canada",
      numberOfProperty: 10,
      img:agent3,
      agentId:3
    },
    {
      name: "David Smith Raddy",
      agentType: "Real-Estate Agent",
      email: "kareneboyette@armyspy.com",
      phonenumber: "+5843247835",
      location: "Manchester",
      numberOfProperty: 11,
      img:agent4,
      agentId:5
    },
    {
      name: "Devid Moye",
      agentType: "Real-Estate Agent",
      email: "walterdevidmoye@armyspy.com",
      phonenumber: "+4573244147",
      location: "Chicago, Canada",
      numberOfProperty: 20,
      img:agent5,
      agentId:111
    },
    {
      name: "Boyette Devid Moye",
      agentType: "Real-Estate Agent",
      email: "walteoye@armyspy.com",
      phonenumber: "+4573244147",
      location: "Chicago, Canada",
      numberOfProperty: 50,
      img:agent1,
      agentId:8
    },
    {
      name: "Moye",
      agentType: "Real-Estate Agent",
      email: "walteoye@armyspy.com",
      phonenumber: "+4573244147",
      location: "Chicago, Canada",
      numberOfProperty: 50,
      img:agent3,
      agentId:13
    },
    {
      name: "Walter Devid Moye",
      agentType: "Real-Estate Agent",
      email: "walterdevidmoye@armyspy.com",
      phonenumber: "+4573244147",
      location: "Chicago, Canada",
      numberOfProperty: 10,
      img:agent1,
      agentId:17
    },
    {
      name: "David Smith Raddy",
      agentType: "Real-Estate Agent",
      email: "kareneboyette@armyspy.com",
      phonenumber: "+5843247835",
      location: "Manchester",
      numberOfProperty: 11,
      img:agent3,
      agentId:12
    }
  ])


  
  localStorage.setItem("agentData",JSON.stringify(data))
  console.log(data)
  return (
    <>

      {
        data?.map((item, index) => {
          return (
            <Link key={item.agentId} to={"/agent/details/" + item?.agentId} style={{ textDecoration: "none" }}>
              <div className="agent-list-card">
                <div className="agent-info">
                  <img src={item.img} alt="" />
                  <div className="agent-info-left" >
                    <div className="d-flex" style={{ justifyContent: "space-between" }}>
                      <p style={{ fontSize: "25px", fontWeight: "600" }}>{item?.name}</p>
                      <button style={{ border: "none", backgroundColor: "var(--white-color)", color: "var(--second-text-color)" }}><BsThreeDots /></button>
                    </div>
                    <p className='agent-info-left-p-style'>{item?.agentType}</p>

                    <div className="agent-info-left-subcontent">
                      <div className="row" >
                        <div className="col-8">
                          <p className='agent-info-left-p-style'><MdEmail />&nbsp;&nbsp;{item?.email}</p>
                        </div>
                        <div className="col">
                          <p className='agent-info-left-p-style'><MdLocationOn />&nbsp;&nbsp;{item?.location}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-8">
                          <p className='agent-info-left-p-style'><BsFillTelephoneFill />&nbsp;&nbsp;{item?.phonenumber}</p>
                        </div>
                        <div className="col-4">
                          <p className='agent-info-left-p-style'><BsBuildingFillCheck />&nbsp;&nbsp;{item?.numberOfProperty} Properties</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )
        })
      }

    </>
  )
}

export default AgentListCard