export class Article {
  public title: String;
  public body: String;
  public dateCreated: Number;

  constructor(title: String, body: String, dateCreated: Number) {
    this.title = title;
    this.body = body;
    this.dateCreated = dateCreated;
  }
}
