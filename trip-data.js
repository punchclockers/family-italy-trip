window.TRIP_DATA = {
  trip: { name: "Natale in Italia", start: "2026-12-23", end: "2027-01-02" },
  hotels: [
    {city:"Zürich",stay:"Dec 24 → Dec 25",name:"Hotel Schweizerhof Zürich",address:"Bahnhofplatz 7, Zürich",phone:"+41 44 218 88 88",tel:"tel:+41442188888",note:"Directly across from Zürich HB, so the lobby is a few steps from the platform.",site:"https://www.hotelschweizerhof.com/en/",map:"https://www.google.com/maps/search/?api=1&query=Hotel%20Schweizerhof%20Z%C3%BCrich%2C%20Z%C3%BCrich",day:"dec-24"},
    {city:"Venice",stay:"Dec 25 → Dec 29",name:"Palazzo Venart Luxury Hotel",address:"Calle Tron 1961, Santa Croce, Venice",phone:"+39 041 523 3784",tel:"tel:+390415233784",note:"A restored palazzo on the Grand Canal with a private garden.",site:"https://www.ldchotelsitaly.com/en/palazzovenart-venice/",map:"https://www.google.com/maps/search/?api=1&query=Palazzo%20Venart%20Luxury%20Hotel%2C%20Venice",day:"dec-25"},
    {city:"Florence",stay:"Dec 29 → Jan 2",name:"The St. Regis Florence",address:"Piazza Ognissanti 1, Florence",phone:"+39 055 271 61",tel:"tel:+3905527161",note:"A palazzo on the Arno, a short walk from Ponte Vecchio.",site:"https://www.marriott.com/en-us/hotels/flrxr-the-st-regis-florence/overview/",map:"https://www.google.com/maps/search/?api=1&query=The%20St.%20Regis%20Florence%2C%20Florence",day:"dec-29"}
  ],
  travel: [
    {d:"Dec 23",k:"flight",name:"AA70",route:"Dallas/Fort Worth (DFW) → Frankfurt (FRA)",time:"2:45 PM → 7:15 AM Dec 24",meta:"Seats 9J, 9L • Confirmation QLCHFU",url:"https://aa.com/"},
    {d:"Dec 24",k:"train",name:"ICE 103",route:"Frankfurt Flughafen Fernbahnhof → Basel SBB",time:"9:52 AM → 12:47 PM",meta:"Arrival platform 5 • Seats 105, 106, 112, 113",alert:"Basel: platform 5 → 6 • 20 minutes",url:"https://db.com/"},
    {d:"Dec 24",k:"train",name:"IC 795",route:"Basel SBB → Zürich HB",time:"1:07 PM → 2:00 PM",meta:"Depart platform 6 • Arrive platform 12"},
    {d:"Dec 25",k:"train",name:"IR 2413",route:"Zürich HB → Arth-Goldau",time:"8:05 AM → 8:45 AM",meta:"Zürich platform 8, car 12 • Arth-Goldau platform 4 • Seats 261–264",alert:"Arth-Goldau: platform 4 → 5 • only 4 minutes",url:"https://sbb.ch/"},
    {d:"Dec 25",k:"train",name:"IC 663",route:"Arth-Goldau → Bellinzona",time:"8:49 AM → 9:42 AM",meta:"Depart platform 5, car 3 • Arrive platform 3 • Seats 23–26",alert:"Bellinzona: 32 minutes • stay on platform 3"},
    {d:"Dec 25",k:"train",name:"EC 115",route:"Bellinzona → Venezia Santa Lucia",time:"10:14 AM → 2:42 PM",meta:"Bellinzona platform 3, car 9 • Seats 34, 36, 43, 45"},
    {d:"Dec 29",k:"car",name:"Rental car",route:"Venice → Florence",time:"Pick up 9:00 AM • arrive around 1:00 PM",meta:"Drive south to Florence",alert:"Ask the hotel to register the rental-car plate for the Florence ZTL."},
    {d:"Jan 2",k:"car",name:"Rental car return",route:"Florence → Florence Airport (FLR)",time:"About 7:00 AM",meta:"Confirm drop-off location and fuel policy with the rental company."},
    {d:"Jan 2",k:"flight",name:"DL8563",route:"Florence (FLR) → Paris CDG",time:"9:55 AM → 11:45 AM",meta:"CDG Terminal F • Seats 9A, 9C • Confirmation G621Y5",alert:"CDG transfer: Terminal F → E • 1 hour 25 minutes",url:"https://delta.com/"},
    {d:"Jan 2",k:"flight",name:"DL8695",route:"Paris CDG → Dallas/Fort Worth (DFW)",time:"1:10 PM → 4:50 PM",meta:"CDG Terminal E → DFW Terminal D • Seats 18A, 18B",url:"https://delta.com/"}
  ]
};
