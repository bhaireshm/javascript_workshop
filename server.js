const api_url = "http://hp-api.herokuapp.com/api/characters";

async function fetchHarryPotterCharacters(data) {
  // data initialise here
  try {
    // ternary, data object,

    // shorthand
    if (data) {
      data = data;
    } else {
      data = {};
    }

    // shorthand
    let url = data && data.url ? data.url : "";
    if (data == null || data == undefined) {
      data = data;
    }

    url = `${api_url}/${url}`;
    console.info("URL:", url);

    // url = url; // debug error here

    let response = await fetch(url);
    if (response.ok) {
      let json = await response.json(); // debug error here
      return json;
    } else {
      console.error("HTTP-Error: " + response.status);
    }
  } catch (e) {
    return e;
  }
}
