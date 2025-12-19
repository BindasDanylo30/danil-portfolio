import icon from "./../../img/icons/gitHub-black.svg";
const BtnGitHub = ({ link }) => {
  return (
    <a href={link} target="_blank" className="btn-outline">
      <img src={icon} alt="" />
      GitHub repo
    </a>
  );
};

export default BtnGitHub;
