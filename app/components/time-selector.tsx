import Slider from "./slider";
export default function TimeSelector({ on, setOn }: TimeSelectorProps) {
  return (
    <div className="mt-5 py-3 rounded-lg  flex gap-4 justify-center bg-purple-50">
      <span className={`${on ? "text-blue-900 " : "text-gray-400"} font-bold `}>
        Monthly
      </span>
      <Slider on={on} setOn={setOn}></Slider>
      <span className={`${on ? "text-gray-400" : "text-blue-900 "} font-bold`}>
        Yearly
      </span>
    </div>
  );
}

type TimeSelectorProps = {
  on: boolean;
  setOn: Function;
};
