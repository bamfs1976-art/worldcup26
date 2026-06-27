// World Cup 2026 — knockout bracket (matches 73–104) with appointed officials.
// `slot` is the bracket placeholder; `hc`/`ac` (FIFA codes) + `ref`/`officials`
// are filled in as ties and match-officials are confirmed. `date` is UTC
// ('YYYY-MM-DD HH:MM'); the UK kick-off is UTC+1 (BST). officials[] = full crew
// as ["Role","Name (CODE)"] from the FIFA match-officials card.
window.WC_KO = {
  matches: [
    // ---- Round of 32 ----
    {m:73, round:"Round of 32", date:"2026-06-28 19:00", venue:"Los Angeles", country:"USA", slot:"A runners-up v B runners-up", hc:"RSA", ac:"CAN", ref:"João Pinheiro (POR)", officials:[["Referee","João Pinheiro (POR)"],["Assistant referee 1","Bruno Jesus (POR)"],["Assistant referee 2","Luciano Maia (POR)"],["4th official","Omar Al-Ali (UAE)"],["Reserve assistant referee","Mohamed Alhammadi (UAE)"]]},
    {m:74, round:"Round of 32", date:"2026-06-29 20:30", venue:"Foxborough", country:"USA", slot:"E winners v Best 3rd (A/B/C/D/F)", hc:"GER", ac:"PAR", ref:"Jalal Jayed (MAR)", officials:[["Referee","Jalal Jayed (MAR)"],["Assistant referee 1","Zakaria Brinsi (MAR)"],["Assistant referee 2","Mostafa Akarkad (MAR)"],["4th official","Ning Ma (CHN)"],["Reserve assistant referee","Fei Zhou (CHN)"]]},
    {m:75, round:"Round of 32", date:"2026-06-30 01:00", venue:"Guadalupe", country:"Mexico", slot:"F winners v C runners-up", hc:"NED", ac:"MAR", ref:"Wilton Sampaio (BRA)", officials:[["Referee","Wilton Sampaio (BRA)"],["Assistant referee 1","Bruno Pires (BRA)"],["Assistant referee 2","Bruno Boschilia (BRA)"],["4th official","Cristian Garav (CHI)"],["Reserve assistant referee","Jose Retamal (CHI)"]]},
    {m:76, round:"Round of 32", date:"2026-06-29 17:00", venue:"Houston", country:"USA", slot:"C winners v F runners-up", hc:"BRA", ac:"JPN", ref:"Maurizio Mariani (ITA)", officials:[["Referee","Maurizio Mariani (ITA)"],["Assistant referee 1","Daniele Bindoni (ITA)"],["Assistant referee 2","Alberto Tegoni (ITA)"],["4th official","Sandro Schaerer (SUI)"],["Reserve assistant referee","Stephane De Almeida (SUI)"]]},
    {m:77, round:"Round of 32", date:"2026-06-30 21:00", venue:"New Jersey", country:"USA", slot:"I winners v Best 3rd (C/D/F/G/H)"},
    {m:78, round:"Round of 32", date:"2026-06-30 17:00", venue:"Arlington", country:"USA", slot:"E runners-up v I runners-up"},
    {m:79, round:"Round of 32", date:"2026-07-01 01:00", venue:"Mexico City", country:"Mexico", slot:"A winners v Best 3rd (C/E/F/H/I)"},
    {m:80, round:"Round of 32", date:"2026-07-01 16:00", venue:"Atlanta", country:"USA", slot:"L winners v Best 3rd (E/H/I/J/K)"},
    {m:81, round:"Round of 32", date:"2026-07-02 00:00", venue:"Santa Clara", country:"USA", slot:"D winners v Best 3rd (B/E/F/I/J)"},
    {m:82, round:"Round of 32", date:"2026-07-01 20:00", venue:"Seattle", country:"USA", slot:"G winners v Best 3rd (A/E/H/I/J)"},
    {m:83, round:"Round of 32", date:"2026-07-02 23:00", venue:"Toronto", country:"Canada", slot:"K runners-up v L runners-up"},
    {m:84, round:"Round of 32", date:"2026-07-02 19:00", venue:"Los Angeles", country:"USA", slot:"H winners v J runners-up"},
    {m:85, round:"Round of 32", date:"2026-07-03 03:00", venue:"Vancouver", country:"Canada", slot:"B winners v Best 3rd (E/F/G/I/J)"},
    {m:86, round:"Round of 32", date:"2026-07-03 22:00", venue:"Miami", country:"USA", slot:"J winners v H runners-up"},
    {m:87, round:"Round of 32", date:"2026-07-04 01:30", venue:"Kansas City", country:"USA", slot:"K winners v Best 3rd (D/E/I/J/L)"},
    {m:88, round:"Round of 32", date:"2026-07-03 18:00", venue:"Arlington", country:"USA", slot:"D runners-up v G runners-up"},
    // ---- Round of 16 ----
    {m:89, round:"Round of 16", date:"2026-07-04 21:00", venue:"Philadelphia", country:"USA", slot:"Winners M74 v Winners M77"},
    {m:90, round:"Round of 16", date:"2026-07-04 17:00", venue:"Houston", country:"USA", slot:"Winners M73 v Winners M75"},
    {m:91, round:"Round of 16", date:"2026-07-05 20:00", venue:"New Jersey", country:"USA", slot:"Winners M76 v Winners M78"},
    {m:92, round:"Round of 16", date:"2026-07-06 00:00", venue:"Mexico City", country:"Mexico", slot:"Winners M79 v Winners M80"},
    {m:93, round:"Round of 16", date:"2026-07-06 19:00", venue:"Arlington", country:"USA", slot:"Winners M83 v Winners M84"},
    {m:94, round:"Round of 16", date:"2026-07-07 00:00", venue:"Seattle", country:"USA", slot:"Winners M81 v Winners M82"},
    {m:95, round:"Round of 16", date:"2026-07-07 16:00", venue:"Atlanta", country:"USA", slot:"Winners M86 v Winners M88"},
    {m:96, round:"Round of 16", date:"2026-07-07 20:00", venue:"Vancouver", country:"Canada", slot:"Winners M85 v Winners M87"},
    // ---- Quarter-finals ----
    {m:97, round:"Quarter-final", date:"2026-07-09 20:00", venue:"Foxborough", country:"USA", slot:"Winners M89 v Winners M90"},
    {m:98, round:"Quarter-final", date:"2026-07-10 19:00", venue:"Los Angeles", country:"USA", slot:"Winners M93 v Winners M94"},
    {m:99, round:"Quarter-final", date:"2026-07-11 21:00", venue:"Miami", country:"USA", slot:"Winners M91 v Winners M92"},
    {m:100, round:"Quarter-final", date:"2026-07-12 01:00", venue:"Kansas City", country:"USA", slot:"Winners M95 v Winners M96"},
    // ---- Semi-finals ----
    {m:101, round:"Semi-final", date:"2026-07-14 19:00", venue:"Arlington", country:"USA", slot:"Winners M97 v Winners M98"},
    {m:102, round:"Semi-final", date:"2026-07-15 19:00", venue:"Atlanta", country:"USA", slot:"Winners M99 v Winners M100"},
    // ---- Third-place play-off & Final ----
    {m:103, round:"Third-place play-off", date:"2026-07-18 21:00", venue:"Miami", country:"USA", slot:"Losers M101 v Losers M102"},
    {m:104, round:"Final", date:"2026-07-19 19:00", venue:"New Jersey", country:"USA", slot:"Winners M101 v Winners M102"}
  ]
};
