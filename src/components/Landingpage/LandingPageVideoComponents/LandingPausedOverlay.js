import { css } from "@emotion/css";

const LandingPausedOverlay = ({ imgp }) => (
  <div>
    <img
      src={imgp}
      alt=""
      className={css`
        /* Thumbnail image expands to cover the player */
        position: absolute;
        height: 200px;
        width: 350px;
        top: 0;
        left: 0;
        object-fit: cover;
        border-radius: 10px;
      `}
    />
    <div
      className={css`
        /* Ensure the description text is displayed on top of the thumbnail image */
        z-index: 1;
        font-family: sans-serif;
        /* Position the text in the bottom-left corner of the overlay */
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 1em;

        h1 {
          margin: 0 0 0.2em;
        }
        p {
          margin: 0 0.2em 0;
        }
      `}
    ></div>
  </div>
);

export default LandingPausedOverlay;
