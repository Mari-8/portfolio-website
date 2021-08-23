import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { HiOutlineMail } from "react-icons/hi";
import { AiTwotonePhone } from "react-icons/ai";
import { SiLinkedin } from "react-icons/si";

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
      color: '#d9d9d9'
  },
  linkStyle: {
    textDecoration: 'none',
    position: 'relative',
    top: '10%',
    color: '#05639e',
    '&:hover': {
        
      },
  }
});

export default function ContactCards() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
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
                <a href="google.com" className={classes.linkStyle}>ryanaltimari8@gmail.com</a>
            </div>
        </Grid>
        <Grid item>
            <div className={classes.contactCard}>
                <AiTwotonePhone className={classes.iconStyle} /> 
                <a href="google.com" className={classes.linkStyle}>931-993-4277</a>
            </div>
        </Grid>
        <Grid item>
            <div className={classes.contactCard}>
                <SiLinkedin className={classes.iconStyle} /> 
                <a href="google.com" className={classes.linkStyle}>/ryanaltimari</a>
            </div>
        </Grid>
      </Grid>
    </Container>
  );
}
