import Image from "next/image";
import IconButton from "./IconButton";
import Container from "./Container";
import { blogs } from "@/data/blogs";

export default function BlogsCard() {
  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-3xl shadow-sm border border-gray-100 p-3">
            
            {/* Rasm */}
            <div className="relative rounded-2xl overflow-hidden mb-4">
              <Image
                src={blog.image}
                alt={blog.title}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <span className="absolute bottom-3 left-3 bg-white text-gray-700 text-xs font-medium px-3 py-1 rounded-lg shadow-sm">
                {blog.category}
              </span>
            </div>

            {/* Matn */}
            <div className="px-2 pb-2">
              <h3 className="font-semibold text-lg text-gray-900 leading-snug mb-5">
                {blog.title}
              </h3>
              <div className="flex justify-between items-center">
                <p className="text-gray-400 text-sm">{blog.date}</p>
                <IconButton variant="primary" direction="right" />
              </div>
            </div>

          </div>
        ))}
      </div>
    </Container>
  );
}