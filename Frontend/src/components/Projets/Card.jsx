import githubsvg from "../../images/github.svg";
const Card = ({ image, title, description, githubLink, logo }) => {
  const gitOpen = () => {
    window.open(githubLink, "_blank");
  };

  return (
    <>
      <div className="card">
        <img src={image} className="card-image" />
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <button className="git-button" onClick={gitOpen}>
          <img src={githubsvg} />
          Github
        </button>
        <div className="logo-container">
        {logo.map((item, index) => (
          <img key={index} src={item} className="logo" />
        ))}
        </div>
      </div>
    </>
  );
};

export default Card;
