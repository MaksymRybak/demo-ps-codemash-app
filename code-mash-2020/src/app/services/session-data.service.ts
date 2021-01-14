import { Injectable } from "@angular/core";
import { Category, Session } from "../models/session";
import { sessions } from "../../assets/data/sessions.json";

@Injectable({
  providedIn: "root",
})
export class SessionDataService {
  private sessionList: Session[];

  constructor() {
    this.sessionList = sessions;
  }

  public getSessions() {
    return this.sessionList;
  }

  public getSessionTags(session: Session) {
    const tags: Category[] = session.categories.filter(
      (cat) => cat.name === "Tags"
    );
    if (tags.length > 0) {
      return tags[0].categoryItems;
    }
  }

  public getSessionType(session: Session) {
    const sessionFormat: Category[] = session.categories.filter(
      (cat) => cat.name === "Session format"
    );
    if (sessionFormat.length > 0) {
      return sessionFormat[0].categoryItems[0].name.toLowerCase();
    }
  }

  public getSessionDetails(sessionId: String) {
    return this.sessionList.find((s) => s.id === sessionId);
  }
}
