import React from "react";
import MapView from "./components/MapView";
import Grid from '@material-ui/core/Grid';
class Map extends React.Component {
    state = {
		doctors: [],
		activeMarker: null
	}
    closeOtherMarkers = (uid) => {
		this.setState({activeMarker: uid})
	}
     handleClick = (event)=>  {
         console.log(event);
    }
    getDyanamicLatLng1 = (a , b) => {
      
        this.props.neewForm(a  ,b);
    }
	render() {
		return (
			<Grid item xs={12} sm={12} lg={9} md={9}>
                <div>
                <MapView 
                getDyanamicLatLng={(a , b) => this.getDyanamicLatLng1(a , b)}
                onClick={(e) => this.handleClick(e)}
                closeOtherMarkers={ this.closeOtherMarkers } id='new'
                buisnessData={this.props.buisnessData}
                activeMarker={this.state.activeMarker}
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDAQOhuvUriLPgDzVblnSSH7BUj-s2EMSw&v=3.exp&libraries=geometry,drawing,places`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div id="name" style={{ height: `91vh`, width: `75%`,    position: `absolute` , top: `65px`, right: `0` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
                </div>
        
            </Grid>
        );
        
	}
}

export default Map;