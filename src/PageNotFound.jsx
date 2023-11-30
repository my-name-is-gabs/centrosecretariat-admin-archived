const PageNotFound = () => {
  return (
    <>
      <div
        className="container-fluid p-5"
        style={{ background: '#223d7e', height: '100%', minHeight: '100vh' }}
      >
        <p className="text-secondary h4 text-warning">Status code: 404</p>
        <h1 className="fw-bold display-1 text-white">Page Not Found</h1>
      </div>
    </>
  );
};

export default PageNotFound;
