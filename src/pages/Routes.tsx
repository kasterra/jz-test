import {
  BrowserRouter as Router,
  Routes as ReactRouterRoutes,
  Route,
} from "react-router-dom";
import Welcome from "./Welcome";
import Questions from "./Questions";
import Result from "./Result";
import Results from "./Results";

const Routes = () => {
  return (
    <Router>
      <ReactRouterRoutes>
        <Route path="/" element={<Welcome />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/result" element={<Result />} />
        <Route path="/results" element={<Results />} />
      </ReactRouterRoutes>
    </Router>
  );
};

export default Routes;
