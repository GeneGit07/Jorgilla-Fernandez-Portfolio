import ptcTrainingPhoto from "../../public/images/ptc-aviation-training.jpeg";
import ptcCabinTrainingPhoto from "../../public/images/ptc-cabin-training.jpeg";
import hotelFrontDeskPhoto from "../../public/images/jet-hotel-front-desk.jpeg";
import hotelCertificatePhoto from "../../public/images/jet-hotel-certificate.jpeg";
import hotelEventPhoto from "../../public/images/jet-hotel-event.jpeg";
import guestThankYouPhoto from "../../public/images/guest-thank-you-note.jpeg";

export const experiences = [
  {
    title: "PTC Aviation Training Center",
    images: [
      {
        source: ptcTrainingPhoto,
        alt: "Jorgilla during flight attendant training at PTC Aviation Training Center.",
        label: "FLIGHT ATTENDANT TRAINING",
      },
      {
        source: ptcCabinTrainingPhoto,
        alt: "Jorgilla in uniform inside an aircraft cabin during training.",
        label: "AIRCRAFT CABIN SIMULATION",
      },
    ],
    description:
      "I attended a one-day flight attendant training at PTC Aviation Training Center in Manila, where I gained firsthand experience in flight attendant procedures and operational duties. I participated in a seminar that highlighted the responsibilities of a flight attendant, including proper uniform standards, professional grooming, and ensuring passengers' safety, security, comfort, and needs. I also took part in various flight operation simulations, such as food and beverage service, making flight announcements, and learning the appropriate procedures to follow during emergencies.",
  },
  {
    title: "JET Hotel Lipa",
    images: [
      {
        source: hotelFrontDeskPhoto,
        alt: "Jorgilla at the JET Hotel Lipa front desk.",
        label: "FRONT OFFICE TRAINING",
      },
      {
        source: hotelCertificatePhoto,
        alt: "Jorgilla holding a certificate at a JET Hotel Lipa event.",
        label: "JET HOTEL LIPA",
      },
      {
        source: hotelEventPhoto,
        alt: "Jorgilla with colleagues at a JET Hotel Lipa celebration.",
        label: "HOTEL EVENT",
      },
    ],
    description:
      "Completed on-the-job training at JET Hotel Lipa, gaining practical experience in front office operations and guest services. Assisted with guest check-ins, check-outs, room reservations, and inquiries about hotel services and amenities. Answered phone calls, prepared reports, and organized key cards and food stubs to ensure smooth hotel operations. Performed graveyard shifts and assisted with hotel events and special celebrations. Developed strong communication, customer service, teamwork, and adaptability skills while maintaining professionalism and ensuring guest satisfaction.",
  },
];

export const kindWordsImage = {
  source: guestThankYouPhoto,
  alt: "Handwritten thank-you note addressed to the JET Hotel staff.",
  label: "A HANDWRITTEN THANK-YOU NOTE",
};

