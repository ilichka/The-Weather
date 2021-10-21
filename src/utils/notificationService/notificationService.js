import "./index.scss";

const CONTAINER_ELEMENT_ID = "notifications-container";

const initializeNotifications = () => {
  const message = document.createElement("div");
  message.classList.add(CONTAINER_ELEMENT_ID);
  message.id = CONTAINER_ELEMENT_ID;
  document.body.appendChild(message);
};

const counter = {
  innerCount: 0,
  increment() {
    this.innerCount++;
  },
  count() {
    this.increment();
    return this.innerCount;
  },
};

const generateNotificationElement = (type, text) =>
  `<div class="notification ${type}">${text}</div>`;

export const addNotification = (type, text) => {
  const containerElement = document.getElementById(CONTAINER_ELEMENT_ID);
  const newNotificationElement = document.createElement("div");
  newNotificationElement.innerHTML = generateNotificationElement(type, text);
  const id = `message_${counter.count()}`;
  newNotificationElement.id = id;
  containerElement.appendChild(newNotificationElement);

  setTimeout(() => {
    containerElement.removeChild(document.getElementById(id));
  }, 3000);
};

export default initializeNotifications;
