import {Inject, Injectable, InjectionToken} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Page} from '../model/page.model';
import {map, shareReplay} from 'rxjs/operators';

export const URL_PAGES = new InjectionToken<string>('url-pages');

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  private pages$: Observable<Page[]>;

  constructor(private http: HttpClient,
              @Inject(URL_PAGES) urlPages: string) {
    this.pages$ = http.get<Page[]>(urlPages).pipe(
      shareReplay()
    );
  }

  getPage(index: string): Observable<Page> {
    return this.pages$.pipe(
      map(pages => pages.find((page) => page.index === index)),
    );
  }
}
