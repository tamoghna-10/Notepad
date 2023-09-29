import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Pen = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
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
    <div className="body" style={{ 
        margin: '0',
        padding: '0',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          fontFamily: "'Jost', sans-serif",
          background: "linear-gradient(to bottom, #0f0c29, #302b63, #24243e)",
        //   border: "2px solid red"
        }}>
            <div className="main"  style={{ 
                 width: "350px",
                height: "500px",
                overflow: "hidden",
                background: "url('https://doc-08-2c-docs.googleusercontent.com/docs/securesc/68c90smiglihng9534mvqmq1946dmis5/fo0picsp1nhiucmc0l25s29respgpr4j/1631524275000/03522360960922298374/03522360960922298374/1Sx0jhdpEpnNIydS4rnN4kHSJtU1EyWka?e=view&authuser=0&nonce=gcrocepgbb17m&user=03522360960922298374&hash=tfhgbs86ka6divo3llbvp93mg4csvb38') no-repeat center/cover",
                boxShadow: "5px 20px 50px #000",
                // border: "2px solid red"
                }}>
        <input type="checkbox" id="chk" aria-hidden="true" style={{
            display:"none"
        }}/>
        <div className="signup" style={{
             position: "relative",
             width: "100%",
             height: "100%",
            //  border: "2px solid red"
          }}>
            <div>
        <form>
          <label htmlFor="chk" aria-hidden="true" style={{
                      color: "#fff",
                      fontSize: "2.3em",
                      display: "flex",
                      margin: "60px",
                      fontWeight: "bold",
                      cursor: "pointer",
                      transition: ".5s ease-in-out",
                      justifyContent:"center"
                    }}>
            Sign up
          </label>
          <input type="text" name="txt" placeholder="User name"
            style={{
                width: "60%",
                height: "20px",
                background: "#e0dede",
                margin: "20px auto",
                padding: "10px",
                border: "none",
                outline: "none",
                borderRadius: "5px",
                justifyContent:"center"
              }}
          required />
          <input type="email" name="email" placeholder="Email" 
          style={{
            width: "60%",
            height: "20px",
            background: "#e0dede",
            margin: "20px auto",
            padding: "10px",
            border: "none",
            outline: "none",
            borderRadius: "5px",
            justifyContent:"center"
          }}required />
          <input type="password" name="pswd" placeholder="Password" 
          style={{
            width: "60%",
            height: "20px",
            background: "#e0dede",
            margin: "20px auto",
            padding: "10px",
            border: "none",
            outline: "none",
            borderRadius: "5px",
            justifyContent:"center"
            
          }}
         required />
          <button 
           className="btn btn-primary btn-block btn-hover"
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
                transition: ".2s ease-in",
                background: "#573b8a",
                justifyContent: "center", 
                display: "block", 
                cursor: "pointer",
            }}
          
          
          >Sign up</button>
        </form>
        </div>
        <div className="login">
        <form onSubmit={handleLogin}>
          <label htmlFor="chk" aria-hidden="true">
            Login
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
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
            value={email}
            onChange={handleEmailChange}
            required
   
          />
          <input
            type="password"
            name="pswd"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
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
            required
           
          />
          <button   className="btn btn-primary btn-block btn-hover" 
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
            transition: ".2s ease-in",
            backgroundColor: "#573b8a", 
            justifyContent: "center", 
            display: "block", 
            cursor: "pointer",
          }}
          >Login</button>
        </form>

        </div>
        </div>








         </div>
    </div>
    
  )


}

export default Pen