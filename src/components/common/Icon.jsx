import {
  Bike, CircleDot, Coffee, Cog, Dog, Handshake, HeartHandshake, Leaf, Mountain,
  MountainSnow, PawPrint, Snowflake, Sparkles, Target, Trees, Waves, Wrench,
  ArrowDownUp, Star, Sun, Users, Hammer, Package, Shirt,
  ShipWheel, Droplet, ShieldCheck, ChevronsDownUp,
} from 'lucide-react';

/**
 * Icon names usable from the Google Sheet "icon" columns.
 * Add more from https://lucide.dev/icons by importing and mapping them here.
 */
const ICONS = {
  bike: Bike,
  tire: CircleDot,
  coffee: Coffee,
  cog: Cog,
  dog: Dog,
  handshake: Handshake,
  heart: HeartHandshake,
  leaf: Leaf,
  mountain: Mountain,
  ski: MountainSnow,
  paw: PawPrint,
  snowflake: Snowflake,
  sparkles: Sparkles,
  target: Target,
  trees: Trees,
  waves: Waves,
  wrench: Wrench,
  suspension: ArrowDownUp,
  star: Star,
  sun: Sun,
  people: Users,
  hammer: Hammer,
  package: Package,
  apparel: Shirt,
  spoke: ShipWheel,
  sealant: Droplet,
  warranty: ShieldCheck,
  shock: ChevronsDownUp,
};

export default function Icon({ name, size = 28, className = '', ...props }) {
  const Component = ICONS[String(name).trim().toLowerCase()] ?? Star;
  return <Component size={size} strokeWidth={1.75} className={className} aria-hidden="true" {...props} />;
}
