/* How much each item adds to the world's plastic problem. Compiled 18 November 2026.
   WASTE: yearly units as published (no regional scaling). Share = units x grams per unit (STILL.g) / world plastic waste.
   Only "world" figures get a share; US/UK/England figures are shown as a fact with no share.
   LITTER: Ocean Conservancy International Coastal Cleanup, 2024 data. Volunteer counts, not a sample of all litter;
   items are counted by category, so one category can cover several of our items. */
const SHARE_ASOF="November 2026";
const WORLD_WASTE={t:353e6,year:2019,src:"OECD Global Plastics Outlook (2022)",url:"https://www.oecd.org/en/publications/global-plastics-outlook_de747aef-en.html"};
const WASTE={
 bottle:{n:480e9,region:"world",year:2016,note:"Water and soda bottles together",src:"Euromonitor, reported by The Guardian (2017)",url:"https://www.ecowatch.com/plastic-bottle-crisis-2450299465.html"},
 soda:{n:480e9,region:"world",year:2016,g:12,note:"Water and soda bottles together; the only worldwide count includes both",src:"Euromonitor, reported by The Guardian (2017)",url:"https://www.ecowatch.com/plastic-bottle-crisis-2450299465.html"},
 bag:{n:5e12,region:"world",year:2018,note:"Top of UNEP's range of 1 to 5 trillion bags a year",src:"UNEP, Single-Use Plastics: A Roadmap for Sustainability (2018)",url:"https://www.aljazeera.com/news/2018/6/5/world-environment-day-our-world-is-swamped-by-plastic"},
 sachet:{n:855e9,region:"world",year:2018,note:"All kinds of sachets, not only condiments",src:"Future Market Insights (2018)",url:"https://insideretail.asia/2022/06/23/plastic-sachets-how-a-waste-crisis-spiraled-as-big-brands-cashed-in/"},
 toothpaste:{n:20e9,region:"world",year:2019,note:"Colgate's own estimate",src:"Colgate-Palmolive, via Packaging Europe",url:"https://packagingeurope.com/colgate-designs-new-recyclable-tube/"},
 pod:{n:20.5e9,region:"world",year:2019,note:"From a capsule maker's claim of 39,000 a minute; not independently checked",src:"Halo, via Eco-Business",url:"https://www.eco-business.com/news/rise-of-coffee-capsules-stirs-concerns-about-pod-waste/"},
 mailer:{n:76.9e9,region:"world",year:2025,note:"Market-research estimate",src:"Global Market Insights",url:"https://www.gminsights.com/industry-analysis/polybag-mailers-market"},
 hangers:{n:10e9,region:"world",year:2019,note:"Upper figure from a press investigation",src:"Mail on Sunday (2019), via Business of Fashion",url:"https://www.businessoffashion.com/articles/sustainability/plastic-hangers-are-fashions-plastic-straws"},
 straw:{n:4.7e9,region:"England",year:2018,src:"Defra (2018)",url:"https://consult.defra.gov.uk/waste-and-recycling/plastic-straws-stirrers-and-buds"},
 swab:{n:1.8e9,region:"England",year:2018,src:"Defra (2018)",url:"https://consult.defra.gov.uk/waste-and-recycling/plastic-straws-stirrers-and-buds/supporting_documents/Cotton%20Buds%20Impact%20Assessment.pdf"},
 cutlery:{n:2.7e9,region:"England",year:2023,src:"UK Government (2023)",url:"https://www.gov.uk/government/news/new-bans-and-restrictions-on-polluting-single-use-plastics-come-into-force"},
 lid:{n:2.5e9,region:"the UK",year:2018,note:"Counted as one lid per coffee cup",src:"House of Commons Environmental Audit Committee (2018)",url:"https://www.cardiff.ac.uk/news/view/687689-curbing-coffee-cup-usage"},
 chips:{n:8.3e9,region:"the UK",year:2017,src:"Statista, via Bakery and Snacks (2024)",url:"https://www.bakeryandsnacks.com/Article/2024/04/05/The-UK-potato-crisp-brands-motivating-to-reduce-plastic-waste/"},
 toothbrush:{n:1e9,region:"the US",year:2019,src:"National Geographic (2019)",url:"https://www.nationalgeographic.com/environment/article/story-of-plastic-toothbrushes"},
 razor:{n:2e9,region:"the US",year:1990,src:"US EPA (1990)",url:"https://www.ksl.com/article/46612453/how-to-keep-your-razors-from-contributing-to-landfill-waste"},
 milk:{t:680389,region:"the US",year:2018,note:"All natural HDPE bottles, mostly milk and water jugs",src:"US EPA Facts and Figures 2018",url:"https://www.epa.gov/sites/default/files/2021-01/documents/2018_tables_and_figures_dec_2020_fnl_508.pdf"},
 binliner:{t:1115837,region:"the US",year:2018,note:"All trash bags",src:"US EPA Facts and Figures 2018",url:"https://www.epa.gov/sites/default/files/2021-01/documents/2018_tables_and_figures_dec_2020_fnl_508.pdf"}
};
const ICC={total:17820206,year:2024,src:"Ocean Conservancy, International Coastal Cleanup report (2024 data)",url:"https://oceanconservancy.org/wp-content/uploads/2025/09/ICCAnnualReport_Digital.pdf"};
const LITTER_CATS={
 wrappers:{n:1442860,name:"food wrappers"},
 bottles:{n:1284225,name:"plastic bottles"},
 containers:{n:523998,name:"plastic food containers"},
 otherbags:{n:480371,name:"other plastic bags"},
 grocery:{n:468394,name:"plastic grocery bags"},
 cups:{n:436397,name:"plastic cups and plates"},
 foam:{n:404636,name:"foam food containers"},
 strawsUS:{n:67961,total:2798520,name:"straws and stirrers",region:"the US"}
};
const LITTER={chips:"wrappers",candy:"wrappers",bottle:"bottles",soda:"bottles",clamshell:"containers",storage:"containers",mealtray:"containers",yogurt:"containers",icecream:"containers",produce:"otherbags",breadbag:"otherbags",binliner:"otherbags",frozen:"otherbags",mailer:"otherbags",bag:"grocery",coldcup:"cups",meattray:"foam",straw:"strawsUS"};
/* The global top 10 from the same 2024 cleanup, in order; everything else is grouped. Keys match LITTER_CATS where they overlap. */
const ICC_TOP10=[["wrappers","Food wrappers",1442860],["bottles","Plastic bottles",1284225],["butts","Cigarette butts",1227124],["caps","Bottle caps",979400],["containers","Plastic food containers",523998],["otherbags","Other plastic bags",480371],["grocery","Plastic grocery bags",468394],["papercups","Paper cups and plates",444485],["cups","Plastic cups and plates",436397],["foam","Foam food containers",404636]];
