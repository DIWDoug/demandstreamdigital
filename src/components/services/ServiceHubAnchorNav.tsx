interface AnchorItem {
  label: string;
  href: string;
}

interface ServiceHubAnchorNavProps {
  items?: AnchorItem[];
}

const defaultItems: AnchorItem[] = [
  { label: 'Pattern', href: '#problem' },
  { label: 'Solution', href: '#outcomes' },
  { label: 'Our Process', href: '#roadmap' },
  { label: 'Levers', href: '#building-blocks' },
  { label: 'Fit', href: '#qualification' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Next Steps', href: '#contact' },
];

const ServiceHubAnchorNav = ({ items = defaultItems }: ServiceHubAnchorNavProps) => {
  return (
    <nav className="sticky top-16 z-40 bg-cta border-y border-cta/80 shadow-lg">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 md:gap-6 lg:gap-10 py-3 overflow-x-auto">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm md:text-base font-medium text-white/90 hover:text-white whitespace-nowrap transition-colors duration-200 px-2 py-1"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default ServiceHubAnchorNav;
