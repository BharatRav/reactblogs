import React from "react";
import styles from "./NotFoundPage.module.css";
import { useNavigate } from "react-router-dom";
const NotFoundPage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  return (
    <div className={styles.container}>
      <img data-aos="fade-down"
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        alt=""
      ></img>
      <p data-aos="fade-right" className={styles.text}>
        Look like you're lost
      </p>
      <p data-aos="fade-left">the page you are looking for not avaible!</p>
      <button
        data-aos="fade-up"
        className={styles.button}
        onClick={() => navigate(`${token ? "/home" : "/"}`)}
      >{`Click to Go ${token ? "Home" : "Login"} Page`}</button>
    </div>
  );
};

export default NotFoundPage;
