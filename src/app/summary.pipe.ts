import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'summary'
})

export class SummaryPipe implements PipeTransform {
    transform(value: any, args?: any) {// test?: string     // add additional parameter
        if (!value)
            return null;

        let actualLimit = args.toString();
        // + (test ? test : '')
        return value.substr(0, 50) + '...' + actualLimit;
    }
}