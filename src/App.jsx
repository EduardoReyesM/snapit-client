import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";

import Navbar from "./components/Navbar/Navbar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ExplorePage from "./pages/ExplorePage/ExplorePage";
import EventsPage from "./pages/EventsPage/EventsPage";
import MarketPlace from "./pages/MarketPlace/MarketPlace"
import Seller from "./pages/SellerPage/Seller";
import Newevent from "./pages/NewEvent/NewEvent"


function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/profile"
          element={
            <IsPrivate>
              <ProfilePage />
            </IsPrivate>
          }
        />

        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
        <Route path="*" element= {<NotFoundPage />} 
        />
        <Route 
        path="/explore" 
        element = {<ExplorePage />} />

        <Route 
        path="/events" 
        element={<EventsPage />} />

        <Route
        path="/marketplace"
        element={<MarketPlace />} />

        <Route
        path="/sellonline"
        element={<Seller />} />

        <Route
        path="/newevent"
        element={<Newevent />} />
        
      </Routes>

    </div>
  );
}

export default App;
