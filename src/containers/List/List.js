import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
class ListA extends Component{
    
    render(){
        console.log(this.props.buisnessData);
        return (
            
            <div>
                 <Grid item xs={12} sm={12} lg={3} md={3}>
                    <div className="paper-custom" id="style-4">
                        {this.props.buisnessData.length === 0 && <div>
                            <List component="nav" aria-label="Main mailbox folders">
                            <ListItem button>
                            <ListItemText primary="No List Found Try Searching!" />
                            </ListItem>
                            </List>
                              </div>}
                              {
                            this.props.buisnessData && this.props.buisnessData.map((restro, index) => {
                                
                                return (
                                    <div key={restro.id}><a href={restro.url}>
                                        <Card className="fix-card">
                                            <div className="t1">
                                                <CardContent >
                                                <Typography component="h6" variant="h6" className="stitle">
                                                    {restro.name}
                                                </Typography>
                                                <Typography variant="subtitle1" color="textSecondary"  className="review">
                                                <Chip label={restro.review_count} className="review" /> &nbsp;&nbsp;
                                                <Chip label={restro.rating} className="review" />
                                                
                                                </Typography>
                                                <Typography variant="subtitle1" color="textSecondary"  className="s1title">
                                                    {restro.location.address1}, {restro.location.city}
                                                </Typography>
                                                </CardContent>
                                                <div >
                                                {restro.is_closed ? <Chip label="Open" className="open" variant="outlined" /> : <Chip label="Closed" className="closed" variant="outlined" />}
                                                
                                                </div>
                                            </div>
                                          
                                            { restro.image_url ? (
      <CardMedia className="img" src={restro.image_url} component="img" title="Live from space album cover" height="160"/>
  ) : (
    <CircularProgress />
  )}
                                            </Card></a>
                                    </div>
                                );
                            })
                        }
                    </div>
                </Grid>
            </div>
        )
    }
}

export default ListA;