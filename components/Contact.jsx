
const Contact = () => {
    return (
      <section className="py-6">
        <div className="max-w-4xl mx-auto px-4">
          <p className="mb-6 text-md tex-black">هل لديك أي أسئلة أو استفسارات؟ لا تتردد في التواصل معنا.</p>
          <form
            action='https://getform.io/f/959e93a7-402a-43ec-ba24-d4f710c18044'
            method='POST'
            encType='multipart/form-data'
          >
            <input
              type="text"
              name="name"
              placeholder="اسمك"
              dir='rtl'
              className="w-full border border-gray-300 focus:outline-primary rounded py-2 px-4 mb-4"
            />
            <input
            name="email"
              type="email"
              placeholder="بريدك الإلكتروني"
              dir='rtl'
              className="w-full border border-gray-300  focus:outline-primary rounded py-2 px-4 mb-4"
            />
            <textarea
              name="desc"
              placeholder="رسالتك"
              rows="4"
              dir='rtl'
              className="w-full border border-gray-300 focus:outline-primary rounded py-2 px-4 mb-4"
            ></textarea>
            <button
              type="submit"
              className="bg-primary hover:bg-primary/80 text-white py-2 px-4 rounded"
            >
              إرسال الرسالة
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;