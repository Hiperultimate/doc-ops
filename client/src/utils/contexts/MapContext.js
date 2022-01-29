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
        searchAddress = searchAddress.replaceAll(' ', '+');
        const getAddressResult = await fetch(`https://geocode.search.hereapi.com/v1/geocode?q=${searchAddress}&apiKey=${process.env.REACT_APP_HERE_API_KEY}`); // USE THIS INSTEAD
        const searchResult = await getAddressResult.json(); // Search result list
        
        const returnList = [];
        
        for (let i = 0; i < searchResult.items.length; i++){
          const searchItem = searchResult.items[i];
          returnList.push(new MapSearchInstance(searchItem.address.label , searchItem.position.lat, searchItem.position.lng))
        }
        return returnList;
    } catch (error) {
        throw new Error(error);
    }
}