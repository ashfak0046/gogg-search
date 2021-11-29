import React, { useState } from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Routes from "./component/Routes";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? "dark" : ''}>
      <div className="bg-gray-200 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
         <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
         <Routes/>
          <Footer/>
        </div>
    </div>
  );
};

export default App;
