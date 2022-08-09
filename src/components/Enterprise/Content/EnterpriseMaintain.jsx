import React from "react";

const EnterpriseMaintain = () => {
  return (
    <div className="content_container" style={{ backgroundColor: "#24282f" }}>
      <div style={{ width: "540px", padding: "0px 0px 0px 48px" }}>
        <div className="fontawesome" style={{ backgroundColor: "#02D3DA" }}>
          <i
            className="fa fa-lock"
            aria-hidden="true"
            style={{ fontSize: "40px", color: "white" }}
          ></i>
        </div>
        <div className="content_span" style={{ color: "white" }}>
          <span>
            Maintain full control over
            <br />
            content and branding.
          </span>
        </div>
        <div
          className="content_blog"
          style={{ color: "white", width: "400px" }}
        >
          Our team of motion graphics designers work with your brand team to
          produce a custom template unique to your visual identity, ensuring
          your videos are always on-brand no matter who is creating them for
          you.
        </div>
        <div
          className="content_blog"
          style={{ color: "white", width: "450px", marginTop: "-3rem" }}
        >
          With approval and permission level workflows in place, you can always
          make sure everyone's on the right path and on brand. Comment and leave
          revision requests right in the video itself, scene by scene, allowing
          for smooth team collaboration and a simple creation and video sharing
          process between team members, no matter if they're sitting next to
          you, or half a world away.
        </div>
      </div>
      <div className="content_v">
        <img
          src="https://storage.googleapis.com/lumen5-site-images/website-assets/enterprise-control.png"
          alt="video-logo"
          style={{
            width: "510px",
            height: "380px",
            marginTop: "8rem",
            marginLeft: "-5rem",
          }}
        />
      </div>
    </div>
  );
};

export default EnterpriseMaintain;
