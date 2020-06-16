import * as Yup from "yup";

export default Yup.object().shape({
  name: Yup.string().required("Required!"),
  serving: Yup.string().required("Required!"),
  unit: Yup.string().required("Required!"),
  calories: Yup.number()
    .min(0, "Must be greater or equal to 0")
    .round("round")
    .required("Required!"),
  fat: Yup.number()
    .min(0, "Must be greater or equal to 0")
    .round("round")
    .required("Required!"),
  carbs: Yup.number()
    .min(0, "Must be greater or equal to 0")
    .round("round")
    .required("Required!"),
  protein: Yup.number()
    .min(0, "Must be greater or equal to 0")
    .round("round")
    .required("Required!"),
});
