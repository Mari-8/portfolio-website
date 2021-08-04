import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        textAlign: 'center',
        color: '#d9d9d9'
    },
    services: {
      color: '#05639e',
      paddingTop: '100px',
      fontSize: '25px'
    }
  });
export default function PortrolioIntro() {
    
    const classes = useStyles() 

    return (
        <div className={classes.root}>
                <p className={classes.services}>Projects</p>
                <h1>My Work</h1>
                <p>
                    I love making a veriety of projects, mostly partaining to things I love to do in life. <br/>
                    These are my favorites and what I am most proud of, the list will continue to grow quickly as I level up my programming skills<br/> and continue
                    to branch into new technologies and create greater products for myself and others
                </p>
        </div>
    )
}
