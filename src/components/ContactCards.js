import React from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      fontSize: 25,
      textAlign: 'center',
      paddingTop: '150px',
    },
    blueColor: {
        color: '#05639e'
    },
    contactCard: {
        color: '#d9d9d9',
        width: '100px',
        height: '75px',
        content: 'center'
    }
  });

export default function ContactCards() {

    const classes = useStyles();

    return (
        <Container>
            <div className={classes.contactCard}>
                hello
            </div>
        </Container>
    )
}
