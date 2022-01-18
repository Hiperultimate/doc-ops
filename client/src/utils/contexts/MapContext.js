export async function searchToAddressResults(searchAddress) {
    try {
        const getAddressResult = await fetch(
          `https://geocoder.ls.hereapi.com/search/6.2/geocode.json?languages=en-US&maxresults=4&searchtext=${searchAddress}&apiKey=${process.env.REACT_APP_HERE_API_KEY}`
        );
        return getAddressResult;
    } catch (error) {
        throw new Error(error);
    }
}
