export class Article {
  public _id: String;
  public title: String;
  public subtitle: String;
  public body: String;
  public created_at: Date;


  constructor(id: String, title: String, body: String, created_at: Date) {
    this._id = id;
    this.title = title;
    this.body = body;
    this.created_at = created_at;
  }
}
