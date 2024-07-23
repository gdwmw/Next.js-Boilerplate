import { IAuthResponse } from "@/src/types";

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

interface IDUMMY_ACCOUNT_DATA {
  email: string;
  password: string;
  response: IAuthResponse;
  username: string;
}

export const DUMMY_ACCOUNT_DATA: IDUMMY_ACCOUNT_DATA[] = [
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

export const EXAMPLE_PACKAGES_DATA = [
  {
    description: [
      { id: 1, text: "Unlimited Photos" },
      { id: 2, text: "High-Resolution Images" },
      { id: 3, text: "Photo Editing" },
      { id: 4, text: "Online Gallery" },
      { id: 5, text: "Prints Available" },
    ],
    id: 1,
    price: "5000000",
    title: "PHOTOGRAPHY BASIC",
  },
  {
    description: [
      { id: 1, text: "Unlimited Photos" },
      { id: 2, text: "High-Resolution Images" },
      { id: 3, text: "Photo Editing" },
      { id: 4, text: "Online Gallery" },
      { id: 5, text: "Prints Available" },
      { id: 6, text: "Photo Album" },
    ],
    id: 2,
    price: "7000000",
    title: "PHOTOGRAPHY STANDARD",
  },
  {
    description: [
      { id: 1, text: "Unlimited Photos" },
      { id: 2, text: "High-Resolution Images" },
      { id: 3, text: "Photo Editing" },
      { id: 4, text: "Online Gallery" },
      { id: 5, text: "Prints Available" },
      { id: 6, text: "Photo Album" },
      { id: 7, text: "Framed Prints" },
    ],
    id: 3,
    price: "10000000",
    title: "PHOTOGRAPHY PREMIUM",
  },
  {
    description: [
      { id: 1, text: "Unlimited Photos" },
      { id: 2, text: "High-Resolution Images" },
      { id: 3, text: "Photo Editing" },
      { id: 4, text: "Online Gallery" },
      { id: 5, text: "Prints Available" },
      { id: 6, text: "Photo Album" },
      { id: 7, text: "Framed Prints" },
      { id: 8, text: "Custom Photo Book" },
    ],
    id: 4,
    price: "15000000",
    title: "PHOTOGRAPHY ULTIMATE",
  },
  {
    description: [
      { id: 1, text: "Full HD Video" },
      { id: 2, text: "Video Editing" },
      { id: 3, text: "Highlight Reel" },
      { id: 4, text: "Online Delivery" },
      { id: 5, text: "DVD Copy" },
    ],
    id: 5,
    price: "8000000",
    title: "VIDEOGRAPHY BASIC",
  },
  {
    description: [
      { id: 1, text: "Full HD Video" },
      { id: 2, text: "Video Editing" },
      { id: 3, text: "Highlight Reel" },
      { id: 4, text: "Online Delivery" },
      { id: 5, text: "DVD Copy" },
      { id: 6, text: "Drone Footage" },
    ],
    id: 6,
    price: "12000000",
    title: "VIDEOGRAPHY STANDARD",
  },
  {
    description: [
      { id: 1, text: "Full HD Video" },
      { id: 2, text: "Video Editing" },
      { id: 3, text: "Highlight Reel" },
      { id: 4, text: "Online Delivery" },
      { id: 5, text: "DVD Copy" },
      { id: 6, text: "Drone Footage" },
      { id: 7, text: "Custom USB Drive" },
    ],
    id: 7,
    price: "18000000",
    title: "VIDEOGRAPHY PREMIUM",
  },
  {
    description: [
      { id: 1, text: "Full HD Video" },
      { id: 2, text: "Video Editing" },
      { id: 3, text: "Highlight Reel" },
      { id: 4, text: "Online Delivery" },
      { id: 5, text: "DVD Copy" },
      { id: 6, text: "Drone Footage" },
      { id: 7, text: "Custom USB Drive" },
      { id: 8, text: "Feature Film" },
    ],
    id: 8,
    price: "25000000",
    title: "VIDEOGRAPHY ULTIMATE",
  },
];
