import React from "react";
import { Bookmark } from "lucide-react";

const Card = ({ job }) => {
  return (
    <div className="parent">
      <div className="card">

        {/* Top Section */}
        <div className="top">
          <img
            src={job.brandLogo}
            alt={`${job.companyName} logo`}
          />

          <button>
            Save <Bookmark size={18} />
          </button>
        </div>

        {/* Center Section */}
        <div className="center">
          <h3>
            {job.companyName}{" "}
            <span>{job.datePosted}</span>
          </h3>

          <h2>{job.post}</h2>

          <div>
            <h4>{job.tag1}</h4>
            <h4>{job.tag2}</h4>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bottom">
          <div>
            <h3>{job.pay}</h3>
            <p>{job.location}</p>
          </div>

          <button>Apply now</button>
        </div>

      </div>
    </div>
  );
};

export default Card;