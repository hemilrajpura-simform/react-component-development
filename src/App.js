import "./App.css";
import SignIn from "./pages/SignIn/SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import SignInDark from "./pages/SignInDark/SignInDark";
import TwoStepVerification from "./pages/TwoStepVerification/TwoStepVerification";
import PagesList from "./pages/PageList/PagesList";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PagesList />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/loginDark" element={<SignInDark />} />
          <Route
            path="/twoStepVerification"
            element={<TwoStepVerification />}
          />
          <Route path="/*" element={<p>Page Not Found</p>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
