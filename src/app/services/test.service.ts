import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class TestService {

    constructor() {  }

    test(): void {
        console.log("Test service initialized");
    }
}