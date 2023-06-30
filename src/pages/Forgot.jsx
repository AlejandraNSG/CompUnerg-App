import { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import FormsForgot from "../ui-components/FormsForgot";
import clienteFrontend from "../config/axios.jsx";

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
    maxWidth: "400px", // Aumenta el ancho máximo del contenedor
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "2rem", // Aumenta el relleno del contenedor
  },
  logo: {
    marginBottom: "2rem",
    width: "80%",
    maxWidth: "300px",
  },
  textField: {
    marginBottom: "2rem",
    width: "100%",
    fontSize: "2rem",
  },
  button: {
    backgroundColor: "#4D8FB9",
    color: "#FFFFFF",
    width: "100%",
    "&:hover": {
      backgroundColor: "#3B6F94",
    },
    fontSize: "1.5rem",
  },
}));

const Forgot = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [validate, setValidate] = useState({});

  const validateforgotPassword = () => {
    let isValid = true;

    let validator = FormsForgot.validator({
      email: {
        value: email,
        isRequired: true,
        isEmail: true,
      },
    });

    if (validator !== null) {
      setValidate({
        validate: validator.errors,
      });

      isValid = false;
    }
    return isValid;
  };

  const forgotPassword = async (e) => {
    e.preventDefault();

    const isValid = validateforgotPassword();

    if (isValid) {
      alert("Reset password link is sent to " + email);

      const result = await clienteFrontend.post("/forgot-password", { email });

      console.log(result);

      setValidate({});
      setEmail("");
    }
  };
  

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <img src="/Assets/icon_logo.png" alt="Logo" className={classes.logo} />
        <div className="TEA auth-body center mx-center">
          <h3 className="forgot-title">Reestablezca su contraseña</h3>
          <div className="auth-form-container text-center">
            <form
              className="LAPARTEDEABAJO"
              method="POST"
              onSubmit={forgotPassword}
              autoComplete={"off"}
            >
              <div className="email mb-3">
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={validate.validate && validate.validate.email}
                  helperText={
                    validate.validate && validate.validate.email
                      ? validate.validate.email[0]
                      : ""
                  }
                  className={classes.textField}
                  InputProps={{
                    style: { fontSize: "2rem" },
                  }}
                />
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  className={`btn-Enviarcorreo page-scrol ${classes.button}`}
                  variant="contained"
                  style={{ fontSize: "1.5rem" }}
                >
                  Enviar Correo
                </Button>
              </div>
            </form>


            
            
            <hr />
            <div className="auth-option text-center pt-2">
              <Link className="text-link" to="/">
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
