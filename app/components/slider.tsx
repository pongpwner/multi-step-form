export default function Slider({ on, setOn }: sliderProps) {
  return (
    <button
      type="button"
      onClick={() => setOn((prev: boolean) => !prev)}
      className={`p-1 w-11 h-6 bg-blue-900 flex justify-${
        on ? "start" : "end"
      } rounded-xl items-center`}
    >
      <span className="bg-white rounded-full w-4 h-4"></span>
    </button>
  );
}

type sliderProps = {
  on: boolean;
  setOn: Function;
};
