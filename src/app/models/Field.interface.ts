export interface Validator {
  name: string;
  validator: any;
  message: string;
}
export interface FieldConfig {
  disabled?: boolean;
  title?: string;
  label: string;
  name?: string;
  inputType?: string;
  options?: string[];
  collections?: any;
  type: string;
  value?: any;
  validations?: Validator[];
  htmlClass?: string;
  groupClass: string;
  formTitle: string;
}
