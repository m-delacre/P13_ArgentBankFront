function Feature({image, imgDescription, title, description}) {
  return (
    <div className="feature-item">
      <img src={image} alt={imgDescription} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Feature;