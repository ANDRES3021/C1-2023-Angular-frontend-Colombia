import { UserModel } from '../../main/models/user.model';
import { IDocumenType } from './documentType.interface';

export interface IUsers {
  documentType: IDocumenType;
  id: string;
  document: string;
  fullName: string;
  email: string;
  phone: string;
  password: string;
  access_token: string;

}
