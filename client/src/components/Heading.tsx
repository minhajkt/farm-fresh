const Heading = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="text-center mt-6 mb-6">
      <h2 className="text-xl font-semibold mb-1">{title}</h2>
      <p className="text-sm text-gray-500 max-w-xs mx-auto">{subtitle}</p>
    </div>
  );
};

export default Heading;
