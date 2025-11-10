export type DataStructType = {
  fieldSets: FieldSetType[];
};

export type FieldSetType = {
  legend: string;
  legendStyle?: "default" | "large" | "srOnly";
  children?: ChildrenType[];
  // requiredMarker?: boolean;
};

export type ChildrenType = {
  label: LabelType;
  span: SpanType;
  textInput: TextInputType;
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
  type: "text" | "email" | "number" | "password" | "search" | "tel" | "url";
};
