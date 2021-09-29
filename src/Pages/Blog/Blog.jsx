import "./Blog.scss";
import React from "react";
import { Link } from "react-router-dom";

//images
import Blogst from "../../Assets/Images/post-img.png";
import Blognd from "../../Assets/Images/post-img2.png";

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
    <>
      <div className="blog-section">
        <div className="blog__content">
          <div className="blog__left-box">
            <a className="blog__more-animation" href="/">
              more
            </a>
            {data.slice(0, 3).map((row) => (
              <Link className="blog__navlivk" to={"blogs/" + row.id}>
                <li className="blog__list" key={row.id}>
                  <h2 className="blog__title">{row.title}</h2>
                  <p className="blog__name">{row.name}</p>
                  <img className="blog__img" src={row.img} alt="" width="325" />
                  <p className="blog__tag">{row.tag}</p>
                </li>
              </Link>
            ))}
          </div>
          <div className="blog__right-box">
            {data.slice(3, 6).map((row) => (
              <Link className="blog__navlivk" to={"blogs/" + row.id}>
                <li className="blog__list" key={row.id}>
                  <h2 className="blog__title">{row.title}</h2>
                  <p className="blog__name">{row.name}</p>
                  <img className="blog__img" src={row.img} alt="" />
                  <p className="blog__tag">{row.tag}</p>
                </li>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
