export const Benefits = () => {
  const data = [
    "Top 5% Specialized Talent Pool",
    "Availability in various Time Zones",
    "Fast and Seamless Hiring",
    "Low Cost Advantage",
    "Simple Contracts",
    "Remote Onboarding and IT Support",
  ];
  return (
    <div className="flex flex-col gap-10 items-center">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-xl font-bold text-orange-500">
          Benefits of Choosing Stackkaroo for Hiring Talents
        </h1>
        <h1>Range of Benefits for all firms, Financial and Non-Financial</h1>
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="grid grid-cols-3 gap-3 place-content-center">
          {data.map((item) => (
            <div key={item} className="p-2 rounded-md bg-blue-200">
              <h1>{item}</h1>
            </div>
          ))}
        </div>
        <div className="flex gap-3">
          <div className="p-2 rounded-md bg-blue-200">
            Easy Replace or Cancel
          </div>
          <div className="p-2 rounded-md bg-blue-200">
            Double the Retention Rate
          </div>
        </div>
      </div>
    </div>
  );
};
