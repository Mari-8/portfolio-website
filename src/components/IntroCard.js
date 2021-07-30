import React from 'react'
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      marginTop: 150,
      color: '#d9d9d9',
    },
  });

export default function IntroCard() {

    const classes = useStyles();

    return (
        <div className="intro-card">
            <h1>Full-Stack Software Engineer</h1>
        </div>
    )
}
