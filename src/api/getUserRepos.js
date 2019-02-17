export default function getUserRepos(url) {
  return fetch(url).then(onSuccess, onError);
}

const onSuccess = response => {
  return response.json();
};

const onError = error => {
  return console.log(error);
};
