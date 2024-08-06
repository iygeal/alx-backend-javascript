function handleResponseFromAPI(promise) {
  return promise
    .then((result) => { // eslint-disable-line
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch((error) => {
      return new Error();
    })
    .finally(() => {
      console.log('Got a response from the API');
    });
}

export default handleResponseFromAPI;
