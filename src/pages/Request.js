
const Request = ({ id, image, info, name, removeRequest }) => {
  
  return (
    <article className="single-request">
      <img src={image} alt={name} />
      
        <div className="request-info">
          <h4>{name}</h4>
          <h4>{info}</h4>
        </div>
       
        <button className="delete-btn" onClick={() => removeRequest(id)}>
          not interested
        </button>
      
    </article>
  );
};

export default Request;