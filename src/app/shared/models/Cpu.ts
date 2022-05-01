import {Image} from "./Image";

export interface Cpu extends Image{
  id: string;
  imgid: string;
  instance: 'cpu'
  name: string;
  manufacturer: string;
  socket: string;
  tdp: number;
  cores: number;
  threads: number;
  clock: number;
  score: number;
}
