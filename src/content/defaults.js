/**
 * Default site content.
 *
 * This is the fallback copy of everything the Google Sheet controls. The site
 * renders this immediately, then swaps in whatever is in the sheet once it
 * loads. If the sheet is unreachable (or SHEET_ID is blank) this is what shows.
 *
 * Each export below maps 1:1 to a tab in the sheet:
 *   text     -> "text" tab      (key | value | where)
 *   hours    -> "hours" tab     (shop | day | hours)
 *   services -> "services" tab  (icon | title | description | price)
 *   rentals  -> "rentals" tab   (icon | title | description | half_day | full_day)
 *   menu     -> "menu" tab      (section | name | price)
 *   values   -> "values" tab    (icon | title | description)
 *
 * `npm run sheet:template` regenerates the importable sheet from this file.
 */

// [key, value, where-it-shows-up]
const textRows = [
  // --- Business info (used in navbar, footer, contact page) ---
  ['site.name', 'Grumpy Goat', 'Business name'],
  ['site.tagline', 'Gear & Grind', 'Shown under the name everywhere'],
  ['site.description', 'Bike & ski shop, coffee house, and your basecamp for adventure in Willard, Utah.', 'Footer blurb + homepage hero'],
  ['site.phone', '(385) 434-9999', 'Phone number'],
  ['site.email', 'spencer@grumpygoat.bike', 'Email address'],
  ['site.street', '39 S Main Street', 'Street address'],
  ['site.city', 'Willard', 'City'],
  ['site.state', 'UT', 'State'],
  ['site.zip', '84340', 'ZIP'],
  ['social.instagram', 'https://www.instagram.com/grumpygoatgear/', 'Instagram link (leave blank to hide)'],
  ['social.facebook', 'https://www.facebook.com/grumpygoatgear/', 'Facebook link (leave blank to hide)'],
  ['social.strava', 'https://www.strava.com/athletes/1825079', 'Strava link (leave blank to hide)'],

  // --- Home page ---
  ['home.hero.button1', 'Explore Gear', 'Home hero: gold button'],
  ['home.hero.button2', 'View Menu', 'Home hero: outline button'],
  ['home.intro.title', 'More Than a Bike Shop', 'Home: first section heading'],
  ['home.intro.p1', 'Grumpy Goat is where the outdoor community comes together. Whether you need a tune-up before your next trail ride, a fresh pair of gloves, ski gear for the season, or just a good cup of coffee — we’ve got you covered.', 'Home: first paragraph'],
  ['home.intro.p2', 'Part bike & ski shop, part coffee house, all community. Drop in, hang out, and feel at home.', 'Home: second paragraph'],
  ['home.gear.label', 'Grumpy Goat Gear', 'Home: small label above bike shop heading'],
  ['home.gear.title', 'The Bike & Ski Shop', 'Home: bike shop heading'],
  ['home.gear.body', 'From tune-ups to full custom builds, we keep you rolling — and shredding. We stock the parts, gear, and accessories you need, plus rentals to get you out exploring.', 'Home: bike shop paragraph'],
  ['home.gear.highlight1', 'Expert Bike Service & Repair', 'Home: bike shop bullet 1 (blank hides it)'],
  ['home.gear.highlight2', 'MTB, Fat Bike & Paddleboard Rentals', 'Home: bike shop bullet 2'],
  ['home.gear.highlight3', 'Ski & Bike Parts, Gear & Accessories', 'Home: bike shop bullet 3'],
  ['home.gear.highlight4', 'Custom Builds', 'Home: bike shop bullet 4'],
  ['home.gear.button', 'Explore Services', 'Home: bike shop button'],
  ['home.grind.label', 'Grumpy Goat Grind', 'Home: small label above coffee heading'],
  ['home.grind.title', 'The Coffee Shop', 'Home: coffee heading'],
  ['home.grind.body', 'Fuel up before the ride or wind down after. Our coffee shop serves handcrafted drinks in a cozy space where cyclists, locals, and friends gather.', 'Home: coffee paragraph'],
  ['home.grind.feature1.title', 'Hot & Cold Drinks', 'Home: coffee feature 1 heading'],
  ['home.grind.feature1.text', 'Lattes, cold brew, London Fog, hot chocolate & more', 'Home: coffee feature 1 text'],
  ['home.grind.feature2.title', 'Oat Milk Options', 'Home: coffee feature 2 heading'],
  ['home.grind.feature2.text', 'Plant-based alternatives on every drink', 'Home: coffee feature 2 text'],
  ['home.grind.feature3.title', 'Dog Friendly', 'Home: coffee feature 3 heading'],
  ['home.grind.feature3.text', 'Bring your trail buddy — they’re welcome here', 'Home: coffee feature 3 text'],
  ['home.grind.button', 'See Full Menu', 'Home: coffee button'],

  // --- Gear page ---
  ['gear.hero.title', 'Grumpy Goat Gear', 'Gear page: banner title'],
  ['gear.services.title', 'Services', 'Gear page: services heading'],
  ['gear.services.subtitle', 'From quick fixes to full overhauls, we’ll keep your ride dialed.', 'Gear page: services subheading'],
  ['gear.rentals.title', 'Rentals', 'Gear page: rentals heading'],
  ['gear.rentals.subtitle', 'Hit the trails without the commitment. Quality bikes, ready to ride.', 'Gear page: rentals subheading'],
  ['gear.inventory.title', 'Gear & Accessories', 'Gear page: gear heading'],
  ['gear.inventory.subtitle', 'We keep the essentials in stock so you can spend more time on the trail.', 'Gear page: gear subheading'],
  ['gear.inventory.card1', 'Apparel & Protection', 'Gear page: left photo caption'],
  ['gear.inventory.card2', 'Parts & Accessories', 'Gear page: right photo caption'],
  ['gear.inventory.note', 'Don’t see what you need? We can order it. Just ask.', 'Gear page: note under photos'],

  // --- Grind (coffee) page ---
  ['grind.hero.title', 'Grumpy Goat Grind', 'Coffee page: banner title'],
  ['grind.menu.title', 'Menu', 'Coffee page: menu heading'],
  ['grind.menu.subtitle', 'Simple drinks, made well.', 'Coffee page: menu subheading'],
  ['grind.menu.hot', 'Hot Stuff', 'Coffee page: hot column title'],
  ['grind.menu.cold', 'Cold Stuff', 'Coffee page: cold column title'],
  ['grind.hours.title', 'Coffee Shop Hours', 'Coffee page: hours heading'],
  ['grind.hours.subtitle', 'Early birds and post-ride refuels welcome.', 'Coffee page: hours subheading'],
  ['grind.atmosphere.title', 'More Than Coffee', 'Coffee page: bottom section heading'],
  ['grind.atmosphere.body', 'Settle into a booth, catch the race on the big screen, or sprawl out on the couch with your dog. Grumpy Goat Grind is built for hanging out — because the best part of the ride is the stories after.', 'Coffee page: bottom section paragraph'],

  // --- About page ---
  ['about.hero.title', 'About Us', 'About page: banner title'],
  ['about.story.title', 'Our Story', 'About page: story heading'],
  ['about.story.p1', 'Grumpy Goat started the way most good things do — with a passion for riding and a need for good coffee. What began as a small bike shop in Willard has grown into a community hub where cyclists, skiers, paddlers, and neighbors come together.', 'About page: story paragraph 1'],
  ['about.story.p2', 'We believe a great ride deserves a great cup of coffee afterward. And a well-tuned bike makes every ride better. So we put both under one roof, added a couch, turned on the race, and opened the door.', 'About page: story paragraph 2'],
  ['about.story.p3', 'The name? Well, mountain goats are stubborn, sure-footed, and thrive where others won’t go. Sound like anyone you know on the trail?', 'About page: story paragraph 3 (blank hides it)'],
  ['about.values.title', 'What We’re About', 'About page: values heading'],

  // --- Contact page ---
  ['contact.hero.title', 'Contact', 'Contact page: banner title'],
  ['contact.title', 'Get In Touch', 'Contact page: heading'],
  ['contact.subtitle', 'Stop by, give us a call, or drop us a line.', 'Contact page: subheading'],
  ['contact.location', 'Location', 'Contact page: address card title'],
  ['contact.gearHours', 'Bike Shop Hours', 'Contact page: bike hours card title'],
  ['contact.grindHours', 'Coffee Shop Hours', 'Contact page: coffee hours card title'],
  ['contact.gearNote', 'Need a drop-off or pick-up outside regular hours? Reach out — we’re usually around.', 'Contact page: note under bike hours'],
  ['contact.social.title', 'Follow the Herd', 'Contact page: social heading'],
  ['contact.social.subtitle', 'Trail updates, shop news, and the occasional dog photo.', 'Contact page: social subheading'],
];

