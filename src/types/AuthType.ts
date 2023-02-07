import { FieldValues } from "react-hook-form";

export type Auth = {
  email: string;
  password: string;
};

export type AuthRequestFn = {
  onSubmit: (data: FieldValues) => void;
  buttonValue: string;
};
