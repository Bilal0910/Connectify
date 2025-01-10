import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import FeedSection from "./components/Feed/FeedSection";
import { useSelector } from "react-redux";
import { selectUser } from "./redux/slices/User/UserSlice";
import Login from "./components/Login/Login";

function App() {
  // const [theme, setTheme] = useState('light');

  // const toggleTheme = () => {
  //   const newTheme = theme === 'light' ? 'dark' : 'light';
  //   setTheme(newTheme);
  //   document.documentElement.setAttribute('data-theme', newTheme);
  // }

  const user = useSelector(selectUser);
  return (
    <div className="app">
      {user ? (
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
