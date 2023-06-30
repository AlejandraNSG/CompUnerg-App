import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Container, Typography, Link, Box } from "@mui/material";
import styled from "@emotion/styled";
import SignupForm from "../ui-components/SignupForm";
import Logo from "../ui-components/Logo";
import { motion } from "framer-motion";
import clienteFrontend from "../config/axios";
import { useNavigate } from "react-router-dom";


/////////////Styles//////////////////
const RootStyle = styled("div")({
  background: "rgb(249, 250, 251)",
  height: "100vh",
  display: "grid",
  placeItems: "center",
});

const HeadingStyle = styled(Box)({
  textAlign: "center",
});

const ContentStyle = styled(Box)({
  maxWidth: 480,
  padding: 25,
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  background: "#fff",
});

let easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    y: 40,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 5,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const Signup = ({ setAuth }) => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [setError] = useState(null); //Estado para manejar errores
  
  const handleSignup = async (userData) => {
    try {
      setIsLoading(true);
      const response = await clienteFrontend.post("/signup", userData);
      setIsRegistered(true);
    } catch (error) {
      console.error(error);
      setError("Error al registrarse. Porfavor, intetelo de nuevo"); // establezco el mensaje de error
    } finally {
      setIsLoading(false);
      }
  };

  if (isLoading) {
    return <div> Cargando .... </div> 
  }

  const navigate = useNavigate();
  if (isRegistered) {
    navigate("/login?registrationSuccess=true");
    return null;
  }

  return (
    <RootStyle>
      <Container maxWidth="sm">
        <ContentStyle>
          <HeadingStyle component={motion.div} {...fadeInUp}>
            <Logo />

            <Typography sx={{ color: "text.secondary", mb: 5 }}>
              Ingrese sus datos a continuacion.
            </Typography>
          </HeadingStyle>

          <SignupForm setAuth={setAuth} />

          <Typography
            component={motion.p}
            {...fadeInUp}
            variant="body2"
            align="center"
            sx={{ color: "text.secondary", mt: 2 }}
          >
            Al registrarme, Acepto{" "}
            <Link underline="always" color="text.primary" href="#">
              Terminos del Servicio
            </Link>{" "}
            &{" "}
            <Link underline="always" color="text.primary" href="#">
              Politicas de Privacidad
            </Link>
            .
          </Typography>

          <Typography
            component={motion.p}
            {...fadeInUp}
            variant="body2"
            align="center"
            sx={{ mt: 3 }}
          >
            Tienes una cuenta?{" "}
            <Link variant="subtitle2" component={RouterLink} to="/login">
              Inicia Sesion
            </Link>
          </Typography>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
};

export default Signup;
