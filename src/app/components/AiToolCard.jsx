import React from "react";
import "../../app/globals.css";
import StarRating from "./StarRating";
import vector from "../../../assets/images/vector.png";

const AiToolCard = ({ data }) => {
  const rating = 4;
  return (
    <div
      className=" bg-custom-gradient overflow-hidden customShadow text-white px-4 py-2 rounded-[45px] border-3 border-white w-full h-[228px]"
    >
      <div className="flex justify-between w-full gap-1 pt-1">
        <div className="flex w-2/3">
          <img
            src={data.imgUrl}
            alt="Tool Logo"
            className="w-[50px] h-[50px] rounded-full"
          />
          <div className="ml-2 font-square721-bold leading-[1.3rem]">
            <h2 className="text-lg truncate max-w-[09.7rem]">{data.name}</h2>
            <p className="text-md font-400 font-square721-normal">{data.category}</p>
          </div>
        </div>
        <div className="grid grid-row-2 gap-y-[0.3rem] items-center w-1/2">
          <div className="flex items-center justify-center gap-y-2">
            <StarRating rating={data.rating} />
          </div>
          <div className="ml-auto flex gap-1 font-square721-normal">
            <button className="bg-transparent text-sm border-[2px] flex justify-center items-center text-white leading-1 px-2 py-1 rounded-full gap-x-1">
              <>
                <div className="flex justify-center items-center w-[18px] h-[18px] rounded-full border-[2px] border-white overflow-visible"></div>
                <div className="overflow-visible w-[18px] h-[18px] ml-[-13px] border-dashed rounded-full border-[2px] border-white"></div>
              </>
              Compare
            </button>
            <button className="bg-transparent text-sm border-[2px] flex justify-center items-center text-white leading-1 px-2 py-1 rounded-full">
              <div className="w-[20px] h-[20px]">
                <svg width="13" height="19" viewBox="0 0 16 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path id="Vector 36" d="M15 24V1H1V24L8 17.8016L15 24Z" stroke="white" strokeWidth="2" />
                </svg>
              </div>
              Save
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-start w-full gap-[10px]">
        <div className="mb-4 text-sm leading-5.5 font-square721-normal w-[45%]">
          <p>{data.cardDesc}</p>
        </div>
        <div className="mt-2 rounded-3xl w-[57%] h-[130px]">
          <img
            src="https://s3-alpha-sig.figma.com/img/f1b2/0289/73f728ea9686478668f8ebdacab88adf?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YibekqJwD8RVnqEGVUFIy82gPxdII9GTbY0z-Tp4P~6yzpaLiaed29JF6IqkZ0hEqgpdceWM7ziWbWuxvtYKaFm-AqK9RhWlGghEXa7-tU9GFJyQCmaejpm2BQPxf8MUUlgtzSDy66dCSOZ20pOWSugFWO~OblzhsMY01zvKuwffYx3VpycX8viO~XTaU1s183h50ZlF5uZSBqg0kY82l-NZoPRcTsGmBvFRhlG~E8BrANKRg1KpPsU7Ru36NGcnSInvEKKfUUEOqYKxyypY5rs3GKCL05YM59EqfCFx6Vb4jJK55cVGlMN4AAUNbSbzfHsrGP0lIYZpWWQsmiJzMw__"
            alt=""
            className="w-full h-full rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default AiToolCard;
