import {Image} from "./Image";

export interface Gpu extends Image{
  id: string;
  imgid: string;
  typo: 'gpu'
  name: string;
  manufacturer: string;
  pciegen: number;
  tdp: number;
  vram: number;
  score: number;
}
