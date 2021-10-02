import React from "react";
import "./MyWorks.scss";

import BgImg1 from "../../Assets/Images/bg_img1.png";
import BgImg2 from "../../Assets/Images/bg_img2.png";
import BgImg3 from "../../Assets/Images/bg_img3.png";
import BgImg4 from "../../Assets/Images/bg_img4.png";

function MyWorksSection() {
  const data = [
    {
      id: 1,
      img: BgImg1,
      mobilImg: BgImg3,
      link: "digitalstar.uz",
    },
    {
      id: 2,
      img: BgImg2,
      mobilImg: BgImg4,
      link: "dreamcloud.uz",
    },
    {
      id: 3,
      img: BgImg1,
      mobilImg: BgImg3,
      link: "digitalstar.uz",
    },
    {
      id: 4,
      img: BgImg2,
      mobilImg: BgImg4,
      link: "dreamcloud.uz",
    },
  ];

  return (
    <div className="my-works">
      <div className="container">
        <div className="laptop">
          {data.slice(0, 2).map((row) => (
            <li className="my-works_box" key={row.id}>
              <a className="digitalstar" href={row.link}>
                {row.link}
              </a>
              <div className="works_section">
                <img className="bg1" src={row.img} alt="BgImg1" />
              </div>
            </li>
          ))}
        </div>
        <div className="mobil">
          {data.map((row) => (
            <li className="my-works_box" key={row.id}>
              <a className="digitalstar" href={row.link}>
                {row.link}
              </a>
              <div className="works_section_dream">
                <img className="bg2" src={row.mobilImg} alt="BgImg1" />
              </div>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyWorksSection;
