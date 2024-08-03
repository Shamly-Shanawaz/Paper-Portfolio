export default function Card({ children }) {
  return (
    <div className="border-[3px] border-l-4 border-b-4 hover:bg-hoveredCard bg-BG border-light p-2 rounded-lg shadow-md cursor-pointer">
      <div className="relative border-dotted border-2 border-light  rounded-lg overflow-hidden p-2">
        {children}
      </div>
    </div>
  );
}
