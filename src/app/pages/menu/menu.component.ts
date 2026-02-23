import { Component, inject, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-menu',
  imports: [HeaderComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class Menu implements OnInit {
  protected menuService = inject(MenuService);

  ngOnInit() {
    const firstSection = this.menuService.sections()[0];
    if (firstSection && !this.menuService.activeSection()) {
      this.menuService.setActiveSection(firstSection);
    }
  }
}
