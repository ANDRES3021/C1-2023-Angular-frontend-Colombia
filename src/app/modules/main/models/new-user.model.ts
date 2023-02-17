import { getLocaleDateFormat } from "@angular/common";

export class NewUserModel {
  documentTypeId: string;
  document: string;
  fullName: string;
  email: string;
  phone: string;
  password: string;
  //state: boolean;

  constructor(
    documentTypeId: string,
    document: string,
    fullName: string,
    email: string,
    phone: string,
    password: string
  ) {
    this.documentTypeId = documentTypeId;
    this.document = document;
    this.fullName = fullName;
    this.email = email;
    this.phone = phone;
    this.password = password;
  }
  getData(): {
    documentTypeId: string;
    document: string;
    fullName: string;
    email: string;
    phone: string;
    password: string;
  } {
    return {
      documentTypeId: this.documentTypeId,
      document: this.document,
      fullName: this.fullName,
      email: this.email,
      phone: this.phone,
      password: this.password,
    };
  }
}
