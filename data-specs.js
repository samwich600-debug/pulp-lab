/* Technical + compliance data for the Material Lab. Ratings are typical for the material
   class, compiled Nov 2026 from supplier datasheets and industry guides; specific grades and
   coatings change them. 0 none, 1 low, 2 medium, 3 high. */
const DATA_ASOF="November 2026";
const SPEC={
/* id: [moisture, oxygen, grease, heat, foodContact, lines, scale, curbside, homeCompost, industrialCompost, eprCat, plasticForUKTax] */
"molded-pulp":[1,1,2,2,"Yes (ask for PFAS-free)","New tooling needed","High",1,1,1,"paper",0],
"corrugated":[1,0,1,1,"Indirect only","Runs on existing lines","Very high",1,0,1,"paper",0],
"paperboard":[1,1,2,1,"Yes, food-grade board","Runs on existing lines","Very high",1,0,1,"paper",0],
"kraft-paper":[1,1,1,1,"Yes (bags, wraps)","Mostly existing lines","High",1,1,1,"paper",0],
"glassine":[2,1,3,1,"Yes","Partly existing lines","Medium",1,1,1,"paper",0],
"glass":[3,3,3,3,"Yes","Heavier, line changes","Very high",1,0,0,"glass",0],
"aluminum":[3,3,3,3,"Yes, with liner","Existing can/tin lines","Very high",1,0,0,"aluminium",0],
"mycelium":[1,0,1,1,"No (protective only)","Hand-packed inserts","Low to medium",0,1,1,"other",0],
"pla":[2,1,2,0,"Yes","Similar to PET lines","High",0,0,1,"plastic",1],
"cellulose-film":[2,3,3,2,"Yes","Existing flow-wrap lines","Medium",0,1,1,"other",2],
"cork":[3,2,2,2,"Yes","Component, partly manual","Medium",0,1,1,"wood",0],
"bamboo":[2,1,2,2,"Yes, if solid","Component only","Medium",0,1,1,"wood",0],
"wood":[1,0,1,2,"Yes","Component only","High",0,1,1,"wood",0],
"seaweed":[1,2,2,0,"Yes, some edible","Specialist lines","Low",0,1,1,"other",2],
"pha":[3,2,3,2,"Some grades","Runs on plastic machinery","Low",0,1,1,"plastic",1],
"paper-bottle":[3,2,3,1,"Yes, with liner","Partly existing lines","Low",2,0,0,"fibre composite",0],
"plant-protein":[0,3,3,0,"Yes","Specialist lines","Low",0,1,1,"other",2],
"straw-pulp":[1,1,2,2,"Yes","New tooling needed","Low to medium",1,1,1,"paper",0],
"chitosan":[1,3,2,0,"Yes (shellfish allergen)","Specialist","Very low",0,1,1,"other",2]
};
/* UK EPR 2025/26 base fees, GBP per tonne (Defra) and UK Plastic Packaging Tax */
const UK_EPR={paper:196,glass:192,aluminium:266,plastic:423,wood:280,"fibre composite":461,other:259};
const UK_PPT=228.82; /* GBP per tonne from 1 April 2026, plastic with <30% recycled content */
const OR_EPR=[345,457]; /* Oregon USD per tonne, approximate base-rate range across materials */
const FEE_SRC=[
 ["UK Plastic Packaging Tax rates (Rödl & Partner, Mar 2026)","https://www.roedl.com/en/insights/plastic-packaging-tax-new-rates/"],
 ["UK EPR 2025 base fees (GOV.UK)","https://www.gov.uk/government/publications/extended-producer-responsibility-for-packaging-2025-base-fees/extended-producer-responsibility-for-packaging-2025-base-fees"],
 ["Compostable plastics are taxed as plastic (Packaging Gateway)","https://www.packaging-gateway.com/newsletters/compostable-plastics-not-exempt-from-uk-plastic-packaging-tax-hmrc-confirms"],
 ["US packaging EPR states (Amcor)","https://www.amcor.com/insights/blogs/us-states-packaging-epr-laws"],
 ["US EPR fees and timing (EcoPackables, 2026)","https://www.ecopackables.com/pages/us-packaging-epr-laws"],
 ["EU PPWR applies from 12 Aug 2026 (EUROPEN)","https://www.europen-packaging.eu/news/ppwr-starts-applying-from-12-august-2026-a-quick-guide-to-what-businesses-need-to-know/"]
];
