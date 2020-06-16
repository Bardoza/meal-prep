import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useIngredients } from "./Ingredient.context";
import ingredientSchema from "./Ingredient.schema";

const initialValues = {
  name: "",
  serving: "",
  unit: "",
  calories: 0,
  fat: 0,
  carbs: 0,
  protein: 0,
};

const Ingredient = () => {
  const [, actions] = useIngredients();

  const handleAddIngredient = async (values, { setSubmitting }) => {
    setSubmitting(true);

    try {
      await actions.add(values);
    } catch (e) {
      console.log("API ERROR", e);
    }

    setSubmitting(false);
  };

  return (
    <Formik
      onSubmit={handleAddIngredient}
      initialValues={initialValues}
      validationSchema={ingredientSchema}
    >
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor="name">Name</label>
          <Field name="name"></Field>
          <ErrorMessage name="name" component="div" />
          <Field name="serving"></Field>
          <ErrorMessage name="serving" component="div" />
          <Field name="unit"></Field>
          <ErrorMessage name="unit" component="div" />
          <Field name="calories"></Field>
          <ErrorMessage name="calories" component="div" />
          <Field name="fat"></Field>
          <ErrorMessage name="fat" component="div" />
          <Field name="carbs"></Field>
          <ErrorMessage name="carbs" component="div" />
          <Field name="protein"></Field>
          <ErrorMessage name="protein" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Ingredient;
