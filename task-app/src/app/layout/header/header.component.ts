import { Component } from '@angular/core';
import { LucideAngularModule, Home, Settings ,AlignRight} from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // icons
  readonly HomeIcon = Home;
  readonly SettingsIcon = Settings;
  readonly AlignRightIcon = AlignRight;

  isMenuOpen = false;
}
