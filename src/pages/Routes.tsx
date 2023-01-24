import {
  BrowserRouter as Router,
  Routes as ReactRouterRoutes,
  Route,
} from "react-router-dom";
import Welcome from "./Welcome";
import Questions from "./Questions";

const Routes = () => {
  return (
    <Router>
      <ReactRouterRoutes>
        <Route path="/" element={<Welcome />} />
        <Route path="/questions" element={<Questions />} />
      </ReactRouterRoutes>
    </Router>
  );
};

export default Routes;
