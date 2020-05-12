export const updateObject = (actualState, updatedValues) => {
  return {
    ...actualState,
    ...updatedValues
  };
};