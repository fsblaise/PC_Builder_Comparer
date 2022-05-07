import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Computer} from "../models/Computer";

@Injectable({
  providedIn: 'root'
})
export class ComputerService {

  static readonly collectionName = 'Computers';

  constructor(private afs: AngularFirestore) { }

  // CRUD

  create(computer: Computer){
    return this.afs.collection<Computer>(ComputerService.collectionName).doc(computer.id).set(computer);
  }

  getAll(){
    return this.afs.collection<Computer>(ComputerService.collectionName).valueChanges();
  }

  getById(id: string){
    return this.afs.collection<Computer>(ComputerService.collectionName).doc(id).valueChanges();
  }

  getAllByUid(uid: string){
    return this.afs.collection<Computer>(ComputerService.collectionName, ref => ref.where("userId", "==", uid)).valueChanges();
  }

  update(computer: Computer){
    return this.afs.collection<Computer>(ComputerService.collectionName).doc(computer.id).set(computer);
  }

  delete(id: string){
    return this.afs.collection<Computer>(ComputerService.collectionName).doc(id).delete();
  }
}
