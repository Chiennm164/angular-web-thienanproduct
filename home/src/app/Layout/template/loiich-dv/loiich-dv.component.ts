import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loiich-dv',
  templateUrl: './loiich-dv.component.html',
  styleUrls: ['./loiich-dv.component.scss'],
})
export class LoiichDvComponent {
  @Input() list: any;

  left: any;
  right: any;

  ngOnInit(): void {
    this.left = this.list.left;
    this.right = this.list.right;
  }
}
