import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() name!: string;
  @Input() serial!: string;
  @Input() img!: string;
  @Input() link!: string;
  @Input() vendor!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
