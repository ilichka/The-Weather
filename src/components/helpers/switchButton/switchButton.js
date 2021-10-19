import "./index.scss";

const addBtnListener = (btn) => {
  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    btn.classList.toggle("switch-on");
  });
};

const switchButton = () => {
  const switchBtn = document.createElement("div");
  switchBtn.classList.add("switch-btn");
  addBtnListener(switchBtn);
  document.querySelector(".footer").appendChild(switchBtn);
};

export default switchButton;
