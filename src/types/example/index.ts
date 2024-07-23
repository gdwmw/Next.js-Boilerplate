export interface IExampleSchema {
  data: {
    documentId: string;
    email: string;
    name: string;
    phoneNumber: string;
    username: string;
  };
}
export interface IExamplePayload {
  documentId?: string;
  email: string;
  name: string;
  phoneNumber: string;
  username: string;
}

export interface IExampleResponse {
  documentId: string;
  email: string;
  name: string;
  phoneNumber: string;
  username: string;
}
