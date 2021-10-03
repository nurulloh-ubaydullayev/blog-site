import "./App.scss";

import $ from "jquery";
import { Switch, Route } from "react-router-dom";
// import data from "./Components/Data/Data";

// Pages
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Blog from "./Pages/Blog/Blog";
import SingleBlog from "./Pages/SingleBlog/SingleBlog";
import Contact from "./Pages/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";

// Components

function App() {
  $(window).on("scroll", function () {
    $(".App").css("bottom", $(window).scrollTop() * -5);
  });
  return (
    <div className="app">
      <Navbar />

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
