// Frontmatter dates are bare YYYY-MM-DD. Parsing those with `new Date` treats
// them as UTC midnight, which renders as the previous day for anyone west of
// Greenwich, so the parts are pinned to UTC on the way in and out.
export function formatDate(iso) {
  if (!iso) return "";

  const [year, month, day] = iso.split("-").map(Number);
  if (!year || !month || !day) return iso;

  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
