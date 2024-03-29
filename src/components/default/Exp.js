import React, { useEffect, useState } from "react";
import "../../css/default/Exp.css";
import jobsJson from "../../content/jobs.json";
import ExpDesc from "./ExpDesc";

const Exp = () => {
  const [dispNum, setDispNum] = useState(1);
  const [data, setData] = useState({});

  useEffect(() => {
    setData(jobsJson.data[dispNum - 1]);
  }, [dispNum]);

  return (
    <div className="expComponent">
      <div className="expContainer">
        <div className="expHeaderText1">experience</div>
        <div className="expHeaderText2">places i've worked</div>
        <div className="expBody">
          <div className="expNavContainer">
            {jobsJson.data.map((expInfo, index) => (
              <button
                key={`${index} ${dispNum}`}
                className={
                  dispNum === index + 1
                    ? `expNavBtn expNavBtnActive`
                    : `expNavBtn`
                }
                onClick={() => {
                  setDispNum(index + 1);
                }}
              >
                {expInfo.company}
              </button>
            ))}
          </div>
          <ExpDesc data={data} />
        </div>
      </div>
    </div>
  );
};

export default Exp;
