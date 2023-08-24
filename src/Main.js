import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SingleSubscription from "./components/SingleSubscription";

const Main = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/details/:id" element={<SingleSubscription />} />
        </Routes>
    </Router>
  );
};

export default Main;
