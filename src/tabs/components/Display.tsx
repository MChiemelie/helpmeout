import React, { useEffect, useState } from "react";
import { Card } from ".";
import { Link } from "react-router-dom";

export default function Display() {
   const [videos, setVideos] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      // Fetch data from the API endpoint
      fetch("https://damisaalex.xyz/hngx5/api/videos")
         .then((response) => {
            if (!response.ok) {
               throw new Error("Network response was not ok");
            }
            return response.json();
         })
         .then((data) => {
            setVideos(data);
            setLoading(false);
         })
         .catch((error) => {
            console.error("Error fetching data:", error);
            setLoading(false);
         });
   }, []);

   if (loading) {
      return <div>Loading...</div>;
   }

   return (
      <div className="w-[90%] my-[2%] mx-auto flex flex-col gap-10">
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
         {videos.map((video, index) => (
            <div key={index} className="w-fit">
               <h1 className="text-2xl font-semibold py-4">{video.title}</h1>
                  <div className="w-full">
                     <Link to={`/video/${video._id}`}>
                        <Card
                           image="video2.png"
                           title={video.title}
                           date={video.uploadDate}
                           videoId={video._id}
                        />
                     </Link>
                  </div>
               </div>
         ))}
         </div>
      </div>
   );
}
