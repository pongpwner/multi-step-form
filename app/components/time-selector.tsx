import Slider from "./slider";
export default function TimeSelector() {
  return (
    <div className="mt-5 py-3 rounded-lg  flex gap-4 justify-center bg-blue-50">
      <span>Monthly</span>
      <Slider></Slider>
      <span>Yearly</span>
    </div>
  );
}
