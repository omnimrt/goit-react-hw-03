import { Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css";
import { useId } from "react";

const initialValues = {
  username: "",
  number: "",
};

const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  return (
    <>
      <Formik initialValues={{ initialValues }} onSubmit={() => {}}>
        <Form className={css.form}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field id={nameFieldId} type="text" name="username" />
          <label htmlFor={numberFieldId}>Number</label>
          <Field id={numberFieldId} type="number" name="number" />
          <button className={css.button} type="submit">
            Add contacts
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
