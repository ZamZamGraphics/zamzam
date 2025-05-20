function ContactPage() {
  return (
    <div className="container py-20">
      <div className="text-center my-6">
        <h3 className="text-3xl text-black font-bold">
          Contact Us
        </h3>
        <p className="text-sm">
          You are welcome to visit our office for any information. You can also reach us through the hotline number or messenger.
        </p>
      </div>
      <div className="w-full md:w-3/4 bg-white mx-auto p-10 rounded-2xl border border-gray-200">
        <h3 className="text-2xl text-black font-bold">Inbox your queries</h3>
        <form className="py-5 flex flex-col w-full items-start gap-4">
          <div className="flex flex-col w-full gap-2 items-start">
            <label className="text-lg text-black font-bold">Your name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Write your name"
            />
          </div>
          <div className="flex flex-col w-full gap-2 items-start">
            <label className="text-lg text-black font-bold">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Write your email"
            />
          </div>
          <div className="flex flex-col w-full gap-2 items-start">
            <label className="text-lg text-black font-bold">Your queries</label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              rows="5"
              placeholder="Write your message"
            />
          </div>
          <div>
            <button
              type="submit"
              className="py-3 px-8 rounded-full bg-blue-700 hover:bg-blue-800 text-white"
            >Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
