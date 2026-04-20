export const schemaErrorMessage = {
  number: {
    max: (label: string, max: number) => `${label} maximum ${max}`,
    min: (label: string, min: number) => `${label} minimum ${min}`,
  },
  string: {
    email: (label: string) => `${label} must be a valid email address`,
    enum: (label: string) => `Please select ${label}`,
    max: (label: string, max: number) => `${label} maximum ${max} characters`,
    min: (label: string, min: number) => `Please enter ${label} minimum ${min} characters`,
    required: (label: string) => `Please enter ${label}`,
    url: (label: string) => `${label} must be a valid url`,
  },
};
