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

export default function AboutSectionThree() {
    const classes = useStyles()

  return (
    <div className="about-sec-three">
      <span className="circle-image">
        <img
          src="/images/closeup_book.jpg"
          className="img-main"
          alt="..."
        ></img>
      </span>
      <h1 className={classes.title}>Learning</h1>
      <p className={classes.textfield}>
        Aside from coding, my biggest passion is learning. Some of my favorite sources are podcasts and books, but I also find myself going down a lot of rabbit holes online.
        It can be anything, I find a lot of things interesting and love knowing how random things work as well as expanding my knowledge of programmimg.
      </p>
    </div>
  );
}
