import Image from "next/image";

export default function FeaturePost() {
  const posts = [
    {
      id: 1,
      title: "Loudest à la Madison #1 (L'intégral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
      image: "/f1.jpg",
    },
    {
      id: 2,
      title: "Loudest à la Madison #1 (L'intégral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
      image: "/f2.jpg",
      
    },
    {
      id: 3,
      title: "Loudest à la Madison #1 (L'intégral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
      image: "/f3.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-center text-[40px] leading-[50px] font-bold text-[#252B42] mb-4">Featured Posts</h1>
        <p className="text-center text-[#737373] mb-10 text-[14px] leading-[20px]">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
            >
              <div className="relative h-48">
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">NEW</span>
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-500 mb-1">Google • Trending • New</p>
                <h2 className="text-lg font-semibold text-gray-800">{post.title}</h2>
                <p className="text-sm text-gray-600 mt-2">{post.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-400 mt-4">
                  <span>{post.date}</span>
                  <span>{post.comments} comments</span>
                </div>
                <a
                  href="#"
                  className="block mt-3 text-blue-500 text-sm font-medium hover:underline"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}