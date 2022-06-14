import {Lib, LinkableString} from "./lib";

// the data powering the chart
// please keep in the same order as Discord's docs (https://discord.dev/topics/community-resources#libraries-discord-libraries):
// sort language alphabetically and then name alphabetically

export const libs: Lib[] = [
	{
		name: 'CocApi',
		url: 'https://github.com/devhl-labs/CocApi',
		language: 'C#',
		loginWithToken: 'Yes',
		loginWithEmail: 'Yes',
		dynamicIP: 'Yes',
		troopInformation: 'Yes',
		events: 'Yes',
		clans_CurrentWar_Leaguegroup: 'Yes',
		clans_clannwarleagues_wars: 'Yes',
		clans_warlog: 'Yes',
		clan_search: 'Yes',
		clans_current_war: 'Yes',
		clans: 'Yes',
		clans_members: 'Yes',
		players: 'Yes',
		players_verify: 'Yes',
		leagues: 'Yes',
		leagues_season_ranking: 'Yes',
		league_info: 'Yes',
		leagues_seasons: 'Yes',
		warleagues: 'Yes',
		warleague_info: 'Yes',
		locations_rankings_clans: 'Yes',
		locations_rankings_players: 'Yes',
		locations_rankings_clan_versus: 'Yes',
		locations_rankings_player_versus: 'Yes',
		locations: 'Yes',
		location_info: 'Yes',
		goldpass: 'Yes',
		labels_player: 'Yes',
		labels_clan: 'Yes',
		note: ''
	},
	{
		name: 'coc',
		url: 'https://github.com/rbrabson/coc',
		language: 'Go',
		loginWithToken: 'Yes',
		loginWithEmail: 'No',
		dynamicIP: 'No',
		troopInformation: 'Yes',
		events: 'No',
		clans_CurrentWar_Leaguegroup: 'Yes',
		clans_clannwarleagues_wars: 'Yes',
		clans_warlog: 'Yes',
		clan_search: 'Yes',
		clans_current_war: 'Yes',
		clans: 'Yes',
		clans_members: 'Yes',
		players: 'Yes',
		players_verify: 'Yes',
		leagues: 'Yes',
		leagues_season_ranking: 'Yes',
		league_info: 'Yes',
		leagues_seasons: 'Yes',
		warleagues: 'Yes',
		warleague_info: 'Yes',
		locations_rankings_clans: 'Yes',
		locations_rankings_players: 'Yes',
		locations_rankings_clan_versus: 'Yes',
		locations_rankings_player_versus: 'Yes',
		locations: 'Yes',
		location_info: 'Yes',
		goldpass: 'Yes',
		labels_player: 'Yes',
		labels_clan: 'Yes',
		note: ''
	},
	{
		name: 'coc.go',
		url: 'https://github.com/amaanq/coc.go',
		language: 'Go',
		loginWithToken: 'No',
		loginWithEmail: 'Yes',
		dynamicIP: 'No',
		troopInformation: 'No',
		events: 'No',
		clans_CurrentWar_Leaguegroup: 'No',
		clans_clannwarleagues_wars: 'No',
		clans_warlog: 'Yes',
		clan_search: 'Yes',
		clans_current_war: 'Yes',
		clans: 'Yes',
		clans_members: 'Yes',
		players: 'Yes',
		players_verify: 'Yes',
		leagues: 'Yes',
		leagues_season_ranking: 'Yes',
		league_info: 'Yes',
		leagues_seasons: 'Yes',
		warleagues: 'Yes',
		warleague_info: 'Yes',
		locations_rankings_clans: 'Yes',
		locations_rankings_players: 'Yes',
		locations_rankings_clan_versus: 'Yes',
		locations_rankings_player_versus: 'Yes',
		locations: 'Yes',
		location_info: 'Yes',
		goldpass: 'No',
		labels_player: 'No',
		labels_clan: 'No',
		note: 'unfinished'
	},
	{
		name: 'clash.js',
		url: 'https://github.com/ryansyn/clash.js',
		language: 'JavaScript',
		loginWithToken: 'No',
		loginWithEmail: 'Yes',
		dynamicIP: 'Yes',
		troopInformation: 'No',
		events: 'No',
		clans_CurrentWar_Leaguegroup: 'No',
		clans_clannwarleagues_wars: 'No',
		clans_warlog: 'No',
		clan_search: 'No',
		clans_current_war: 'No',
		clans: 'No',
		clans_members: 'No',
		players: 'No',
		players_verify: 'No',
		leagues: 'No',
		leagues_season_ranking: 'No',
		league_info: 'No',
		leagues_seasons: 'No',
		warleagues: 'No',
		warleague_info: 'No',
		locations_rankings_clans: 'No',
		locations_rankings_players: 'No',
		locations_rankings_clan_versus: 'No',
		locations_rankings_player_versus: 'No',
		locations: 'No',
		location_info: 'No',
		goldpass: 'No',
		labels_player: 'No',
		labels_clan: 'No',
		note: 'No documentation yet'
	},
	{
		name: 'clashofclans.js',
		url: 'https://github.com/clashperk/clashofclans.js',
		language: 'JavaScript',
		loginWithToken: 'Yes',
		loginWithEmail: 'Yes',
		dynamicIP: 'Yes',
		troopInformation: 'Yes',
		events: 'Yes',
		clans_CurrentWar_Leaguegroup: 'Yes',
		clans_clannwarleagues_wars: 'Yes',
		clans_warlog: 'Yes',
		clan_search: 'Yes',
		clans_current_war: 'Yes',
		clans: 'Yes',
		clans_members: 'Yes',
		players: 'Yes',
		players_verify: 'Yes',
		leagues: 'Yes',
		leagues_season_ranking: 'Yes',
		league_info: 'Yes',
		leagues_seasons: 'Yes',
		warleagues: 'Yes',
		warleague_info: 'Yes',
		locations_rankings_clans: 'Yes',
		locations_rankings_players: 'Yes',
		locations_rankings_clan_versus: 'Yes',
		locations_rankings_player_versus: 'Yes',
		locations: 'Yes',
		location_info: 'Yes',
		goldpass: 'Yes',
		labels_player: 'Yes',
		labels_clan: 'Yes',
		note: 'TypeScript Support'
	},
	{
		name: 'clash-of-clans-api',
		url: 'https://github.com/CaptEmulation/clash-of-clans-api',
		language: 'JavaScript',
		loginWithToken: 'Yes',
		loginWithEmail: 'No',
		dynamicIP: 'No',
		troopInformation: 'No',
		events: 'No',
		clans_CurrentWar_Leaguegroup: 'Yes',
		clans_clannwarleagues_wars: 'Yes',
		clans_warlog: 'Yes',
		clan_search: 'Yes',
		clans_current_war: 'Yes',
		clans: 'Yes',
		clans_members: 'Yes',
		players: 'Yes',
		players_verify: 'No',
		leagues: 'Yes',
		leagues_season_ranking: 'Yes',
		league_info: 'Yes',
		leagues_seasons: 'Yes',
		warleagues: 'Yes',
		warleague_info: 'Yes',
		locations_rankings_clans: 'Yes',
		locations_rankings_players: 'Yes',
		locations_rankings_clan_versus: 'Yes',
		locations_rankings_player_versus: 'Yes',
		locations: 'Yes',
		location_info: 'Yes',
		goldpass: 'No',
		labels_player: 'No',
		labels_clan: 'No',
		note: ''
	},
	{
		name: 'coc.py',
		url: 'https://github.com/mathsman5133/coc.py',
		language: 'Python',
		loginWithToken: 'Yes',
		loginWithEmail: 'Yes',
		dynamicIP: 'Yes',
		troopInformation: 'Yes',
		events: 'Yes',
		clans_CurrentWar_Leaguegroup: 'Yes',
		clans_clannwarleagues_wars: 'Yes',
		clans_warlog: 'Yes',
		clan_search: 'Yes',
		clans_current_war: 'Yes',
		clans: 'Yes',
		clans_members: 'Yes',
		players: 'Yes',
		players_verify: 'Yes',
		leagues: 'Yes',
		leagues_season_ranking: 'Yes',
		league_info: 'Yes',
		leagues_seasons: 'Yes',
		warleagues: 'Yes',
		warleague_info: 'Yes',
		locations_rankings_clans: 'Yes',
		locations_rankings_players: 'Yes',
		locations_rankings_clan_versus: 'Yes',
		locations_rankings_player_versus: 'Yes',
		locations: 'Yes',
		location_info: 'Yes',
		goldpass: 'Yes',
		labels_player: 'Yes',
		labels_clan: 'Yes',
		note: ''
	},
	{
		name: 'cocRb',
		url: 'https://github.com/Crusader500/cocRb',
		language: 'Ruby',
		loginWithToken: 'Yes',
		loginWithEmail: 'Yes',
		dynamicIP: 'No',
		troopInformation: 'Yes',
		events: 'Yes',
		clans_CurrentWar_Leaguegroup: 'Yes',
		clans_clannwarleagues_wars: 'Yes',
		clans_warlog: 'Yes',
		clan_search: 'Yes',
		clans_current_war: 'Yes',
		clans: 'Yes',
		clans_members: 'Yes',
		players: 'Yes',
		players_verify: 'Yes',
		leagues: 'Yes',
		leagues_season_ranking: 'Yes',
		league_info: 'Yes',
		leagues_seasons: 'Yes',
		warleagues: 'Yes',
		warleague_info: 'Yes',
		locations_rankings_clans: 'Yes',
		locations_rankings_players: 'Yes',
		locations_rankings_clan_versus: 'Yes',
		locations_rankings_player_versus: 'Yes',
		locations: 'Yes',
		location_info: 'Yes',
		goldpass: 'Yes',
		labels_player: 'Yes',
		labels_clan: 'Yes',
		note: ''
	}
]
