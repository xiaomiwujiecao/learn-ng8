import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-entry',
  templateUrl: './expense-entry.component.html',
  styleUrls: ['./expense-entry.component.scss']
})
export class ExpenseEntryComponent implements OnInit {
  title: string;
  constructor() { }

  ngOnInit() {
    this.title = 'EXPENSE ENTRY';
  }

}
