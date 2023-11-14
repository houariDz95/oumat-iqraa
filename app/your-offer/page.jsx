// pages/index.js
import Head from 'next/head';

const LandingPage = () => {
  return (
    <div className="absolute h-screen w-screen top-0 left-0 bg-gray-900 text-white flex items-center justify-center" style={{ direction: "ltr" }}>
      <Head>
        <title>Special Offer</title>
      </Head>

      <div className="bg-gray-800 p-8 rounded-md shadow-md max-w-md">
        <img
          src="https://blog.nosh.ng/wp-content/uploads/2023/02/giftcard.jpeg" // replace with your image path
          alt="Offer Image"
          className="mb-4 w-full shadow-md object-cover rounded-md"
        />

        <h1 className="text-2xl font-bold mb-2 text-center">Freebie for You</h1>

        <p className="text-gray-300 mb-4 text-center">
          Short description of the special offer goes here.
        </p>

        <div className="grid grid-cols-1 gap-4">
          <a
            href="https://mordoops.com/4/6592695"
            className="bg-blue-500 text-white py-2 px-4 rounded-md text-center block"
          >
            Claim 0.800 Bitcoin
          </a>

          <a
            href="https://chalaips.com/4/6597788"
            className="bg-green-500 text-white py-2 px-4 rounded-md text-center block"
          >
            Get Free $2500 Gift Cards
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

