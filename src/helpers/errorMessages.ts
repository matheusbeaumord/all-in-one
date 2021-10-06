const getErrorMessage = (error: any) => {
  return error && error.response && error.response.data
    ? typeof error.response.data.message === 'object'
      ? error.response.data.message.message
      : error.response.data.message
    : error.message || error;
};

export default getErrorMessage;