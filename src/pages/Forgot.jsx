import { useState } from "react";
import { Link } from "react-router-dom";
import FormsForgot from "../ui-components/FormsForgot";

const Forgot = () => {
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

  const forgotPassword = (e) => {
    e.preventDefault();

    const validate = validateforgotPassword();

    if (validate) {
      alert("Reset password link is sent to " + email);
      setValidate({});
      setEmail("");
    }
  };

  
  return (
    <div className="rowling g-50 auth-wrapper-center">
      <div className="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
        <div className="auth-background-holder"></div>
        <div className="auth-background-mask"></div>
      </div>

      <div className="Wrapper-forgot col-12 col-md-5 col-lg-6 auth-main-col text-center justifyContent-center">
        <div className=" d-flex flex-column align-content">
          <div className="TEA auth-body center mx-center">
            <h3> Reestablezca su contraseña </h3>
            <div className="auth-form-container text-center">
              <form
                className="LAPARTEDEABAJO"
                method="POST"
                onSubmit={forgotPassword}
                autoComplete={"off"}
              >
                <div className="email mb-3">
                  <input
                    type="email"
                    className={`form-control ${
                      validate.validate && validate.validate.email
                        ? "is-invalid "
                        : ""
                    }`}
                    id="email"
                    name="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <div
                    className={`invalid-feedback text-center ${
                      validate.validate && validate.validate.email
                        ? "d-block"
                        : "d-none"
                    }`}
                  >
                    {validate.validate && validate.validate.email
                      ? validate.validate.email[0]
                      : ""}
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn-Enviarcorreo btn btn-custom btn-lg page-scrol "
                  >
                    Enviar Correo
                  </button>
                </div>
              </form>

              <hr />
              <div className="auth-option text-center pt-2">
                <Link className="text-link" to="/login">
                  Back to login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
