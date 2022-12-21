import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {


  @Input() typeAlert!: 'error' | 'info' | 'success';
  @Input() messageAlert!: string;

  visible: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
