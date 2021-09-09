import React from "react";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        textAlign: 'center',
        color: '#d9d9d9'
    },
    title: {
        color: '#d9d9d9',
        fontSize: '35px',
        paddingTop: '10px',
        textAlign: 'center',
    },
    textfield: {
      height: '300px',
      width: '300px',
      color: '#d9d9d9',
      margin: '0 auto',
      textAlign: 'center'
    }
  });
  
export default function AboutSectionOne() {
    const classes = useStyles()

  return (
    <div className="about-sec-one">
      <span className="circle-image">
        <img
          src="/images/family_pic.jpg"
          className="img-main"
          alt="..."
        ></img>
      </span>
      <h1 className={classes.title}>Family</h1>
      <p className={classes.textfield}>
        The most important part of my support system. 
        I am blessed with a wonderful wife and an adorable puppy.
        A mother who owns two small businesses and is one of the greatest examples of hard work that I have.
        A sister that is always there for me,
        and my wife's family who lovingly accepted me as one of their own. I am so grateful to have them all in my life.
      </p>
      <p></p>
    </div>
  );
}
