import React, { Component } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
  } from 'react-places-autocomplete';
import Grid from '@material-ui/core/Grid';
import { classnames } from './helpers';

class AutoComplete extends Component{
    constructor(props) {
        super(props);
        this.state = { address: '' };
      }
      handleChange = address => {
        this.setState({ address });
      };
     
    handleSelect = address => {
        this.setState({
            address : address
        })
        geocodeByAddress(address)
        .then(results => getLatLng(results[0]))
        .then(latLng => this.props.sendData(latLng))
        .catch(error => console.error('Error', error));
    };
     
    render(){
        const {
            address,
            errorMessage,
            latitude,
            longitude,
            isGeocoding,
          }  = this.state;
        return(
            <div>
                 <Grid item xs={12} sm={12} lg={9} md={9} id="new-auto">
                 <PlacesAutocomplete
          onChange={this.handleChange}
          value={address}
          onSelect={this.handleSelect}
          onError={this.handleError}
          shouldFetchSuggestions={address.length > 2}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps }) => {
            return (
              <div className="Demo__search-bar-container">
                <div className="Demo__search-input-container">
                  <input
                    {...getInputProps({
                      placeholder: 'Search Places...',
                      className: 'Demo__search-input',
                    })}
                  />
                 
                </div>
                {suggestions.length > 0 && (
                  <div className="Demo__autocomplete-container">
                    {suggestions.map(suggestion => {
                      const className = classnames('Demo__suggestion-item', {
                        'Demo__suggestion-item--active': suggestion.active,
                      });

                      return (
                        /* eslint-disable react/jsx-key */
                        <div
                          {...getSuggestionItemProps(suggestion, { className })}
                        >
                          <strong>
                            {suggestion.formattedSuggestion.mainText}
                          </strong>{' '}
                          <small>
                            {suggestion.formattedSuggestion.secondaryText}
                          </small>
                        </div>
                      );
                      /* eslint-enable react/jsx-key */
                    })}
                  </div>
                )}
              </div>
            );
          }}
        </PlacesAutocomplete>
                </Grid>
            </div>
        )
    }
}

export default AutoComplete;