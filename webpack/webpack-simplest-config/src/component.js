export default (text) => {
  const element = document.createElement("div");
  element.textContent = text;
  return element;
};
