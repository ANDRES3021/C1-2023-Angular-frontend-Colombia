import { IDocumenType } from "./documentType.interface";

export interface IUser {
  documentType: IDocumenType;
  id: string;
  document: string;
  fullName: string;
  email: string;
  phone: string;
  password: string;
}
