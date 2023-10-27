import React from "react";
import "./LineProgressBar.css";

const LineProgress = () => {
  return (
    <>
      <div className="progress-bar">
        <h4>Property Referrals</h4>
        <div className="stack">
          <div className="bar">
            <div className="label">Social Media</div>
            <div className="percentage">75%</div>
          </div>
          <div className="progress-container">
            <div
              className="progress-bar-fill"
              style={{
                width: " 75%",
                backgroundColor: "var(--secondary-color-four)",
                borderRadius: "10px",
              }}
            ></div>
          </div>
        </div>
        <div className="stack">
          <div className="bar">
            <div className="label">Marketpaces</div>
            <div className="percentage">45%</div>
          </div>
          <div className="progress-container">
            <div
              className="progress-bar-fill"
              style={{
                width: " 45%",
                backgroundColor: "var(--secondary-color-four)",
                borderRadius: "10px",
              }}
            ></div>
          </div>
        </div>
        <div className="stack">
          <div className="bar">
            <div className="label">Websites</div>
            <div className="percentage">55%</div>
          </div>
          <div className="progress-container">
            <div
              className="progress-bar-fill"
              style={{
                width: " 55%",
                backgroundColor: "var(--secondary-color-four)",
                borderRadius: "10px",
              }}
            ></div>
          </div>
        </div>

        <div className="stack">
          <div className="bar">
            <div className="label">Digital Ads</div>
            <div className="percentage">25%</div>
          </div>
          <div className="progress-container">
            <div
              className="progress-bar-fill"
              style={{
                width: " 25%",
                backgroundColor: "var(--secondary-color-four)",
                borderRadius: "10px",
              }}
            ></div>
          </div>
        </div>
        <div className="stack">
          <div className="bar">
            <div className="label">Others</div>
            <div className="percentage">80%</div>
          </div>
          <div className="progress-container">
            <div
              className="progress-bar-fill"
              style={{
                width: " 85%",
                backgroundColor: "var(--secondary-color-four)",
                borderRadius: "10px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LineProgress;
