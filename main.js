var Twitter = require('twitter');


var screen_name = 'ms_rinna';

var result = {};

var resultCount = 0;

var nextParams = '';
function get(params) {

	var client;
	var num = Math.floor( Math.random() * 6);
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
			access_token_key: '*****************',
			access_token_secret: '*****************'
		});
		break;
		case 2:
		client = new Twitter({
			consumer_key: '*****************',
			consumer_secret: '*****************',
			access_token_key: '*****************',
			access_token_secret: '*****************'
		});
		break;
		case 3:
		client = new Twitter({
			consumer_key: '*****************',
			consumer_secret: '*****************',
			access_token_key: '*****************',
			access_token_secret: '*****************'
		});
		break;
		case 4:
		client = new Twitter({
			consumer_key: '*****************',
			consumer_secret: '*****************',
			access_token_key: '*****************',
			access_token_secret: '*****************'
		});
		break;

		default:
			client = new Twitter({
			consumer_key: '*****************',
			consumer_secret: '*****************',
			access_token_key: '*****************',
			access_token_secret: '*****************'
		});
	}


	client.get('followers/list.json' + params, {}, function(error, tweets, response) {
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
			n = data[i].id_str;
			}
			nextParams = tweets.next_cursor_str;
			if (!nextParams) {
				console.log('OK ' + resultCount + '件');
				return;
			}
			get("?screen_name="+screen_name+"&count=100&cursor=" + nextParams);
		} else {
			console.log('error');
			console.log(tweets);
			console.log(nextParams);
		}
	});
}

console.log('created_at	id\tscreen_name\tuser_id\tfollowers_count\tfriends_count\tstatuses_count');
var params = "?screen_name="+screen_name+"&count=100&cursor=1545175917791367244";
get(params);
