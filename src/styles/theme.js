import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#092635",
        },
        secondary: {
            main: "#1B4242",
        },
        },
        typography: {
            fontFamily: 'Roboto, sans-serif',
            h1: {
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#333',
            },
            h2: {
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#555',
            },
          },
          spacing: 8,
          breakpoints: {
            values: {
              xs: 0,
              sm: 600,
              md: 960,
              lg: 1280,
              xl: 1920,
            },
          },

          customization: {
            borderRadius: 4,
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
          },
});

export default theme;
