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

export default function ChandlerTrackCard(props) {
    const styles = useStyles()

    return (
        <Card className={styles.card} id="card-cont">
            <br />
            <h1>ChandlerTrack</h1>
            <CardContent>
            <p>
                A versatile candle making dashboard for any chandler to track recipes, inventory list, and notes. 
            </p>
            <ul className="no-bullet ">
                <li>Ruby on rails</li>
                <li>Pure JavaScript</li>
                <li>HTML/CSS</li>
                <li>Custom serializers</li>
            </ul>
            </CardContent>
            <div className="gal-buttons">
              <a href="https://github.com/Mari-8/ChandlerTrack/tree/master">
                <button type="button" className="btn project-buttons">Code</button>
              </a>
                <button type="button" className="btn project-buttons mx-3" onClick={() => props.selectGal('chandler-track')}>Images</button>
                <button type="button" className="btn project-buttons disabled">Demo</button>
            </div>
        </Card>
    )
}
