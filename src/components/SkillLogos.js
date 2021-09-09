import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import CodeIcon from '@material-ui/icons/Code';
import { FaReact } from 'react-icons/fa'
import { DiRuby } from 'react-icons/di'
import { SiRails } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io'
import { SiRedux } from 'react-icons/si'

const useStyles = makeStyles({
    root: {
      
    },
    card: {
        width: '125px',
        height: '125px',
        backgroundColor: '#2e2e35',
        textAlign: 'center',
        boxShadow: '0px 0px 35px 14px rgba(5,99,158,0.95)',
        marginLeft: '50px',
    },
    background: {
        
    },
    icons: {
        fontSize: '60px',
        color: '#d9d9d9'
    }, 
    text: {
        color: '#d9d9d9',
        marginTop: '10px'
    }
  });

  // off-white = d9d9d9

export default function SkillLogos() {
    
    const classes = useStyles();

    return (

        <Grid container className="skill-cards">
            <Grid item xs={6} sm={6} md={2} className="skill-card-grid">
                <Card className={classes.card} id="card">
                    <CardContent className="card-cont">
                         <CodeIcon className={classes.icons} id="icons"/> 
                         <br /> 
                         <p className={classes.text}>HTML/CSS</p>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={6} sm={6} md={2} className="skill-card-grid">
                <Card className={classes.card} id="card">
                    <CardContent className="card-cont">
                        <DiRuby className={classes.icons} id="icons"/> 
                        <p className={classes.text}>Ruby</p>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={6} sm={6} md={2} className="skill-card-grid">
                <Card className={classes.card} id="card">
                    <CardContent className="card-cont">
                        <SiRails className={classes.icons}  id="icons"/> 
                        <p className={classes.text}>Rails</p>
                    </CardContent>
                </Card>
            </Grid>
            
            <Grid item xs={6} sm={6} md={2} className="skill-card-grid">
                <Card className={classes.card} id="card">
                    <CardContent className="card-cont">
                        <IoLogoJavascript className={classes.icons}  id="icons"/> 
                        <p className={classes.text}>JavaScript</p> 
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={6} sm={6} md={2} className="skill-card-grid">
                <Card className={classes.card} id="card">
                    <CardContent className="card-cont">
                        <FaReact className={classes.icons}  id="icons"/>
                        <p className={classes.text}>React</p> 
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={6} sm={6} md={2} className="skill-card-grid">
                <Card className={classes.card} id="card">
                    <CardContent className="card-cont">
                        <SiRedux className={classes.icons} id="icons" /> 
                        <p className={classes.text}>Redux</p> 
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        
        // <div className="container skill-cont">
        //   <div className="row"> 
        //     <div className="col top">
        //         <Card className={classes.card}>
        //             <CardContent className="card-effect">
        //                 <CodeIcon className={classes.icons}/> 
        //                 <br /> 
        //                 <p className={classes.text}>HTML/CSS</p>
        //             </CardContent>
        //         </Card>
        //     </div>
         
        //     <div className="col top">
        //         <Card className={classes.card}>
        //             <CardContent>
        //                 <DiRuby className={classes.icons} /> 
        //                 <p className={classes.text}>Ruby</p>
        //             </CardContent>
        //         </Card>
        //     </div>

        //     <div className="col top">
        //         <Card className={classes.card}>
        //             <CardContent>
        //                 <SiRails className={classes.icons} /> 
        //                 <p className={classes.text}>Rails</p>
        //             </CardContent>
        //         </Card>
        //     </div>
          
        //     <div className="col">
        //         <Card className={classes.card}>
        //             <CardContent>
        //                 <IoLogoJavascript className={classes.icons} /> 
        //                 <p className={classes.text}>JavaScript</p> 
        //             </CardContent>
        //         </Card>
        //     </div>

        //     <div className="col">
        //         <Card className={classes.card}>
        //             <CardContent>
        //                 <FaReact className={classes.icons} />
        //                 <p className={classes.text}>React</p> 
        //             </CardContent>
        //         </Card>
        //     </div>


        //     <div className="col">
        //         <Card className={classes.card}>
        //             <CardContent>
        //                 <SiRedux className={classes.icons} /> 
        //                 <p className={classes.text}>Redux</p> 
        //             </CardContent>
        //         </Card>
        //     </div>
        //   </div>
        //</div>
    )
}
