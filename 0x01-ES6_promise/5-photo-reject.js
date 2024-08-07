export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => { // eslint-disable-line
    reject(new Error(`${fileName} cannot be processed`));
  });
}
