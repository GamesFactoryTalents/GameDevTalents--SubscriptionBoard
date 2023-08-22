/**
   * Splits sourceString by ";". If not found, then by ",", trims resulting sttrings
   * @param sourceString Has to be a valid string, possibly empty
   * @return array of substrings. Possibly with just one sourceString (if failed to split)
   */
export function zohoMultiStringToArray(sourceString) {
    let extracted = sourceString.split(";");
    if (extracted.length === 1) {
      extracted = sourceString.split(',');
    }
    const result = extracted.map(s => s.trim());
    return result;
 };