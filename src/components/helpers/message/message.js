import "./index.scss";

const appendMessage = () => {
  const message = document.createElement("div");
  message.classList.add("message");
  document.querySelector(".app").appendChild(message);
};

export default appendMessage;
