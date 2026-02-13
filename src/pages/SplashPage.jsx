import { useNavigate } from "react-router-dom";
import "../styles/splash.css";

export default function SplashScreen() {
  const navigate = useNavigate();

  return (
    <div className="splash-container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-6 ">
            <div className="glass splash-left text-center">
              <h1 className="hero-title">
                Welcome to <br />
                <span>My Portfolio Website</span>
              </h1>

              <p className="hero-desc mx-auto">
                I like designing things that are easy to use and building them
                with React. I focus on clear UI, smooth interactions, and making
                sure the user flow actually makes sense.
              </p>

              <p className="live-label">LIVE STATUS</p>

              <div className="links justify-content-center flex-wrap">
                <button className="chip">Code</button>
                <button className="chip">Profile</button>
                <button className="chip">Source</button>
              </div>

              <button
                className="enter-btn mt-2"
                onClick={() => navigate("/main")}
              >
                Enter Portfolio →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
