import { useRef, useEffect } from 'react';
import meal1 from './SliderImages/meal1.jpg';
import meal2 from './SliderImages/meal2.jpg';
import meal3 from './SliderImages/meal3.jpg';
import meal4 from './SliderImages/meal4.jpg';
import meal5 from './SliderImages/meal5.jpg';
import meal6 from './SliderImages/meal6.jpg';

export interface Slide {
  title: string;
  content: string;
  meal: string;
}

const slides: Slide[] = [
  {
    title: 'No Subscription Required',
    content: 'Enjoy delicious meals without the hassle of a subscription. Order what you want, when you want.',
    meal: meal1,
  },
  {
    title: 'Prepared & Ready',
    content: 'Pre-made meals delivered fresh with quality ingredients. No cooking needed—just heat and enjoy!',
    meal: meal2,
  },
  {
    title: 'Savory Chicken Bowl',
    content: 'Perfectly cooked chicken with herbed rice and veggies—packed with protein and flavor.',
    meal: meal3,
  },
  {
    title: 'Healthy Green Salad',
    content: 'A refreshing salad with crisp greens, cherry tomatoes, and a light vinaigrette.',
    meal: meal4,
  },
  {
    title: 'Spicy Curry Delight',
    content: 'Warm up with a hearty bowl of curry and steamed rice, full of aromatic spices.',
    meal: meal5,
  },
  {
    title: 'Mediterranean Wrap',
    content: 'A wholesome wrap with hummus, grilled veggies, and seasoned meat—great on the go.',
    meal: meal6,
  },
];

const Slider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  // const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    if (scrollerRef.current) {
      const scroller = scrollerRef.current;
      const clone = scroller.cloneNode(true) as HTMLDivElement;
      clone.classList.add('absolute', 'top-0', 'left-full');
      scroller.parentElement?.appendChild(clone);
      // setIsScrolling(true);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#e8ece8] py-6"
    >
      <div className="flex gap-6 animate-marquee whitespace-nowrap" ref={scrollerRef}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-[280px] max-w-xs bg-white rounded-2xl overflow-hidden shadow-md hover:scale-105 transition-all duration-300"
          >
            <img src={slide.meal} alt={slide.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{slide.title}</h3>
              <p className="text-sm text-gray-600">{slide.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;