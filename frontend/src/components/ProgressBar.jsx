const ProgressBar = ({ step, total, validSteps }) => {
  const percentage = (step / total) * 100;

  const isValid = validSteps[step - 1];

  const barColor = isValid ? "bg-green-500" : "bg-gray-400";

  return (
    <div className="mb-6">
      <div className="w-full bg-gray-200 h-2 rounded-full">
        <div
          className={`${barColor} h-2 rounded-full transition-all`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <p className="text-sm text-gray-500 mt-2">
        Step {step} of {total}
      </p>
    </div>
  );
};
export default ProgressBar;
