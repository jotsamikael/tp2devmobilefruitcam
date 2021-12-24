/*import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'testFilter',
    pure: false
})

export class TestFilterPipe implements PipeTransform {
    transform(data: any[],
        filter: Object): any{
            if(!data || !filter){
                return data;
            }

            return data.filter(item => item.title.indexOf(filter.title) !== -1)
        }
}
*/