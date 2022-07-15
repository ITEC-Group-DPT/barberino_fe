/* eslint-disable import/prefer-default-export */
const validateStepOne = (information) => {
  const fields = ["email", "phone", "name", "note"];

  const indexOf = fields.findIndex(
    (data) => information?.[data] == null || information[data] === ""
  );

  return indexOf === -1;
};

export { validateStepOne };
