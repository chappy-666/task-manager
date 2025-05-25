import { Component } from '@angular/core';
import {
  LucideAngularModule,
  Home,
  Settings,
  AlignRight,
  LayoutDashboard,
  Proportions,
} from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  // icons
  readonly HomeIcon = Home;
  readonly AlignRightIcon = AlignRight;
  readonly ProportionsIcon = Proportions;

  isMenuOpen = false;
}
