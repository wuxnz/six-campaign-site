import * as React from "react";
import { IconButton, alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import config from "../config";
import SocialIcons from "./SocialIcons";
import { ArrowRight } from "@mui/icons-material";

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundImage:
          theme.palette.mode === "light"
            ? "linear-gradient(180deg, #CEE5FD, #FFF)"
            : `linear-gradient(${alpha(theme.palette.primary.dark, 1)}, ${alpha(
                "#090E10",
                0.0
              )})`,
        // backgroundColor: theme.palette.primary.dark,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: "100%", sm: "70%" } }}>
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignSelf: "center",
              textAlign: "center",
              fontSize: "clamp(3.5rem, 10vw, 4rem)",
            }}
          >
            {config.heroSection.title.regular}&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: "clamp(3rem, 10vw, 4rem)",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? "primary.main"
                    : "primary.light",
              }}
            >
              {config.heroSection.title.primary}&nbsp;
            </Typography>
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
          >
            {config.heroSection.subtitle}
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignSelf="center"
            spacing={1}
            sx={{ pt: 2, width: { xs: "100%", sm: "auto" }, gap: 1 }}
          >
            {/* <TextField
              id="outlined-basic"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter your email address"
              placeholder="Your email address"
              inputProps={{
                autoComplete: "off",
                "aria-label": "Enter your email address",
              }}
            /> */}
            <Link
              component="button"
              color="text.primary"
              sx={{
                display: "flex",
                gap: 1,
                padding: "8px 16px",
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.primary.contrastText,
                textDecoration: "none",
                borderRadius: "4px",
                width: { xs: "100%", sm: "auto" },
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
              onClick={() =>
                window.open(config.heroSection.discordLink, "_blank")
              }
            >
              <SocialIcons.Discord />
              {config.heroSection.discordText}
            </Link>
            <Link
              component="button"
              color="text.primary"
              sx={{
                display: "flex",
                gap: 1,
                padding: "8px 16px",
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.primary.contrastText,
                textDecoration: "none",
                borderRadius: "4px",
                width: { xs: "100%", sm: "auto" },
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
              onClick={() =>
                window.open(config.heroSection.youtubeLink, "_blank")
              }
            >
              <SocialIcons.Youtube />
              {config.heroSection.youtubeText}
            </Link>
            <Link
              component="button"
              color="text.primary"
              sx={{
                display: "flex",
                gap: 1,
                padding: "8px 16px",
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.primary.contrastText,
                textDecoration: "none",
                borderRadius: "4px",
                width: { xs: "100%", sm: "auto" },
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
              onClick={() =>
                window.open(config.heroSection.twitchLink, "_blank")
              }
            >
              <SocialIcons.Twitch />
              {config.heroSection.twitchText}
            </Link>
            <Link
              component="button"
              color="text.primary"
              sx={{
                display: "flex",
                gap: 1,
                padding: "8px 16px",
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.primary.contrastText,
                textDecoration: "none",
                borderRadius: "4px",
                width: { xs: "100%", sm: "auto" },
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
              onClick={() => window.open(config.heroSection.xLink, "_blank")}
            >
              <SocialIcons.X />
              {config.heroSection.xText}
            </Link>
          </Stack>
          <Typography
            variant="caption"
            textAlign="center"
            sx={{ opacity: 0.8 }}
          >
            {config.heroSection.caption}
          </Typography>
        </Stack>
        {/* <Box
          id="image"
          sx={(theme) => ({
            mt: { xs: 8, sm: 10 },
            alignSelf: "center",
            height: { xs: 200, sm: 700 },
            width: "100%",
            backgroundImage:
              theme.palette.mode === "light"
                ? 'url("/assets/images/templates/templates-images/hero-light.png")'
                : 'url("/assets/images/templates/templates-images/hero-dark.png")',
            backgroundSize: "cover",
            borderRadius: "10px",
            outline: "1px solid",
            outlineColor:
              theme.palette.mode === "light"
                ? alpha("#BFCCD9", 0.5)
                : alpha("#9CCCFC", 0.1),
            boxShadow:
              theme.palette.mode === "light"
                ? `0 0 12px 8px ${alpha("#9CCCFC", 0.2)}`
                : `0 0 24px 12px ${alpha("#033363", 0.2)}`,
          })}
        /> */}
      </Container>
    </Box>
  );
}
