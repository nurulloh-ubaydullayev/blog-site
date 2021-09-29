import "./App.scss";

import { Switch, Route } from "react-router-dom";
// import data from "./Components/Data/Data";

// Pages
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Blog from "./Pages/Blog/Blog";
import SingleBlog from "./Pages/SingleBlog/SingleBlog";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={About} exact />
        <Route path="/portfolio" component={Portfolio} exact />
        <Route path="/blogs" component={Blog} exact />
        <Route path="/blogs/:id" component={SingleBlog} exact />
        <Route path="/contact" component={Contact} exact />
      </Switch>
    </div>
  );
}

export default App;
