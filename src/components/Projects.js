import React from 'react'
import ImageGallery from 'react-image-gallery';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import ProjectButtons from './ProjectButtons'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/ButtonGroup'


const useStyles = makeStyles({
    card: {
        textAlign: 'center',
        width: '500px',
        height: '360px',
        margin: '0 auto',
        background: '#34343b',
        color: '#d9d9d9',
    },
    services: {
      color: '#05639e',
      paddingTop: '150px',
      fontSize: '25px'
    }
  });


export default function Projects() {

    const styles = useStyles()

    const images = [
        {
          original: 'https://res.cloudinary.com/kinsleybphoto/image/upload/v1628092243/Screen_Shot_2021-08-04_at_9.41.39_AM_zyrfsz.png',
          thumbnail: 'https://res.cloudinary.com/kinsleybphoto/image/upload/c_thumb,w_200,g_face/v1628092243/Screen_Shot_2021-08-04_at_9.41.39_AM_zyrfsz.png',
        },
        {
          original: 'https://res.cloudinary.com/kinsleybphoto/image/upload/v1628092882/Screen_Shot_2021-08-04_at_9.10.01_AM_hl2zox.png',
          thumbnail: 'https://res.cloudinary.com/kinsleybphoto/image/upload/c_thumb,w_200,g_face/v1628092882/Screen_Shot_2021-08-04_at_9.10.01_AM_hl2zox.png',
        },
        {
          original: 'https://res.cloudinary.com/kinsleybphoto/image/upload/v1628092887/Screen_Shot_2021-08-04_at_9.42.03_AM_bwvm3c.png',
          thumbnail: 'https://res.cloudinary.com/kinsleybphoto/image/upload/c_thumb,w_200,g_face/v1628092887/Screen_Shot_2021-08-04_at_9.42.03_AM_bwvm3c.png',
        },
      ];

    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            
            <div className="carousel-inner text-center">
                <div className="carousel-item active">
                <Card className={styles.card}>
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
                        <div>
                            <button type="button" className="btn project-buttons">Code</button>
                            <button type="button" className="btn project-buttons mx-3">Images</button>
                            <button type="button" className="btn project-buttons disabled">Demo</button>
                        </div>
                        <br />
                </Card>
                </div>
                <div class="carousel-item">
                    <Card className={styles.card}>
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
                            <div>
                                <button type="button" className="btn project-buttons">Code</button>
                                <button type="button" className="btn project-buttons mx-3">Images</button>
                                <button type="button" className="btn project-buttons disabled">Demo</button>
                            </div>
                            <br />
                    </Card>
                </div>
                <div class="carousel-item">
                    <Card className={styles.card}>
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
                            <div>
                                <button type="button" className="btn project-buttons">Code</button>
                                <button type="button" className="btn project-buttons mx-3">Images</button>
                                <button type="button" className="btn project-buttons disabled">Demo</button>
                            </div>
                            <br />
                    </Card>
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
