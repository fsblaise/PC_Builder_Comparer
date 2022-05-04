import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Cpu} from "../models/Cpu";
import {Gpu} from "../models/Gpu";
import {Mobo} from "../models/Mobo";
import {Ram} from "../models/Ram";
import {Psu} from "../models/Psu";
import {Case} from "../models/Case";

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  cpuCollectionName = 'Cpus';
  moboCollectionName = 'Mobos';
  ramCollectionName = 'Rams';
  gpuCollectionName = 'Gpus';
  psuCollectionName = 'Psus';
  caseCollectionName = 'Cases';
  storagesCollectionName = 'Storages';

  constructor(private afs: AngularFirestore) { }

  // benchmark stuff

  getAllCpusOrdered(){
    return this.afs.collection<Cpu>(this.cpuCollectionName, ref => ref.orderBy('score', "desc")).valueChanges();
  }

  getAllGpusOrdered(){
    return this.afs.collection<Gpu>(this.gpuCollectionName, ref => ref.orderBy('score', "desc")).valueChanges();
  }

  // component list stuff

  // Other Computer
  getCpuById(id: string){
    return this.afs.collection<Cpu>(this.cpuCollectionName).doc(id).valueChanges();
  }

  getMoboById(id: string){
    return this.afs.collection<Mobo>(this.moboCollectionName).doc(id).valueChanges();
  }

  getRamById(id: string){
    return this.afs.collection<Ram>(this.ramCollectionName).doc(id).valueChanges();
  }

  getGpuById(id: string){
    return this.afs.collection<Gpu>(this.gpuCollectionName).doc(id).valueChanges();
  }

  getPsuById(id: string){
    return this.afs.collection<Psu>(this.psuCollectionName).doc(id).valueChanges();
  }

  getCaseById(id: string){
    return this.afs.collection<Case>(this.caseCollectionName).doc(id).valueChanges();
  }

  getStorageById(id: string){
    return this.afs.collection<Storage>(this.storagesCollectionName).doc(id).valueChanges();
  }

  // User's Computer
  getUserCpuById(id: string){
    return this.afs.collection<Cpu>(this.cpuCollectionName).doc(id).valueChanges();
  }

  getUserMoboById(id: string){
    return this.afs.collection<Mobo>(this.moboCollectionName).doc(id).valueChanges();
  }

  getUserRamById(id: string){
    return this.afs.collection<Ram>(this.ramCollectionName).doc(id).valueChanges();
  }

  getUserGpuById(id: string){
    return this.afs.collection<Gpu>(this.gpuCollectionName).doc(id).valueChanges();
  }

  getUserPsuById(id: string){
    return this.afs.collection<Psu>(this.psuCollectionName).doc(id).valueChanges();
  }

  getUserCaseById(id: string){
    return this.afs.collection<Case>(this.caseCollectionName).doc(id).valueChanges();
  }

  getUserStorageById(id: string){
    return this.afs.collection<Storage>(this.storagesCollectionName).doc(id).valueChanges();
  }
}
