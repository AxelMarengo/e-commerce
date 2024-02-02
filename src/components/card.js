const Card = ({ img, title, newPrice }) => {
  return (
    <>
      <div className="card">
        <h3>{title}</h3>
        <img src={img} alt={title} width={200} height={200}/>
        <div>
          <p>${newPrice}</p>
          <button>add</button>
        </div>
      </div>
    </>
  );
};

export default Card;