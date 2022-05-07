import {Image} from "./Image";

export interface Case extends Image{
  id: string;
  typo: string;
  imgid: string;
  name: string;
  form: string;
}
