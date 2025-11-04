import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css',
  imports: [
    RouterLink,
    RouterLinkActive 
  ]
})
export class Header implements OnInit {
  ngOnInit(): void {
    console.log("init");
  }

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Giả lập user đã đăng nhập
  user = {
    name: 'Phong Nguyen',
    avatar: 'https://i.pravatar.cc/40'
  };
}
