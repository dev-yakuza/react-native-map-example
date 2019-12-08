import React, {useState, useEffect} from 'react';
import Styled from 'styled-components/native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

const Container = Styled.View`
    flex: 1;
`;

interface ILocation {
  latitude: number;
  longitude: number;
}

const TrackUserLocation = () => {
  const [locations, setLocations] = useState<Array<ILocation>>([]);
  let _watchId: number;

  useEffect(() => {
    _watchId = Geolocation.watchPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLocations([...locations, {latitude, longitude}]);
      },
      error => {
        console.log(error);
      },
      {
        enableHighAccuracy: true,
        distanceFilter: 100,
        interval: 5000,
        fastestInterval: 2000,
      },
    );
  }, [locations]);

  useEffect(() => {
    return () => {
      if (_watchId !== null) {
        Geolocation.clearWatch(_watchId);
      }
    };
  }, []);

  return (
    <Container>
      {locations.length > 0 && (
        <MapView
          style={{flex: 1}}
          initialRegion={{
            latitude: locations[0].latitude,
            longitude: locations[0].longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {locations.map((location: ILocation, index: number) => (
            <Marker
              key={`location-${index}`}
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
            />
          ))}
        </MapView>
      )}
    </Container>
  );
};

export default TrackUserLocation;
