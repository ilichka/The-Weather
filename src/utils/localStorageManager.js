const getLocalStorageField = (fieldName) => {
  return localStorage.getItem(fieldName);
};

const setLocalStorageField = (field, content) => {
  localStorage.setItem(field, content);
};

export { setLocalStorageField, getLocalStorageField };
