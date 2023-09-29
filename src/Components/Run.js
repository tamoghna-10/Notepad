import React, { useState } from "react";
import "./SlideNavbar.css";
import { useNavigate } from "react-router-dom";

function SlideNavbar() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false); // Track the checkbox state

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle the checkbox state
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log("Email:", email);
    console.log("Password:", password);
    // Reset form
    setEmail("");
    setPassword("");

    navigate("/notepad");
  };

  return (
    <div className="container-fluid" style={{ 
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      fontFamily: "'Jost', sans-serif",
      background: "linear-gradient(to bottom, #0f0c29, #302b63, #24243e)"
    }}>
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-md-6">
          <div className="card">
            <div
              className={`card-body main ${isChecked ? "checked" : ""}`} // Apply the main class and "checked" class conditionally
              style={{
                width: "350px",
                height: "500px",
                overflow: "hidden",
                background: "url('https://doc-08-2c-docs.googleusercontent.com/docs/securesc/68c90smiglihng9534mvqmq1946dmis5/fo0picsp1nhiucmc0l25s29respgpr4j/1631524275000/03522360960922298374/03522360960922298374/1Sx0jhdpEpnNIydS4rnN4kHSJtU1EyWka?e=view&authuser=0&nonce=gcrocepgbb17m&user=03522360960922298374&hash=tfhgbs86ka6divo3llbvp93mg4csvb38') no-repeat center/cover",
                boxShadow: "5px 20px 50px #000",
                transition: "transform .8s ease-in-out", // Apply the transform transition
                transform: isChecked ? "translateY(-500px)" : "translateY(-180px)" // Apply the transform conditionally
              }}
            >
              <input
                type="checkbox"
                id="chk"
                className="d-none"
                checked={isChecked} // Bind the checkbox to the isChecked state
                onChange={handleCheckboxChange} // Handle checkbox change
              />

              <div
                className="signup" // Apply the signup class here
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%"
                }}
              >
                <form>
                  <label
                    htmlFor="chk"
                    className="text-white"
                    style={{
                      fontSize: "2.3em",
                      display: "flex",
                      margin: "60px",
                      fontWeight: "bold",
                      cursor: "pointer",
                      transition: ".5s ease-in-out"
                    }}
                  >
                    Sign up
                  </label>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="txt"
                      placeholder="User name"
                      required
                      style={{
                        width: "60%",
                        height: "20px",
                        background: "#e0dede",
                        margin: "20px auto",
                        padding: "10px",
                        border: "none",
                        outline: "none",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      required
                      style={{
                        width: "60%",
                        height: "20px",
                        background: "#e0dede",
                        margin: "20px auto",
                        padding: "10px",
                        border: "none",
                        outline: "none",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      name="pswd"
                      placeholder="Password"
                      required
                      style={{
                        width: "60%",
                        height: "20px",
                        background: "#e0dede",
                        margin: "20px auto",
                        padding: "10px",
                        border: "none",
                        outline: "none",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                  <button
                    className="btn btn-primary btn-block btn-hover" // Apply Bootstrap button class with hover effect
                    style={{
                      width: "60%",
                      height: "40px",
                      margin: "10px auto",
                      color: "#fff",
                      fontSize: "1em",
                      fontWeight: "bold",
                      marginTop: "20px",
                      outline: "none",
                      border: "none",
                      borderRadius: "5px",
                      backgroundColor: "#573b8a", // Set background color
                      justifyContent: "center", // Center text horizontally
                      display: "block", // Make button a block element
                      cursor: "pointer",
                      transition: "background .2s ease-in", // Apply the hover transition
                    }}
                  >
                    Sign up
                  </button>
                </form>
              </div>

              <div className="login">
                <form onSubmit={handleLogin}>
                  <label
                    htmlFor="chk"
                    className="text-primary" // Apply Bootstrap text-primary class
                    style={{
                      fontSize: "2.3em",
                      display: "flex",
                      margin: "60px",
                      fontWeight: "bold",
                      cursor: "pointer",
                      transition: ".5s ease-in-out",
                      color: "#573b8a", // Set text color
                      transform: isChecked ? "scale(1)" : "scale(.6)" // Apply the transform scale conditionally
                    }}
                  >
                    Login
                  </label>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      required
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      name="pswd"
                      placeholder="Password"
                      required
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block btn-hover" // Apply Bootstrap button class with hover effect
                    style={{
                      width: "60%",
                      height: "40px",
                      margin: "10px auto",
                      color: "#fff",
                      fontSize: "1em",
                      fontWeight: "bold",
                      marginTop: "20px",
                      outline: "none",
                      border: "none",
                      borderRadius: "5px",
                      backgroundColor: "#573b8a", // Set background color
                      justifyContent: "center", // Center text horizontally
                      display: "block", // Make button a block element
                      cursor: "pointer",
                      transition: "background .2s ease-in", // Apply the hover transition
                    }}
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideNavbar;
