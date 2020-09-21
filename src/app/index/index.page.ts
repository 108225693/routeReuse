import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.less']
})

export class IndexComponent implements OnInit {
  data = '';
  menuList = [];

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      mergeMap(route => route.data)
    ).subscribe((data) => {
      this.titleService.setTitle(data.title);
    });
  }

  ngOnInit() {
    const e = this.router.url.replace('/', '');
    this.menuList.push({
      id: e,
      name: '路由名称' + e,
      link: e
    });
  }
  rc(e) {
    let reData = true;
    for (const item of this.menuList) {
      if (item.id === e) {
        reData = false;
      }
    }
    if (reData) {
      this.menuList.push({
        id: e,
        name: '路由名称' + e,
        link: e
      });
    }
    this.router.navigate([e]);
  }
  toMenu(e) {
    this.router.navigate([e]);
  }
  close(i) {
    if (this.menuList.length > 1) {
      this.menuList.splice(i, 1);
    }
    if (!i) {
      this.router.navigate([this.menuList[0].link]);
    } else {
      this.router.navigate([this.menuList[i - 1].link]);
    }
  }
}
