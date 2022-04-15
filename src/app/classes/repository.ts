export class Repository {
    constructor(
        public name:string,
        public html_url:string ,
        public description:string,
        public forks:number,
        public language:string,
        public created_at:Date,){
      }
}
