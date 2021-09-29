import "./SingleBlog.scss";
import React from "react";
import { Link, useHistory } from "react-router-dom";

// import data from "../../Components/Data/Data";
// import CheckRow from "../../Components/CheckRow/CheckRow";

// Images
import PostImg1 from "../../Assets/Images/post-img.png";
import PostImg2 from "../../Assets/Images/post-img2.png";
import PostAvatar from "../../Assets/Images/post_avatar.png";

function SingleBlog() {
  const history = useHistory();

  return (
    <div className="single-blog">
      <div className="container">
        <div className="single-blog__top">
          <button className="history-back" onClick={() => history.goBack("/")}>
            back
          </button>
          <div className="loader"></div>
        </div>

        <div className="post">
          <h2 className="post__heading">
            Usabilty testing it is one of the possible way?
          </h2>
          <span className="hashtag">#ux-ui</span>

          <p className="post__text">
            I studied for about 3 years at one of the best design schools. I
            worked on about ten projects in the NID Master's program. Several
            projects have won awards, and in some projects I have given 200%.
            Therefore, by the end of 2019, I had a really solid portfolio of 4
            projects. In 2020, I joined Zeta. It took about a year and a half,
            during which I took part in many small and large projects. Some of
            them required immediate execution, and some took a long time,
            because they were very detailed. All this time I have not updated my
            site, but 2-3 projects from Zeta are worthy of being included in the
            portfolio. Now, when I look at my previous projects, I feel that
            they are outdated. And this, in my opinion, is good. They are
            outdated because they no longer reflect my skills properly. This
            indicates only one thing – growth. Previously, it was difficult for
            me to understand why most of the senior designers I knew did not
            have a public portfolio. I thought that the reason was that their
            works could not be made public while they were relevant. Perhaps
            this is one of the reasons, but I believe that there is a more
            serious reason. We just understand that the portfolio will quickly
            become outdated, and we don't want the Internet to have a wrong idea
            about our skills.
          </p>

          <blockquote className="post__blockquote">
            Interesting stories from my life field facts just as many
            interesting things you can find here
          </blockquote>

          <p className="post__text post__text-pad">
            I studied for about 3 years at one of the best design schools. I
            worked on about ten projects in the NID Master's program. Several
            projects have won awards, and in some projects I have given 200%.
            Therefore, by the end of 2019, I had a really solid portfolio of 4
            projects. In 2020, I joined Zeta. It took about a year and a half,
            during which I took part in many small and large projects. Some of
            them required immediate execution, and some took a long time,
            because they were very detailed. All this time I have not updated my
            site, but 2-3 projects from Zeta are worthy of being included in the
            portfolio. Now, when I look at my previous projects, I feel that
            they are outdated. And this, in my opinion, is good. They are
            outdated because they no longer reflect my skills properly. This
            indicates only one thing – growth.
          </p>

          <img className="post__img" src={PostImg1} alt="was difficult" />
          <Link className="post__img-alt" path="/difficult">
            was difficult
          </Link>
          <h3 className="post__mini-title">
            What is usati testing - and why is it needed?
          </h3>

          <p className="post__text post__text-pad">
            Previously, it was difficult for me to understand why most of the
            senior designers I knew did not have a public portfolio. I thought
            that the reason was that their works could not be made public while
            they were relevant. Perhaps this is one of the reasons, but I
            believe that there is a more serious reason. We just understand that
            the portfolio will quickly become outdated, and we don't want the
            Internet to have a wrong idea about our skills.
          </p>

          <img className="post__img post__img-mb" src={PostImg2} alt="blabla" />

          <p className="post__text">
            Previously, it was difficult for me to understand why most of the
            senior designers I knew did not have a public portfolio. I thought
            that the reason was that their works could not be made public while
            they were relevant. Perhaps this is one of the reasons, but I
            believe that there is a more serious reason. We just understand that
            the portfolio will quickly become outdated, and we don't want the
            Internet to have a wrong idea about our skills.
          </p>

          <div className="about-bloger">
            <img
              className="post__avatar"
              src={PostAvatar}
              alt="Post owner avatar"
            />

            <div>
              <h4 className="post__owner-name">by Kalandarov Abdulmalik</h4>
              <span className="post__date">Aug 31, 2021</span>
            </div>
          </div>

          <div className="share">
            <h4 className="share__heading">
              Share Interesting stories, facts, and many other interesting
              articles with friends and family
            </h4>

            <ul className="share__links-list">
              <li className="share__link-item first-share">
                <a className="share__link telegram" href="/">
                  telegram
                </a>
              </li>
              <li className="share__link-item">
                <a className="share__link instagram" href="/">
                  instagram
                </a>
              </li>
              <li className="share__link-item">
                <a className="share__link facebook" href="/">
                  facebook
                </a>
              </li>
              <li className="share__link-item">
                <a className="share__link twitter" href="/">
                  twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* <div>
          <ul>
            {Object.keys(data).map((row) => (
              <CheckRow key={Math.random()}>{row}</CheckRow>
            ))}
          </ul>
        </div> */}
      </div>
    </div>
  );
}

// 1482

export default SingleBlog;
