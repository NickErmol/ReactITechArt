export default (...input) =>
  input.every(num => typeof num === 'number' && !Number.isNaN(num));
