import { fadeIn } from "./motion";

export const links = [
  {
    link: "/",
    text: "Home",
    exact: true,
  },
  {
    link: "/booking?index=1",
    text: "Book Now",
    exact: true,
  },
  // {
  //   link: "/local",
  //   text: "Local Transfers",
  //   exact: true,
  // },
  {
    link: "/our-cars",
    text: "Our Cars",
  },
  {
    link: "/services",
    text: "Services",
  },
  {
    link: "/car-trends",
    text: "Car Trends",
    // keyword: true,
  },
  {
    link: "/about-us",
    text: "About Us",
  },
  {
    link: "/sign-in",
    text: "Login",
  },
];

// carousel array
export const profile = [
  {
    title: "Speed",
    img: "https://firebasestorage.googleapis.com/v0/b/mern-corpsite.appspot.com/o/carlexotics%2Fbanner%2Fbanner-1.jpg?alt=media&token=e83b240e-9f7a-45ef-84cf-156e7b45e009",
    text: "Get up to speed on all of the new year’s most important cars with Top Gear’s one-stop guide.",
    icon: "paint-brush",
  },
  {
    title: "Track",
    text: "Divo is another Bugatti that was built for the track. It has a larger front grille for additional cooling, extra aero elements between the wheels, and a massive rear wing for more downforce. But it still packs a 1,500-hp quad-turbocharged engine underhood.",
    icon: "quote-left",
    img: "https://firebasestorage.googleapis.com/v0/b/mern-corpsite.appspot.com/o/carlexotics%2Fbanner%2Fbanner-2.jpg?alt=media&token=a5310f7d-5ad1-4a43-8c2b-952ecaa3660f",
  },
  {
    title: "Powerful",
    text: "From a 1,500HP Hypercar to the World’s Most Powerful Bike, Here are the Best Vehicles of the Year.",
    img: "https://firebasestorage.googleapis.com/v0/b/mern-corpsite.appspot.com/o/carlexotics%2Fbanner%2Fbanner-3.jpg?alt=media&token=8182e66a-1f79-4139-ad8e-bfe61ebc092e",
    icon: "lightbulb",
  },
];

export const exploreWorlds = [
  {
    id: "world-1",
    imgUrl: "/planet-01.jpg",
    title: "Secure, Dependable, and Opulent",
    description:
      "At Limolux, we understand your desires – a seasoned chauffeur behind the wheel, complemented by a flawlessly stylish ride.",
  },
  {
    id: "world-2",
    imgUrl: "/planet-02.jpg",
    title: "Vehicles For Any Occasion",
    description:
      "From Unmatched Luxury to Spacious Comfort: Limolux Awaits Your Selection!",
  },
  {
    id: "world-3",
    imgUrl: "/planet-03.jpg",
    title: "Need Wedding Transportation?",
    description:
      "On your wedding day, Limolux delivers the ultimate luxury ride for an unforgettable journey.",
  },
];

export const homeCards = [
  {
    img: "https://firebasestorage.googleapis.com/v0/b/mern-corpsite.appspot.com/o/carlexotics%2Fobjective%2Fhome-car-1.jpg?alt=media&token=00f7e13d-0ad5-46e2-8738-8992cf1d5342",
    title: "Our Vision",
    description:
      "Our vision is to establish ourselves as the premier choice for hassle-free car rentals worldwide, delivering seamless experiences for travelers seeking convenience and reliability. We aim to set new standards in the industry by continuously innovating and adapting to meet the evolving needs of our customers, ensuring their journeys are always smooth and stress-free.",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/mern-corpsite.appspot.com/o/carlexotics%2Fobjective%2Fcar-6.jpg?alt=media&token=3b01d0e6-8339-459f-9a08-ec5bc888bd9e",
    title: "Our Mission",
    description:
      "We are dedicated to achieving this by leveraging innovative technology and providing personalized service, ensuring every customer receives exceptional care and attention. Our mission is to not only meet but exceed the expectations of our clients, offering a wide range of vehicles and flexible rental options to cater to diverse preferences and requirements.",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/mern-corpsite.appspot.com/o/carlexotics%2Fobjective%2Fcar-7.jpg?alt=media&token=6599cfe7-d8a7-4fd9-8fc4-4c54105f26b0",
    title: "Who We Are",
    description:
      "At our core, we're a customer-centric car rental company committed to simplifying travel and enabling exploration. We prioritize flexibility, reliability, and affordability, ensuring unmatched convenience and peace of mind for every traveler. With a passionate team, innovative solutions, and unwavering dedication to excellence, we aim to make every journey memorable and stress-free.",
  },
];

