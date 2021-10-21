const clearBlockById = (id) => {
  document.getElementById(id).innerHTML = ``;
};

const renderPageById = (id, child) => {
  document.getElementById(id).appendChild(child);
};

const setInnerHTMLById = (id, innerHTML) => {
  document.getElementById(id).innerHTML = innerHTML;
};

export { clearBlockById, renderPageById, setInnerHTMLById };
