export type AdminLoginFormFields = {
  username: string;
  password: string;
  role: string;
};

export type AdminLoginFormProps = {
  onSubmit(data: AdminLoginFormFields): void;
};
