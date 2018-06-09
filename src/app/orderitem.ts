export class orderlistitem {
    constructor (
        public id: number,
        public location: string,
        public Currency: string,
        public Product: string,
        public ForexAmount : number,
        public INRAmount : number
    ) {  }
  }