export type FieldType = 'text' | 'number' | 'select' | 'checkbox';

export interface FormField {
  type: string;
  label: string;
  name: string;
  options?: string[];
  optionsStr?: string; // For UI only
  required?: boolean;
}
