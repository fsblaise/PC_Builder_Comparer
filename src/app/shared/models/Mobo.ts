import {Image} from "./Image";

export interface Mobo extends Image{
  id: string;
  imgid: string;
  typo: string;
  manufacturer: string;
  name: string;
  form: string;
  chipset: string;
  socket: string;
  ramtype: string;
  pciegen: number;
}
