import { BasicGuest } from "./guest.model";

export interface BasicPackage
{
  id: string;
  name: string;
  numberOfWord: number;
  creator?: BasicGuest;
  createdAt: string;
}
