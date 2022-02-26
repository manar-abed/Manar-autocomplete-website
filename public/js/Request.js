// eslint-disable-next-line linebreak-style
const XMLRequest = (method, url, value, cb) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      cb(JSON.parse(xhr.responseText));
    }
  };

  xhr.open(method, url,true);
  xhr.send(value); // only post methode
};
