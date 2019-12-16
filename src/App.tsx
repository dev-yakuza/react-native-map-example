import React from 'react';
import Styled from 'styled-components/native';
// Apple Map
// import Map from '~/AppleMap';
// Google Map
// import Map from '~/GoogleMap';
// Initial location
// import Map from '~/InitialLocation';
// Marker
// import Map from '~/MarkerOnMap';
// Tracking Map with Marker
// import Map from '~/TrackingMapWithMarker';
// User Location
// import Map from '~/UserLocation';
// Track User Location
import Map from '~/TrackUserLocation';

const Container = Styled.View`
    flex: 1;
`;

const App = () => {
  return (
    <Container>
      <Map />
    </Container>
  );
};

export default App;
