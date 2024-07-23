interface IExampleCommon {
  username: string;
  name: string;
  email: string;
  phoneNumber: string;
}

export interface IExampleSchema {
  data: {
    documentId: string;
  } & IExampleCommon;
}

export interface IExamplePayload extends IExampleCommon {
  documentId?: string;
}

// eslint-disable-next-line
export interface IExampleResponse extends IExampleCommon {}
