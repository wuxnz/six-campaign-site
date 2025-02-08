import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/system";

import config from "../config";

const logoStyle = {
  width: "64px",
  opacity: 0.3,
};

function UserAbvatar({ name }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Typography
        sx={{
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: (theme) => theme.palette.primary.main,
        }}
      >
        {name
          .toString()
          .split(" ")
          .map((n) => n.charAt(0).toUpperCase())}
      </Typography>
      <Typography variant="body2" color="text.primary">
        {name}
      </Typography>
    </Box>
  );
}

export default function Testimonials() {
  const theme = useTheme();

  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 10 },
        pb: { xs: 8, sm: 14 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          {config.testimonialsSection.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {config.testimonialsSection.description}
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {config.testimonialsSection.testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexGrow: 1,
                p: 1,
              }}
            >
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  pr: 2,
                  width: "100%",
                }}
              >
                <UserAbvatar name={testimonial.name} />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
