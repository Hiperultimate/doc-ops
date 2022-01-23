class MapSearchInstance{
    constructor(locationName,lat,long){
      this.locationName = locationName;
      this.lat = lat;
      this.long = long;
    }
}

export async function searchToAddressResults(searchAddress) {
    try {
        const getAddressResult = await fetch(
          `https://geocoder.ls.hereapi.com/search/6.2/geocode.json?languages=en-US&maxresults=4&searchtext=${searchAddress}&apiKey=${process.env.REACT_APP_HERE_API_KEY}`
        );
        // const test = await fetch(`https://geocode.search.hereapi.com/v1/geocode?q=${searchAddress}&apiKey=${process.env.REACT_APP_HERE_API_KEY}`); // USE THIS INSTEAD
        return getAddressResult;
    } catch (error) {
        throw new Error(error);
    }
}