export const text = Object.fromEntries(textRows.map(([key, value]) => [key, value]));
export const textDescriptions = textRows;

// shop: "gear" (bike shop) or "grind" (coffee shop)
export const hours = [
  { shop: 'gear', day: 'Monday', hours: 'By appointment' },
  { shop: 'gear', day: 'Tuesday', hours: 'By appointment' },
  { shop: 'gear', day: 'Wednesday', hours: 'By appointment' },
  { shop: 'gear', day: 'Thursday', hours: 'By appointment' },
  { shop: 'gear', day: 'Friday', hours: '4:00 PM - 8:00 PM' },
  { shop: 'gear', day: 'Saturday', hours: '10:00 AM - 5:00 PM' },
  { shop: 'gear', day: 'Sunday', hours: '12:00 PM - 5:00 PM' },
  { shop: 'grind', day: 'Monday', hours: 'Closed' },
  { shop: 'grind', day: 'Tuesday', hours: 'Closed' },
  { shop: 'grind', day: 'Wednesday', hours: 'Closed' },
  { shop: 'grind', day: 'Thursday', hours: 'Closed' },
  { shop: 'grind', day: 'Friday', hours: 'Closed' },
  { shop: 'grind', day: 'Saturday', hours: '9:00 AM - 5:00 PM' },
  { shop: 'grind', day: 'Sunday', hours: '12:00 PM - 5:00 PM' },
];

