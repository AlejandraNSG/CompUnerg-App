import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import clienteFrontend from "../config/axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#268c8c",
    padding: "2rem",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "400px",
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "2rem",
  },
  logo: {
    marginBottom: "2rem",
    width: "80%",
    maxWidth: "300px",
  },
  textField: {
    marginBottom: "1rem",
    width: "100%",
    fontSize: "1.5rem", // Aumenta el tamaño del texto
  },
  button: {
    backgroundColor: "#4D8FB9",
    color: "#FFFFFF",
    width: "100%",
    "&:hover": {
      backgroundColor: "#3B6F94",
    },
    fontSize: "1.5rem", // Aumenta el tamaño del texto
  },
}));

const Ressetpassword = () => {
  const classes = useStyles();
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // const response = await fetch("/api/reset-password", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ password }),
      // });
      // const data = await response.json();

      const result = await clienteFrontend.post('/reset-password', {password});

      console.log(result.data);

      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <img className={classes.logo} src="/Assets/icon_logo.png" alt="Logo" />{" "}
     
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            className={classes.textField}
            id="password"
            label="New Password"
            type="password"
            value={password}
            onChange={handleChange}
            InputProps={{
              style: { fontSize: "2rem" }, // Aumenta el tamaño del texto
            }}
          />
          <Button
            className={classes.button}
            variant="contained"
            type="submit"
            style={{ fontSize: "1.5rem" }} // Aumenta el tamaño del texto
          >
            Reset Password
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Ressetpassword;
