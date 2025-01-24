export default class Channel {
  constructor (
    public id: string,
    public seenCount: number,
    public name: string,
    public subscribers: number,
    public videoCount: number,
    public verified: boolean,
    public country: string,
    public createdDate: string,
    public totalViews: number
  ) 
  { }
}