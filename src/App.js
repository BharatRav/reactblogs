import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import NotFoundPage from "./Pages/NotFoundPage";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Login from "./Authentication/Login";

import { ToastContainer } from "react-toastify";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <div className="container">
        <div className="wrapper">
          <ToastContainer />

          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<NotFoundPage />} />

            <Route path="/" index element={<Login />} />
          </Routes>
        </div>
      </div>
      {/* {profile ? (
                <div>
                    <img src={profile.picture} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                    <button onClick={logOut}>Log out</button>
                </div>
            ) : (
                <button onClick={() => login()}>Sign in with Google 🚀 </button>
            )} */}
    </BrowserRouter>
  );
}

export default App;
