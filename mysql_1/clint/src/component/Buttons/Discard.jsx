export const Discard = ({ name, userClass, handelDiscard }) => {
  return (
    <div className="col-md-5">
      <div
        className={`btn btn-${userClass}`}
        onClick={() => {
          handelDiscard();
        }}
        style={{ width: "100%" }}
      >
        {name}
      </div>
    </div>
  );
};
