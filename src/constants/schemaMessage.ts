export const schemaMessage = {
  number: {
    int: (label: string) => `${label} must be an integer`,
    max: (label: string, max: number) => `${label} maximum ${max}`,
    min: (label: string, min: number) => `${label} minimum ${min}`,
    positive: (label: string) => `${label} must be greater than 0`,
  },
  string: {
    email: (label: string) => `${label} must be a valid email address`,
    enum: (label: string) => `Please select ${label}`,
    max: (label: string, max: number) => `${label} maximum ${max} characters`,
    min: (label: string, min: number) => `Please enter ${label} minimum ${min} characters`,
    required: (label: string) => `Please enter ${label}`,
    startsWith: (label: string, value: string) => `${label} must start with ${value}`,
    url: (label: string) => `${label} must be a valid url`,
  },
};
