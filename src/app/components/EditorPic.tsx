import Image from 'next/image';
import React from 'react';

const EditorsPick = () => {
  return (
    <div className="bg-white py-10 px-5">
      <h2 className="text-center text-xl font-bold mb-2">EDITOR PICK</h2>
      <p className="text-center text-gray-500 mb-8">
        Problems trying to resolve the conflict between
      </p>
      <div className="w-full max-w-[1050px] mx-auto">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

          {/* First Image - Large width and height */}
          <div className="relative group col-span-2 md:col-span-2">
            <Image
              src="/man.jpg"
              alt="Men Alternate"
              width={1050}  // Set the width to make it large
              height={500}  // Set the height to maintain proportionality
              className="object-cover rounded-md"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-md">
              <span className="text-white font-bold text-lg">MEN</span>
            </div>
          </div>

          {/* Second Image - Only height */}
          <div className="relative group">
            <Image
              src="/woman.jpg"
              alt="Women Alternate"
              width={510}  // Normal width
              height={1000}  
              className="object-cover h-[650px] rounded-md"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-md">
              <span className="text-white font-bold text-lg">WOMAN</span>
            </div>
          </div>

          {/* Last Two Images - Aligned in Flex Column */}
          <div className="flex flex-col gap-6">

            {/* Third Image */}
            <div className="relative group">
              <Image
                src="/homegirl.jpg"
                alt="Accessories Alternate"
                width={510}
                height={500}
                className="object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-md">
                <span className="text-white font-bold text-lg">ACCESSORIES</span>
              </div>
            </div>

            {/* Fourth Image */}
            <div className="relative group">
              <Image
                src="/kids.jpg"
                alt="Kids"
                width={510}
                height={500}
                className="object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-md">
                <span className="text-white font-bold text-lg">KIDS</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default EditorsPick;
