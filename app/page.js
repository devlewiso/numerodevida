"use client";

import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Card, CardContent, Link } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#ffffff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  padding: '20px',
  marginTop: '20px',
}));

export default function Page() {
  const [fecha, setFecha] = useState('');
  const [numeroDeVida, setNumeroDeVida] = useState(null);

  const calcularNumeroDeVida = (fecha) => {
    const numeros = fecha.replace(/-/g, '').split('').map(Number);
    let suma = numeros.reduce((acc, num) => acc + num, 0);

    while (suma > 9 && suma !== 11 && suma !== 22 && suma !== 33) {
      suma = suma.toString().split('').reduce((acc, num) => acc + parseInt(num), 0);
    }

    return suma;
  };

  const obtenerDescripcionNumerologia = (numero) => {
    const descripciones = {
      1: "El número de vida 1 está asociado con el liderazgo, la independencia y la originalidad. Las personas con este número son innovadoras, enérgicas y tienen un fuerte deseo de lograr sus objetivos. Son pioneros y no temen seguir su propio camino.",
      2: "El número de vida 2 representa la diplomacia, la sensibilidad y la cooperación. Las personas con este número son excelentes mediadores, tienen una profunda comprensión de las emociones de los demás y trabajan bien en equipo. Son buscadores de armonía y paz.",
      3: "El número de vida 3 se asocia con la creatividad, la autoexpresión y la comunicación. Los individuos con este número son artísticos, expresivos y optimistas. Tienen un don para el arte y la creatividad, y suelen ser el alma de la fiesta.",
      4: "El número de vida 4 simboliza la estabilidad, la disciplina y el enfoque. Las personas con este número son prácticas, organizadas y confiables. Se destacan en la planificación y en la construcción de una base sólida para el éxito futuro.",
      5: "El número de vida 5 está vinculado a la aventura, el cambio y la libertad. Los individuos con este número son curiosos, dinámicos y buscan nuevas experiencias. No les gusta la rutina y están siempre buscando maneras de expandir sus horizontes.",
      6: "El número de vida 6 representa la responsabilidad, el amor y el equilibrio. Las personas con este número son cuidadosas, protectoras y tienen una fuerte orientación hacia el hogar y la familia. Son consejeros naturales y ofrecen apoyo incondicional.",
      7: "El número de vida 7 se asocia con la introspección, la espiritualidad y la sabiduría. Los individuos con este número son reflexivos, analíticos y buscan el conocimiento profundo. Son pensadores profundos y tienen una conexión espiritual fuerte.",
      8: "El número de vida 8 simboliza el poder, el éxito y el materialismo. Las personas con este número son ambiciosas, decididas y tienen una gran capacidad para alcanzar el éxito en el mundo material. Son líderes naturales y tienen un fuerte sentido de propósito.",
      9: "El número de vida 9 está relacionado con el humanitarismo, la generosidad y la compasión. Los individuos con este número son idealistas, altruistas y están enfocados en ayudar a los demás. Tienen un fuerte deseo de hacer del mundo un lugar mejor.",
      11: "El número de vida 11 es un número maestro asociado con la intuición, la inspiración y el idealismo. Las personas con este número tienen una conexión espiritual profunda y una visión clara. Son líderes y guías naturales con una fuerte influencia positiva en los demás.",
      22: "El número de vida 22 es otro número maestro que representa la construcción, el dominio y la realización material y espiritual. Los individuos con este número tienen la capacidad de transformar grandes sueños en realidad y son capaces de lograr grandes cosas.",
      33: "El número de vida 33 es el último número maestro, asociado con el amor incondicional, el altruismo y la sanación. Las personas con este número están dedicadas al servicio de los demás y tienen un fuerte deseo de ayudar y sanar al mundo.",
    };

    return descripciones[numero] || "Descripción no disponible.";
  };

  const manejarCalculo = () => {
    const resultado = calcularNumeroDeVida(fecha);
    setNumeroDeVida(resultado);
  };

  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Calculadora de Número de Vida
        </Typography>
        <TextField
          label="Fecha de Nacimiento"
          type="date"
          variant="outlined"
          fullWidth
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={manejarCalculo}
          sx={{ mt: 2, mb: 2 }}
        >
          Calcular
        </Button>
        {numeroDeVida !== null && (
          <StyledCard>
            <CardContent>
              <Typography variant="h5" component="div">
                Tu Número de Vida es: {numeroDeVida}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
                {obtenerDescripcionNumerologia(numeroDeVida)}
              </Typography>
            </CardContent>
          </StyledCard>
        )}
        <Box mt={4} mb={2} textAlign="center">
          <Typography variant="body2" color="text.secondary">
            Esta aplicación ha sido creada por <Link href="https://neuralcodelab.com" target="_blank" rel="noopener">NeuralCodeLab.com</Link>
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            href="https://patreon.com/devlewiso"
            target="_blank"
            rel="noopener"
            sx={{ mt: 2 }}
          >
            Apóyanos en Patreon
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
