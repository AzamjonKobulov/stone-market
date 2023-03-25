import { useState } from 'react';
import { ReactComponent as Plus } from '../../../assets/images/plus-lg.svg';

const accs = [
  {
    id: 1,
    label: 'When will I start seeing quotes?',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ea at iusto illum? Ipsam expedita quis nostrum, distinctio earum debitis.',
  },
  {
    id: 2,
    label: 'How can I pay my fabricator?',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ea at iusto illum? Ipsam expedita quis nostrum, distinctio earum debitis.',
  },
  {
    id: 3,
    label: 'Who is liable if my project has issues?',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ea at iusto illum? Ipsam expedita quis nostrum, distinctio earum debitis.',
  },
  {
    id: 4,
    label: 'Can I make another quote request?',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ea at iusto illum? Ipsam expedita quis nostrum, distinctio earum debitis.',
  },
];

const Minus = () => {
  return (
    <div className="w-[1.125rem] h-[0.1875rem] md:w-[1.875rem] md:h-[4px] rounded-sm lg:rounded bg-[#d8d8d8]"></div>
  );
};

const Accordiondiv = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    expandedIndex === nextIndex
      ? setExpandedIndex(-1)
      : setExpandedIndex(nextIndex);
  };

  const renderedItems = accs.map((acc, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span>
        {isExpanded ? <Minus /> : <Plus className="w-[1.125rem] md:w-auto" />}
      </span>
    );

    return (
      <div key={acc.id}>
        <div
          className="flex items-center justify-between md:text-2xl text-brand-gray-400 font-medium border cursor-pointer border-brand-gray-100 rounded-xl lg:rounded-15 py-3 md:py-5 px-3 md:px-6 mt-4"
          onClick={() => handleClick(index)}
        >
          {acc.label}
          {icon}
        </div>
        {isExpanded && (
          <div className="text-sm md:text-xl text-brand-gray-600 py-7 px-4 border-x border-b rounded-md -mt-4">
            {acc.text}
          </div>
        )}
      </div>
    );
  });

  return (
    <div className="mt-24 lg:mt-[16.875rem]">
      <h2 className="text-22 sm:text-3xl md:text-40 text-brand-dark font-bold">
        Frequently asked questions
      </h2>
      <div className="mt-8 md:mt-10">{renderedItems}</div>
    </div>
  );
};

export default Accordiondiv;
