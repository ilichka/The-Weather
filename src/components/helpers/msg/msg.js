import "./index.scss";

const appendMsg = () => {
  const msg = document.createElement("div");
  msg.classList.add("msg");
  document.querySelector(".app").appendChild(msg);
};

export default appendMsg;
