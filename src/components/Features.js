import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import EdgesensorHighRoundedIcon from "@mui/icons-material/EdgesensorHighRounded";
import ViewQuiltRoundedIcon from "@mui/icons-material/ViewQuiltRounded";
import config from "../config";

export default function Features() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature =
    config.featuresSection.gamesOffered[selectedItemIndex];

  return (
    <Container
      id="features"
      sx={{ py: { xs: 8, sm: 16 }, maxWidth: { xs: "100%", sm: "80%" } }}
    >
      {/* <Grid container spacing={6}> */}
      <Grid
        item
        md={6}
        gap={{ xs: 2, sm: 4 }}
        display="flex"
        direction={{ xs: "column", sm: "row" }}
        alignItems="start"
        justifyContent="space-evenly"
      >
        <Grid
          item
          width={{ xs: "100%", sm: "75%" }}
          sx={{ textAlign: { xs: "center", sm: "left" } }}
          display="flex"
          direction="column"
          gap={2}
        >
          <Typography component="h2" variant="h4" color="text.primary">
            {config.featuresSection.title}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: { xs: 2, sm: 4 }, width: { xs: "100%", sm: "70%" } }}
          >
            {config.featuresSection.description}
          </Typography>
        </Grid>
        <Grid
          container
          item
          gap={1}
          sx={{ display: { xs: "flex", sm: "none" } }}
          justifyContent="space-evenly"
          xs={4}
        >
          {config.featuresSection.gamesOffered.map(({ title }, index) => (
            <Chip
              key={index}
              label={title}
              onClick={() => handleItemClick(index)}
              sx={{
                borderColor: (theme) => {
                  if (theme.palette.mode === "light") {
                    return selectedItemIndex === index ? "primary.light" : "";
                  }
                  return selectedItemIndex === index ? "primary.light" : "";
                },
                background: (theme) => {
                  if (theme.palette.mode === "light") {
                    return selectedItemIndex === index ? "none" : "";
                  }
                  return selectedItemIndex === index ? "none" : "";
                },
                backgroundColor:
                  selectedItemIndex === index ? "primary.main" : "",
                "& .MuiChip-label": {
                  color: selectedItemIndex === index ? "#fff" : "",
                },
              }}
            />
          ))}
        </Grid>
        <Box
          component={Card}
          variant="elevation"
          sx={{
            display: { xs: "auto", sm: "none" },
            mt: 4,
          }}
        >
          {/* <Box
            sx={{
              backgroundImage: (theme) =>
                `url(${config.featuresSection.gamesOffered[selectedItemIndex].icon})`,
              // backgroundSize: "cover",
              // backgroundPosition: "center",
              // minHeight: 280,
              width: "100%",
              height: "",
            }}
          /> */}
          <img
            src={selectedFeature.icon}
            width="100%"
            alt={selectedFeature.title}
            style={{ objectFit: "contain", padding: "24px" }}
          />
          <Box sx={{ px: 2, pb: 2 }}>
            <Typography color="text.primary" variant="body2" fontWeight="bold">
              {selectedFeature.title}
            </Typography>
            <Typography color="text.secondary" variant="body2" sx={{ my: 0.5 }}>
              {selectedFeature.description}
            </Typography>
            {/* <Link
              color="primary"
              variant="body2"
              fontWeight="bold"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                "& > svg": { transition: "0.2s" },
                "&:hover > svg": { transform: "translateX(2px)" },
              }}
            >
              <span>Learn more</span>
              <ChevronRightRoundedIcon
                fontSize="small"
                sx={{ mt: "1px", ml: "2px" }}
              />
            </Link> */}
          </Box>
        </Box>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={2}
          useFlexGap
          sx={{ width: "100%", display: { xs: "none", sm: "flex" } }}
        >
          {config.featuresSection.gamesOffered.map(
            ({ title, icon, description }, index) => (
              <Box
                component={Card}
                variant="elevation"
                sx={{
                  display: "auto",
                  width: "100%",
                }}
              >
                {/* <Box
            sx={{
              backgroundImage: (theme) =>
                `url(${config.featuresSection.gamesOffered[selectedItemIndex].icon})`,
              // backgroundSize: "cover",
              // backgroundPosition: "center",
              // minHeight: 280,
              width: "100%",
              height: "",
            }}
          /> */}
                <img
                  src={icon}
                  width="100%"
                  alt={title}
                  style={{ objectFit: "contain", padding: "24px" }}
                />
                <Box sx={{ px: 2, pb: 2 }}>
                  <Typography
                    color="text.primary"
                    variant="body2"
                    fontWeight="bold"
                  >
                    {title}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    variant="body2"
                    sx={{ my: 0.5 }}
                  >
                    {description}
                  </Typography>
                  {/* <Link
                    color="primary"
                    variant="body2"
                    fontWeight="bold"
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      "& > svg": { transition: "0.2s" },
                      "&:hover > svg": { transform: "translateX(2px)" },
                    }}
                  >
                    <span>Learn more</span>
                    <ChevronRightRoundedIcon
                      fontSize="small"
                      sx={{ mt: "1px", ml: "2px" }}
                    />
                  </Link> */}
                </Box>
              </Box>
            )
          )}
        </Stack>
      </Grid>
      {/* <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: "none", sm: "flex" }, width: "100%" }}
        >
          <Card
            variant="outlined"
            sx={{
              height: "100%",
              width: "100%",
              display: { xs: "none", sm: "flex" },
              pointerEvents: "none",
            }}
          >
            <Box
              sx={{
                m: "auto",
                width: 420,
                height: 500,
                backgroundSize: "contain",
                backgroundImage: (theme) =>
                  theme.palette.mode === "light"
                    ? items[selectedItemIndex].imageLight
                    : items[selectedItemIndex].imageDark,
              }}
            />
          </Card>
        </Grid> */}
      {/* </Grid> */}
    </Container>
  );
}
