import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Account } from 'src/app/core/models/account';
import { AccountService } from 'src/app/core/services/account.service';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.scss']
})
export class ListAccountComponent implements OnInit {
  accounts: any[];
  breadCrumbItems: Array<{}>;
  constructor(  private accountService: AccountService,) { }

  ngOnInit(): void {
    this.accountService.getAll()
    .pipe(first())
    .subscribe(accounts=>this.accounts =accounts);


  }
  deleteAccount(id: string) {
    const account = this.accounts.find(x => x.id === id);
    account.isDeleting = true;
    this.accountService.delete(id)
        .pipe(first())
        .subscribe(() => {
            this.accounts = this.accounts.filter(x => x.id !== id) 
        });
}



}
