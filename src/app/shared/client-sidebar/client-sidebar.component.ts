import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-client-sidebar',
  templateUrl: './client-sidebar.component.html',
  styleUrls: ['./client-sidebar.component.scss']
})
export class ClientSidebarComponent implements OnInit {

  constructor(private localStorage: LocalStorageService,
    private activeRoute: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.localStorage.clear();
    this.activeRoute.navigate(["/"]).then(() => {
      window.location.reload();
    });
  }

}