export const serviceList = [
  {
    id: 1,
    text: "Experience top-level unwavering quality and extravagance with our Melbourne Air terminal exchanges. Whether you're an independent voyager or with family, we offer a warm meet-and-welcome help, gear help, and continuous traffic and flight following for reliable appearances. Sit back, loosen up, and show up revived, day or night.",
    title: "Airport transfers",
    img: "/airport-transfer-update.jpg",
    variant1: fadeIn("right", "tween", 0.2, 1),
    variant2: fadeIn("left", "tween", 0.2, 1),
  },
  {
    id: 2,
    text: "Hoist the recollections of your impending exceptional occasion with Limolux. Whether it's a wedding, hen's party, or birthday festivity, add a bit of extravagance with our flawless vehicles. Need space for an enormous gathering? Arrive in ultimate style, day or night, with our 15-seater Mercedes Benz Runner at your service. It's not just transportation; it's an experience tailored to ensure you and your guests make a grand entrance.",
    title: "Weddings and parties",
    img: "/parties.jpg",
    variant1: fadeIn("left", "tween", 0.2, 1),
    variant2: fadeIn("right", "tween", 0.2, 1),
  },
  {
    id: 3,
    text: "Limolux escort excels in corporate, executive, and celebrity transportation, ensuring a serene and seamless journey on every ride. Whether you're meeting a valued client or attending a pivotal business appointment, our service ensures you arrive in a state of relaxation and rejuvenation, allowing you to concentrate on what truly matters. We take pride in delivering smooth, expert, and dependable experiences, without fail.",
    title: "Corporate transfers",
    img: "/blog-3.jpg",
    variant1: fadeIn("right", "tween", 0.2, 1),
    variant2: fadeIn("left", "tween", 0.2, 1),
  },
  {
    id: 4,
    text: "From a speedy parent-and-kid escape to a full-scale family experience, permit us to work on your family travel insight. Going with a baby? We'll deal with the pre-establishment of any necessary seats before we show up. Limolux offers a safe, reliable, and extravagant answer for all your family transportation prerequisites. While arranging your next family get-away, make sure to hold an air terminal exchange with Limolux to guarantee a tranquil and agreeable beginning to your excursion.",
    title: "Family transfers",
    img: "/family-transfer.jpg",
    variant1: fadeIn("left", "tween", 0.2, 1),
    variant2: fadeIn("right", "tween", 0.2, 1),
  },
  {
    id: 5,
    text: "Melbourne positions among Australia's top traveler areas of interest, and Limolux offers you a definitive freedom to find the state's famous attractions. Permit us to direct you along the pleasant Extraordinary Sea Street in sheer plushness, empowering you to appreciate the view and encounters at your own relaxed speed.",
    title: "Sightseeing",
    img: "/sightseeing.jpg",
    variant1: fadeIn("right", "tween", 0.2, 1),
    variant2: fadeIn("left", "tween", 0.2, 1),
  },
  {
    id: 6,
    text: "Investigate Victoria's head wineries and shop bottling works, crossing from the Mornington Promontory to the Yarra Valley. Travel flawlessly and securely between these uncommon locations in our lavish driver driven vehicles. Whether it's a heartfelt event with an accomplice or a gathering experience, raise your involvement in Limolux, and do it with unequaled style.",
    title: "Wine tours",
    img: "/wine-tour.jpg",
    variant1: fadeIn("left", "tween", 0.2, 1),
    variant2: fadeIn("right", "tween", 0.2, 1),
  },
  {
    id: 7,
    text: "For the people who request only the best, entertain yourself with our top-level cars, guaranteeing your appearance radiates lavishness and complexity. Our premium fleet proudly showcases regarded models like the BMW 7 Series, Mercedes Benz S-Class, and Audi A8, among others, famous for their unparalleled solace and execution in the present market. Matched with our master drivers, you're in for a sumptuous and raised insight.",
    title: "Limo service",
    img: "/limo-service.jpg",
    variant1: fadeIn("right", "tween", 0.2, 1),
    variant2: fadeIn("left", "tween", 0.2, 1),
  },
];

