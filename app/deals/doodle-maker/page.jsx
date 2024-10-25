import Banner_720 from "@/Banners/Banner_720";
import Image from "next/image";

export const metadata = {
  title: "Doodle: The Creative Outlet for Everyone",
  description: "Explore the world of Doodles and unleash your creativity.",
};

export default function DoodleArticle() {
  return (
    <div style={{ direction: "ltr" }} className="absolute max-w-screen w-full top-0 left-0 z-50 bg-white">
      <div className="flex items-center justify-center">
        <Banner_720 />
      </div>
      <div className="min-h-screen bg-gray-50 text-gray-900 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64">
        <div className="flex justify-center mb-4">
          <Image
            src="/doodle.jpg"
            alt="Doodle Art"
            width={720}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
        <header className="bg-green-600 text-white py-4 shadow-lg text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold">
              Doodle: The Creative Outlet for Everyone 🎨✏️
            </h1>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          <article className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">
              Discovering the Joy of Doodling
            </h2>
            <p className="mb-4">
              Doodling is a delightful form of self-expression that transcends age and skill level. Whether you&apos;re an experienced artist or just someone who enjoys scribbling during meetings, doodles provide a creative outlet that can spark joy and imagination. 
              <a href="https://jvz2.com/c/3029667/357045/" className="text-green-600 font-semibold"> Click here to explore amazing doodling tools!</a>
            </p>

            <p className="mb-4">
              In this article, we’ll delve into the world of doodles, their benefits, and how you can incorporate doodling into your daily routine to unleash your creativity.
            </p>

            <div className="bg-green-100 p-4 rounded-lg mb-6">
              <strong>Tip:</strong> Doodling can enhance your focus and improve memory retention. So grab a pen and start doodling!
            </div>

            <h3 className="text-lg font-semibold mb-2">What are Doodles?</h3>
            <p className="mb-4">
              Doodles are simple, spontaneous drawings made while a person&apos;s attention is otherwise occupied. They can be abstract shapes, little characters, or even patterns. The beauty of doodling lies in its freedom&mdash;there are no rules or restrictions.
            </p>

            <h3 className="text-lg font-semibold mb-2">Benefits of Doodling</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Enhances creativity and promotes problem-solving skills.</li>
              <li>Helps with relaxation and stress relief.</li>
              <li>Improves focus and concentration during monotonous tasks.</li>
              <li>Encourages mindfulness and self-expression.</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">How to Get Started with Doodling</h3>
            <ol className="list-decimal pl-6 mb-4">
              <li>Choose your medium: paper and pen, digital tablets, or even whiteboards.</li>
              <li>Find a comfortable and distraction-free environment.</li>
              <li>Start with simple shapes and let your imagination guide you.</li>
            </ol>
            <p className="mb-4">
              Remember, there are no mistakes in doodling! Let your pen flow freely and see where it takes you. 
              <a href="https://jvz2.com/c/3029667/357045/" className="text-green-600 font-semibold"> Check out our favorite doodling supplies here!</a>
            </p>

            <h3 className="text-lg font-semibold mb-2">Incorporating Doodling into Your Routine</h3>
            <p className="mb-4">
              To make doodling a regular part of your life, consider setting aside a few minutes each day. You can doodle while on calls, during lunch breaks, or even as a warm-up before tackling more serious creative projects. 
              <a href="https://jvz2.com/c/3029667/357045/" className="text-green-600 font-semibold"> Discover great doodling tools to enhance your practice!</a>
            </p>

            <div className="bg-green-100 p-4 rounded-lg mb-6">
              <strong>Join the Doodling Community!</strong> Connect with fellow doodlers online and share your creations for inspiration and feedback.
            </div>

            <h3 className="text-lg font-semibold mb-2">Final Thoughts</h3>
            <p className="mb-4">
              Doodling is a fun and rewarding activity that anyone can enjoy. So, pick up your favorite writing tool and start doodling today! 
              <a href="https://jvz2.com/c/3029667/357045/" className="text-green-600 font-semibold"> Explore our recommended doodling resources now!</a>
            </p>
          </article>
        </main>
        <footer className="bg-gray-800 text-white py-4">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 Doodle: The Creative Outlet for Everyone. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
