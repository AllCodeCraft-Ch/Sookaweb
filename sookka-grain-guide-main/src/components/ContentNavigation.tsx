
interface ContentNavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const ContentNavigation = ({ activeSection, setActiveSection }: ContentNavigationProps) => {
  const sections = [
    { id: 'nutrition', label: 'Nutrition' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'recipes', label: 'Recipes' },
    { id: 'storage', label: 'Storage' },
    { id: 'history', label: 'History' },
  ];

  return (
    <div className="flex gap-8 mb-12 border-b border-[#8E9775]/10 overflow-x-auto">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => setActiveSection(section.id)}
          className={`py-4 font-semibold transition-all duration-300 border-b-2 whitespace-nowrap ${
            activeSection === section.id
              ? 'text-[#8E9775] border-[#8E9775]'
              : 'text-gray-500 border-transparent hover:text-[#8E9775]'
          }`}
        >
          {section.label}
        </button>
      ))}
    </div>
  );
};

export default ContentNavigation;
