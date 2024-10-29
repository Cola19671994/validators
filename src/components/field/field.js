//import { useEffect, useState, useCallback } from "react";
//import { validate } from "./utils";
import { forwardRef } from "react";
import styles from "./field.module.css";

export const Field = forwardRef(({ error, ...props }, ref) => {
  return (
    <div>
      <input ref={ref} {...props} />
      {error && <span className={styles.errorLabel}>{error}</span>}
    </div>
  );
});

/*value,
  setValue,
  setIsValid,
  validators,
  dependencies = [],
  forceValidation = () => false,
  ...props
}) => {
  const [error, setError] = useState(null);
  const [isDirty, setIsDirty] = useState(false);

  const validateField = useCallback(
    (currentValue, shouldValidate) => {
      let error = null;
      let isValid = false;

      if (shouldValidate) {
        error = validate(currentValue, validators);
        isValid = error === null;
      }

      setError(error);
      setIsValid(isValid);
    },
    [setIsValid, validators]
  );

  useEffect(() => {
    // Учет forceValidation для зависимости
    const shouldValidate = isDirty || forceValidation(value);
    validateField(value, shouldValidate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, isDirty, validateField, forceValidation, ...dependencies]);

  const onChange = ({ target }) => {
    setIsDirty(true);
    setValue(target.value);

    const isForceValidated = forceValidation(target.value);
    validateField(target.value, isForceValidated);
  };

  const onBlur = () => validateField(value, true);

  return (
    <div>
      <input onChange={onChange} onBlur={onBlur} {...props} />
      {error && <span className={styles.errorLabel}>{error}</span>}
    </div>
  );
};
*/
