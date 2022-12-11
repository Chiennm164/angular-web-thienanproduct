import { Component  ,Input} from '@angular/core';

@Component({
  selector: 'app-san-pham-noi-bat',
  templateUrl: './san-pham-noi-bat.component.html',
  styleUrls: ['./san-pham-noi-bat.component.scss']
})
export class SanPhamNoiBatComponent {
  @Input() listItem: any;

  list: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.listItem.forEach((item: any) => {
      if (item.active) {
        this.list = item.list;
      }
    });
  }

  changeList(event: Event, id: any) {
    event.preventDefault();
    this.listItem.forEach((item: any) => {
      if (item.id === id) {
        this.list = item.list;
        item.active = true;
      } else {
        item.active = false;
      }
    });
  }
}
