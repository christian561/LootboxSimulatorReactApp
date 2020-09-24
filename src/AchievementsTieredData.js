const AchievementsTieredData = [
{
	
name:"Lootbox Addict",
showRequirement:'lootboxesOpened',
statText:'Lootboxes Opened',
groupId:"a",
tiers: [{
		
		id:1,
		Name: "Welcome to the game!",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/SVG/LootboxAddict-1.svg',
		Description: "Open your first lootbox",
		requiredAmount:1,
	    BonusSpeed:0,
	    BonusValue:0.01,
		BonusLuck:0
		},
		{
		id:2,
		Name: "Getting the hang of it",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/SVG/LootboxAddict-2.svg',
		Description: "Open 25 lootboxes",
		requiredAmount:25,
	    BonusSpeed:0,
	    BonusValue:0.025,
		BonusLuck:0
		},
		{
		id:3,
		Name: "No turning back now",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/SVG/LootboxAddict-3.svg',
		Description: "Open 100 lootboxes",
		requiredAmount:100,
	    BonusSpeed:0,
	    BonusValue:0.10,
		BonusLuck:0
		},
		{
		id:4,
		Name: "How far are you willing to go?",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/SVG/LootboxAddict-4.svg',
		Description: "Open 250 lootboxes",
		requiredAmount:250,
	    BonusSpeed:0,
	    BonusValue:0.15,
		BonusLuck:0
		},
		{
		id:5,
		Name: "Loot Lover",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/SVG/LootboxAddict-5.svg',
		Description: "Open 500 lootboxes",
		requiredAmount:500,
	    BonusSpeed:0,
	    BonusValue:0.25,
		BonusLuck:0
		},
		{

		id:6,
		Name: "Absolutely Disgusting",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/SVG/LootboxAddict-6.svg',
		Description: "Open 1000 lootboxes",
		requiredAmount:1000,
	    BonusSpeed:0,
	    BonusValue:0.5,
		BonusLuck:0
		},
		{
		id:7,
		Name: "Okay! You can stop now... or not.",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/SVG/LootboxAddict-7.svg',
		Description: "Open 5000 lootboxes",
		requiredAmount:5000,
	    BonusSpeed:0,
	    BonusValue:1.0,
		BonusLuck:0
		}
		]
  },{
	
name:"Trash Collector",
showRequirement:'trashItemsWon',
statText:'Trash Won',
groupId:"b",
tiers: [{
		
		id:1,
		Name: "What is this trash you speak of?",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/SVG/trashCollector-1.svg',
		Description: "Win your first piece of trash",
		requiredAmount:1,
	    BonusSpeed:0,
	    BonusValue:0,
		BonusLuck:0.01
		},
		{
		id:2,
		Name: "Diving into it",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/SVG/trashCollector-2.svg',
		Description: "Win 25 pieces of trash",
		requiredAmount:25,
	    BonusSpeed:0,
	    BonusValue:0.0,
		BonusLuck:0.025
		},
		{
		id:3,
		Name: "Can't get enough",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/SVG/trashCollector-3.svg',
		Description: "Win 75 pieces of trash",
		requiredAmount:75,
	    BonusSpeed:0,
	    BonusValue:0.,
		BonusLuck:0.04
		},
		{
		id:4,
		Name: "Even garbage trucks are getting jealous",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/SVG/trashCollector-4.svg',
		Description: "Win 150 pieces of trash",
		requiredAmount:150,
	    BonusSpeed:0,
	    BonusValue:0.,
		BonusLuck:0.06
		},
		{
		id:5,
		Name: "Why do you love garbage?",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/SVG/trashCollector-5.svg',
		Description: "Win 300 pieces of trash",
		requiredAmount:300,
	    BonusSpeed:0,
	    BonusValue:0,
		BonusLuck:0.08
		},
		{

		id:6,
		Name: "Maybe you are the trash",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/SVG/trashCollector-6.svg',
		Description: "Win 600 pieces of trash",
		requiredAmount:600,
	    BonusSpeed:0,
	    BonusValue:0,
		BonusLuck:0.12
		},
		{
		id:7,
		Name: "The Trash Man",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/SVG/trashCollector-7.svg',
		Description: "Win 1200 pieces of trash",
		requiredAmount:1200,
	    BonusSpeed:0,
	    BonusValue:0,
		BonusLuck:0.2
		}
		]
  },{
	
name:"Common Hobbyist",
showRequirement:'commonItemsWon',
statText:'Common Items Won',
groupId:"c",
tiers: [{
		
		id:1,
		Name: "Not worth very much..",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/LootboxAddict-1.png',
		Description: "Win 1 common item",
		requiredAmount:1,
	    BonusSpeed:0,
	    BonusValue:0.01,
		BonusLuck:0
		},
		{
		id:2,
		Name: "Too bad these exist",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/LootboxAddict-2.png',
		Description: "Win 25 common items",
		requiredAmount:25,
	    BonusSpeed:0,
	    BonusValue:0.025,
		BonusLuck:0
		},
		{
		id:3,
		Name: "Oh well, it's something..",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/LootboxAddict-3.png',
		Description: "Win 75 common items",
		requiredAmount:75,
	    BonusSpeed:0,
	    BonusValue:0.04,
		BonusLuck:0
		},
		{
		id:4,
		Name: "I don't want these",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/LootboxAddict-4.png',
		Description: "Win 150 common items",
		requiredAmount:150,
	    BonusSpeed:0,
	    BonusValue:0.06,
		BonusLuck:0
		},
		{
		id:5,
		Name: "Make it stop",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/LootboxAddict-5.png',
		Description: "Win 350 common items",
		requiredAmount:300,
	    BonusSpeed:0,
	    BonusValue:0.08,
		BonusLuck:0
		},
		{

		id:6,
		Name: "Please, no more..",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/LootboxAddict-6.png',
		Description: "Win 600 common items",
		requiredAmount:600,
	    BonusSpeed:0,
	    BonusValue:0.12,
		BonusLuck:0
		},
		{
		id:7,
		Name: "I <3 Common Items #StockholmSyndrome",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/LootboxAddict-7.png',
		Description: "Win 1200 common items",
		requiredAmount:1200,
	    BonusSpeed:0,
	    BonusValue:0.2,
		BonusLuck:0
		}
		]
  },{
	
name:"Rare Connoisseur",
showRequirement:'rareItemsWon',
statText:'Rare Items Won',
groupId:"d",
tiers: [{
		
		id:1,
		Name: "It's good, it is!",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/LootboxAddict-1.png',
		Description: "Win 1 rare item",
		requiredAmount:1,
	    BonusSpeed:0,
	    BonusValue:0.012,
		BonusLuck:0
		},
		{
		id:2,
		Name: "Pretty okay, not gonna lie",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/LootboxAddict-2.png',
		Description: "Win 25 rare items",
		requiredAmount:25,
	    BonusSpeed:0,
	    BonusValue:0.03,
		BonusLuck:0
		},
		{
		id:3,
		Name: "Exceptional",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/LootboxAddict-3.png',
		Description: "Win 75 rare items",
		requiredAmount:75,
	    BonusSpeed:0,
	    BonusValue:0.045,
		BonusLuck:0
		},
		{
		id:4,
		Name: "Up to snuff",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/LootboxAddict-4.png',
		Description: "Win 150 rare items",
		requiredAmount:150,
	    BonusSpeed:0,
	    BonusValue:0.075,
		BonusLuck:0
		},
		{
		id:5,
		Name: "Hunky-dory",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/LootboxAddict-5.png',
		Description: "Win 350 rare items",
		requiredAmount:300,
	    BonusSpeed:0,
	    BonusValue:0.1,
		BonusLuck:0
		},
		{

		id:6,
		Name: "These are good-ish, I guess",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/LootboxAddict-6.png',
		Description: "Win 600 rare items",
		requiredAmount:600,
	    BonusSpeed:0,
	    BonusValue:0.141,
		BonusLuck:0
		},
		{
		id:7,
		Name: "PEACHY KEEN",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/LootboxAddict-7.png',
		Description: "Win 1200 rare items",
		requiredAmount:1200,
	    BonusSpeed:0,
	    BonusValue:0.25,
		BonusLuck:0
		}
		]
  },{
	
name:"Epic Hoarder",
showRequirement:'epicItemsWon',
statText:'Epic Items Won',
groupId:"e",
tiers: [{
		
		id:1,
		Name: "Just incredible",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/LootboxAddict-1.png',
		Description: "Win 1 epic item",
		requiredAmount:1,
	    BonusSpeed:0,
	    BonusValue:0.014,
		BonusLuck:0
		},
		{
		id:2,
		Name: "These are wonderful",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/LootboxAddict-2.png',
		Description: "Win 25 epic items",
		requiredAmount:25,
	    BonusSpeed:0,
	    BonusValue:0.035,
		BonusLuck:0
		},
		{
		id:3,
		Name: "Quite marvelous",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/LootboxAddict-3.png',
		Description: "Win 75 epic items",
		requiredAmount:75,
	    BonusSpeed:0,
	    BonusValue:0.05,
		BonusLuck:0
		},
		{
		id:4,
		Name: "How fascinating",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/LootboxAddict-4.png',
		Description: "Win 150 epic items",
		requiredAmount:150,
	    BonusSpeed:0,
	    BonusValue:0.085,
		BonusLuck:0
		},
		{
		id:5,
		Name: "Stunning items everywhere",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/LootboxAddict-5.png',
		Description: "Win 350 epic items",
		requiredAmount:300,
	    BonusSpeed:0,
	    BonusValue:0.12,
		BonusLuck:0
		},
		{

		id:6,
		Name: "Ridiculously rad",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/LootboxAddict-6.png',
		Description: "Win 600 epic items",
		requiredAmount:600,
	    BonusSpeed:0,
	    BonusValue:0.160,
		BonusLuck:0
		},
		{
		id:7,
		Name: "Inconceivable!",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/LootboxAddict-7.png',
		Description: "Win 1200 epic items",
		requiredAmount:1200,
	    BonusSpeed:0,
	    BonusValue:0.29,
		BonusLuck:0
		}
		]
  },{
	
name:"Legendary Looter",
showRequirement:'legendaryItemsWon',
statText:'Legendary Items Won',
groupId:"f",
tiers: [{
		
		id:1,
		Name: "Better than ambrosia",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/LootboxAddict-1.png',
		Description: "Win 1 legendary item",
		requiredAmount:1,
	    BonusSpeed:0,
	    BonusValue:0.014,
		BonusLuck:0
		},
		{
		id:2,
		Name: "Mythical Winnings",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/LootboxAddict-2.png',
		Description: "Win 25 legendary items",
		requiredAmount:25,
	    BonusSpeed:0,
	    BonusValue:0.035,
		BonusLuck:0
		},
		{
		id:3,
		Name: "Godly Goods",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/LootboxAddict-3.png',
		Description: "Win 75 legendary items",
		requiredAmount:75,
	    BonusSpeed:0,
	    BonusValue:0.05,
		BonusLuck:0
		},
		{
		id:4,
		Name: "Divine Dollars",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/LootboxAddict-4.png',
		Description: "Win 150 legendary items",
		requiredAmount:150,
	    BonusSpeed:0,
	    BonusValue:0.085,
		BonusLuck:0
		},
		{
		id:5,
		Name: "Celestial Cash",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/LootboxAddict-5.png',
		Description: "Win 350 legendary items",
		requiredAmount:300,
	    BonusSpeed:0,
	    BonusValue:0.12,
		BonusLuck:0
		},
		{

		id:6,
		Name: "OK Boomer",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/LootboxAddict-6.png',
		Description: "Win 600 legendary items",
		requiredAmount:600,
	    BonusSpeed:0,
	    BonusValue:0.160,
		BonusLuck:0
		},
		{
		id:7,
		Name: "Nice.",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/LootboxAddict-7.png',
		Description: "Win 1200 legendary items",
		requiredAmount:1200,
	    BonusSpeed:0,
	    BonusValue:0.29,
		BonusLuck:0
		}
		]
  },{
	
name:"Recycling Machine",
showRequirement:'recycledItems',
statText:'Items Recycled',
groupId:"g",
tiers: [{
		
		id:1,
		Name: "It is 2020 afterall",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/SVG/RecyclingMachine-1.svg',
		Description: "Recycle 1 item",
		requiredAmount:1,
	    BonusSpeed:0,
	    BonusValue:0.03,
		BonusLuck:0
		},
		{
		id:2,
		Name: "Saving the planet",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/SVG/RecyclingMachine-2.svg',
		Description: "Recycle 25 items",
		requiredAmount:25,
	    BonusSpeed:0,
	    BonusValue:0.06,
		BonusLuck:0
		},
		{
		id:3,
		Name: "This is definitely helping",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/SVG/RecyclingMachine-3.svg',
		Description: "Recycle 75 items",
		requiredAmount:75,
	    BonusSpeed:0,
	    BonusValue:0.08,
		BonusLuck:0
		},
		{
		id:4,
		Name: "Why would you hydraulic press dogs",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/SVG/RecyclingMachine-4.svg',
		Description: "Recycle 150 items",
		requiredAmount:150,
	    BonusSpeed:0,
	    BonusValue:0.11,
		BonusLuck:0
		},
		{
		id:5,
		Name: "Recycling Rampage",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/SVG/RecyclingMachine-5.svg',
		Description: "Recycle 350 items",
		requiredAmount:300,
	    BonusSpeed:0,
	    BonusValue:0.15,
		BonusLuck:0
		},
		{

		id:6,
		Name: "Nothing but green",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/SVG/RecyclingMachine-6.svg',
		Description: "Recycle 600 items",
		requiredAmount:600,
	    BonusSpeed:0,
	    BonusValue:0.290,
		BonusLuck:0
		},
		{
		id:7,
		Name: "Stopped global warming",
		src: 'https://www.christianlong.design/assets/LootboxSimulator/SVG/RecyclingMachine-7.svg',
		Description: "Recycle 1200 items",
		requiredAmount:1200,
	    BonusSpeed:0,
	    BonusValue:0.69,
		BonusLuck:0
		}
		]
  }
]
	

export default AchievementsTieredData