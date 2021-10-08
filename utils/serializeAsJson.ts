export const serialize = (obj: Object): Object => {
  return JSON.parse(JSON.stringify(obj));
};
