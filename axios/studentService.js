import React from "react";
import axios from "axios";

export default function StudentService() {
  const baseURL = "http://localhost:8080/api/student/";

  const getStudent = (studentId) => {
    axios.get(`${baseURL}/${studentId}`);
  };
}
