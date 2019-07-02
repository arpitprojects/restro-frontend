import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import WelcomeI from '../../assets/images/welcome.jpg';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';

class Welcome extends Component{
    proceedHandler = () => {
        // setOpen(true);
        this.props.history.push('/dashboard');
    }

    render(){
        
        return (
            <div>
                <Grid container  justify="space-evenly" direction="row" >
                    <Grid item md={6} xs={12}>
                        <div className="padding-10">
                           <h1 className="title"> Restro </h1>
                           <p className="s-title">Explore resturants by locations.</p>
                        </div>
                       
                        <div className="padding-5 welcome-text">
                    <br /><br/>
                    <Fab variant="extended" aria-label="Proceed" className="Fab" onClick={this.proceedHandler}>
                        Start exploring!
                        <i className="material-icons">play_arrow</i>
                        
                    </Fab>
                    <br /><br /><br/>
                    <p className="desc">Search Resturants by location, interactive web applications for playing around.
                   </p>

                    <div className="welcome-card">
                    <p className="desc">Google Map Supported!
                   </p>     
                    </div>
                    </div>  
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <div>
                          <img src={WelcomeI} className="Content" />
                      </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Welcome;