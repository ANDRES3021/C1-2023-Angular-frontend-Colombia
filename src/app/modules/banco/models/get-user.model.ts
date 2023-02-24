import { IDocumenType } from "./document-type.model";

export class IGetUser {
  documentType: IDocumenType;
  document: string;
  fullName: string;
  email: string;
  phone: string;
  password: string;

  constructor(
    documentType: IDocumenType,
    document: string,
    fullName: string,
    email: string,
    phone: string,
    password: string
  ) {
    this.documentType = documentType;
    this.document = document;
    this.fullName = fullName;
    this.email = email;
    this.phone = phone;
    this.password = password;
  }

  getData() {
    return {
      documentTypeId: this.documentType,
      document: this.document,
      fullName: this.fullName,
      email: this.email,
      phone: this.phone,
      password: this.password,
    };
  }
}
