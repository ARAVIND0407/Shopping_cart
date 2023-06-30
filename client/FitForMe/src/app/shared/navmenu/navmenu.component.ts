import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navmenu',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent{
  customer = false;
  @Input() MenuItem?: string[];
  @Input() Customer?: boolean;
}

