import "./displayMap.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function DisplayMap({ addressLatLong , mapBorderRadius}) {
  return (
    <MapContainer style={{borderRadius: mapBorderRadius}} center={addressLatLong} zoom={15} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
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
