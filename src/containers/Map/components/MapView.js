import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import MapMarker from './MapMarker';


const MapView = withScriptjs(withGoogleMap((props) =>{
    // console.log(props.buisnessData)
    const latitude = (props.buisnessData.length > 0) ? props.buisnessData[0].coordinates.latitude : 44.314842;
    const longitude = (props.buisnessData.length > 0) ? props.buisnessData[0].coordinates.longitude : -85.602364;
    const handleClick = (event)=>  {
        console.log('1');
        props.getDyanamicLatLng(event.latLng.lat() , event.latLng.lng())
        }
        return (    
            <div>
            { props.buisnessData && <GoogleMap onClick={(e) => handleClick(e)} 
                defaultZoom={8}
                center={ { lat:  latitude, lng: longitude } }
                >
                { props.buisnessData && props.buisnessData.map( bui => <MapMarker 
                key={bui.id}
                id={bui.id}
                details={bui}
                closeMarkers={ props.closeOtherMarkers}
                activeMarker={bui.id === props.activeMarker ? true : false}
                location={{lat: bui.coordinates.latitude, lng: bui.coordinates.longitude}}
              />)}
            </GoogleMap> }
            </div>
        );
    }
));

export default MapView;