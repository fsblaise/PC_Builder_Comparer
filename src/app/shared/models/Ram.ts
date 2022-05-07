import {Image} from "./Image";

export interface Ram extends Image{
  id: string;
  imgid: string;
  typo: string;
  name: string;
  manufacturer: string;
  architechture: string;
  size: number;
  clock: number;
  cas: number;
  score: number;
}
