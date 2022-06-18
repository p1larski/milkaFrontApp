import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Button from './ScrollToTop';
const mapStyles = {
  width: '800px',
  height: '500px',
  marginLeft: '10%',
  maxHeight: '500px',
  padding: '0px',
  alignItem: 'center'
};

class Mape extends Component {
  render() {
    return (
      <Map google={this.props.google}
           zoom={14}
           style={mapStyles}
           width={500}
           initialCenter={
          {
            lat: 51.1186981457655,
            lng: 17.00409024417879
          }
        }
      >
      <Marker name={'Tutaj'}
              position={{lat: 51.1186981457655,
                lng: 17.00409024417879}}/>
        
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'APiKEY'
})(Mape);
