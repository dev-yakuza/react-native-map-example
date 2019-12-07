import React from 'react';
import Styled from 'styled-components/native';
import MapView, {Marker} from 'react-native-maps';

const Container = Styled.View`
    flex: 1;
`;

const MarkerOnMap = () => {
  return (
    <Container>
      <MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{latitude: 37.78825, longitude: -122.4324}}
          title="this is a marker"
          description="this is a marker example"
        />
      </MapView>
    </Container>
  );
};

export default MarkerOnMap;
