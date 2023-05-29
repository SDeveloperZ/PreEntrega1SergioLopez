import "./card.css";

const Card = ({ img, title, description, stock }) => {
  return (
    <div className="card-container">
      <div className={`task ${stock}`}>
        <img src={img} alt="cerveza" className="task-image" />
        <h3 className="title">{title}</h3>
        <div className="description">{description}</div>
        <div className="stock">{stock}</div>
      </div>
    </div>
  );
};

export { Card };
