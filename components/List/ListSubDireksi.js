import Image from "next/image";

export default function ListSubDireksi({ item }) {
  return (
    <div className="w-[16em] bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
      <div className="w-full aspect-[3/4] relative">
        <Image
          src={item.foto}
          alt={item.nama}
          fill
          className="object-cover rounded-md"
        />
      </div>

      <p className="mt-3 text-sm font-semibold text-center">
        {item.nama}
      </p>
      <p className="text-xs text-center text-gray-600">
        {item.jabatan}
      </p>
    </div>
  );
}
