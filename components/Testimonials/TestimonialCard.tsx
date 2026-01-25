interface TestimonialCardProps {
  name: string;
  text: string;
}

export default function TestimonialCard({
  name,
  text,
}: TestimonialCardProps) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <p className="italic">"{text}"</p>
      <p className="mt-4 font-bold text-right">— {name}</p>
    </div>
  );
}
