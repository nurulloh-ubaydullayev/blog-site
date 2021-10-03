import "./najotTalim.scss";
import najotTalimLogo from "../../Assets/Images/najotTalimLogo.png";
import najotTalimMainLogo from "../../Assets/Images/najotTalimMainLogo.png";
import creator from "../../Assets/Images/creator.png";
import resume from "../../Assets/Images/resume.png";
import downloadIcon from "../../Assets/Images/downloadIcon.svg";
function NajotTalimCom() {
  return (
    <div className="najotContainer">
      <div className="najotTalimLeftSiteWrapper">
        <div className="najotTalim2021">
          <div className="najotTalim2021left">
            <h2 className="najotTalim2021Title">2021-year</h2>
            <h4 className="najotTalim2021SubTitle">Najot Talim</h4>
            <p className="najotTalim2021P">
              The best investment is in education. IT in the modern age of
              technology
            </p>
            <a className="najotTalim2021Link" href="https://najottalim.uz/">
              #najottalim.uz
            </a>
          </div>
          <div className="najotTalimImgWrapper">
            <img
              src={najotTalimLogo}
              alt="NajotTalimLogo"
              className="najotTalimLogo"
            ></img>
            <img
              src={najotTalimMainLogo}
              alt="NajotTalimMainLogo"
              className="najotTalimMainLogo"
            ></img>
          </div>
        </div>
        <div className="najotTalim2020">
          <img src={creator} alt="CreatorPohoto" className="creator"></img>
          <div className="najotTalim2020Right">
            <h2 className="najotTalim2021Title">2020-year</h2>
            <h4 className="najotTalim2021SubTitle">The teaching itself</h4>
            <p className="najotTalim2021P">
              This year I started my way into IT sphere
            </p>
            <a className="najotTalim2021Link" href="/">
              #self-study
            </a>
          </div>
        </div>
      </div>
      <hr className="najotTalimComHr"></hr>
      <div className="najotTalimRightSite">
        <div className="downloadFileWrapper2">
          <a href="/" download="Portfolio" className="downloadFile">
            <img
              src={downloadIcon}
              alt="DownloadIcon"
              className="downloadIcon"
            ></img>
            <span className="downloadFileName">download brief</span>
            <span className="downloadFileType">.zip</span>
          </a>
          <h2 className="najotTalimRightSiteTitle">
            If you want to order a website please fill in this brief
          </h2>
        </div>
        <div className="resumeWrapper">
          <p className="najotTalimRightSiteP">
            The brief will help me to know better what you want
          </p>
          <img
            src={resume}
            alt="resumePhoto"
            className="najotTalimRightSiteImg"
          ></img>
        </div>
      </div>
    </div>
  );
}
export default NajotTalimCom;
