import IconButton from './IconButton'

export default function Card({ item }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {item.image && (
        <img src={item.image} alt={item.title} className="w-full h-auto object-cover" />
      )}
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-poppins font-semibold text-xl">{item.title}</h3>
            <p className="text-[#c19a6b] mt-1">{item.category}</p>
          </div>
          <IconButton variant="primary" direction="right" />
        </div>
      </div>
    </div>
  )
}