export const insights = [
  {
    // imgUrl: "/car_trends/1/mx5.jpg",
    imgUrls: [
      "https://firebasestorage.googleapis.com/v0/b/mern-corpsite.appspot.com/o/carlexotics%2Fcar_trends%2F1%2Fmx5.jpg?alt=media&token=f76bbccf-c0d3-4572-bcf8-8035be7e7f78",
      "https://firebasestorage.googleapis.com/v0/b/mern-corpsite.appspot.com/o/carlexotics%2Fcar_trends%2F1%2Fmx52.jpg?alt=media&token=0c3b55f2-95bd-4f10-9c17-0a607bc8875b",
      "https://firebasestorage.googleapis.com/v0/b/mern-corpsite.appspot.com/o/carlexotics%2Fcar_trends%2F1%2Fmx53.jpg?alt=media&token=d1000d12-67b3-4dce-a5ec-3db700d9206bg",
    ],
    title: "The first batch of Mazda MX-5 RF units has been handed over",
    subtitle:
      "The last day of the 2017 Manila International Auto Show was a pretty eventful one for Mazda Philippines, as the company finally turned over the inaugural batch of MX-5 RF units to their respective owners.There were 11 RF units and owners in total, composed of the most die-hard Mazda Miata fans in the country. The ceremony was headed by Mazda Philippines head Steven Tan, as well as a very special guest: MX-5 chief designer and model program manager Masahi Nakayama, who personally handed the proud new owners the keys to their vehicles.",
  },
  {
    // imgUrl: "/car_trends/2/brz1.jpg",
    imgUrls: [
      "https://firebasestorage.googleapis.com/v0/b/mern-corpsite.appspot.com/o/carlexotics%2Fcar_trends%2F2%2Fbrz1.jpg?alt=media&token=32d4cec3-a89a-414a-b154-9725a13a3570",
      "https://firebasestorage.googleapis.com/v0/b/mern-corpsite.appspot.com/o/carlexotics%2Fcar_trends%2F2%2Fbrz2.jpg?alt=media&token=3e2b2e55-eee2-4d38-a648-a8751b1999f4",
      "https://firebasestorage.googleapis.com/v0/b/mern-corpsite.appspot.com/o/carlexotics%2Fcar_trends%2F2%2Fbrz3.jpg?alt=media&token=dc83f260-117f-4b11-a0b4-733b8742c2d4",
      "https://firebasestorage.googleapis.com/v0/b/mern-corpsite.appspot.com/o/carlexotics%2Fcar_trends%2F2%2Fbrz4.jpg?alt=media&token=17ba108a-9a7b-49ab-9413-f3928f02b5f4",
    ],
    title: "You can now order the refreshed Subaru BRZ",
    subtitle:
      "Limolux presents a handpicked determination of the best extravagance vehicles for the individuals who request only awesome. Look over the lofty BMW 7 Series, the notorious Mercedes-Benz S-Class, the modern Audi A8, or practically identical tip top models. Our vehicles are not simply include pressed; they address the zenith of current extravagance cars. With Limolux, you'll make a stupendous entry, blowing some people's minds and delighting in outright style and solace. Lift your appearance and have an enduring effect with our impeccable fleet of luxury automobiles.",
  },
  {
    // imgUrl: "/car_trends/3/civic1.jpg",
    imgUrls: [
      "https://firebasestorage.googleapis.com/v0/b/mern-corpsite.appspot.com/o/carlexotics%2Fcar_trends%2F3%2Fcivic1.jpg?alt=media&token=a6840895-d35f-4a86-90cb-81be0d5d1694",
      "https://firebasestorage.googleapis.com/v0/b/mern-corpsite.appspot.com/o/carlexotics%2Fcar_trends%2F3%2Fcivic2.jpg?alt=media&token=3c90afe7-ec64-4b15-8fde-504e4f09f0f2",
      "https://firebasestorage.googleapis.com/v0/b/mern-corpsite.appspot.com/o/carlexotics%2Fcar_trends%2F3%2Fcivic3.jpg?alt=media&token=7a1ccd82-70c1-4c4b-9634-7644fdedd971",
      "https://firebasestorage.googleapis.com/v0/b/mern-corpsite.appspot.com/o/carlexotics%2Fcar_trends%2F3%2Fcivic4.jpg?alt=media&token=3bac63ce-6e9c-48c0-9d4f-93d9622e9a7d",
    ],
    title: "The first official Honda Civic Type R in the Philippines",
    subtitle:
      "You know how they say that highly anticipated consumer products like the Samsung Galaxy S8 and iPhone 7 have such well-orchestrated marketing campaigns, that it seems like even the ‘leaks’ were planned? Well, that’s kind of how we felt with the Philippine debut of the Honda Civic Type R.",
  },
  // {
  //   imgUrl: "/car-4.jpg",
  //   title: "Van",
  //   subtitle:
  //     "Find the Mercedes-Benz V-Class, a top decision for obliging 5-6 travelers easily with more than adequate baggage space. This open extravagance individual’s mover flaunts enormous back seats and a liberal boot, guaranteeing a smooth and spacious excursion. Prestigious overall for its flexibility, the Mercedes V-Class sets the norm for moving travelers in style and refinement. Raise your gathering travel insight with this remarkable vehicle from Limolux.",
  // },
  // {
  //   imgUrl: "/car-5.jpg",
  //   title: "Transporter",
  //   subtitle:
  //     "Limolux gladly presents the Mercedes-Benz Runner and Renault Masterbus, ideal for obliging bigger gatherings of up to eleven individuals. These lofty vehicles are the favored decision for leaders, as well as those looking for consistent transportation for air terminal exchanges, weddings, and corporate occasions. Raise your gathering travel insight with Limolux, where extravagance, solace, and style combine. For requests, if it's not too much trouble, connect with us today. Your excursion with us starts with a straightforward call.",
  // },
];

