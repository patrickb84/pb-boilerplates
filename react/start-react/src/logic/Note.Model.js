import Audit from './base/Audit.Model';

export default class Note extends Audit {
  constructor(id, title, body) {
    super();
    this.id = id;
    this.title = title;
    this.body = body;
  }

  static selectAll = () => {
    return [];
  };

  static selectById = id => {
    return {};
  };

  static insert = (note, userId) => {
    note.__createStamp(userId);
    note.id = 1919;
    return note; // new id
  };

  static update = (note, userId) => {
    note.__updateStamp(userId);
    return note;
  };

  static delete = id => {};
}
