import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-worker-request',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './worker-request.component.html',
  styleUrl: './worker-request.component.css'
})
export class WorkerRequestComponent implements OnInit{

  workers: any[] = [];
  requests: any[] = [];
  constructor() {
  }

  ngOnInit() {
    this.loadRequest()
  }

  loadRequest(){
   
  }

  filterRequest(){
    this.requests = this.workers.filter(worker => worker.acceptOrRejectBy === 0 || worker.status === "false");
  }

  accept(mail: string){
   
  }

  reject(email: string){
  
  }

}

