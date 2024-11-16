"use client";

import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  Card,
  CardContent,
  Link,
  Slide,
  Divider,
} from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.9)", // Fondo semi-transparente
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)", // Sombra más suave
  borderRadius: "15px", // Bordes más redondeados
  padding: "20px",
  marginTop: "20px",
  transition: "transform 0.3s", // Transición suave
  "&:hover": {
    transform: "scale(1.03)", // Pequeño efecto hover
  },
}));

const GradientBackground = styled("div")({
  background: "linear-gradient(45deg, #7F00FF 30%, #E100FF 90%)", // Gradiente de fondo
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export default function Page() {
  const [fecha, setFecha] = useState("");
  const [numeroDeVida, setNumeroDeVida] = useState(null);
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const calcularNumeroDeVida = (fecha) => {
    const numeros = fecha.replace(/-/g, "").split("").map(Number);
    let suma = numeros.reduce((acc, num) => acc + num, 0);

    while (suma > 9 && suma !== 11 && suma !== 22 && suma !== 33) {
      suma = suma
        .toString()
        .split("")
        .reduce((acc, num) => acc + parseInt(num), 0);
    }

    return suma;
  };

  const obtenerDescripcionNumerologia = (numero) => {
    const descripciones = {
      1: "El número de vida 1 está asociado con el liderazgo, la independencia y la originalidad...",
      2: "El número de vida 2 representa la diplomacia, la sensibilidad y la cooperación...",
      3: "El número de vida 3 se asocia con la creatividad, la autoexpresión y la comunicación...",
      4: "El número de vida 4 simboliza la estabilidad, la disciplina y el enfoque...",
      5: "El número de vida 5 está vinculado a la aventura, el cambio y la libertad...",
      6: "El número de vida 6 representa la responsabilidad, el amor y el equilibrio...",
      7: "El número de vida 7 se asocia con la introspección, la espiritualidad y la sabiduría...",
      8: "El número de vida 8 simboliza el poder, el éxito y el materialismo...",
      9: "El número de vida 9 está relacionado con el humanitarismo, la generosidad y la compasión...",
      11: "El número de vida 11 es un número maestro asociado con la intuición...",
      22: "El número de vida 22 es otro número maestro que representa la construcción...",
      33: "El número de vida 33 es el último número maestro, asociado con el amor incondicional...",
    };

    return descripciones[numero] || "Descripción no disponible.";
  };

  const manejarCalculo = () => {
    const resultado = calcularNumeroDeVida(fecha);
    setNumeroDeVida(resultado);
    setMostrarResultado(true);
  };

  return (
    <GradientBackground>
      <Container maxWidth="sm">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          mt={4}
          sx={{ backdropFilter: "blur(6px)" }} // Efecto de desenfoque para el texto en la tarjeta
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ color: "white", fontWeight: "bold" }}
          >
            ✨ Calculadora de Número de Vida
          </Typography>
          <TextField
            label="Fecha de Nacimiento"
            type="date"
            variant="filled"
            fullWidth
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
            sx={{
              background: "white",
              borderRadius: "8px",
            }}
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={manejarCalculo}
            sx={{
              mt: 2,
              mb: 2,
              background: "linear-gradient(to right, #FF512F, #DD2476)",
              fontSize: "16px",
            }}
          >
            Revelar Número de Vida
          </Button>

          {/* Usamos el componente Slide para animación de aparición del resultado */}
          <Slide direction="up" in={mostrarResultado} mountOnEnter unmountOnExit>
            <StyledCard>
              <CardContent>
                <Typography variant="h5" component="div">
                  Tu Número de Vida es: <b>{numeroDeVida}</b>
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mt: 2 }}
                >
                  {obtenerDescripcionNumerologia(numeroDeVida)}
                </Typography>
              </CardContent>
            </StyledCard>
          </Slide>

          <Box mt={4} mb={2} textAlign="center">
            <Typography variant="body2" color="white">
              Creado por&nbsp;
              <Link
                href="https://neuralcodelab.com"
                target="_blank"
                rel="noopener"
                sx={{ color: "yellow", textDecoration: "underline" }}
              >
                NeuralCodeLab.com
              </Link>
            </Typography>
            <Button
              variant="outlined"
              color="secondary"
              href="https://patreon.com/devlewiso"
              target="_blank"
              rel="noopener"
              sx={{
                mt: 2,
                color: "white",
                borderColor: "white",
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.2)",
                },
              }}
            >
              Apóyanos en Patreon
            </Button>
          </Box>
        </Box>
      </Container>
    </GradientBackground>
  );
}