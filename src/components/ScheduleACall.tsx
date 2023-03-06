const ScheduleACall = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-16 mb-14 my-auto">
      <span className="text-xl font-bold mb-4 hidden lg:block">
        Unsatisfied with these stats? We can help you improve them.
      </span>

      <span className="text-xl font-bold lg:hidden block">
        Unsatisfied with these stats?
      </span>
      <span className="text-xl font-bold mb-4 lg:hidden block">
        We can help you improve them.
      </span>

      <button className=" text-white bg-pantone-red hover:bg-red-600 font-bold rounded text-base  py-3  w-40">
        Schedule A Call
      </button>
    </section>
  );
};

export default ScheduleACall;
