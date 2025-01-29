import { useState } from "react";
import StudentForm from "./UI/Form";
import StudentTable from "./UI/Table";
import { Button } from "@mui/material";
const StudentManagement = () => {
  const [students, setStudents] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const handleSubmit = (newStudent) => {
    if (editIndex >= 0) {
      const updatedStudents = [...students];
      updatedStudents[editIndex] = newStudent;
      setStudents(updatedStudents);
      setEditIndex(-1);
    } else {
      setStudents([...students, newStudent]);
    }
    setIsAddOpen(false);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setIsAddOpen(true);
  };

  const handleDelete = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  const handleCancelEdit = () => {
    setEditIndex(-1);
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        margin: "5px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <h1>Student Management System</h1>
        <Button
          type="button"
          variant="contained"
          color="secondary"
          sx={{ mt: 2 }}
          onClick={() => {
            setIsAddOpen(!isAddOpen);
          }}
        >
          ADD
        </Button>
      </div>
      {isAddOpen && (
        <StudentForm
          student={editIndex >= 0 ? students[editIndex] : null}
          onSubmit={handleSubmit}
          onCancel={handleCancelEdit}
        />
      )}
      {!isAddOpen && (
        <StudentTable
          students={students}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default StudentManagement;
