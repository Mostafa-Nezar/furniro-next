import Image from "next/image";
import Features from "../features/page";

const Blog = () => {
  const blogPosts = [
    {
      image: "/images/laptop-blog.png",
      date: "24 Oct 2022",
      category: "Wood",
      title: "Going all-in With Millennial design",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "/images/Rectangle-68.png",
      date: "24 Oct 2022",
      category: "Wood",
      title: "Exploring new ways of decorating",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "/images/Rectangle-68-1.png",
      date: "24 Oct 2022",
      category: "Wood",
      title: "Experimenting with color palettes",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <>
      <div className="blog">
        <div className="container px-5 py-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {blogPosts.map((post, index) => (
                <div key={index} className="mb-10">
                  <Image
                    src={post.image}
                    width={800}
                    height={400}
                    alt={post.title}
                    className="rounded-lg w-full h-auto"
                  />
                  <div className="flex items-center text-gray-600 my-3">
                    <span className="mr-4 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="mr-2"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 9.25c-2.27 0-2.73-3.44-2.73-3.44C7 4.02 7.82 2 9.97 2c2.16 0 2.98 2.02 2.71 3.81c0 0-.41 3.44-2.68 3.44z" />
                      </svg>
                      Admin
                    </span>
                    <span className="mr-4 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="mr-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M2 19c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-8H2zM19 4h-2V3c0-.6-.4-1-1-1s-1 .4-1 1v1H9V3c0-.6-.4-1-1-1s-1 .4-1 1v1H5C3.3 4 2 5.3 2 7v2h20V7c0-1.7-1.3-3-3-3z" />
                      </svg>
                      {post.date}
                    </span>
                    <span className="mr-4 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="mr-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4.748 7.645l-.331 3.644c-.05.54-.074.811-.03 1.07a2 2 0 0 0 .238.655c.131.228.325.422.711.808l5.176 5.176c.787.787 1.18 1.18 1.636 1.328c.402.131.835.131 1.237 0c.456-.148.853-.544 1.645-1.336l3.96-3.96c.792-.792 1.187-1.188 1.336-1.644a2 2 0 0 0-.001-1.236c-.148-.457-.543-.853-1.335-1.645l-5.163-5.163c-.39-.39-.584-.584-.813-.716a2 2 0 0 0-.656-.238c-.26-.045-.535-.02-1.084.03l-3.63.33c-.944.086-1.417.129-1.787.335a2 2 0 0 0-.775.775c-.205.368-.248.838-.333 1.773z" />
                      </svg>
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                  <p className="text-gray-700">{post.content}</p>
                  <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Read More
                  </button>
                </div>
              ))}
            </div>
            <div className="md:col-span-1">
              <div className="p-4 bg-gray-100 rounded-lg">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-3 py-2 border rounded-md focus:outline-none"
                />
              </div>
              <div className="p-4 mt-6 bg-gray-100 rounded-lg">
                <h3 className="text-lg font-semibold">Categories</h3>
                <div className="flex justify-between mt-3 text-gray-700">
                  <span>Craft</span>
                  <span>2</span>
                </div>
                <div className="flex justify-between mt-2 text-gray-700">
                  <span>Design</span>
                  <span>8</span>
                </div>
                <div className="flex justify-between mt-2 text-gray-700">
                  <span>Wood</span>
                  <span>5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Features />
    </>
  );
};

export default Blog;
