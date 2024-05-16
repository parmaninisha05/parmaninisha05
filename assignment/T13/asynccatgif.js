//Creatng  an async function which will fetch the API and which returns the response element.
async function fetchCatApi() {
  const response = await fetch(
    "http://thecatapi.com/api/images/get?format=src&type=gif"
  );
  return response.url;
}

fetchCatApi().then((responseURL) => {
  console.log("Cat URL", responseURL);
});
