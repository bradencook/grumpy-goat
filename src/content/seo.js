/**
 * Search-engine titles and descriptions for each page. These show up as the
 * blue link + snippet in Google results, so they're written for searchers
 * (what + where) rather than for the page itself.
 *
 * The build step (scripts/prerender.mjs) bakes these into each page's HTML,
 * and Layout.jsx keeps the browser tab in sync while navigating.
 */
export const SITE_URL = 'https://grumpygoat.bike';

export const pages = {
  '/': {
    title: 'Grumpy Goat | Bike & Ski Shop + Coffee in Willard, UT',
    description:
      'Bike and ski shop and coffee house on Main Street in Willard, Utah. Tune-ups, repairs, bike and paddleboard rentals, gear, and lattes — your basecamp for adventure near Willard Bay.',
  },
  '/gear': {
    title: 'Bike Repair, Tune-Ups & Rentals in Willard, UT | Grumpy Goat',
    description:
      'Bike tune-ups, overhauls, suspension service, and custom builds, plus mountain bike, fat bike, and paddleboard rentals in Willard, Utah. Near Brigham City, Perry, and North Ogden.',
  },
  '/grind': {
    title: 'Coffee Shop in Willard, UT | Grumpy Goat Grind',
    description:
      'Lattes, drip coffee, cold brew, and London Fogs at Grumpy Goat Grind on Main Street in Willard, Utah. Grab a post-ride refuel and hang out in the lounge.',
  },
  '/about': {
    title: 'About Grumpy Goat | Locally Owned Bike Shop in Willard, UT',
    description:
      'Meet Spencer and the story behind Grumpy Goat — a locally owned bike and ski shop and coffee house in Willard, Utah.',
  },
  '/contact': {
    title: 'Hours & Directions | Grumpy Goat, Willard, UT',
    description:
      'Grumpy Goat hours, phone, email, and directions. 39 S Main Street, Willard, Utah — bike shop and coffee house.',
  },
};
