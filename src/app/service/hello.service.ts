import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class HelloService {
  public getHelloWorld() {
    return 'Hello world Aissam !';
  }
}
