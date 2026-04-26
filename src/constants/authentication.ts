import { IAuthResponse, IDummyAccount } from "@/src/utils";

export const DEMO_ACCOUNT_DATA: IAuthResponse = {
  accessToken: "dEmOaCcEsSTOkeN",
  email: "demo@demo.com",
  id: "1",
  image: null,
  imageId: null,
  name: "This Is Demo Account",
  phone: "0000000000",
  refreshToken: "dEmOrEfReSHTOkeN",
  role: "admin",
  status: "authenticated",
  username: "demo",
};

export const DUMMY_ACCOUNT_DATA: IDummyAccount[] = [
  {
    email: "admin@admin.com",
    password: "admin",
    response: {
      accessToken: "ADmiNaCcEsSTOkeN",
      email: "admin@admin.com",
      id: "1",
      image: null,
      imageId: null,
      name: "This Is Admin Account",
      phone: "0000000000",
      refreshToken: "ADmiNrEfReSHTOkeN",
      role: "admin",
      status: "authenticated",
      username: "admin",
    },
    username: "admin",
  },
  {
    email: "user@user.com",
    password: "user",
    response: {
      accessToken: "uSEraCcEsSTOkeN",
      email: "user@user.com",
      id: "2",
      image: null,
      imageId: null,
      name: "This Is User Account",
      phone: "0000000000",
      refreshToken: "uSErrEfReSHTOkeN",
      role: "user",
      status: "authenticated",
      username: "user",
    },
    username: "user",
  },
];
