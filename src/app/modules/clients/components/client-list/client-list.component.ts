import { Component, OnInit } from '@angular/core';
import { ClientResponse } from '../../models/client.model';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  clients: ClientResponse[] = []; 

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit(): void {
    this.clientService.getClients().subscribe(
      (data: ClientResponse[]) => {
        this.clients = data; 
      },
      (error) => {
        console.error('Error fetching clients:', error);
      }
    );
  }


  // Toggle client activation
  toggleActivation(client: ClientResponse): void {
    const newStatus = !client.activated;
    this.clientService.toggleClientActivation(client.clientId, newStatus).subscribe(
      () => {
        client.activated = newStatus; // Update local client data
      },
      (error) => {
        console.error('Error toggling activation status:', error);
      }
    );
  }

  viewProperties(clientId: number): void {
    this.router.navigate(['/properties', clientId]); // Adjust route according to your setup
  }

  viewSubscriptions(clientId: number): void {
    this.router.navigate(['/admin/client/subscription', clientId]);
  }
}
