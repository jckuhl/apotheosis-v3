export default class Post {
    public readonly date: Date;
    constructor(
        public blurb:string,
        public novelTitle: string,
        public wordCount: number,
        public title: string,
        public readonly id: string,
    ) {
        this.date = new Date();
    }
}