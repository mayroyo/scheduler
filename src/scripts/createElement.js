export function createElement(elementClassName, elementTagName, elementId) {
  let element = document.createElement(elementTagName);
  element.className = elementClassName;
  element.id = elementId;
  return element;
}

export function addElementIntoDom(element, parentElement, elementId) {
  if (elementId) element.id = elementId;
  parentElement.append(element);
  return element;
}
