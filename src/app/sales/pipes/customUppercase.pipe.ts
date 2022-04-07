import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'customUpper'
})
export class CustomUppercase implements PipeTransform{
    transform(value: string, upperCase:boolean = true):string {
        return (upperCase) ? value.toUpperCase(): value.toLocaleLowerCase() ;
    }

}