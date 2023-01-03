const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("the action :", action);
  const returnValue = next(action);
  console.log("the sate is", store.getState());
  console.groupEnd();
  return returnValue;
};
export default logger;
