import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  @Input() list: any[] = [];

  breadcrumb: any;

  lenghtList: number = 0;
  ngOnInit(): void {
    console.log(this.breadcrumb);
    this.lenghtList = this.list.length - 1;
  }
}
