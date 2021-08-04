import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        textAlign: 'center',
        color: '#d9d9d9'
    },
    services: {
      color: '#05639e',
      paddingTop: '150px',
      fontSize: '25px'
    }
  });


export default function ServicesChunk() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <p className={classes.services}>Services</p>
            <h1>My Toolbelt</h1>
            <p>I am a Full-Stack software engineer constantly sharpening my craft with a goal to create<br/>
            Applications and software that solve problems and ultumitely make life easier for those using them.<br/> 
            Here are the tools I use to achieve this</p>
        </div>
    )
}
