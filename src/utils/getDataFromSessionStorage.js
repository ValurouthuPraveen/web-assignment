export default function getDataFromSessionStorage(sessionName) {
  return JSON.parse(sessionStorage.getItem(sessionName));
}