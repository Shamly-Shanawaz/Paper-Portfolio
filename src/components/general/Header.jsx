import { useState, useEffect } from 'react';

export default function Header() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${day}.${month}.${year}`;
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div className="bg-BG border-b border-extraLight py-1 text-center sticky top-0 z-[9999]">
      <span className="absolute left-8 top-1/2 transform -translate-y-1/2 font-general font-bold">{currentDate}</span>
      <span className="font-heading text-6xl pb-4 rounded-b-[0.7rem] shadow-md bg-BG px-4 border border-extraLight">
        Shamly Shanawaz
      </span>
    </div>
  );
}
