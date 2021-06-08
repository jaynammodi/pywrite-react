import React from "react";
import { ErrorMessage, useField } from "formik";

function TextField({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="form-group row">
      <label htmlFor={props.name} className="col-4 col-form-label">
        {label}
      </label>
      <input
        {...field}
        {...props}
        className={`col-8 ${meta.touched && meta.error && "is-invalid"}`}
        id={props.name}
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
}

export default TextField;
