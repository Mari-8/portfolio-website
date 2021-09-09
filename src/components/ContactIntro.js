import React from 'react'
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      fontSize: 25,
      textAlign: 'center',
      paddingTop: '150px',
      position: 'relative'
    },
    blueColor: {
        color: '#05639e'
    },
    textColor: {
        color: '#d9d9d9',
    }
  });

export default function ContactIntro() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
          <div className="contact-intro">
            <p className={classes.blueColor}>contact me</p>
            <h2 className={classes.textColor}>How to connect with me</h2>
            <br /> 
            <div className="dash-center" />
            <br /> 
            <p className={classes.textColor}>
                Here are my social accounts, feel free to reach out to me at any of these. <br/> I will respond as quickly as possible!
            </p>
          </div>
        </div>
    )
}
