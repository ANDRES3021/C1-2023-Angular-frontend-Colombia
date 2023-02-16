import { getLocaleDateFormat } from "@angular/common";
import { IDocumenType } from "../../banco/interfaces/documentType.interface";

export class UserModel {

  id: string;
  documentTypeId: string;
  document: string;
  fullName: string;
  email: string;
  phone: string;
  password: string;
  constructor(id: string, documentTypeId: string, document: string,  fullName: string, email: string, phone: string, password: string ){
    this.id = id;
    this.documentTypeId = documentTypeId;
    this.document = document;
    this.fullName = fullName;
    this.email = email;
    this.phone = phone;
    this.password = password;
  }

  getData(): object {
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
