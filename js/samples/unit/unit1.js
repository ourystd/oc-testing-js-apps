/**
 *
 * @param {string} name
 */
export const sayHello = (name) => {
  if (!name) {
    return "Hello, World";
  }

  if (name === "Oury") {
    return "Diarama, Oury";
  }

  return `Hello, ${name}`;
};
