import React from "react";

const EventCard = () => {
  return (
    <section className="w-full bg-white px-4 sm:px-8 py-16 font-comfortaa">
      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-10">
        <h2 className="text-3xl sm:text-5xl font-bold text-black mb-2">
          Upcoming Events
        </h2>
        <p className="text-[#2f2f2f] text-base sm:text-lg font-medium">
          Join a Session. Shift Your Energy.
        </p>
      </div>

      {/* Event Card */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-white/70 via-white/30 to-[#ff0591] rounded-3xl overflow-hidden shadow-lg">
          <div className="flex flex-col md:flex-row gap-10 items-stretch w-full bg-[#ff0591] text-white px-6 sm:px-8 py-6 sm:py-10">
            {/* Image */}
            <div className="w-full md:w-[54%] relative rounded-3xl overflow-hidden">
              <img
                src="event-1.jpg"
                alt="Event"
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="hidden sm:block left-28 absolute inset-0 bg-gradient-to-l from-pink-500/90 to-transparent z-10"></div>
            </div>


            {/* Content */}
            <div className="w-full md:w-[40%] flex flex-col justify-center">
              <h3 className="text-xl sm:text-[40px] font-bold mb-4">
                Midweek Laugh Circle
              </h3>
              <p className="text-sm sm:text-base mb-6 opacity-90 leading-relaxed">
                Looking to reset, reconnect, or just breathe?
                <br />
                Join a session and feel the shift.
              </p>

              <h4 className="text-4xl sm:text-6xl font-bold mb-2">AUG 7</h4>
              <p className="text-sm sm:text-base font-medium opacity-90">
                7:00 PM – 8:00 PM IST · Online via Zoom
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventCard;
