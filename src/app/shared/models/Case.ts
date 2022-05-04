import {Image} from "./Image";

export interface Case extends Image{
  id: string;
  typo: 'case'
  imgid: string;
  name: string;
  form: string;
}
