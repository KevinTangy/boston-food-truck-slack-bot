var config = {};

// Truck locations by ID. See: http://bostonfeed.me/backend/getLocation.php
config.locations =  [
	'dewey',
	'greenway-dewey-congress',
	// clarendon-trinity,
	// greenway-roweswharf,
	// bostoncommon,
	// prudential,
	// seaport-wormwood,
	// constantcontact,
	// fenway-landmark,
	// harvard-science,
	// bu-east,
	// mgh,
	// stuart-trinity,
	// watertown-arsenal,
	// cityhallplaza,
	// bostonpubliclibrary,
	'innovationdistrict',
	// chinatown-gate,
	// bmc,
	// watertown-athena,
	// longwood,
	// burlington,
	// neu,
	// alewife-vecna,
	// federal-101,
	// greenway-milk,
	// lexington,
	// greenway-carousel,
	// sowa,
	// financial-milk-kilby,
	// dorchester-lena-park,
	// charlestown-bha,
	// neu-centennial,
	// dorchester-epiphany,
	// charlestown-edwards,
	// dorchester-olmsted-green,
	// southend-community-health,
	// charlestown-constitution-coop,
	// maverick-square,
	// brighamwomens,
	// mit-kandell,
	// financial-high-batterymarch,
	// bu-west,
	// alewife-cbre,
	// courthouse,
	// charlestown,
	// greenway-purchasehigh,
	// southendopenmarket-inkblock,
	// chinatown-boylston-washington,
	// cambridge-rogers
];

// The incoming Slack webhook URL.
config.slack_url = process.env.WEBHOOK_URL;

config.slack_bot_name = 'FoodTruckBot';
config.slack_bot_emoji = ':truck:';

module.exports = config;
