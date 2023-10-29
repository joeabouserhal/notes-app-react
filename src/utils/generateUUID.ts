export const generateUUID = () =>
  Date.now().toString(36) + Math.random().toString(36).substr(2);
