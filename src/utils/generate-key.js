let key = 1;

export const getKey = () => key;
export const getNextKey = () => key++;
export const resetKey = () => (key = 1);
