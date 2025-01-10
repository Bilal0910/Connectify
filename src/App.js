import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import FeedSection from "./components/Feed/FeedSection";

function App() {
  // const [theme, setTheme] = useState('light');

  // const toggleTheme = () => {
  //   const newTheme = theme === 'light' ? 'dark' : 'light';
  //   setTheme(newTheme);
  //   document.documentElement.setAttribute('data-theme', newTheme);
  // }
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* App Body */}
      <div className="app__body">
        <SideBar />
        <FeedSection />
      </div>
    </div>
  );
}

export default App;
