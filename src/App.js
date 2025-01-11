import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import FeedSection from "./components/Feed/FeedSection";
import { useDispatch, useSelector } from "react-redux";
import {
  loginUser,
  logoutUser,
  selectUser,
} from "./redux/slices/User/UserSlice";
import Login from "./components/Login/Login";
import { auth } from "./firebase/firebase";
import "./App.css";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          loginUser({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logoutUser());
      }
    });
  }, []);

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          {/* Header */}
          <Header />

          {/* App Body */}
          <div className="app__body">
            <SideBar />
            <FeedSection />
            {/* <SideBar /> */}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
