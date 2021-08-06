import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0)  
            return { cannotContainSpace: true }
        return null;
    }

    //Asynch validator implementation:
    static shouldBeUnique(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {// : this is just the async timeout function
                //resolve and reject
                if (control.value == 'mosh')
                    resolve({ shouldBeUnique: true});
                else
                    resolve(null);
            }, 2000);
        });
    }
}
