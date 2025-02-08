import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import FacebookIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/X";
import SocialIcons from "./SocialIcons";
import config from "../config";

const logoStyle = {
  width: "120px",
  height: "auto",
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {"Copyright © "}
      <Link href="https://mui.com/">Sitemark&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: "center", md: "left" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        {/* <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            minWidth: { xs: "100%", sm: "60%" },
          }}
        >
          <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
            <Box sx={{ ml: "-15px" }}>
              <img
                src={"/assets/images/logo/logo.png"}
                style={logoStyle}
                alt="logo of sitemark"
              />
            </Box>
            <Typography variant="body2" fontWeight={600} gutterBottom>
              Newsletter
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Subscribe to our newsletter for weekly updates and promotions.
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap>
              <TextField
                id="outlined-basic"
                hiddenLabel
                size="small"
                variant="outlined"
                fullWidth
                aria-label="Enter your email address"
                placeholder="Your email address"
                inputProps={{
                  autoComplete: "off",
                  "aria-label": "Enter your email address",
                }}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ flexShrink: 0 }}
              >
                Subscribe
              </Button>
            </Stack>
          </Box>
        </Box> */}
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            {config.heroSection.title.regular +
              " " +
              config.heroSection.title.primary}
          </Typography>
          <Link color="text.secondary" href="#" sx={{ textDecoration: "none" }}>
            {config.navBarLinkTitles.testimonials}
          </Link>
          <Link color="text.secondary" href="#" sx={{ textDecoration: "none" }}>
            {config.navBarLinkTitles.features}
          </Link>
          <Link color="text.secondary" href="#" sx={{ textDecoration: "none" }}>
            {config.navBarLinkTitles.highlights}
          </Link>
          {/* <Link color="text.secondary" href="#" sx={{ textDecoration: "none"}}>
            Pricing
          </Link> */}
          <Link color="text.secondary" href="#" sx={{ textDecoration: "none" }}>
            {config.navBarLinkTitles.faq}
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            {config.footer.footerTopSection.secondColumn.title}
          </Typography>
          {config.footer.footerTopSection.secondColumn.links.map((link) => (
            <Link
              color="text.secondary"
              href={link.link}
              sx={{ textDecoration: "none" }}
            >
              {link.name}
            </Link>
          ))}
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            {config.footer.footerTopSection.thirdColumn.title}
          </Typography>
          {config.footer.footerTopSection.thirdColumn.links.map((link) => (
            <Link
              color="text.secondary"
              href={link.link}
              sx={{ textDecoration: "none" }}
            >
              {link.name}
            </Link>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pt: { xs: 4, sm: 8 },
          width: "100%",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        {/* <div>
          <Link color="text.secondary" href="#">
            Privacy Policy
          </Link>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="text.secondary" href="#">
            Terms of Service
          </Link>
          <Copyright />
        </div> */}
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: "text.secondary",
          }}
        >
          <IconButton
            color="inherit"
            href={config.heroSection.discordLink}
            aria-label={config.heroSection.discordText}
            sx={{ alignSelf: "center" }}
            target="_blank"
          >
            <SocialIcons.Discord />
          </IconButton>
          <IconButton
            color="inherit"
            href={config.heroSection.youtubeLink}
            aria-label={config.heroSection.youtubeText}
            sx={{ alignSelf: "center" }}
            target="_blank"
          >
            <SocialIcons.Youtube />
          </IconButton>
          <IconButton
            color="inherit"
            href={config.heroSection.twitchLink}
            aria-label={config.heroSection.twitchText}
            sx={{ alignSelf: "center" }}
            target="_blank"
          >
            <SocialIcons.Twitch />
          </IconButton>
          <IconButton
            color="inherit"
            href={config.heroSection.xLink}
            aria-label={config.heroSection.xText}
            sx={{ alignSelf: "center" }}
            target="_blank"
          >
            <SocialIcons.X />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
