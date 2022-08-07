import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const TableBody = () => {
  let { CreatedReducer } = useSelector((state) => state);
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    getAllStudents();
  }, [CreatedReducer]);

  function handleDelete(id) {
    axios
      .delete(`http://localhost:8080/student/remove-student/${id}`)
      .then(() => {
        getAllStudents();
      });
  }

  function getAllStudents() {
    axios.get("http://localhost:8080/student/get-student").then(({ data }) => {
      setStudentData([...data.data]);
    });
  }
  return (
    <tbody>
      {studentData.map((single, index) => (
        <tr key={"student" + index}>
          <td>{index + 1}</td>
          <td>{single.fullName}</td>
          <td>{single.gender}</td>
          <td>
            <button className="btn btn-warning">Edit</button>
          </td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                handleDelete(single.SN);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
