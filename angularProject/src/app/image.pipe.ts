import { Pipe, PipeTransform } from '@angular/core'

@Pipe({name: 'image'})
export class ImagePipe implements PipeTransform {
	transform(image: string) {
    	image = image || 'https://www.w3schools.com/css/trolltunga.jpg';
    return image;
  }
}