import Channel from "./Channel";

export default class Video {
  constructor (
    public id: string,
    public seenCount: number,
    public title: string,
    public duration: number,
    public videoCompleted: boolean,
    public author: Channel,
    public publishDate: string,
    public url: string,
    public thumbnail: string,
    public likes: number,
    public dislikes: number,
    public description: string
  ) 
  { }
}