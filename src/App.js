import Experience from "./Experience";
import Tabs from "./Tabs";
import React, { useState, useEffect } from "react";

function App() {
  let companyExperiences = [];
  const url = "https://course-api.com/react-tabs-project";
  const [jobExperience, setJobExperience] = useState("");
  const [companyNames, setCompanyNames] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async (job = "TOMMY") => {
    const data = await fetch(url);
    const experienceData = await data.json();

    //Default is TOMMY, otherwise, see changeExperience() below
    let experienceChosen = experienceData.filter(
      ({ company }) => company === job
    );
    setJobExperience(experienceChosen[0]);
    /***********************************************/

    //Add experience to array, and pass as prop to tabs
    experienceData.map((exp) => {
      companyExperiences.push(exp.company);
    });
    setCompanyNames(companyExperiences);
    /***********************************************/
  };

  //When another Company Tab is Chosen
  const changeExperience = (companyName) => {
    getData(companyName);
  };

  return (
    <div className="container">
      <h1>Experience</h1>
      <section className="job-container">
        <Tabs
          currentTab={jobExperience.company}
          companyNames={companyNames}
          changeExperience={changeExperience}
        />
        <Experience key={jobExperience.order} {...jobExperience} />
      </section>
    </div>
  );
}

export default App;
