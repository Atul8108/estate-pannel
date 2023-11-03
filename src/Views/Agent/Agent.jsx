import React from 'react'
import Header from '../../components/Header/Header'
import AgentListCard from '../../components/agent-list-card/AgentListCard'
import "./AgentStyle/Agent.css"

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
              <button className="btn btn-primary m-0">+ Add Agent</button>
            </div>
           <AgentListCard/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Agent