import { Component } from '@angular/core';
import { HeaderComponent } from "../header-component/header-component";
import { MainComponent } from "../main-component/main-component";
import { FooterComponent } from "../footer-component/footer-component";

@Component({
  selector: 'app-layout-component',
  imports: [HeaderComponent, MainComponent, FooterComponent],
  templateUrl: './layout-component.html',
  styleUrl: './layout-component.scss',
})
export class LayoutComponent {

}
