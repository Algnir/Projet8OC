import githubsvg from '../../images/github.svg';
const Card = ({ image, title, description, githubLink }) => {
  const gitOpen = () => {
    window.open(githubLink, "_blank");
  };

  return (
    <>
      <div className="card">
        <img src={image} className="card-image" />
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <button className="git-button" onClick={gitOpen}><img src={githubsvg}/>Github</button>
      </div>
    </>
  );
};

export default Card;
