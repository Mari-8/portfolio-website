import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
        textAlign: 'center',
        width: '500px',
        height: '360px',
        margin: '0 auto',
        background: '#34343b',
        color: '#d9d9d9',
    }
  });

export default function BookClubCard(props) {
    const styles = useStyles()

    return (
        <Card className={styles.card} id="card-cont">
            <br />
            <h1>Book Club</h1>
            <CardContent>
            <p>
                A personal application for tracking books, personalizing their categorization, and hosting/joining discussions. 
            </p>
            <ul className="no-bullet ">
                <li>Ruby on rails</li>
                <li>JSON Web Tokens</li>
                <li>Rails MVC patter</li>
                <li>SQL database</li>
                <li>OmniAuth middleware</li>
            </ul>
            </CardContent>
            <div className="gal-buttons">
              <a href="https://github.com/Mari-8/BookClub/tree/master">
                <button type="button" className="btn project-buttons">Code</button>
              </a>
                <button type="button" id="book-club"  className="btn project-buttons mx-3" onClick={() => props.selectGal('book-club')}>Images</button>
                <button type="button" className="btn project-buttons disabled">Demo</button>
            </div>
            <br />
        </Card>
    )
}
