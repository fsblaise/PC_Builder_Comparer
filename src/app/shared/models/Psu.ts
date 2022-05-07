import {Image} from "./Image";

export interface Psu extends Image{
  id: string;
  imgid: string;
  typo: string;
  name: string;
  manufacturer: string;
  wattage: number;
  efficiency: string;
}
