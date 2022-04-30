import { Role } from "./role.model";

export class User{
  id!: number;
  nom!: string;
  prenom!: string;
  email!: string;
  password!: string;
  photo!: string;
  role!: Role;
}