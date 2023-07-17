// MapComponent.js
import React from 'react';
import { GoogleMap, LoadScript, Circle } from '@react-google-maps/api';

const MapComponent = () => {
  const mapStyles = {
    height: '100%',
    width: '100%',
  };

  const defaultCenter = {
    lat: 48.0196,
    lng: 66.9237,
  };

  // Forest area coordinates of Kazakhstan (sample data)
  const forestAreaCoordinates = [
    { lat: 52.0051, lng: 73.2280 },
    { lat: 49.0627, lng: 87.3344 },
    { lat: 44.8186, lng: 82.8290 },
    // Add more coordinates as needed
  ];

  return (
    <LoadScript googleMapsApiKey="AIzaSyBLvV_xuyRgX5pI0Bgl32WEfwH9SHONtKE">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={5}
        center={defaultCenter}
      >
        <Circle
          center={defaultCenter}
          radius={1000000} // Adjust the radius as needed to cover the forested regions
          options={{
            strokeColor: '#0000FF',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.35,
          }}
        />
        {forestAreaCoordinates.map((coords, index) => (
          <Circle
            key={index}
            center={coords}
            radius={50000} // Adjust the radius as needed for each forest area
            options={{
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: 'red',
              fillOpacity: 0.35,
            }}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
