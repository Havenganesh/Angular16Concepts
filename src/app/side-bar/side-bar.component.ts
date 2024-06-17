import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  imports: [
    NgIf,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonModule,
    NgFor,
  ],
  standalone: true,
})
export class SideBarComponent {
  events: string[] = [];
  opened: boolean = true;
  open() {
    this.opened = !this.opened;
  }
}
