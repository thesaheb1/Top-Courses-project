
const Filter = (props) => {

  let FilterData = props.FilterData;
  let SetCategory = props.SetCategory;
  let Category = props.Category;

  function CategoryHandler(title)
  {
    SetCategory(title);
  }
  return (
    <div className="w-11/12 flex flex-wrap max-w-max gap-y-4 mx-auto py-4 justify-center justify-center items-center  gap-8">
      {FilterData.map((fdata)=>{
        return (
          <button onClick={() => {
            CategoryHandler(fdata.title);
          }} className= { `text-lg px-2 py-1 rounded-md font-medium text-white bg-[rgba(0,0,0,0.5)] border-2  transition-all duration-600 ease-linear ${Category === fdata.title ? "bg-black border-white" : "border-[#B04759]"}`} key={fdata.id}>{fdata.title}</button>
        )
      })}
    </div>
  );
};

export default Filter;
