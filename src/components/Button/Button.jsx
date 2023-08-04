import './button.css';


const GetInTouch = ({ title, link }) => {
  return (
    <div className="btn-box">
      <a href={link} className="btn">
        {title}
      </a>
    </div>
  );
};

export default GetInTouch;
