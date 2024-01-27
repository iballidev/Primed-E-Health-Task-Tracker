import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  isShowProfileMenu = false;
  isShowMobileMenu = false;


  toggleProfileMenu() {
    this.isShowProfileMenu = !this.isShowProfileMenu;
  }

  toggleMobileMenu() {
    this.isShowMobileMenu = !this.isShowMobileMenu;
  }
}
