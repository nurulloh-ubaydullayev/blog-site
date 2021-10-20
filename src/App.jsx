import "./App.scss";
import { Switch, Route } from "react-router-dom";
import React from "react";
import { useLocation } from "react-router-dom";

// import data from "./Components/Data/Data";

// Pages
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Blog from "./Pages/Blog/Blog";
import SingleBlog from "./Pages/SingleBlog/SingleBlog";
import Contact from "./Pages/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const fullPage = React.useRef(null);
  // const [heightOfPage, setHeight] = React.useState(0);
  const { pathname } = useLocation();

  React.useEffect(() => {
    document.body.style.height = `${fullPage.current.clientHeight}px`;

    const onscroll = () => {
      fullPage.current.style.bottom = window.scrollY * -1 + "px";
    };
    window.addEventListener("scroll", onscroll);

    const onresize = () => {
      document.body.style.height = `${fullPage.current.clientHeight}px`;
    };
    window.addEventListener("resize", onresize);

    return () => {
      window.removeEventListener("scroll", onscroll);
      window.removeEventListener("resize", onresize);
    };
  }, [pathname]);

  return (
    <div className="app" ref={fullPage}>
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
