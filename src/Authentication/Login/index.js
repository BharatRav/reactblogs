import { useGoogleLogin } from "@react-oauth/google";
import React, { useEffect, useState } from "react";
import styles from "./login.module.css";
import axios from "axios";
import githubLogo from "../../Assets/loginLogo/github-logo-2E3852456C-seeklogo.com.png";
import googleLogo from "../../Assets/loginLogo/colorful-google-logo-transparent-clipart-download-u3DWLj.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse);
      localStorage.setItem("token", JSON.stringify(codeResponse?.access_token));
      navigate("/home");
      toast("Login Successfully!")
    },
    onError: (error) => console.log("Login Failed:", error),
  });
  //   const logOut = () => {
  //     googleLogout();
  //     setProfile(null);
  //   };
  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={login}>
          {" "}
          <img height={24} src={googleLogo} alt="" />
          Sign in with Google {profile ? profile.name : "🚀"}
        </div>
        <div className={styles.socialButton} onClick={login}>
          <img height={22} src={githubLogo} alt="" /> Sign in with Github
        </div>
        <div className={styles.socialButton} onClick={login}>
          {" "}
          Sign in with Facebook
        </div>
      </div>
    </div>
  );
};

export default Login;
