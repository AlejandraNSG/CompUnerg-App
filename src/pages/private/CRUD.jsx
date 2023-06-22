import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Delete as DeleteIcon } from "@material-ui/icons";
import EditIcon from "@material-ui/icons/Edit";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  container: {
    padding: theme.spacing(4),
    margin: theme.spacing(4),
    maxWidth: 800,
    width: "100%",
    background: "#00b4db",
    color: "#fff",
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 600,
    background: "#00b4db",
    color: "#fff",
    boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)",
    borderRadius: "10px"
  },

  heading: {
    textAlign: "center",
    marginBottom: theme.spacing(3),
    fontSize: "2rem",
    fontWeight: "bold",
    textShadow: "1px 1px #000000"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  textField: {
    marginBottom: theme.spacing(2),
    fontSize: "1.2rem"
  },
  button: {
    margin: theme.spacing(2, 0),
    background: "linear-gradient(to right, #00FFB0, #0083b0)",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    fontWeight: "bold",
    fontSize: "1.2rem",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "scale(1.1)",
      background: "linear-gradient(to right, #00FFB0, #0083b0)",
      boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.3)",
    },
  },
  editIcon: {
    color: "linear-gradient(to right, #00FFB0, #0083b0)",
    fontSize: "2rem",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "scale(1.1)",
      color: "linear-gradient(to right, #00FFB0, #0083b0)",
    },
  },
  deleteIcon: {
    color: "red",
    fontSize: "2rem",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "scale(1.1)",
      color: "red",
    },
  },
  fileInput: {
    display: "none",
  },
  fileInputLabel: {
    display: "inline-block",
    margin: theme.spacing(2, 0),
    background: "linear-gradient(to right, #00FFB0, #0083b0)",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    fontWeight: "bold",
    fontSize: "1.2rem",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "scale(1.1)",
      background: "linear-gradient(to right, #00FFB0, #0083b0)",
      boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.3)",
    },
  },
}));

function UploadFile() {
  const classes = useStyles();
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({
    title: "",
    description: "",
    type: "",
  });
  const [editing, setEditing] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(null);
  const [file, setFile] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("/api/courses");
      setCourses(result.data);
    }
    fetchData();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", newCourse.title);
    formData.append("description", newCourse.description);
    formData.append("type", newCourse.type);
    formData.append("file", file);

    if (editing) {
      await axios.put(`/api/courses/${currentCourse._id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setEditing(false);
      setCurrentCourse(null);
    } else {
      await axios.post("/api/courses", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }

    const result = await axios.get("/api/courses");
    setCourses(result.data);
    setNewCourse({ title: "", description: "", type: "" });
    setFile(null);
  };

  const handleEdit = (course) => {
    setEditing(true);
    setCurrentCourse(course);
    setNewCourse(course);
  };

  const handleDelete = async (course) => {
    await axios.delete(`/api/courses/${course._id}`);

    const result = await axios.get("/api/courses");
    setCourses(result.data);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.heading}>
       Gestor de Archivos
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <form onSubmit={handleSubmit} className={classes.form}>
              <TextField
                label="Title"
                name="title"
                variant="outlined"
                className={classes.textField}
                value={newCourse.title}
                onChange={handleInputChange}
                required
              />
              <TextField
                label="Description"
                name="description"
                variant="outlined"
                className={classes.textField}
                value={newCourse.description}
                onChange={handleInputChange}
                required
              />
              <TextField
                label="Type"
                name="type"
                variant="outlined"
                className={classes.textField}
                value={newCourse.type}
                onChange={handleInputChange}
                required
              />
              <input type="file" onChange={handleFileChange} />
              <Button type="submit" className={classes.button}>
                {editing ? "Update" : "Create"}
              </Button>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography variant="h5">Courses List</Typography>
            <ul>
              {courses.map((course) => (
                <li key={course._id}>
                  <Typography variant="subtitle1">
                    {course.title} - {course.description} - {course.type}
                  </Typography>
                  <IconButton
                    aria-label="edit"
                    className={classes.editIcon}
                    onClick={() => handleEdit(course)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    className={classes.deleteIcon}
                    onClick={() => handleDelete(course)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </li>
              ))}
            </ul>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default UploadFile;