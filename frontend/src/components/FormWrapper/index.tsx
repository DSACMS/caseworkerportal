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
    // Optional: You can serialize form data here
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
                {child.textInput && (
                  <TextInput
                    id={child.textInput.id}
                    name={child.textInput.name}
                    type={child.textInput.type}
                  />
                )}
              </div>
            ))}
          </Fieldset>
        ))}
      </Form>
      <Button type="submit">Send Invitation</Button>
    </div>
  );
}
