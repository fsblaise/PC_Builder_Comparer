import {Image} from "./Image";

export interface Gpu extends Image{
  id: string;
  imgid: string;
  typo: string;
  name: string;
  manufacturer: string;
  pciegen: number;
  tdp: number;
  vram: number;
  score: number;
}