// icon: one of the names in src/components/common/Icon.jsx
export const services = [
  { icon: 'wrench', title: 'Tune-Up', description: 'Basic tune-up to keep your ride smooth. Includes brake & derailleur adjustment, tire inflation, and chain lube.', price: 'From $65' },
  { icon: 'cog', title: 'Full Overhaul', description: 'Complete teardown, clean, and rebuild. We’ll get your bike riding like new.', price: 'From $200' },
  { icon: 'tire', title: 'Flat Fix', description: 'Quick tube replacement or patch. Get back on the trail fast.', price: 'From $15' },
  { icon: 'suspension', title: 'Suspension Service', description: 'Fork and shock service to keep your ride plush and responsive.', price: 'From $100' },
  { icon: 'target', title: 'Wheel Truing', description: 'Straighten out those wobbly wheels for a smoother, safer ride.', price: 'From $25' },
  { icon: 'bike', title: 'Custom Build', description: 'Dream it, we’ll build it. Full custom bike builds from frame up.', price: 'Get a Quote' },
];

export const rentals = [
  { icon: 'mountain', title: 'Mountain Bike', description: 'Hit the Wasatch trails on a quality mountain bike. Perfect for exploring the local singletrack.', half_day: '$40', full_day: '$65' },
  { icon: 'snowflake', title: 'Fat Bike', description: 'Ride year-round. Fat bikes handle snow, sand, and everything in between.', half_day: '$40', full_day: '$65' },
  { icon: 'waves', title: 'Paddleboard', description: 'Get out on the water. Stand-up paddleboards perfect for Willard Bay and beyond.', half_day: '$30', full_day: '$50' },
];

// section: "hot" or "cold"
export const menu = [
  { section: 'hot', name: 'Drip Coffee', price: '3.00' },
  { section: 'hot', name: 'Tea', price: '3.00' },
  { section: 'hot', name: 'London Fog', price: '5.00' },
  { section: 'hot', name: 'Oat Latte', price: '5.50' },
  { section: 'hot', name: 'Tea Latte', price: '5.00' },
  { section: 'hot', name: 'Hot Chocolate', price: '4.50' },
  { section: 'hot', name: 'Steamer', price: '4.00' },
  { section: 'cold', name: 'Cold Brew', price: '4.50' },
  { section: 'cold', name: 'Oat Milk Latte', price: '6.00' },
  { section: 'cold', name: 'Iced Tea', price: '3.50' },
  { section: 'cold', name: 'Iced Tea Latte', price: '5.50' },
  { section: 'cold', name: 'Iced Mocha', price: '6.00' },
];

export const values = [
  { icon: 'handshake', title: 'Community First', description: 'We’re a gathering place. Whether you ride or not, you’re welcome here.' },
  { icon: 'wrench', title: 'Honest Work', description: 'We’ll tell you what your bike needs — nothing more, nothing less.' },
  { icon: 'trees', title: 'Trail Stewardship', description: 'We ride these trails too. We help maintain them and respect the land.' },
  { icon: 'paw', title: 'Dog Friendly, Always', description: 'Your four-legged trail partner is our favorite customer.' },
];

export default { text, hours, services, rentals, menu, values };
