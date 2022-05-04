import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Computer} from "../models/Computer";
import {where} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class ComputerService {

  collectionName = 'Computers';

  constructor(private afs: AngularFirestore) { }

  // CRUD

  create(computer: Computer){
    return this.afs.collection<Computer>(this.collectionName).doc(computer.id).set(computer);
  }

  getAll(){
    return this.afs.collection<Computer>(this.collectionName).valueChanges();
  }

  getById(id: string){
    return this.afs.collection<Computer>(this.collectionName).doc(id).valueChanges();
  }

  getAllByUid(uid: string){
    return this.afs.collection<Computer>(this.collectionName, ref => ref.where("userId", "==", uid)).valueChanges();
  }

  update(computer: Computer){
    return this.afs.collection<Computer>(this.collectionName).doc(computer.id).set(computer);
  }

  delete(id: string){
    return this.afs.collection<Computer>(this.collectionName).doc(id).delete();
  }
}
