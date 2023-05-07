import  "./Spinner.css";

const Spinner = () => {
  return (
    <div className="mt-20">
      <div className="Spinner-Loading flex justify-center items-center m-auto mb-8">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className="text-center text-2xl text-white">Loading...</p>
    </div>
  );
};

export default Spinner;
