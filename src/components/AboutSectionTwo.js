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
      textAlign: 'center',
    }
  });

export default function AboutSectionTwo() {
    const classes = useStyles()
  return (
    <div className="about-sec-two">
      <span className="circle-image">
        <img
          src="/images/mountain.jpeg"
          className="img-main"
          alt="Man on a mountain"
        ></img>
      </span>
      <h1 className={classes.title}>Life</h1>
      <p className={classes.textfield}>
        I love the outdoors! When I'm not coding or learning I enjoy hiking, fishing, kayaking and just being out in nature.<br/>
        I also enjoy fitness and learning about nutrition and how to optimize my body and mind.
      </p>
    </div>
  );
}
