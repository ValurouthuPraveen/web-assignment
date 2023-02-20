export default function setDataToSessionStorage(sessionName, data) {
  return sessionStorage.setItem(sessionName, data);
}