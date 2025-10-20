import React, { useState } from "react";
import { FaEye, FaShareAlt, FaStar } from "react-icons/fa";
import { format } from "date-fns";

const NewsCard = ({ news }) => {
  const {
    title,
    details,
    author,
    thumbnail_url,
    rating,
    total_view,
    tags,
  } = news;

  // ✅ Step 1: State for toggling Read More
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="card w-full bg-base-100 shadow-md  hover:shadow-lg transition-all duration-300 mt-5">
      {/* --- Header --- */}
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-sm">{author.name}</h3>
            <p className="text-xs text-gray-500">
              {format(new Date(author.published_date), "yyyy-MM-dd")}
            </p>
          </div>
        </div>
        <button className="btn btn-ghost btn-sm text-gray-600">
          <FaShareAlt />
        </button>
      </div>

      {/* --- Title --- */}
      <h2 className="font-bold text-lg px-4">{title}</h2>

      {/* --- Image --- */}
      <figure className="px-4 pt-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-lg w-full object-cover"
        />
      </figure>

      {/* --- Details --- */}
      <div className="px-4 py-3 text-sm text-gray-600">
        <p>
         
          {
               expanded? details:`${details.slice(0,200)}...`
          }
          <button 
          onClick={()=>setExpanded(!expanded)}
          className="text-orange-500 font-semibold ml-1 hover:underline cursor-pointer"
          >
               {
                    expanded?"Reed Less":"Red More.."
               }
          </button>
        </p>

        <div className="mt-2 text-xs text-gray-500">
          <strong>Tags:</strong> {tags.join(", ")}
        </div>
      </div>

      {/* --- Footer --- */}
      <div className="border-t border-gray-200 px-4 py-3 flex justify-between items-center text-sm">
        <div className="flex items-center gap-1 text-orange-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              className={i < rating.number ? "text-orange-500" : "text-gray-300"}
            />
          ))}
          <span className="ml-1 text-gray-700">{rating.number}</span>
        </div>

        <div className="flex items-center gap-1 text-gray-500">
          <FaEye /> <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
