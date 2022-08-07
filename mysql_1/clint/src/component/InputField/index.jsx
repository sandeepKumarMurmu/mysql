export const InputField = ({ label, TypeOfInput, idUser,handelChange }) => {
  return (
    <div className="col-md-5">
      <label htmlFor="validationCustom01" className="form-label">
        {label}
      </label>
      <input
        type={TypeOfInput}
        className="form-control"
        id={idUser}
        required
        style={{ textTransform: "uppercase" }}
        onChange={(e)=>{
          handelChange(e);
        }}
      />
      <div className="valid-feedback">Looks good!</div>
    </div>
  );
};
