import React from "react";

const EnterpriseCustomer = () => {
  return (
    <div className="content_container">
      <div className="content_v">
        <img
          src="https://storage.googleapis.com/lumen5-site-images/website-assets/enterprise-support.png"
          alt="video-logo"
          style={{
            width: "640px",
            height: "400px",
            marginTop: "3rem",
            marginLeft: "-3rem",
          }}
        />
      </div>
      <div>
        <div className="fontawesome" style={{ backgroundColor: "#F8558E" }}>
          <i
            className="far fa-comments"
            style={{ fontSize: "40px", color: "white" }}
          ></i>
        </div>
        <div className="content_span">
          <span>
            Priority support, customer
            <br />
            success, and continuous
            <br />
            training.
          </span>
        </div>
        <div className="explore-para">
          Our strategic Customer Success team has worked with hundreds of brands
          on implementation and adoption. We have a strong track record of
          helping users across all departments of all enterprises become video
          creation experts. Paired with our easy-peasy UI and AI, your team will
          be pumping out expert eye catching videos in days.
        </div>
        <div className="explore-para">
          Onboarding is just the beginning. We'll team up with you throughout
          our partnership to offer video analysis, creative direction, and
          industry best practices to help you continuously push the boundaries
          of producing more effective video content that actually generates
          results and drives growth. We got you.
        </div>
      </div>
    </div>
  );
};

export default EnterpriseCustomer;
