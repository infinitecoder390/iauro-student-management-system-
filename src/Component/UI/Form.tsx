import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Autocomplete,
  Box,
} from "@mui/material";

const StudentForm = ({ student, onSubmit, onCancel }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [courses, setCourses] = useState<any>([]);
  const [isGraduate, setIsGraduate] = useState(false);

  useEffect(() => {
    if (student) {
      setName(student.name);
      setAge(student.age);
      setGender(student.gender);
      setCourses(student.courses);
      setIsGraduate(student.isGraduate);
    }
  }, [student]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newStudent = { name, age, gender, courses, isGraduate };
    onSubmit(newStudent);
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setAge("");
    setGender("");
    setCourses([]);
    setIsGraduate(false);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Age"
        type="number"
        variant="outlined"
        fullWidth
        margin="normal"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Gender</InputLabel>
        <Select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          label="Gender"
        >
          <MenuItem value={"Male"}>Male</MenuItem>
          <MenuItem value={"Female"}>Female</MenuItem>
          <MenuItem value={"Other"}>Other</MenuItem>
        </Select>
      </FormControl>
      <Autocomplete
        multiple
        options={["Math", "Science", "History", "Art"]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Courses"
            placeholder="Select courses"
          />
        )}
        value={courses}
        onChange={(event, value) => setCourses(value)}
      />
      <RadioGroup
        row
        value={isGraduate ? "yes" : "no"}
        onChange={(e) => setIsGraduate(e.target.value === "yes")}
      >
        <FormControlLabel value="yes" control={<Radio />} label="Graduate" />
        <FormControlLabel
          value="no"
          control={<Radio />}
          label="Undergraduate"
        />
      </RadioGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={isGraduate}
            onChange={() => setIsGraduate(!isGraduate)}
          />
        }
        label="I am a graduate"
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        {student ? "Update" : "Submit"}
      </Button>
      {onCancel && (
        <Button
          variant="outlined"
          color="secondary"
          sx={{ mt: 2, ml: 2 }}
          onClick={onCancel}
        >
          Cancel
        </Button>
      )}
    </Box>
  );
};

export default StudentForm;
