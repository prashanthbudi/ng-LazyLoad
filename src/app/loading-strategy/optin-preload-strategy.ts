import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of, EMPTY } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class OptInPreloadStartegy implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
    return route.data && route.data["preload"] ? load() : of(null);
  }
}

// avoid typing issues for now
export declare var navigator;

@Injectable({ providedIn: "root" })
export class NetworkAwarePreloadStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return this.hasGoodConnection() ? load() : EMPTY;
  }

  hasGoodConnection(): boolean {
    const conn = navigator.connection;
    if (conn) {
      if (conn.saveData) {
        return false; // save data mode is enabled, so dont preload
      }
      const avoidTheseConnections = ["slow-2g", "2g" /* , '3g', '4g' */];
      const effectiveType = conn.effectiveType || "";
      if (avoidTheseConnections.includes(effectiveType)) {
        return false;
      }
    }
    return true;
  }
}
