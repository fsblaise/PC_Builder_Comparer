import {Image} from "./Image";

export interface Case extends Image{
  id: string;
  instance: 'case'
  imgid: string;
  name: string;
  form: string;
}
