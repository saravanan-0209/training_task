import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'listfilter'
})

export class ListFilter implements PipeTransform {
    transform(list: any, search: string): any {
        if (list.length === 0 || search === '') {
            return list;
        } else {
            return list.filter((lists: any) => {
                return lists.toLowerCase().indexOf(search.toLowerCase()) !==-1
            })
        }
    }
}
