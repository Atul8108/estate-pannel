import axios from "axios";
import React, { useEffect, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { BiSolidCheckCircle } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import Header from "../../components/Header/Header";
import Pagination from "../../components/Pagination/Pagination";
import "./Property.css";
import { Link } from "react-router-dom";
import { PROPERTY } from "../../Api/localStorage";
import { db } from "../../firebase"
import { collection, addDoc } from "firebase/firestore";
import { doc, setDoc, getDocs, onSnapshot } from "firebase/firestore";

const Property = () => {
  const [category, setCategory] = useState();
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);

  useEffect(() => {
    fetchData()
  }, [])

  // fetching the all data from the firebase database 
  async function fetchData() {
    const property = await onSnapshot(collection(db, "estate admin pannel"), (snapShot) => {
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
  // useEffect(() => {
  //   const apiUrl = "/api";

  //   const graphqlQuery = {
  //     query: `
  //       fragment PR on Property {
  //         coverImage {
  //           src
  //           alt
  //           videoUrl
  //         }
  //         propertyType
  //         listingId
  //         title
  //         subtitle
  //         isActiveProperty
  //         displayPrice {
  //           value
  //           displayValue
  //           unit
  //           deposit
  //         }
  //         address {
  //           address
  //           url
  //           detailedPropertyAddress {
  //             url
  //             val
  //           }
  //           distanceFromEntity
  //         }
  //         url
  //         promotions
  //         coords
  //         tags
  //         meta
  //         brands {
  //           name
  //         }
  //         sellers {
  //           ...BS
  //           phone {
  //             partialValue
  //           }
  //         }
  //       }
  //       fragment BS on User {
  //         name
  //         id
  //         image
  //         firmName
  //         url
  //         type
  //         isPrime
  //         isPaid
  //         designation
  //       }
  //       query(
  //         $cityId: String
  //         $poly: String
  //         $visitedPolygons: [String]
  //         $visitedProjects: [String]
  //       ) {
  //         audienceMaximizerProperties(
  //           cityId: $cityId
  //           poly: $poly
  //           visitedPolygons: $visitedPolygons
  //           visitedProjects: $visitedProjects
  //         ) {
  //           totalCount
  //           properties {
  //             ...PR
  //             updatedAt
  //             socialUrgency {
  //               msg
  //             }
  //             socialContext {
  //               msg
  //             }
  //           }
  //         }
  //       }
  //     `,
  //     variables: {
  //       cityId: "90d5af399d7256af0694",
  //       poly: "cfd49c20e16ab8f21a81",
  //       visitedPolygons: [],
  //       visitedProjects: [],
  //     },

  //   };

  //   axios
  //     .post(apiUrl, graphqlQuery)
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = data?.slice(firstPostIndex, lastPostIndex);

  function handleSelect(e) {
    setCategory(e);
    console.log("working!!")
  }

  return (
    <>
      <section className="main-layout">
        <Header />
        <div className="page-content">
          <div className="page-content-container">
            <div
              className="d-flex"
              style={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <h4>Property List</h4>
              <Link to="/property/add_property">
                <button className="btn btn-primary m-0">+ Add Property</button>
              </Link>
            </div>
            <div className="propertylist-container">
              <div className="row" style={{ marginBottom: "30px" }}>
                <div className="col-3">
                  <form className="form">
                    <button>
                      <svg
                        className="m-0"
                        width="17"
                        height="16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-labelledby="search"
                      >
                        <path
                          d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                          stroke="currentColor"
                          strokeWidth="1.333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                    <input
                      className="input"
                      placeholder="Type your text"
                      required=""
                      type="text"
                    />
                    <button className="reset" type="reset">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </button>
                  </form>
                </div>
                {/* <div className="col-2">
                  <DropdownButton
                    className="propertylist-page-dropdown"
                    width="100%"
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
                <div className="col-2">
                  <DropdownButton
                    className="propertylist-page-dropdown"
                    width="100%"
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
                <div className="col-2">
                  <DropdownButton
                    className="propertylist-page-dropdown"
                    width="100%"
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
                <div className="col-2">
                  <DropdownButton
                    className="propertylist-page-dropdown"
                    width="100%"
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
                <div className="col-1">
                  <DropdownButton
                    className="propertylist-page-dropdown"
                    width="100%"
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
                </div> */}
              </div>

              <div className="property-item">
                <div
                  className="row"
                // style={{ height: "90vh" }}
                >
                  {currentPost?.map(
                    (item, index) => {
                      return (
                        <div className="w-50 col-lg-4" key={index}>
                          <div className="team-card">
                            <div className="right-info">
                              {
                                <img
                                  src={item?.image}
                                  alt={item?.propertyName}
                                  onError={({ currentTarget }) => {
                                    currentTarget.onerror = null;
                                    currentTarget.src = "https://media.istockphoto.com/id/1411304340/photo/two-modern-buildings-with-glass-windows-architecture-design-of-buildings-office-space-houses.jpg?s=1024x1024&w=is&k=20&c=X00czG-Ij796TcbNr35aMv3m7oXkIJ5h0L7VN5q_BPA=";
                                  }}
                                  style={{
                                    width: "100%",
                                    maxWidth: "250px",
                                    minWidth: "50px",
                                    height: "140px",
                                    objectFit: "cover",
                                    borderRadius: "10px",
                                  }}
                                />
                              }
                            </div>
                            <div className="left-info">
                              <p style={{ fontSize: "15px", fontWeight: 800, width: "fit-content", padding: "10px", backgroundColor: "var(--secondary-color)", color: "#475BE8", borderRadius: "12px" }}>{item?.propertyPrice}</p>
                              <p style={{ fontWeight: 800 }}>{item?.propertyName}</p>
                              <p style={{ fontWeight: 300 }}><SlLocationPin />{item?.location}</p>
                              {
                                item.tags ? <p style={{ fontWeight: 300 }}><BiSolidCheckCircle />{item?.tags}</p> : <p style={{ fontWeight: 300 }}>not verified</p>
                              }

                            </div>
                          </div>
                        </div>
                      );
                    }
                  )}

                </div>
              </div>
              <Pagination
                totalPost={data?.length}
                postsPerPage={postPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Property;
