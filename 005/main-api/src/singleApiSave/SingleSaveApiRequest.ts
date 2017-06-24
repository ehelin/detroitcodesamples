export class SingleSaveApiRequest implements SingleSaveApiRequestJSON {

    constructor(public readonly Id: number,
                public readonly PropertyOne: string,
                public readonly PropertyTwo: string,
                public readonly PropertyThree: string,
                public readonly PropertyFour: string,
                public readonly PropertyFive: string){

    }

    public static fromJSON(request: any){
        return new SingleSaveApiRequest(request.Id,
                                        request.PropertyOne,
                                        request.PropertyTwo,
                                        request.PropertyThree,
                                        request.PropertyFour,
                                        request.PropertyFive,)
    }
}

export interface SingleSaveApiRequestJSON  {
    Id: number,
    PropertyOne: string,
    PropertyTwo: string,
    PropertyThree: string,
    PropertyFour: string,
    PropertyFive: string,
}  ;