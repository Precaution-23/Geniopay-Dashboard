import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomeScreen from "./Views/WelcomeScreen";
import WalletScreen from "./Views/WalletScreen";
import SideNav from "./Components/SideNav";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SideNav pages={<WelcomeScreen />} />} />
          <Route
            path="/wallet"
            element={<SideNav pages={<WalletScreen />} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
