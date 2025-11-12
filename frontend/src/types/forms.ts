export type DataStructType = {
  fieldSets: FieldSetType[];
};

export type FieldSetType = {
  legend: string;
  legendStyle?: "default" | "large" | "srOnly";
  children?: ChildrenType[];
  // requiredMarker?: boolean;
};

export type ChildrenType = TextInputChild | RadioGroupChild;

// Text input child
export type TextInputChild = {
  label: LabelType;
  span?: SpanType;
  textInput: TextInputType;
  radioGroup?: never; // prevent both being used
};

// Radio group child
export type RadioGroupChild = {
  label?: LabelType;
  span?: SpanType;
  textInput?: never;
  radioGroup: RadioGroupType;
};

export type LabelType = {
  htmlFor: string;
  text: string;
};

export type SpanType = {
  className: string;
  text: string;
};

export type TextInputType = {
  id: string;
  name: string;
  type: "text" | "email" | "number" | "password" | "search" | "tel" | "url" | "date";
};

export type RadioGroupType = {
  name: string;
  options: RadioOptionType[];
};

export type RadioOptionType = {
  value: string;
  label: string;
};
