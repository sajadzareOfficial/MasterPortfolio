import React from "react";
import { UserComment } from "/constants/index.js";
const Comments = () => {
  return (
    <div className="  flex-col-center gap-8">
      <HeaderComment />
      {UserComment.map((comments) => {
       

        return (
          <div class="comment text-xl w-80 glassy-DarkMode light:glassy-LightMode  flex-col-center gap-4 py-5 *:w-4/5 ">
            
              <StarRating rating={Number(comments.starsRate)} />
            
            
            <p class="comment__text   ">{comments.Description}</p>
            <div class="comment__person flex items-center  gap-3">
              <img
                class="circle size-12   object-center  rounded-full ring-1 ring-white/10  "
                src={`${comments.imgSrc}`}
              ></img>
              <p class="PersonName  text-xl text-white">
                {comments.authorName}
                <span class="block text-subTitle text-sm">
                  {comments.Specializations}
                </span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
function HeaderComment() {
  return (
    <>
      <div class="comment-Title w-full flex-col-center">
        <p class="px-2 py-0.5  text-[#8B5CF6] rounded-2xl ring">Testimonials</p>
        <p class="text-white font-bold  text-4xl  ">
          What{" "}
          <span class="bg-linear-to-b bg-clip-text text-transparent from-linear2 to-linear3">
            Clients Say
          </span>
        </p>
      </div>
    </>
  );
}

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const Empty_Star= 5 - rating ;
  return (
    <div className="flex">
      {Array.from({ length: fullStars }, (_, i) => (
        <img
          key={`full-${i}`}
          className="m-0 size-7 p-0"
          src="assets/svg/main/compleateStar.svg"
          alt="Full star"
        />
      ))}

      {hasHalfStar && (
        <img
          className="m-0 size-7 p-0"
          src="assets/svg/main/halfStar.svg"
          alt="Half star"
        />
      )}
     {
        
      Array.from({ length: Empty_Star }, (_, i) => (
        <img
          key={`full-${i}`}
          className="m-0 size-7 p-0"
          src="assets/svg/main/EmptyStars.svg "
          alt="Full star"
        />
      ))}
    </div>
  );
};

export default Comments;
