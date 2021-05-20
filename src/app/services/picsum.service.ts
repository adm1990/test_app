import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Picsum } from '../interfaces/picsum';

@Injectable({
  providedIn: 'root'
})
export class PicsumService {

  constructor() { }

  private demoArray: Picsum[] = []

  getPicksum() {
 

        
    for (let i = 0; i < 4000; i++) {
      let pickDemo:Picsum = {
        id:i,
        photo: 'https://picsum.photos/'+ i +'/300',
        text:  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)

      }
      this.demoArray.push(pickDemo)
   
      
    }
    const obsof1= of(this.demoArray);
    return obsof1
  }
}
