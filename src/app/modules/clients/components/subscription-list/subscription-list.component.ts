import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-subscription-list',
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.scss']
})
export class SubscriptionListComponent implements OnInit{

  clientId: number = 0;
  subscriptions: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    // Get the client ID from the route params
    this.clientId = +(this.route.snapshot.paramMap.get('clientId') ?? 0);
    console.log(this.clientId)
    // Fetch the client and their subscriptions
    this.clientService.getClients().subscribe((clients) => {
      const client = clients.find((c) => c.clientId === this.clientId);
      if (client) {
        this.subscriptions = client.subscriptionClients;
      }
    });
  }

}
