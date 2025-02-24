export interface IExampleSchema {
  data: {
    documentId: string;
    username: string;
    name: string;
    email: string;
    phoneNumber: string;
  };
}
export interface IExamplePayload {
  documentId?: string;
  username: string;
  name: string;
  email: string;
  phoneNumber: string;
}

export interface IExampleResponse {
  documentId: string;
  username: string;
  name: string;
  email: string;
  phoneNumber: string;
}
