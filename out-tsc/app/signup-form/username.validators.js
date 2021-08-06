export class UsernameValidators {
    static cannotContainSpace(control) {
        if (control.value.indexOf(' ') >= 0)
            return { cannotContainSpace: true };
        return null;
    }
    //Asynch validator implementation:
    static shouldBeUnique(control) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                //resolve and reject
                if (control.value == 'mosh')
                    resolve({ shouldBeUnique: true });
                else
                    resolve(null);
            }, 2000);
        });
    }
}
//# sourceMappingURL=username.validators.js.map