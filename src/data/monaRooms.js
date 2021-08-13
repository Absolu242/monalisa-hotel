import img1 from "./images/rooms/room1.jpg"
import img2 from "./images/rooms/room2.jpg"
import img3 from "./images/rooms/room3.jpg"
import img4 from "./images/rooms/room4.jpg"
import img5 from "./images/rooms/room7.jpg"
import img6 from "./images/rooms/room8.jpg"

export const rooms = [
  {
    id: "01",
    main_img: img1,
    images: "",
    name: " One Bed",
    type: "classic room",
    desc_excerpt:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters...",
    desc_full:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    status: true,
    status_count: "5",
    price_start: "39.00",
    price_breakfast: "49",
    deposit: false,
    deposit_percent: "",
    beds: "01",
    passenger: "02",
    reviews: [
      {
        id: "1",
        date: "June, 28th, 2016",
        name: "Daniel Vandaft",
        image: "",
        number: "5",
        comment: "this is comment of client one",
      },
      {
        id: "2",
        date: "June, 21th, 2016",
        name: "Jeni Laura",
        image: "",
        number: "4",
        comment: "this is comment of client two",
      },
    ],

    amenities: {
      room: {
        size: "72m2",
        status: true,
      },
      double_beds: true,
      view_beach: true,
      fireplace: false,
      wifi: true,
      microwave: true,
      terrace: false,
      sun: false,
      room_service: true,
      air_conditioning: true,
      bedding: true,
      flooring: true,
      garage: true,
      internet: false,
      outdoor_kitchen: true,
      sauna: false,
      tenis: false,
      landscaping: true,
      balcony: true,
      cable_tv: true,
      family_room: false,
      heating: false,
      breakfast: true,
      parquet: true,
      smoking: true,
      dryer: false,
    },
  },

  {
    id: "02",
    main_img: img2,
    images: "",
    name: " Grand",
    type: "deluxe room",
    desc_excerpt:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters...",
    desc_full:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    status: true,
    status_count: "3",
    price_start: "59.00",
    price_breakfast: "69.00",
    deposit: true,
    deposit_percent: "30%",
    beds: "02",
    passenger: "04-06",
    reviews: [
      {
        id: "1",
        date: "June, 8th, 2020",
        name: "Absolu Vandaft",
        image: "",
        number: "5",
        comment: "this is comment of client absolu",
      },
      {
        id: "2",
        date: "June, 11th, 2019",
        name: "Hello Laura",
        image: "",
        number: "4",
        comment: "this is comment of client Hello",
      },
    ],

    amenities: {
      room: {
        size: "182m2",
        status: true,
      },
      double_beds: true,
      view_beach: true,
      fireplace: true,
      wifi: true,
      microwave: true,
      terrace: true,
      sun: true,
      room_service: true,
      air_conditioning: true,
      bedding: true,
      flooring: true,
      garage: true,
      internet: true,
      outdoor_kitchen: true,
      sauna: true,
      tenis: true,
      landscaping: true,
      balcony: true,
      cable_tv: true,
      family_room: true,
      heating: true,
      breakfast: true,
      parquet: true,
      smoking: true,
      dryer: true,
    },
  },

  {
    id: "03",
    main_img: img3,
    images: "",
    name: "",
    type: "Family room",
    desc_excerpt:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters...",
    desc_full:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    status: true,
    status_count: "5",
    price_start: "52.00",
    price_breakfast: "69.00",
    deposit: false,
    deposit_percent: "",
    beds: "01",
    passenger: "02",
    reviews: [
      {
        id: "1",
        date: "June, 28th, 2016",
        name: "Daniel Vandaft",
        image: "",
        number: "5",
        comment: "this is comment of client one",
      },
      {
        id: "2",
        date: "June, 21th, 2016",
        name: "Jeni Laura",
        image: "",
        number: "4",
        comment: "this is comment of client two",
      },
    ],

    amenities: {
      room: {
        size: "72m2",
        status: true,
      },
      double_beds: true,
      view_beach: true,
      fireplace: false,
      wifi: true,
      microwave: true,
      terrace: false,
      sun: false,
      room_service: true,
      air_conditioning: true,
      bedding: true,
      flooring: true,
      garage: true,
      internet: false,
      outdoor_kitchen: true,
      sauna: false,
      tenis: false,
      landscaping: true,
      balcony: true,
      cable_tv: true,
      family_room: true,
      heating: false,
      breakfast: true,
      parquet: true,
      smoking: true,
      dryer: false,
    },
  },

  {
    id: "04",
    main_img: img4,
    images: "",
    name: "Two Beds",
    type: "classic room",
    desc_excerpt:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters...",
    desc_full:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    status: true,
    status_count: "2",
    price_start: "45.00",
    price_breakfast: "55.00",
    deposit: false,
    deposit_percent: "",
    beds: "02",
    passenger: "02-04",
    reviews: [
      {
        id: "1",
        date: "June, 28th, 2016",
        name: "Daniel Vandaft",
        image: "",
        number: "5",
        comment: "this is comment of client one",
      },
      {
        id: "2",
        date: "June, 21th, 2016",
        name: "Jeni Laura",
        image: "",
        number: "4",
        comment: "this is comment of client two",
      },
    ],

    amenities: {
      room: {
        size: "92m2",
        status: true,
      },
      double_beds: true,
      view_beach: false,
      fireplace: false,
      wifi: true,
      microwave: true,
      terrace: false,
      sun: false,
      room_service: true,
      air_conditioning: true,
      bedding: true,
      flooring: true,
      garage: true,
      internet: false,
      outdoor_kitchen: true,
      sauna: false,
      tenis: true,
      landscaping: true,
      balcony: true,
      cable_tv: true,
      family_room: false,
      heating: false,
      breakfast: true,
      parquet: true,
      smoking: false,
      dryer: false,
    },
  },

  {
    id: "05",
    main_img: img5,
    images: "",
    name: " One Bed",
    type: "classic room",
    desc_excerpt:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters...",
    desc_full:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    status: true,
    status_count: "5",
    price_start: "39.00",
    price_breakfast: "49",
    deposit: false,
    deposit_percent: "",
    beds: "01",
    passenger: "02",
    reviews: [
      {
        id: "1",
        date: "June, 28th, 2016",
        name: "Daniel Vandaft",
        image: "",
        number: "5",
        comment: "this is comment of client one",
      },
      {
        id: "2",
        date: "June, 21th, 2016",
        name: "Jeni Laura",
        image: "",
        number: "4",
        comment: "this is comment of client two",
      },
    ],

    amenities: {
      room: {
        size: "72m2",
        status: true,
      },
      double_beds: true,
      view_beach: true,
      fireplace: false,
      wifi: true,
      microwave: true,
      terrace: false,
      sun: false,
      room_service: true,
      air_conditioning: true,
      bedding: true,
      flooring: true,
      garage: true,
      internet: false,
      outdoor_kitchen: true,
      sauna: false,
      tenis: false,
      landscaping: true,
      balcony: true,
      cable_tv: true,
      family_room: false,
      heating: false,
      breakfast: true,
      parquet: true,
      smoking: true,
      dryer: false,
    },
  },

  {
    id: "06",
    main_img: img6,
    images: "",
    name: " Grand",
    type: "deluxe room",
    desc_excerpt:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters...",
    desc_full:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    status: true,
    status_count: "3",
    price_start: "59.00",
    price_breakfast: "69.00",
    deposit: true,
    deposit_percent: "30%",
    beds: "02",
    passenger: "04-06",
    reviews: [
      {
        id: "1",
        date: "June, 8th, 2020",
        name: "Absolu Vandaft",
        image: "",
        number: "5",
        comment: "this is comment of client absolu",
      },
      {
        id: "2",
        date: "June, 11th, 2019",
        name: "Hello Laura",
        image: "",
        number: "4",
        comment: "this is comment of client Hello",
      },
    ],

    amenities: {
      room: {
        size: "182m2",
        status: true,
      },
      double_beds: true,
      view_beach: true,
      fireplace: true,
      wifi: true,
      microwave: true,
      terrace: true,
      sun: true,
      room_service: true,
      air_conditioning: true,
      bedding: true,
      flooring: true,
      garage: true,
      internet: true,
      outdoor_kitchen: true,
      sauna: true,
      tenis: true,
      landscaping: true,
      balcony: true,
      cable_tv: true,
      family_room: true,
      heating: true,
      breakfast: true,
      parquet: true,
      smoking: true,
      dryer: true,
    },
  },
]
