var Twitter = require('twitter');



var result = {};

var resultCount = 0;

var nextParams = '';
function get(params) {

	var client;
	var num = Math.floor( Math.random() * 3);

	switch(num) {
		case 0:
		client = new Twitter({
			consumer_key: '*****************',
			consumer_secret: '*****************',
			access_token_key: '*****************',
			access_token_secret: '*****************'
		});
		break;
		case 1:
		client = new Twitter({
			consumer_key: '*****************',
			consumer_secret: '*****************',
			access_token_key: '*****************-*****************',
			access_token_secret: '*****************'
		});
		break;

		default:
			client = new Twitter({
			consumer_key: '*****************',
			consumer_secret: '*****************',
			access_token_key: '*****************-*****************',
			access_token_secret: '*****************'
		});
	}


	client.get('followers/list.json' + params, {}, function(error, tweets, response) {
	//client.get('search/tweets.json', params, function(error, tweets, response) {
		//console.log(tweets);
		var n = 99999999999999999999;
		if (!error) {
			var data = tweets.users;
//			console.log(data);
			if (data.length <= 0) {
				console.log('OK! ' + resultCount + '件');
				return;
			}
			for (var i = 0; i < data.length; i++) {
				resultCount++;
				console.log(data[i].id_str +'\t' + data[i].screen_name + '\t' + data[i].description.replace(/\n/g, '').replace(/\t/, ' ') + '\t' + data[i].statuses_count + '\t' + data[i].url + '\t' + data[i].friends_count + '\t' + data[i].followers_count + '\t' + data[i].friends_count + '\t' + data[i].location.replace(/\n/g, '').replace(/\t/, ' '));
//				console.log(data[i].created_at + '\t' + data[i].id_str + '\t' + data[i].user.screen_name + '\t' + data[i].user.id_str + '\t' + data[i].user.followers_count + '\t' + data[i].user.friends_count + '\t' + data[i].user.statuses_count + '\thttps://twitter.com/' + data[i].user.screen_name + '/status/' + data[i].id_str);
				//result[data[i].user.screen_name] = data[i].user.followers_count;
			n = data[i].id_str;
			}
//			n = data[data.length - 1].id_str;
			//var nextParams = {q: q, max_id: n,  count: '100', include_entities: true};
			nextParams = tweets.next_cursor_str;
			//var nextParams = tweets.next_cursor_str;
			if (!nextParams) {
				console.log('OK ' + resultCount + '件');
				return;
			}
			//var nextParams = {q: q, max_id: n};
			get("?screen_name=**********&&count=100&cursor=" + nextParams);
		} else {
			console.log('error');
			console.log(tweets);
			console.log(nextParams);
		}
	});
}

console.log('created_at	id\tscreen_name\tuser_id\tfollowers_count\tfriends_count\tstatuses_count');
//var params = {q: q, count: '100'};
//var params = "?screen_name=**********&&count=100";//{q: q, count: '100'};
var params = "?screen_name=**********&count=100&cursor=**********";//{q: q, count: '100'};
get(params);
