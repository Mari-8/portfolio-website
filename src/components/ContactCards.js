import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { HiOutlineMail } from "react-icons/hi";
import { AiTwotonePhone } from "react-icons/ai";
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa"
import { GrInstagram } from "react-icons/gr"

const useStyles = makeStyles({
  root: {
    fontSize: 20,
    textAlign: "center",
    marginTop: "50px",
  },
  blueColor: {
    color: "#05639e",
  },
  contactCard: {
    color: "#d9d9d9",
    width: "350px",
    height: "50px",
    backgroundColor: "#34343b",
  },
  iconStyle: {
      float: 'left',
      position: 'relative',
      top: '15%',
      left: '20px',
      fontSize: '35px',
      color: '#05639e'
  },
});

export default function ContactCards() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
     <div className="contact-cards">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <Grid item>
            <div className={classes.contactCard}>
                <HiOutlineMail className={classes.iconStyle} /> 
                <a href="mailto:ryanaltimari8@gmail.com" className="animating-link">ryanaltimari8@gmail.com</a>
            </div>
        </Grid>
        <Grid item>
            <div className={classes.contactCard}>
                <AiTwotonePhone className={classes.iconStyle} /> 
                <a href="tel:+19319934277" className="animating-link">931-993-4277</a>
            </div>
        </Grid>
        <Grid item>
            <div className={classes.contactCard}>
                <SiLinkedin className={classes.iconStyle} /> 
                <a href="https://www.linkedin.com/in/ryanaltimari/" className="animating-link">/ryanaltimari</a>
            </div>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <Grid item>
            <div className={classes.contactCard}>
                <FaGithub className={classes.iconStyle} /> 
                <a href="https://github.com/Mari-8" className="animating-link">/Mari-8</a>
            </div>
        </Grid>
        <Grid item>
            <div className={classes.contactCard}>
                <GrInstagram className={classes.iconStyle} /> 
                <a href="https://www.instagram.com/ryanaltimari/" className="animating-link">ryanaltimari</a>
            </div>
        </Grid>
      </Grid>
     </div>
    </Container>
  );
}
