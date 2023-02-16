import { NewUserModel } from "../../main/models/new-user.model";

export interface INewUser {
  access_token: string;
  id: string;
  succes: boolean;
  data: NewUserModel;
}
