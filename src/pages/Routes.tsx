import {
  BrowserRouter as Router,
  Routes as ReactRouterRoutes,
  Route,
} from "react-router-dom";
import Welcome from "./Welcome";
import Questions from "./Questions";
import Result from "./Result";

const Routes = () => {
  return (
    <Router>
      <ReactRouterRoutes>
        <Route path="/" element={<Welcome />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/result" element={<Result />} />
      </ReactRouterRoutes>
    </Router>
  );
};

export default Routes;
