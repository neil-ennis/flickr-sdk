var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.photos.geo.getLocation', function () {

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.photos.geo.getLocation({});
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photos.geo.getLocation({
			photo_id: '_'
		});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.qs.format, 'json');
		assert.equal(req.qs.nojsoncallback, '1');
		assert.equal(req.qs.method, 'flickr.photos.geo.getLocation');
		assert.equal(req.header['Content-Type'], 'text/plain');
		assert.equal(req.qs.photo_id, '_');
	});

});
