import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Answer, Page, Picture} from '../model/page.model';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {filter, map, shareReplay, switchMap} from 'rxjs/operators';
import {PagesService} from '../services/pages.service';

@Component({
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageComponent implements OnInit {

  page$: Observable<Page>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private pageService: PagesService) {}

  ngOnInit(): void {
    this.page$ = this.route.paramMap.pipe(
      map(params => params.get('title')),
      filter(title => !!title),
      switchMap(title => this.pageService.getPage(title)),
      shareReplay()
    );
  }

  getPageTheme(page: Page): string {
    return `main ${page.theme}`;
  }

  formatPicturePath(picture: Picture): string {
    return 'assets/pictures/' + picture.path;
  }

  onAnswerClick(answer: Answer) {
    this.router.navigate(['/page/' + answer.redirect]);
  }
}
