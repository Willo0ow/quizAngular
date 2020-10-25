import {KeyValueDiffers, Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'keyvalue'
})
export class KeyValuePipe implements PipeTransform{
    transform(object: object){
        console.log('sajhfghjgs');
        
        return Object.values(object)
    }
}