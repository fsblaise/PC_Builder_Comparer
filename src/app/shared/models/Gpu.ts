import {Image} from "./Image";

export interface Gpu extends Image{
  id: string;
  imgid: string;
  instance: 'gpu'
  name: string;
  manufacturer: string;
  pciegen: number;
  tdp: number;
  vram: number;
  score: number;
}
