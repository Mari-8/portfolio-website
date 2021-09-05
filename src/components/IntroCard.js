import React from 'react'
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      fontSize: 35,
      color: '#d9d9d9', 
      fontWeight: 'bold',
    },
    paragraph: {
        color: '#d9d9d9',
        fontSize: '20px',
    },
    paddingTop: {
        paddingTop: '100px',
        paddingRight: '100px',
    },
  });

export default function IntroCard() {

    const classes = useStyles();

    return (
        <div className="intro-div">
            <div className={classes.paddingTop}>
                <h1 className={classes.root}>Full-Stack Software Engineer</h1>
          
                <p className={classes.paragraph}>I am a Nashville, TN developer ready to make a difference one line of code at a time.<br/>Lets create something amazing together.</p>
            </div>
        </div>
    )
}
