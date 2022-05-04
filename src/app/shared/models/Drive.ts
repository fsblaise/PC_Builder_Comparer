import {Image} from "./Image";

export interface Drive extends Image{
  id: string;
  imgid: string;
  typo: 'drive'
  name: string;
  manufacturer: string;
  type: string;
  size: number;
  grade: string;
}
