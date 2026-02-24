import Image from "next/image";

const Banner = () => {
  return (
   
    <section className="relative h-[85vh] w-full overflow-hidden bg-black">
      
      <video 
       
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay 
        muted 
        loop
        playsInline 
        poster="/images/video-poster.jpg" 
      >
        <source src="/videos/video-principal.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60 z-10"></div>

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center space-y-8">

      </div>

    </section>
  );
};

export default Banner;