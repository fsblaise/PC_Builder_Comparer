import {Image} from "./Image";

export interface Cpu extends Image{
  id: string;
  imgid: string;
  typo: string;
  name: string;
  manufacturer: string;
  socket: string;
  tdp: number;
  cores: number;
  threads: number;
  clock: number;
  score: number;
}
