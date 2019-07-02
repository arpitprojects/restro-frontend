import React, {
    Component, Fragment 
} from 'react'
import AppBar from '../../components/AppBar/AppBar';
import config from '../../utils/config';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import List from '../List/List';
import AutoComplete from '../Autocomplete/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import Map from '../Map/Map';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = { 
            buisness : [],
            currentLatitude  : 0,
            currentLongitiute : 0,
            isLoading : true,
            isResponsive : true
        }
    }
    getData = (val) => {
        this.setState({
            isLoading : true
        })
        this.getCurrentLocation(val.lat , val.lng);

    }
    getCurrentLocation = (x , y) => {
        console.log('2', this.state)
            var bodyParameters = {
                lat: x,
                lng: y,
            }
            axios.get(
                "http://localhost:8000",
                {params : bodyParameters},
                config
            ).then((response) => {
                this.setState({
                    isLoading : true
                })
                this.setState({
                    buisness  : response.data.businesses
                })

            }).catch((error) => {
                console.log(error)
            });
        }
        getGeoLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    position => {
                        
                        this.setState(prevState => ({
                                ...prevState,
                                currentLatitude: position.coords.latitude,
                                currentLongitiute: position.coords.longitude
                        }));
                        console.log('1' , position.coords);
                        this.getCurrentLocation(this.state.currentLatitude , this.state.currentLongitiute);
                    }
                )
            }
        }
        componentDidMount() {
            if(window.innerWidth <= 767){
                this.setState({
                    isResponsive : false
                })
            }
            this.getGeoLocation();
            console.log(this.state);
            // Favourable for api call
        
            // var bodyParameters = {
            //     lat: 44.314842,
            //     lng: -85.602364,
            // }
            // axios.get(
            //     "http://localhost:8000",
            //     {params : bodyParameters},
            //     config
            // ).then((response) => {
            //     this.setState({
            //         buisness  : response.data.businesses
            //     })
            // }).catch((error) => {
            //     console.log(error)
            // });
        }
        toggleSwitchBar = (e) =>{
            this.setState({
                isResponsive : !this.state.isResponsive
            })
        }
        execute(a , b){
            // console.log(a , b , '2');
            this.getCurrentLocation(a , b);
        }
        ececuteCurrentLocation = () => {
            this.getGeoLocation();
        }
    render() {
        return ( 
            <div id="Content">
              
                 <AutoComplete id="autocomplete" sendData={this.getData}/>
                  <AppBar toggleSwitch={ this.toggleSwitchBar} getC={this.ececuteCurrentLocation}/>
                
                {/* {!this.state.isLoading && <CircularProgress />} */}
                {  this.state.isLoading && <List buisnessData={this.state.buisness} /> }
                { this.state.isResponsive && this.state.buisness && <Map neewForm={(l , ln) => this.execute( l , ln)} buisnessData={this.state.buisness} /> }  
            </div>
        )
    }
}

export default Dashboard;