import React from "react";
import { Formik, Form } from "formik";
import { useIngredients } from "./Ingredient.context";
import ingredientSchema from "./Ingredient.schema";
import Input from "../core/Input";

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
          <Input name="name" label="Name:" />
          <Input name="serving" label="Serving:" />
          <Input name="unit" label="Unit:" />
          <Input name="calories" label="Calories:" />
          <Input name="fat" label="Fat:" />
          <Input name="carbs" label="Carbs:" />
          <Input name="protein" label="Protein:" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Ingredient;
