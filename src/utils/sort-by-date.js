import { parseISO } from "date-fns";

export default function (a, b) {
  return parseISO(b.data.publishDate) - parseISO(a.data.publishDate);
}
