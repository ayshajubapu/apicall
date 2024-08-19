import React from 'react';
import NavBar from './NavBar'; // Adjust the import path as necessary
import ChatBox from './ChatBox';
import MainContent from './MainContent';
import Footer from './Footer';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ChatBox/>
   
      <MainContent/>
      <Footer/>   
      <div className="main-content">
        {/* Other content of your application */}
        <p>This is the main content of your application.</p>
      </div>
    </div>
  );
};

export default App;