// utils/CustomException

/**
 * Create a custom error object.
 * @param {str} message "An error occurred..."
 * @param {str} code "CUSTOM_ERROR_CODE"
 * @param {obj} metadata
 */
export class CustomException {
  constructor(message, code, metadata) {
    this.message = message;
    this.code = code;
    this._metadata = metadata;
  }

  set metadata({ ...value }) {
    this._metadata = value;
  }
}
