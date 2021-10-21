import { addNotification } from "./notificationService/notificationService";

export default (url) =>
  fetch(url)
    .then((response) => response.json())
    .catch((error) => addNotification("error", error.message));
