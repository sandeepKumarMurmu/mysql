export const Submit = ({ name, userClass, value }) => {
  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <div className="col-md-5">
      <button
        className={`btn btn-${userClass}`}
        type="submit"
        style={{ width: "100%" }}
      >
        {name}
      </button>
    </div>
  );
};
