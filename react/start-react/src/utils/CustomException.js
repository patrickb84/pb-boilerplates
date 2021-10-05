// utils/CustomException

/**
 * Custom error object.
 * @param {str} message
 * @param {str} code
 * @param {obj} metadata
 */
export default class CustomException {
  /**
   * Create a custom error object.
   * @param {str} message "An error occurred..."
   * @param {str} code "CUSTOM_ERROR_CODE"
   * @param {obj} metadata
   */
  constructor(message, code, metadata) {
    this.message = message;
    this.code = code;
    this._metadata = metadata;
  }

  set metadata({ ...value }) {
    this._metadata = value;
  }
}
