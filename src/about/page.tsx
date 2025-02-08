import FeactureProduct from "@/app/components/feactureProduct";

import Image from "next/image";


export default function About() {
  return (
    <div>
  
      <div className="relative flex flex-col gap-8">
        {/* Header Section */}




        <section className="max-w-[1050px] mx-auto flex flex-col items-start lg:gap-[80px] gap-[40px] py-[112px]">
  <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-[30px] w-full">
    <div className="flex flex-col lg:items-start items-center gap-[35px] w-full lg:w-[599px]">
      <h5 className="text-[14px] font-semibold text-[#252B42]">ABOUT COMPANY</h5>
      <h1 className="text-[30px] lg:text-[58px] font-bold text-[#252B42]">ABOUT US</h1>
      <p className="text-[12px] lg:text-[20px] text-[#737373] w-[200px] lg:w-[376px]">
        We know how large objects will act, but things on a small scale.
      </p>
      <button className="px-[40px] py-[15px] bg-[#23A6F0] text-white font-bold text-[14px] rounded-[5px]">
        Get Quote Now
      </button>
    </div>
    <div className="w-full lg:w-[450px] flex justify-center lg:justify-start">
      <Image
        src="/background@2x.png"
        alt="About Us"
        width={450}
        height={600}
        className="object-contain"  
      />
    </div>
  </div>
</section>

        {/* Stats Section */}
        <section className="bg-white py-10 lg:py-20 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-[1050px] mx-auto">
            {[
              { value: "15K", label: "Happy Customers" },
              { value: "150K", label: "Monthly Visitors" },
              { value: "15", label: "Countries Worldwide" },
              { value: "100+", label: "Top Partners" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <h1 className="text-[58px] font-bold text-[#252B42]">{stat.value}</h1>
                <p className="text-[16px] text-[#737373]">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#252B42]">Meet Our Team</h2>
            <p className="text-base text-[#737373] mt-4">
              Problems trying to resolve the conflict between the two major realms of Classical physics.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
              {[
                { name: "Emily Rose", role: "Software Engineer", image:"/aboutorangegirl.jpg" },
                { name: "Jane Smith", role: "Marketing Head", image: "/Aboutredgirl.jpg" },
                { name: "John Doe", role: "UI/UX Designer", image: "/aboutman.jpg" },
              ].map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden"
                >
                  <Image src={member.image} alt={member.name} width={316} height={231} />
                  <div className="p-6 text-center">
                    <h5 className="text-xl font-bold text-[#252B42]">{member.name}</h5>
                    <p className="text-sm font-semibold text-[#737373]">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

<FeactureProduct />





 {/* COMPANIES SECTION */}
 <section className="bg-gray-100 py-20 flex justify-center">
          <div className="w-full max-w-6xl flex flex-col gap-[24px] items-center px-4 md:px-8">
            {/* Heading Section */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Big Companies Are Here
              </h2>
              <p className="text-gray-600 text-sm md:text-base max-w-lg mx-auto">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </p>
            </div>

            {/* Logo Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
              <div className="flex justify-center">
              <Image src="/Vector (9).png"  width={153} height={34}alt="Client 1 Logo" className="h-12 w-auto" />
              </div>
              <div className="flex justify-center">
                <Image src="/Vector (10).png"  width={146} height={59}alt="Client 2 Logo" className="h-12 w-auto" />
              </div>
              <div className="flex justify-center">
                <Image src="/Vector (27).png"  width={152} height={75}alt="Client 3 Logo" className="h-12 w-auto" />
              </div>
              <div className="flex justify-center">
                <Image src="/Vector (25).png"  width={151} height={42}alt="Client 4 Logo" className="h-12 w-auto" />
              </div>
              <div className="flex justify-center">
                <Image src="/Vector (23).png"width={151} height={42} alt="Client 5 Logo" className="h-12 w-auto" />
              </div>
              <div className="flex justify-center">
                <Image src="/Vector (24).png"  width={151} height={72}alt="Client 6 Logo" className="h-12 w-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* groW */}
        <section className="relative w-full h-[636px] flex bg-[#2A7CC7] justify-center items-center mt-[-30px]">
          
      {/* Right Side Blue Section */}
      <div className="w-[1440px] md:w-1/2 h-full bg-[#2A7CC7] lg:px-[250px] lg:ml-[0px] ml-[50px] py-16  flex flex-col justify-center">
        <div className="w-[438px] flex flex-col gap-[24px]">
          <h5 className="text-white text-lg font-bold leading-[24px] tracking-[0.1px]">WORK WITH US</h5>
          <h2 className="text-white text-4xl font-bold leading-[50px] tracking-[0.2px]">
          Now Let’s grow Yours
          </h2>
          <p className="text-white lg:text-sm text-[12px] lg:w-auto w-[350px] leading-[20px] tracking-[0.2px]">
          The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th 
          </p>
          <button className="w-[132px] h-[52px] border border-white rounded-md flex items-center justify-center py-3 px-10 gap-2 mt-6">
            <span className="text-white text-sm font-bold">Button</span>
          </button>
        </div>
      </div>
      {/* Left Side Image */}
      <div className=" md:w-1/2 h-full relative">
        <Image
          src="/pinkgirl.jpg"
          width={548}
          height={412}
          alt="Testimonial Background"
          className="absolute left-[150px] inset-0 object-cover"
        />
      </div>

    </section>
    
      </div>
    </div>
  );
}









    
