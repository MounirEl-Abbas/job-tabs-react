const Tabs = ({ companyNames, changeExperience, currentTab }) => {
  return (
    <nav className="button-container">
      <ul>
        {companyNames &&
          companyNames.map((eachCompany) => (
            <li
              onClick={() => changeExperience(eachCompany)}
              className={`job-btn ${
                currentTab === eachCompany && "active-btn"
              }`}
            >
              {eachCompany}
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Tabs;
