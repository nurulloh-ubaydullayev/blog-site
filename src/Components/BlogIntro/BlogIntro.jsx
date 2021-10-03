import "./BlogIntro.scss";
import React from "react";
import { Link } from "react-router-dom";

//images

function Blog() {
  const data = [
    {
      id: 1,
      title: "Usabilty testing it is one of the possible way?",
      name: "What is usati testing - and why is it needed?",
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
      tag: "#ux-ui",
    },
  ];

  return (
    <>
      <div className="blog-intro">
        <div className="blog-intro__left">
          <h2 className="blog-intro__heading">Blog</h2>
          <p className="blog-intro__paragraph">
            New post every week follow and share with loved ones
          </p>

          <div className="blog-intro__datas">
            {data.slice(3, 4).map((row) => (
              <li className="blog__intro-list" key={row.id}>
                <Link className="blog__navlivk" to={"blogs/" + row.id}>
                  <h2 className="blog__intro-title">{row.title}</h2>
                  <p className="blog__intro-name">{row.name}</p>
                  <img
                    className="blog__intro-img"
                    src={row.img}
                    alt=""
                    width="325"
                  />
                  <p className="blog__tag">{row.tag}</p>
                </Link>
              </li>
            ))}
          </div>
        </div>
        <div className="blog-intro__right">
          <div className="blog-intro__datas">
            {data.slice(5, 6).map((row) => (
              <li className="blog__intro-list" key={row.name}>
                <Link className="blog__navlivk" to={"blogs/" + row.id}>
                  <h2 className="blog__intro-title">{row.title}</h2>
                  <p className="blog__intro-name">{row.name}</p>
                  <img
                    className="blog__intro-img"
                    src={row.img}
                    alt=""
                    width="325"
                  />
                  <p className="blog__tag">{row.tag}</p>
                </Link>
              </li>
            ))}
          </div>
          <a className="blog__more-animation" href="/">
            more
          </a>
        </div>
      </div>

      <div className="blog-intro blog-intro-hidden">
        <div className="blog-intro__right">
          <a className="blog__more-animation" href="/">
            more
          </a>
          <div className="blog-intro__datas">
            {data.slice(5, 6).map((row) => (
              <li className="blog__intro-list" key={row.id}>
                <Link className="blog__navlivk" to={"blogs/" + row.id}>
                  <h2 className="blog__intro-title">{row.title}</h2>
                  <p className="blog__intro-name">{row.name}</p>
                  <img
                    className="blog__intro-img"
                    src={row.img}
                    alt=""
                    width="325"
                  />
                  <p className="blog__tag">{row.tag}</p>
                </Link>
              </li>
            ))}
          </div>
        </div>

        <div className="blog-intro__left">
          <div className="blog-intro__datas">
            {data.slice(3, 4).map((row) => (
              <li className="blog__intro-list uncommon-list" key={row.name}>
                <Link className="blog__navlivk" to={"blogs/" + row.id}>
                  <h2 className="blog__intro-title">{row.title}</h2>
                  <p className="blog__intro-name">{row.name}</p>
                  <img
                    className="blog__intro-img"
                    src={row.img}
                    alt=""
                    width="325"
                  />
                  <p className="blog__tag">{row.tag}</p>
                </Link>
              </li>
            ))}
          </div>
          <h2 className="blog-intro__heading">Blog</h2>
          <p className="blog-intro__paragraph">
            New post every week follow and share with loved ones
          </p>
        </div>
      </div>
    </>
  );
}

export default Blog;
