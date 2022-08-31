export interface FieldsInterface {
    id:number;
    type: string;
    name: string;
    required: boolean;
    label: string;
    minLength?: number;
    maxLength?: number;
    placeholder: string;
    errorMessage: string;
}