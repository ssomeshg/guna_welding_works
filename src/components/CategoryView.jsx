import React from "react";

function CategoryView() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-xl text-white">Saftey Doors</h1>
      {
        Array.from({length:3}).map((item,index)=>{
          return <div className="mt-5 p-2 relative flex justify-center" key={index}>
          <img
            src={`src/assets/doors/door${index+1}.png`}
            alt=""
            className="h-[50vh] object-contain w-auto p-4 bg-white"
          />
          <div className="w-20 h-20 bg-white absolute top-0 text-black text-4xl flex justify-center items-center">
              <h1>{index+1}</h1>
          </div>
        </div>
        })
      }

    </div>
  );
}

export default CategoryView;
