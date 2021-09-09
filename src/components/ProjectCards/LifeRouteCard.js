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

export default function LifeRouteCard(props) {
    const styles = useStyles()

    return (
        <Card className={styles.card} id="card-cont">
            <br />
            <h1>Life Route</h1>
            <CardContent>
            <p>
                A personal development tool for setting goals, and the routines and habits to achieve them.  
            </p>
            <ul className="no-bullet ">
                <li>Sinatra</li>
                <li>MVC</li>
                <li>CSS/Bulma styling</li>
                <li>BCrypt authentication</li>
                <li>Custom validators</li>
            </ul>
            </CardContent>
            <div className="gal-buttons">
              <a href="https://github.com/Mari-8/Life-Route">
                <button type="button" className="btn project-buttons">Code</button>
              </a>
                <button type="button" id="book-club"  className="btn project-buttons mx-3" onClick={() => props.selectGal('life-route')}>Images</button>
                <button type="button" className="btn project-buttons disabled">Demo</button>
            </div>
            <br />
        </Card>
    )
}
