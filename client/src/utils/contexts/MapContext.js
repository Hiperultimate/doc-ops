class MapSearchInstance{
    constructor(locationName,lat,long){
      this.locationName = locationName;
      this.lat = lat;
      this.long = long;
    }
}
// FIX LATE ADDRESS DISPLAY IN DOCTOR REGISTER PAGE
export async function searchToAddressResults(searchAddress) {
    try {
        searchAddress = searchAddress.replace(/[^a-zA-Z ]/g, "").replaceAll(' ', '+');
        const getAddressResult = await fetch(`https://geocode.search.hereapi.com/v1/geocode?q=${searchAddress}&apiKey=${process.env.REACT_APP_HERE_API_KEY}`);
        if(!getAddressResult.ok){
          console.log(`An error has occured : ${getAddressResult.status}`);
        }
        const searchResult = await getAddressResult.json(); // Search result list
        const returnList = [];
        
        if(!searchResult.status){
          for (let i = 0; i < searchResult.items.length; i++){
            const searchItem = searchResult.items[i];
            returnList.push(new MapSearchInstance(searchItem.address.label , searchItem.position.lat, searchItem.position.lng))
          }
        }
        return returnList;
    } catch (error) {
        throw new Error(error);
    }
}