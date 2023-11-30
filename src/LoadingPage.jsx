const LoadingPage = () => {
  return (
    <>
      <div className="loading--container">
        <h1 className="text-secondary">Loading Please wait...</h1>
        <div className="loading--card">
          <div className="loading--card__skeleton loading--card__title"></div>
          <div className="loading--card__skeleton loading--card__description">
            {" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingPage;
