import "./Blog.scss";
import React from "react";
import { Link } from "react-router-dom";

//images
import Blogst from "../../Assets/Images/post-img.png";
import Blognd from "../../Assets/Images/post-img2.png";

// Components
import Footer from "../../Components/Footer/Footer";
import BlogHeader from "../../Components/BlogHeader/BlogHeader";

function Blog() {
  const data = [
    {
      id: 1,
      title: "Usabilty testing it is one of the possible way?",
      name: "What is usati testing - and why is it needed?",
      img: Blogst,
      tag: "#ux-ui",
    },
    {
      id: 2,
      title: "What is the Ux mean?",
      name: "What is UX and why do you need it? let's sort out the place.",
      tag: "#ux-ui",
    },
    {
      id: 3,
      title: "What is the Ux mean?",
      name: "What is UX and why do you need it? let's sort out the place.",
      tag: "#ux-ui",
    },
    {
      id: 4,
      title: "What is the Ux mean?",
      name: "What is UX and why do you need it? let's sort out the place.",
      tag: "#ux-ui",
    },
    {
      id: 5,
      title: "What is the Ux mean?",
      name: "What is UX and  why do you need it? let's sort out the place.",
      tag: "#ux-ui",
    },
    {
      id: 6,
      title: "Usabilty testing it is one of the possible way?",
      name: "What is usati testing - and why is it needed?",
      img: Blognd,
      tag: "#ux-ui",
    },
  ];

  return (
    <div className="blogs">
      <Footer />
      <div className="blog-section">
        <div className="blog__content">
          <div className="blog__left-box">
            <a className="blog__more-animation" href="/">
              more
            </a>
            {data.slice(0, 3).map((row) => (
              <li className="blog__list" key={row.id}>
                <Link className="blog__navlivk" to={"blogs/" + row.id}>
                  <h2 className="blog__title">{row.title}</h2>
                  <p className="blog__name">{row.name}</p>
                  <img className="blog__img" src={row.img} alt="" width="325" />
                  <p className="blog__tag">{row.tag}</p>
                </Link>
              </li>
            ))}
          </div>
          <div className="blog__right-box">
            {data.slice(3, 6).map((row) => (
              <li className="blog__list" key={row.name}>
                <Link className="blog__navlivk" to={"blogs/" + row.id}>
                  <h2 className="blog__title">{row.title}</h2>
                  <p className="blog__name">{row.name}</p>
                  <img className="blog__img" src={row.img} alt="" />
                  <p className="blog__tag">{row.tag}</p>
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>
      <BlogHeader />
    </div>
  );
}

export default Blog;
