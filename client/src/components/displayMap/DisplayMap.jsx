import "./displayMap.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

function DisplayMap({ addressLatLong, mapBorderRadius }) {
  function ChangeMapView({ addressLatLong }) {
    const map = useMap();
    map.setView(addressLatLong, map.getZoom());
    return null;
  }

  return (
    <MapContainer
      style={{ borderRadius: mapBorderRadius }}
      zoom={15}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ChangeMapView addressLatLong={addressLatLong} />
      <Marker position={addressLatLong}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.{" "}
          {/*Message which pops when location icon is clicked on the map*/}
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default DisplayMap;
