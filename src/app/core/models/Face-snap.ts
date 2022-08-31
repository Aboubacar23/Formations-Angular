export class FaceSnap {
    
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public imageUrl: string,
        public location: string,
        public createdDate: Date,
        public snaps: number) { }
}