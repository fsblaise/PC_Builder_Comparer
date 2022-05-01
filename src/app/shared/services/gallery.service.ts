import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Image} from "../models/Image";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {Case} from "../models/Case";
import {Cpu} from "../models/Cpu";
import {Gpu} from "../models/Gpu";
import {Mobo} from "../models/Mobo";
import {Psu} from "../models/Psu";
import {Ram} from "../models/Ram";
import {Drive} from "../models/Drive";

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  // HTTP
  collectionName = 'Cases';
  collectionName2 = 'Cpus';
  collectionName3 = 'Gpus';
  collectionName4 = 'Mobos';
  collectionName5 = 'Psus';
  collectionName6 = 'Rams';
  collectionName7 = 'Storages';

  constructor(
    private http: HttpClient,
    private afs: AngularFirestore,
    private storage: AngularFireStorage
  ) { console.log()}

  loadCaseMeta(): Observable<Array<Case>> {
    //return this.http.get(environment.hostUrl + '/assets/' + metaUrl) as Observable<Array<Image>>;
    return this.afs.collection<Case>(this.collectionName).valueChanges();
  }
  loadCpuMeta(): Observable<Array<Cpu>> {
    //return this.http.get(environment.hostUrl + '/assets/' + metaUrl) as Observable<Array<Image>>;
    return this.afs.collection<Cpu>(this.collectionName2).valueChanges();
  }
  loadGpuMeta(): Observable<Array<Gpu>> {
    //return this.http.get(environment.hostUrl + '/assets/' + metaUrl) as Observable<Array<Image>>;
    return this.afs.collection<Gpu>(this.collectionName3).valueChanges();
  }
  loadMoboMeta(): Observable<Array<Mobo>> {
    //return this.http.get(environment.hostUrl + '/assets/' + metaUrl) as Observable<Array<Image>>;
    return this.afs.collection<Mobo>(this.collectionName4).valueChanges();
  }
  loadPsuMeta(): Observable<Array<Psu>> {
    //return this.http.get(environment.hostUrl + '/assets/' + metaUrl) as Observable<Array<Image>>;
    return this.afs.collection<Psu>(this.collectionName5).valueChanges();
  }
  loadRamMeta(): Observable<Array<Ram>> {
    //return this.http.get(environment.hostUrl + '/assets/' + metaUrl) as Observable<Array<Image>>;
    return this.afs.collection<Ram>(this.collectionName6).valueChanges();
  }
  loadDriveMeta(): Observable<Array<Drive>> {
    //return this.http.get(environment.hostUrl + '/assets/' + metaUrl) as Observable<Array<Image>>;
    return this.afs.collection<Drive>(this.collectionName7).valueChanges();
  }

  loadImage(imageUrl: string){
    //return this.http.get(environment.hostUrl + '/assets/' + imageUrl, {responseType: 'blob'});
    return this.storage.ref(imageUrl).getDownloadURL();
  }
}
