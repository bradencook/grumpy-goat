/**
 * Google Sheet connection.
 *
 * In the sheet: File -> Share -> Publish to web -> "Entire document" ->
 * "Comma-separated values (.csv)" -> Publish. Google gives you a link like
 *   https://docs.google.com/spreadsheets/d/e/2PACX-1vABC.../pub?output=csv
 * Paste the part between /d/e/ and /pub below.
 *
 * Leave it blank to run entirely off src/content/defaults.js.
 */
export const PUBLISHED_SHEET_ID =
  '2PACX-1vQ_9lC7EQfu2ecO6wxosI8tZvf6f6_AVKEJWGNFkZSlpmrLhSxYmy3D9vwTlZGtps9pWhXcbgZhctXA';

/**
 * Tab name -> gid. Published CSVs can only select a tab by gid, not by name.
 * Find a tab's gid in the sheet URL (the number after "#gid=") while that tab
 * is open. Gids survive renaming a tab, but not deleting and re-creating it.
 */
export const TABS = {
  text: 148769979,
  hours: 1957440894,
  services: 372993459,
  rentals: 1873198410,
  menu: 1914506136,
  values: 1100079434,
};
