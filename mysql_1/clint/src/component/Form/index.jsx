import { useState } from "react";
import { Submit } from "../Buttons/Submit";
import { InputField } from "../InputField";
import { Discard } from "../Buttons/Discard";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../Store/Store/ActionCreator";

import axios from "axios";

export const FormToCreate = () => {
  const [state, setState] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    dateOfBirth: "",
    address: "",
  });

  const dispatch = useDispatch();
  const { created } = bindActionCreators(ActionCreators, dispatch);
  function handelInputChange(e) {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  }

  function handelDiscard() {
    setState(!state);
    setFormData({
      fullName: "",
      gender: "",
      dateOfBirth: "",
      address: "",
    });
  }
  function handelSubmit(e) {
    axios
      .post("http://localhost:8080/student/new-student", formData)
      .then((res) => {
        handelState();
        created(1)
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setFormData({
          fullName: "",
          gender: "",
          dateOfBirth: "",
          address: "",
        });
      });
  }

  function handleUpdate()

  function handelState() {
    setState(!state);
  }
  return (
    <>
      {state ? (
        <button
          className="btn btn-primary"
          onClick={() => {
            handelState();
          }}
        >
          Register Student
        </button>
      ) : (
        <form
          action=""
          className="row g-3 justify-content-center py-1"
          onSubmit={(e) => {
            e.preventDefault();
            handelSubmit();
          }}
        >
          <InputField
            idUser={"fullName"}
            label={"Full Name"}
            TypeOfInput={"text"}
            handelChange={handelInputChange}
          />
          <InputField
            length={1}
            idUser={"gender"}
            label={"Gender"}
            TypeOfInput={"text"}
            handelChange={handelInputChange}
          />
          <InputField
            idUser={"dateOfBirth"}
            label={"Date of Birth"}
            TypeOfInput={"date"}
            handelChange={handelInputChange}
          />
          <InputField
            idUser={"address"}
            label={"Address"}
            TypeOfInput={"text"}
            handelChange={handelInputChange}
          />
          <Submit name={"Submit"} userClass={"success"} />
          <Discard
            value={"discard"}
            name={"Discard / Close"}
            userClass={"danger"}
            handelDiscard={handelDiscard}
          />
        </form>
      )}
    </>
  );
};
