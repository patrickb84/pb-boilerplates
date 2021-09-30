export default class Audit {
  constructor() {
    this.created = null;
    this.createdBy = null;
    this.updated = null;
    this.updatedBy = null;
  }

  __createStamp = userId => {
    this.created = new Date();
    this.createdBy = userId;
  };

  __updateStamp = userId => {
    this.updated = new Date();
    this.updatedBy = userId;
  };
}
