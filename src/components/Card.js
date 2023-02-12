const Card = ({ content, id, handleRemove }) => (
  <div className="card">
    <i
      onClick={() => handleRemove(id)}
      className="fa fa-times-circle"
      aria-hidden="true"
    />
    <p className="content"> {content}</p>
  </div>
);

export default Card;