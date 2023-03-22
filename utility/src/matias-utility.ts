import { BehaviorSubject } from "rxjs";

export class UtilityService {

    public valor$ = new BehaviorSubject({
        value: "Algo"
    });
    
    public guardarValor(valor: string) {
        this.valor$.next({
            value: valor
        });
    }
}


