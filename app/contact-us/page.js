'use client'
import { submitContact } from "@/app/actions";
import { useEffect, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";

const initialState = {
  errors: {},
  success: false
}

function ContactPage() {
  const formRef = useRef(null);
  const [state, formAction] = useFormState(submitContact, initialState);
  const { pending } = useFormStatus();

  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
    }
  }, [state.success])

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
        <form
          ref={formRef}
          action={formAction}
          className="py-5 flex flex-col w-full items-start gap-4"
        >
          <div className="flex flex-col w-full gap-2 items-start">
            <label className="text-lg text-black font-bold">Your name</label>
            <input
              type="text"
              id="name"
              name="name"
              className={`form-control ${state.errors?.name && 'error'}`}
              placeholder="Write your name"
            />
            {state.errors?.name && <p className="text-red-500">{state?.errors.name}</p>}
          </div>
          <div className="flex flex-col w-full gap-2 items-start">
            <label className="text-lg text-black font-bold">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className={`form-control ${state.errors?.email && 'error'}`}
              placeholder="Write your email"
            />
            {state.errors?.email && <p className="text-red-500">{state?.errors.email}</p>}
          </div>
          <div className="flex flex-col w-full gap-2 items-start">
            <label className="text-lg text-black font-bold">Your queries</label>
            <textarea
              id="message"
              name="message"
              className={`form-control ${state.errors?.message && 'error'}`}
              rows="5"
              placeholder="Write your message"
            />
            {state.errors?.message && <p className="text-red-500">{state?.errors.message}</p>}
          </div>
          <div className="flex items-start gap-5 w-full">
            <button
              type="submit"
              disabled={pending}
              className="py-3 px-8 rounded-full bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white"
            >Submit</button>
            {state.success && <p className="py-3 px-8 bg-green-100 text-green-800 font-semibold border border-green-300 w-full rounded-full">Form submitted successfully!</p>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