export const steps = [
  {
    name: "Enter Ride Details",
  },
  {
    name: "Choose a Vahicle",
  },
  {
    name: "Enter Contact Details",
  },
  {
    name: "Booking Summary",
  },
];

export const pickupTime = [
  "12:00 am",
  "12:15 am",
  "12:30 am",
  "12:45 am",
  "1:00 am",
  "1:15 am",
  "1:30 am",
  "1:45 am",
  "2:00 am",
  "2:15 am",
  "2:30 am",
  "2:45 am",
  "3:00 am",
  "3:15 am",
  "3:30 am",
  "3:45 am",
  "4:00 am",
  "4:15 am",
  "4:30 am",
  "4:45 am",
  "5:00 am",
  "5:15 am",
  "5:30 am",
  "5:45 am",
  "6:00 am",
  "6:15 am",
  "6:30 am",
  "6:45 am",
  "7:00 am",
  "7:15 am",
  "7:30 am",
  "7:45 am",
  "8:00 am",
  "8:15 am",
  "8:30 am",
  "8:45 am",
  "9:00 am",
  "9:15 am",
  "9:30 am",
  "9:45 am",
  "10:00 am",
  "10:15 am",
  "10:30 am",
  "10:45 am",
  "11:00 am",
  "11:15 am",
  "11:30 am",
  "11:45 am",
  "12:00 pm",
  "12:15 pm",
  "12:30 pm",
  "12:45 pm",
  "1:00 pm",
  "1:15 pm",
  "1:30 pm",
  "1:45 pm",
  "2:00 pm",
  "2:15 pm",
  "2:30 pm",
  "2:45 pm",
  "3:00 pm",
  "3:15 pm",
  "3:30 pm",
  "3:45 pm",
  "4:00 pm",
  "4:15 pm",
  "4:30 pm",
  "4:45 pm",
  "5:00 pm",
  "5:15 pm",
  "5:30 pm",
  "5:45 pm",
  "6:00 pm",
  "6:15 pm",
  "6:30 pm",
  "6:45 pm",
  "7:00 pm",
  "7:15 pm",
  "7:30 pm",
  "7:45 pm",
  "8:00 pm",
  "8:15 pm",
  "8:30 pm",
  "8:45 pm",
  "9:00 pm",
  "9:15 pm",
  "9:30 pm",
  "9:45 pm",
  "10:00 pm",
  "10:15 pm",
  "10:30 pm",
  "10:45 pm",
  "11:00 pm",
  "11:15 pm",
  "11:30 pm",
  "11:45 pm",
];
