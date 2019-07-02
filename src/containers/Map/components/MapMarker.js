import React from "react";
import { Marker, InfoWindow  } from "react-google-maps";
import StethoscopeIcon from "../../../assets/images/beachflag.png";


export default class MapMarker extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isOpen: false,
            activeMarker: this.props.activeMarker
        }
    }
    toggleOpen = () => {
        // console.log(this.props);
        window.location.href = this.props.details.url;
    }
    componentWillReceiveProps(nextProps){
        this.setState({activeMarker: nextProps.activeMarker})
    }
    render(){
        // console.log('Ok' , this.props);
    return(
        <div>
            { this.props.location && <Marker onClick={this.toggleOpen}
          position={this.props.location }
          icon={StethoscopeIcon}
        >
            </Marker> }
        </div>
    );
  }
}