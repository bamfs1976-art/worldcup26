// World Cup 2026 — knockout-stage ties + full appointed officiating crews.
// Grows as FIFA confirms each round's bracket and match officials.
// Fields: m (match no), round, date (UTC 'YYYY-MM-DD HH:MM'), venue,
// hc/ac (FIFA 3-letter codes), ref ("Name (CODE)" — the head referee, also
// used for the watchlist card-risk pill), and officials[] = the full crew
// as ["Role","Name (CODE)"] pairs taken from the FIFA match-officials card.
window.WC_KO = {
  r32: [
    {m:73, round:"Round of 32", date:"2026-06-28 19:00", venue:"Los Angeles", hc:"RSA", ac:"CAN",
     ref:"João Pinheiro (POR)",
     officials:[
       ["Referee","João Pinheiro (POR)"],
       ["Assistant referee 1","Bruno Jesus (POR)"],
       ["Assistant referee 2","Luciano Maia (POR)"],
       ["4th official","Omar Al-Ali (UAE)"],
       ["Reserve assistant referee","Mohamed Alhammadi (UAE)"]
     ]}
  ]
};
