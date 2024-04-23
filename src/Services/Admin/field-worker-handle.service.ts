
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { InjectionToken } from '@angular/core';


export const WORKER_HANDLE_TOKEN = new InjectionToken<FieldWorkerHandleService>('WorkerHandle');

@Injectable({
  providedIn: 'root'
})
export class FieldWorkerHandleService {

  private baseUrl = "https://localhost:7174/api/";
  constructor(private http: HttpClient) { }

  accept(adminId: number, fieldWorkerId: string){
    const url = `${this.baseUrl}Admin/acceptFieldWorker?adminId=${adminId}&email=${fieldWorkerId}`;
    return this.http.patch(url, {});
  }

  block(adminId: number, fieldWorkerId: string) {
    const url = `${this.baseUrl}Admin/rejectFieldWorker?adminId=${adminId}&email=${fieldWorkerId}`;
    return this.http.patch(url, {});
  }
}
