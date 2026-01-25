interface PlanCardProps {
  title: string;
  sessions: string;
  price: string;
}

export default function PlanCard({
  title,
  sessions,
  price,
}: PlanCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg p-6 text-center">
      <div className="w-28 h-28 bg-gray-700 rounded-lg mx-auto mb-4"></div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2">{sessions}</p>
      <p className="mt-1 font-semibold">{price}</p>
    </div>
  );
}
