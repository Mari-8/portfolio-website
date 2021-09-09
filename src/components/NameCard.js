import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import MenuBookIcon from "@material-ui/icons/MenuBook";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 100,
    marginLeft: 150,
    color: "#d9d9d9",
  },
  title: {
    fontSize: 35,
    color: "#d9d9d9",
    fontWeight: "bold",
  },
  content: {
    color: "#424249",
    fontSize: 14,
  },
  button: {
    color: "white",
  },
});

export default function NameCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="name-card">
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          <h1>
            Ryan
            <br />
            Altimari
            <span className="name-dot">.</span>
          </h1>
        </Typography>
        <br />
        <div className="dash-left" />
        <br />
        <div className={classes.content}>
          <a href="https://www.linkedin.com/in/ryanaltimari/" className="link-social">
            <LinkedInIcon />
          </a>

          <a href="https://github.com/Mari-8" className="link-social">
            <GitHubIcon className="marg-left" />
          </a>

          <a href="https://www.instagram.com/ryanaltimari/" className="link-social">
            <InstagramIcon className="marg-left" />
          </a>

          <a href="https://ryanangelo8.medium.com/ " className="link-social">
            <MenuBookIcon className="marg-left" />
          </a>
        </div>
        <br />
      </div>
    </div>
  );
}
