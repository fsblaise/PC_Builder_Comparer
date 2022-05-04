import {Image} from "./Image";

export interface Mobo extends Image{
  id: string;
  imgid: string;
  typo: 'mobo'
  manufacturer: string;
  name: string;
  form: string;
  chipset: string;
  socket: string;
  ramtype: string;
  pciegen: number;
}
