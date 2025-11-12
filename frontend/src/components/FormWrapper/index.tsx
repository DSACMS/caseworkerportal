"use client";

import styles from "./FormWrapper.module.css";
import {
  Form,
  Fieldset,
  Label,
  TextInput,
  Button,
} from "@trussworks/react-uswds";
import type { DataStructType } from "@/types/forms";

type Props = {
  data: DataStructType;
};

export default function FormWrapper({ data }: Props) {
  function formSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Form submitted");
    const formData = new FormData(event.currentTarget);
    const dataObj = Object.fromEntries(formData.entries());
    console.log(dataObj);
  }

  return (
    <div className={`${styles.wrapper} bg-base-lighter`}>
      <Form onSubmit={formSubmit} large className={styles.form}>
        {data?.fieldSets.map((fieldSet, fieldSetIndex) => (
          <Fieldset
            key={fieldSetIndex}
            legend={fieldSet.legend}
            legendStyle={fieldSet.legendStyle}
            className={styles.fieldset}
          >
            {fieldSet.children?.map((child, childIndex) => (
              <div key={childIndex} className={styles.fieldWrapper}>
                {child.label && (
                  <Label htmlFor={child.label.htmlFor}>
                    {child.label.text}
                  </Label>
                )}
                {child.span && (
                  <span className={child.span.className}>
                    {child.span.text}
                  </span>
                )}

                {child.textInput ? (
                  child.textInput.type === "date" ? (
                    <input
                      id={child.textInput.id}
                      name={child.textInput.name}
                      type="date"
                      className="usa-input"
                    />
                  ) : (
                    <TextInput
                      id={child.textInput.id}
                      name={child.textInput.name}
                      type={
                        child.textInput.type as
                          | "text"
                          | "email"
                          | "number"
                          | "password"
                          | "search"
                          | "tel"
                          | "url"
                      }
                    />
                  )
                ) : child.radioGroup ? (
                  <div className="usa-radio-group">
                    {child.radioGroup.options.map((option, index) => (
                      <div className="usa-radio usa-radio--tile" key={index}>
                        <input
                          className="usa-radio__input usa-radio__input--tile"
                          id={`${child.radioGroup.name}-${option.value}-${index}`}
                          name={child.radioGroup.name}
                          type="radio"
                          value={option.value}
                          aria-label={option.label} // ensures accessibility
                        />
                        <label
                          className="usa-radio__label"
                          htmlFor={`${child.radioGroup.name}-${option.value}-${index}`}
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </Fieldset>
        ))}
      </Form>
      <div className={styles.buttonWrapper}>
        <Button type="submit" className={styles.sendButton}>
        Send Invitation
      </Button>
      </div>
      
    </div>
  );
}
