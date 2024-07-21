import React from "react";
import "./Description.css";
import GridViewIcon from "@mui/icons-material/GridView";
import CallSplitIcon from "@mui/icons-material/CallSplit";
import VideocamIcon from "@mui/icons-material/Videocam";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const Description = () => {
  return (
    <div className="Descripion">
      <div className="Description-wrapper">
        <img
          src="https://cdn.computercareers.org/wp-content/uploads/Dell-Chromebook-1-scaled.jpg"
          alt="Chromebook"
        />
        <h1>Choose Bloomberg Prep</h1>
        <div className="preps">
          <h1>See why students fall in love with Bloomberg</h1>
          <h1>Prep</h1>
          <h1>Who said learning can't be fun</h1>
        </div>
        <div className="all-suggestion">
          <div className="suggestions">
            <div className="suggestions-heading">
              <GridViewIcon
                style={{
                  backgroundColor: "#58d5f4",
                  width: "50px",
                  height: "50px",
                  color: "black",
                  padding: "12px",
                  borderRadius: "25px",
                }}
              />
              <h2>All the Material You Need</h2>
            </div>
            <p>
              Micro-lessons covering the entire curriculum, up to 10 simulation
              exams, and 10,000 practice questions. That’s double the
              competition! Plus, our Level I Pre-Reading course is 100% free, no
              purchase needed.
            </p>
          </div>
          <div className="suggestions">
            <div className="suggestions-heading">
              <CallSplitIcon
                style={{
                  backgroundColor: "yellow",
                  width: "50px",
                  height: "50px",
                  color: "black",
                  padding: "12px",
                  borderRadius: "25px",
                }}
              />
              <h2>Adaptive Learning</h2>
            </div>
            <p>
              Our AI software analyzes your performance and focuses on your
              target areas. The more you study, the more customized it becomes.
            </p>
          </div>

          <div className="suggestions">
            <div className="suggestions-heading">
              <VideocamIcon
                style={{
                  backgroundColor: "#11ffd3",
                  width: "50px",
                  height: "50px",
                  color: "black",
                  padding: "12px",
                  borderRadius: "25px",
                }}
              />
              <h2>Adaptive Learning</h2>
            </div>
            <p>
              Our AI software analyzes your performance and focuses on your
              target areas. The more you study, the more customized it becomes.
            </p>
          </div>

          <div className="suggestions">
            <div className="suggestions-heading">
              <ChatBubbleOutlineIcon
                style={{
                  backgroundColor: " #b882da",
                  width: "50px",
                  height: "50px",
                  color: "black",
                  padding: "12px",
                  borderRadius: "25px",
                }}
              />
              <h2>Adaptive Learning</h2>
            </div>
            <p>
              Our AI software analyzes your performance and focuses on your
              target areas. The more you study, the more customized it becomes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
