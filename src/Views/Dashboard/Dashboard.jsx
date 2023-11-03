import React, { useState } from "react";
import Header from "../../components/Header/Header";
import "./Dashboard.css";
import ColumnChart from "../../components/Chart/ColumnChart";
import ProgressBar from "../../components/Chart/ProgressBar";
import LineProgress from "../../components/Chart/LineProgress";
import PropertyList from "../../components/PropertyList/PropertyList";
import { Dropdown, DropdownButton } from "react-bootstrap";

const Dashboard = () => {
  const [category, setCategory] = useState();

  function handleSelect(e) {
    setCategory(e);
  }



  return (
    <>
      <section className="main-layout">
        <Header />
        <div className="page-content">
          <div className="page-content-container">
            <h4>Dashboard</h4>
            <div className="property-card-container">
              <div className="container-fluid">
                <div className="row">
                  <div className="col p-0">
                    <div className="property-cards">
                      <div className="property-card-right">
                        <span>Property for sale</span>
                        <h3>1,200</h3>
                      </div>
                      <div className="property-card-left">
                        <ProgressBar />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="property-cards">
                      <div className="property-card-right">
                        <span>Property for sale</span>
                        <h3>1,200</h3>
                      </div>
                      <div className="property-card-left">
                        <ProgressBar />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="property-cards">
                      <div className="property-card-right">
                        <span>Property for sale</span>
                        <h3>1,200</h3>
                      </div>
                      <div className="property-card-left">
                        <ProgressBar />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="property-cards">
                      <div className="property-card-right">
                        <span>Property for sale</span>
                        <h3>1,200</h3>
                      </div>
                      <div className="property-card-left">
                        <ProgressBar />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <div className="column-chart-conatiner">
                  <ColumnChart />
                </div>
              </div>
              <div className="col-4">
                <div className="column-chart-conatiner">
                  <LineProgress />
                </div>
              </div>
            </div>
            {/* <div className="" style={{ border: "2px solid black" }}></div> */}
            <div className="property-list-container">
              <div className="property-list-filter-btn">
                <div className="left-content">
                  <p>Property List</p>
                </div>
                <div className="right-content">
                  <button type="button" className="btn btn-primary m-0">
                    Popular
                  </button>
                  <button type="button" className="btn btn-primary m-0">
                    Recommended
                  </button>
                  <button type="button" className="btn btn-primary m-0">
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
                <div style={{ width: "100%" }}>
                  <PropertyList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
