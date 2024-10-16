import React from "react";
import "./ReadMore.css"; // Make sure to include the styles in this CSS file
import articleImage from "../../Assets/PageCovers/cover\ 03.jpg"; // Assuming the image is in your assets folder

const ReadMore = () => {
  return (
    <div className="readmore-container">
      <div className="readmore-content">
        <h1 className="readmore-title">
          Global renewables company RES selects IFS Cloud to support operations
        </h1>
        <p className="readmore-upload-date">Uploaded 01 May 2024</p>
        <hr className="separator" />
        
        <img className="readmore-image" src={articleImage} alt="Article" />

        <div className="readmore-article-text">
          <p>
            London, UK, 1 October 2024 – IFS, the leading provider of enterprise
            cloud and Industrial AI software, today announced that TDC NET,
            Denmark’s largest provider of telecommunications infrastructure, has
            chosen to implement IFS Cloud to supercharge operational efficiencies
            across its business.
          </p>
          <p>
            A longstanding IFS customer, TDC Net will use the IFS Cloud for Field
            Service Management to streamline its workforce management (WFM)
            processes, including field service operations. Implementing IFS Cloud
            will also allow the Danish telco company to consolidate its WFM
            systems into a single platform, eliminating process duplication and
            controlling costs. IFS Cloud will also allow the Danish telco company
            to consolidate.
          </p>
          <p>
            IFS Cloud for Field Service Management including IFS Planning and
            Scheduling Optimization (IFS PSO) will allow TDC NET to assign the
            right technicians with the appropriate skills to the right jobs and
            dynamically schedule tasks based on real-time data such as technician
            availability, location, and traffic conditions. This enhanced
            efficiency is critical as TDC NET continues its mission to transition
            its nationwide network infrastructure from copper to fiber, implement
            IoT solutions, and adopt AI technologies – all in a sustainable way
            to reach the company’s net zero target in 2030.
          </p>
          <p>
            Beyond workforce management IFS Cloud will enable TDC NET to
            consolidate its wider IT operations, removing legacy infrastructure
            and reducing the number of current systems across the business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReadMore;
