import React from "react";

const Cards = () => {
  return (
    <div className="max-w-[1640px] m-auto p-4 grid md:grid-cols-3 gap-6 ">
      {/*Card */}
      <div className="rounded-xl relative">
        {/*Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <h3 className="font-bold text-2xl px-2 pt-4">
            Ocean Treasure Patty Temptation
          </h3>
          <p className="px-2">Available Through 10/10</p>
          <button className=" ml-2 bg-white border-black text-black absolute bottom-4  ">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80"
          alt=""
        />
      </div>
      {/*Card */}
      <div className="rounded-xl relative">
        {/*Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <h3 className="font-bold text-2xl px-2 pt-4">
            Marine Magic Patty Creation
          </h3>
          <p className="px-2">Available Through 10/10</p>
          <button className=" ml-2 bg-white border-black text-black absolute bottom-4  ">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGFtYnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
      {/*Card */}
      <div className="rounded-xl relative">
        {/*Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <h3 className="font-bold text-2xl px-2 pt-4">
            Seaside Crabby Burger Delight
          </h3>
          <p className="px-2">Available Through 10/10</p>
          <button className=" ml-2 bg-white border-black text-black absolute bottom-4  ">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1608767221051-2b9d18f35a2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default Cards;
