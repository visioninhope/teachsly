import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-dashboard-react.scss";
import CommonLayout from "./layouts/CommonLayout";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" render={(props) => <CommonLayout {...props} />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);