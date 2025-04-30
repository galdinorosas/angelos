const ContactUs = () => {
  return (
    <section className="w-full h-screen bg-gray px-4 md:px-8 py-12 mb-24 font-[family-name:var(--font-poppins)]">
      <h2 className="text-[32px] font-md text-center mb-12">
        Contact Us
      </h2>
      <section className="flex flex-col gap-8 justify-center items-center">
        <p className="text-center max-w-[800px]">
          {`Craving a delicious sandwich made with high-quality ingredients? At Angelo's Gourmet Delicatessen, we're dedicated to crafting flavorful meals. For catering inquiries, please call us. We look forward to hearing from you!`}
        </p>
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="flex flex-row gap-4">
            <p className="font-bold">Phone:</p>
            <p>510-234-2485</p>
          </div>
          <div className="flex flex-row gap-4 justify-center items-center">
            <p className="font-bold">Address:</p>
            <p className="w-fit-content">12025 San Pablo Avenue, Richmond, CA 94805</p>
          </div>
        </div>
      </section>
      <iframe className="w-[100%] h-[50%] md:w-[70%] md:h-[70%] mx-auto mt-12 rounded-md border border-gray-300" width="600" height="450" loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJFdHWPkZ4hYARaZdYSz8yfU4&key=AIzaSyDUKXQD80xYS8RXcNtqLg0a3XOjGcY0rw8"></iframe>
    </section>
  );
}


export default ContactUs;