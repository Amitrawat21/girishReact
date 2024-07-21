import React from "react";
import "./Description2.css";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import QueryBuilderSharpIcon from "@mui/icons-material/QueryBuilderSharp";
import GppGoodTwoToneIcon from "@mui/icons-material/GppGoodTwoTone";
const Description2 = () => {
  return (
    <div className="Description2-container">
      <div className="Descripttion2-wrapper">
        <div className="description-wrapper-left">
          <div className="left-descripion-top">
            <QuestionAnswerIcon style={{ width : '200px' , height : '90px' , color : ' #4e7fa1'}} />
            <h1>More Than 98.2%</h1>
            <p>of our graduates are either satisfied or extremely satisfied withBloomberg Prep</p>
          </div>
          <div className="left-descripion-bottom">
            <QueryBuilderSharpIcon style={{ width : '200px' , height : '90px' , color : ' #4e7fa1'}} />
            <h1>Save 100+ hours of your life</h1>
            <p>
              Students who complete at least 80% of our course spend only 179
              hours on average, compared with the 320* hours industry average.
            </p>
            <h5>* CFA Institute, June 2017</h5>
          </div>
        </div>
        <img src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios15-iphone12-pro-settings-cellular.png" />
        <div className="description-wrapper-right">
          <GppGoodTwoToneIcon style={{ width : '200px' , height : '90px' , color : ' #4e7fa1'}} />
          <h1>Industry-Leading Pass Insurance</h1>
          <p>
            Get 100% of your money back if you complete* our course and fail
            your exam. No questions asked.
          </p>
          <p>* 95% course completion required, terms and conditions apply</p>
        </div>
      </div>
    </div>
  );
};

export default Description2;
