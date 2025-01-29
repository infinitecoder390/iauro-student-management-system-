import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
const StudentTable = ({ students, onEdit, onDelete }) => {
  return (
    <TableContainer component={Paper} sx={{ mt: 4 }} >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Courses</TableCell>
            <TableCell>Graduate</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student, index) => (
            <TableRow key={index}>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.age}</TableCell>
              <TableCell>{student.gender}</TableCell>
              <TableCell>{student.courses.join(", ")}</TableCell>
              <TableCell>{student.isGraduate ? "Yes" : "No"}</TableCell>
              <TableCell>
                <IconButton onClick={() => onEdit(index)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => onDelete(index)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StudentTable;
