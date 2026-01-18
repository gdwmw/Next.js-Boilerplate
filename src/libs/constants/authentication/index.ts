import { IAuthResponse, IDummyAccount } from "@/src/types";

// ----------------------------

export const ROLE_OPTIONS = ["admin", "demo", "user"] as const;

// ----------------------------

export const DEMO_ACCOUNT_DATA: IAuthResponse = {
  blocked: false,
  confirmed: true,
  dataDocumentId: "dEmOdataSDocuMenTid",
  dataId: "1",
  email: "demo@demo.com",
  id: "1",
  image: null,
  imageId: null,
  name: "This Is Demo Account",
  phoneNumber: "0000000000",
  role: "demo",
  status: "authenticated",
  token: "dEmOTOkeN",
  username: "demo",
};

// ----------------------------

export const DUMMY_ACCOUNT_DATA: IDummyAccount[] = [
  {
    email: "admin@admin.com",
    password: "admin",
    response: {
      blocked: false,
      confirmed: true,
      dataDocumentId: "ADmiNSDocuMenTid",
      dataId: "1",
      email: "admin@admin.com",
      id: "1",
      image: null,
      imageId: null,
      name: "This Is Admin Account",
      phoneNumber: "0000000000",
      role: "admin",
      status: "authenticated",
      token: "ADmiNTOkeN",
      username: "admin",
    },
    username: "admin",
  },
  {
    email: "user@user.com",
    password: "user",
    response: {
      blocked: false,
      confirmed: true,
      dataDocumentId: "uSErDocuMenTid",
      dataId: "2",
      email: "user@user.com",
      id: "2",
      image: null,
      imageId: null,
      name: "This Is User Account",
      phoneNumber: "0000000000",
      role: "user",
      status: "authenticated",
      token: "uSErTOkeN",
      username: "user",
    },
    username: "user",
  },
];
