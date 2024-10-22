import Banner_720 from '@/Banners/Banner_720';
import Head from 'next/head';

export const metadata = {
    title: "Earn Extra Cash | UniqueRewards",
    description: "Earn extra cash doing what you love! Join UniqueRewards for FREE and get a $5 bonus.",
};
  
export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen  flex flex-col items-center justify-center absolute top-0 left-0 z-50 w-full max-w-screen">
      {/* Hero Section */}
      <div className='flex items-center justify-center w-full overflow-hidden'>
            <Banner_720 />
        </div>
      <section className="text-center px-4 py-12 bg-white shadow-md rounded-lg w-full max-w-4xl mt-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Earn Extra Cash Doing What You Like!</h1>
        <p className="text-lg text-gray-600 mb-6">Join <span className="text-blue-600 font-semibold">UniqueRewards</span> for FREE and get a $5 Bonus right away!</p>
        <a href="https://shareasale.com/r.cfm?b=15937&u=4040299&m=4538&urllink=&afftrack=" className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition">Join Now & Get $5 Bonus</a>
      </section>

      {/* Key Benefits */}
      <section className="mt-12 text-center w-full max-w-4xl">
        <h2 className="text-3xl font-semibold text-gray-800">Why Join UniqueRewards?</h2>
        <div className="flex flex-wrap justify-center mt-6">
          <div className="m-4 p-6 bg-white shadow-md rounded-lg w-64">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Get Paid for What You Love</h3>
            <p className="text-gray-600">Surveys, games, shopping, and more!</p>
          </div>
          <div className="m-4 p-6 bg-white shadow-md rounded-lg w-64">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">$5 Welcome Bonus</h3>
            <p className="text-gray-600">Sign up and get rewarded instantly.</p>
          </div>
          <div className="m-4 p-6 bg-white shadow-md rounded-lg w-64">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Flexible Earnings</h3>
            <p className="text-gray-600">Choose what tasks suit you best.</p>
          </div>
        </div>
      </section>
      {/* How It Works */}
      <section className="mt-16 bg-blue-100 py-12 w-full max-w-4xl text-center rounded-lg">
        <h2 className="text-3xl font-semibold text-gray-800">How It Works</h2>
        <div className="flex flex-wrap justify-center mt-6">
          <div className="m-4 p-6 bg-white shadow-md rounded-lg w-64">
            <span className="text-2xl text-blue-600 font-bold">1.</span>
            <p className="text-gray-700 mt-2">Sign Up for Free</p>
          </div>
          <div className="m-4 p-6 bg-white shadow-md rounded-lg w-64">
            <span className="text-2xl text-blue-600 font-bold">2.</span>
            <p className="text-gray-700 mt-2">Complete Tasks</p>
          </div>
          <div className="m-4 p-6 bg-white shadow-md rounded-lg w-64">
            <span className="text-2xl text-blue-600 font-bold">3.</span>
            <p className="text-gray-700 mt-2">Get Paid Instantly</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-12 text-center">
        <a href="https://shareasale.com/r.cfm?b=15937&u=4040299&m=4538&urllink=&afftrack=" className="bg-green-500 text-white py-4 px-10 rounded-lg hover:bg-green-600 transition">Join Now & Start Earning!</a>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-600">
        <p>&copy; 2024 Earn Extra Cash. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
