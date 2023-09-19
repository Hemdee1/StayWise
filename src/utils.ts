export const explore = [
  {
    city: "Lekki",
    img: "https://img.freepik.com/free-photo/bangkok-thailand-august-12-2016-beautiful-luxury-living-room_1203-2867.jpg?size=626&ext=jpg&ga=GA1.1.1845495995.1695116234&semt=ais",
  },
  {
    city: "Asokoro",
    img: "https://img.freepik.com/premium-photo/red-orange-living-room_244125-969.jpg?size=626&ext=jpg&ga=GA1.1.1845495995.1695116234&semt=ais",
  },
  {
    city: "Maitama",
    img: "https://img.freepik.com/premium-photo/frame-3d-interior-illustration-wall-design-modern-empty-space-creative-3d_262243-2123.jpg?size=626&ext=jpg&ga=GA1.1.1845495995.1695116234&semt=ais",
  },
  {
    city: "Wuse",
    img: "https://img.freepik.com/free-photo/interior-design-with-photoframes-plants_23-2149385437.jpg?size=626&ext=jpg&ga=GA1.1.1845495995.1695116234&semt=ais",
  },
  {
    city: "Jabi",
    img: "https://img.freepik.com/free-photo/3d-render-blank-picture-leaning-against-wall-room-interior_1048-6282.jpg?size=626&ext=jpg&ga=GA1.2.1845495995.1695116234&semt=ais",
  },
];

export const offerData = [
  {
    image: "/images/offers1.png",
    title: "Work, relax, or do a bit of both",
    desc: "Browse properties offering extended stays, many with reduced monthly rates",
  },
  {
    image: "/images/offers2.png",
    title: "Work, relax, or do a bit of both",
    desc: "Browse properties offering extended stays, many with reduced monthly rates",
  },
  {
    image: "/images/offers3.png",
    title: "Work, relax, or do a bit of both",
    desc: "Browse properties offering extended stays, many with reduced monthly rates",
  },
];

export const formatPrice = (price: number) => {
  const format = new Intl.NumberFormat("en-Us");
  const adjustedPrice = price + "000";

  return "₦" + format.format(+adjustedPrice);
};
