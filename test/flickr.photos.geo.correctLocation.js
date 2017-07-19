var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.photos.geo.correctLocation', function () {

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.photos.geo.correctLocation({
				foursquare_id: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('requires "foursquare_id"', function () {

		assert.throws(function () {
			flickr.photos.geo.correctLocation({
				photo_id: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "foursquare_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photos.geo.correctLocation({
			photo_id: '_',
			foursquare_id: '_'
		});

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.qs.format, 'json');
		assert.equal(req.qs.nojsoncallback, '1');
		assert.equal(req.qs.method, 'flickr.photos.geo.correctLocation');
		assert.equal(req.qs.photo_id, '_');
		assert.equal(req.qs.foursquare_id, '_');
	});

});
