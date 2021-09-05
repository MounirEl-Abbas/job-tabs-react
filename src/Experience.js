import { FaAngleDoubleRight } from "react-icons/fa";

const Experience = ({ title, company, dates, duties }) => {
  // console.log(`props`, title, company, dates, duties);

  return (
    <article className="job-info">
      <h2>{title}</h2>
      <h4>{company}</h4>
      <p className="job-date">{dates}</p>

      {duties && //If undefined (for a second -- first render), it breaks
        duties.map((duty) => {
          return (
            <div className="job-desc">
              <FaAngleDoubleRight className="arrow-icon" />

              <p>{duty}</p>
            </div>
          );
        })}
    </article>
  );
};

export default Experience;
