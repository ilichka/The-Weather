const errorHandler = (inner) => {
  const msg = document.querySelector(".msg");
  msg.innerHTML = inner;
  document.querySelector(".msg").classList.add("visible");
  setTimeout(
    () => document.querySelector(".msg").classList.remove("visible"),
    3000
  );
};

export default errorHandler;
