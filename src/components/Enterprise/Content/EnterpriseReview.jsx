import React from "react";

const EnterpriseReview = () => {
  return (
    <div className="enterprise-review">
      <div className="enterprise-subreview">
        <div>
          <div className="review-report">
            <strong>Siemens</strong>
            <br />
            “One of the goals of the company is to help our customers in their
            digital transformation, Lumen5 helps us in getting more digital in
            our communications—that’s part of the digital transformation.”
          </div>
          <div className="enterprise-customer">
            <div>
              <img
                loading="lazy"
                className="user-thumbnail rounded-circle"
                src="https://storage.googleapis.com/lumen5-site-images/website-assets/guenter-siemens.jpeg"
              />
            </div>
            <div className="">
              <div>
                <strong>Guenter Gaugler</strong>
                <span>
                  <br />
                  Head of Content
                  <br />
                  Production
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="review-report">
            <strong>Mitsubishi</strong>
            <br />
            “Thanks to Lumen5, we have been able to cut down on time and costs
            for video making. We don’t have to go through a third party which
            speeds everything up and makes our work a lot easier.”
          </div>
          <div className="enterprise-customer">
            <div>
              <img
                loading="lazy"
                className="user-thumbnail rounded-circle"
                src="https://storage.googleapis.com/lumen5-site-images/website-assets/adrian-mitsubishi.jpg"
              />
            </div>
            <div className="">
              <div>
                <strong>Adrian Ngo</strong>
                <span>
                  <br />
                  Global Advertising
                  <br />
                  and Sponsorships
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="review-report">
            <strong>Cisco</strong>
            <br />
            “At Cisco we try to share lots of multimedia content and new types
            of content like memes, graphics and videos. And the videos by far
            give us the most engagement, thanks to Lumen5.”
          </div>
          <div className="enterprise-customer">
            <div>
              <img
                loading="lazy"
                className="user-thumbnail rounded-circle"
                src="https://storage.googleapis.com/lumen5-site-images/website-assets/eric-cisco.jpeg"
              />
            </div>
            <div className="">
              <div>
                <strong>Eric Chu</strong>
                <span>
                  <br />
                  Social and Digital
                  <br />
                  Content Manager
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseReview;
