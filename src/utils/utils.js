/**
 * @module utils
 * Utilities functions for the project
 */
export default {
  /**
   * Returns a new string in which all leading and trailing occurrences of a set of specified characters from the current String object are removed.
   * @param  { String } string - source string
   * @returns { String } - cleaned string
   */
  trim: function(string) {
    return string.replace(/^\s+|\s+$/gm, '')
  }
};
