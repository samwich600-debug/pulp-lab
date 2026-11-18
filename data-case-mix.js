/* What each company's total plastic packaging is made of: shown when you hover the tan "total" part of the
   "Out of how much plastic?" bar on Real World. Keyed by CASE_TOTAL[...].who. Compiled 18 November 2026.
   Percentages are shares of that company's plastic packaging by weight, as published. EMF = Ellen MacArthur
   Foundation Global Commitment signatory data. Plain-English labels (e.g. "sweet wrappers") are our reading of
   EMF's format categories. Where nothing is published, we say so. */
const CASE_MIX={
 "Nestlé worldwide":{year:"2024",txt:"About 57% rigid: drink bottles (PET, 29%) and tubs and jars (PP and HDPE, about 20%). About 42% flexible: wrappers and pouches (PP film 18%, multi-layer 13%) plus transport film (6%).",src:"EMF Global Commitment 2025, Nestlé data",url:"https://gc-data.emf.org/2025/detail-25?cid=nestl"},
 "Sainsbury's UK":{year:"2019",txt:"Not broken down by weight. Sainsbury's says its biggest areas are milk bottles, fruit and veg packaging, and drink bottles.",src:"letsrecycle.com",url:"https://www.letsrecycle.com/news/sainsburys-halve-plastic-packaging/"},
 "PepsiCo worldwide":{year:"2022",txt:"Mostly drink bottles (PET, 78%). About 18% is snack bags and film; the rest is small tubs, jars and pouches.",src:"EMF Global Commitment 2023, PepsiCo data",url:"https://gc-data.emf.org/2023/detail-ppu?cid=pepsi-co"},
 "Coca-Cola worldwide":{year:"2022",txt:"Almost all drink bottles: PET bottles are 99.9% (caps and labels are counted in with them).",src:"EMF Global Commitment 2023, Coca-Cola data",url:"https://gc-data.emf.org/2023/ppu/"},
 "Mars worldwide":{year:"2022",txt:"About two-thirds flexible: sweet and snack wrappers and pet-food film. About a third is rigid: tubs (PP, 10%) and bottles (HDPE and PP, 12%).",src:"EMF Global Commitment 2023, Mars data",url:"https://gc-data.emf.org/2023/detail-ppu?cid=mars-incorporated"},
 "Tesco UK":{year:"2019",txt:"Own-brand (136,000 t) is mostly PET bottles, punnets and trays (48%), HDPE milk bottles (21%) and PP tubs (16%). Branded goods (122,000 t) aren't broken down.",src:"Tesco, 'Our packaging footprint' (2020)",url:"https://www.tescoplc.com/blog/our-packaging-footprint-towards-a-closed-loop/"},
 "Waitrose own-label":{year:"2019",txt:"Own-label packaging only; not broken down by type.",src:"UK Parliament oral evidence",url:"https://committees.parliament.uk/oralevidence/9516/html"},
 "Lidl GB":{year:"2019",txt:"Product packaging on branded and own-label goods; not broken down by type. Another 3,083 t of transport plastic is counted separately.",src:"The Grocer",url:"https://www.thegrocer.co.uk/news/lidl-makes-new-pledge-to-cut-own-label-plastic-by-40-by-2025/648445.article"},
 "Aldi UK":{year:"2023",txt:"About 88% is Aldi's own-label product packaging (110,306 t); the type breakdown is only published as a chart.",src:"Aldi UK",url:"https://www.aldi.co.uk/corporate/corporate-responsibility/greener/product-packaging-and-waste"},
 "Morrisons UK":{year:"2017",txt:"Not broken down by type.",src:"EIA, 'Checking out on plastics' (2018)",url:"https://eia-international.org/wp-content/uploads/EIA-report-Checking-out-on-plastics-single-pages-for-print.pdf"},
 "P&G worldwide":{year:"2022",txt:"Only split by plastic type: PE 48% (bottles, tubs and film), PET 23% and PP 22%. No split by product.",src:"P&G Citizenship Report 2022",url:"https://us.pg.com/citizenship-report-2022/"},
 "Unilever worldwide":{year:"2022",txt:"About two-thirds rigid: shampoo and detergent bottles (HDPE 28%, PET 9%) and tubs and jars (PP, 24%). About 31% flexible, mostly sachets (19%).",src:"EMF Global Commitment 2023, Unilever data",url:"https://gc-data.emf.org/2023/detail-ppu?cid=unilever"},
 "H&M Group worldwide":{year:"2020",txt:"Mostly plastic hangers (59%), then the polybags garments are shipped in (28%).",src:"H&M Group Sustainability Performance Report 2020, p.46",url:"https://hmgroup.com/wp-content/uploads/2021/03/HM-Group-Sustainability-Performance-Report-2020.pdf"}
};
