"use client";

export default function Hero() {
  return (
 <section className="relative w-full overflow-hidden">
  {/* Mobile background (contain) */}
  <div 
    className="absolute inset-0 bg-[url('/bg1.png')] bg-no-repeat bg-center bg-contain sm:hidden"
  />
  
  {/* Desktop background (cover) */}
  <div 
    className="absolute inset-0 bg-[url('/bg1.png')] bg-no-repeat bg-center bg-cover hidden sm:block"
  />
  
  {/* Content */}
  <div className="relative z-10">
    {/* Your content here */}
  </div>
 <div className="max-w-7xl mx-auto px-12 sm:px-8 lg:px-12 py-16 md:py-32">

       
           
            </div>
 
 
     
    </section>
  );
}