interface HeadingsProps {
  headingOne: string;
  headingTwo: string;
}

export const Headings: React.FC<HeadingsProps> = ({
  headingOne,
  headingTwo,
}) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <h1 className="text-xl font-bold text-orange-500">{headingOne}</h1>
      <h1>{headingTwo}</h1>
    </div>
  );
};
