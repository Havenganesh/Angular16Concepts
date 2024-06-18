import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css'],
})
export class PropertyBindingComponent {
  imgLocation = '../../assets/image/property_binding.png';

  codeTemplate: string = `Code of above template
   -------------------------------------------------------
   HTML code
   <div>
    <img [src]="imgLocation" alt="item">
   </div>
   --------------------------------------------------------
   Typescript code
   imgLocation = '../../assets/image/property_binding.png';
   `;
}
