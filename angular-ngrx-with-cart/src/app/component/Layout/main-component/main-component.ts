import { Component } from '@angular/core';
import { Grocery } from "../../grocery/grocery";
import { Bucket } from "../../bucket/bucket";

@Component({
  selector: 'app-main-component',
  imports: [Grocery, Bucket],
  templateUrl: './main-component.html',
  styleUrl: './main-component.scss',
})
export class MainComponent {

}
