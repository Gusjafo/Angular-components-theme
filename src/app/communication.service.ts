import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CommunicationService {
  constructor() {}

  private darkTheme = new BehaviorSubject<any>(null);

  public set darkMode(v: any) {
    this.darkTheme.next(v);
  }

  public get darkMode(): Observable<any> {
    return this.darkTheme.asObservable();
  }
}
