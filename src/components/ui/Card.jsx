import IconButton from './IconButton'

export default function Card({ item }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
      {item.image && (
        <img
          src={item.image}
          alt={item.title}
          className="w-full aspect-[4/3] object-cover flex-shrink-0"
        />
      )}
      <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start gap-3 flex-1">
          <div className="min-w-0">
            <h3 className="font-['DM_Serif_Display'] text-base sm:text-lg leading-snug truncate sm:whitespace-normal">
              {item.title}
            </h3>
            <p className="text-[#c19a6b] mt-1 text-xs sm:text-sm">{item.category}</p>
          </div>
          <div className="flex-shrink-0 mt-1">
            <IconButton variant="primary" direction="right" />
          </div>
        </div>
      </div>
    </div>
  )
}