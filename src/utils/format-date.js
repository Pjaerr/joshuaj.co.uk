import { parseISO, format } from "date-fns";

// TODO: This runs on the server so fine to use date-fns, but could use web tech and use the Intl.dateformat api?

/**
 *
 * @param {string} d
 * @param {string} f
 * @returns
 */
export default function (d, f) {
  let date = d;

  if (d.endsWith("Z")) {
    date = d.replace("Z", "");
  }

  return format(parseISO(date), f);
}
