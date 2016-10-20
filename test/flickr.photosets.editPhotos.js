var flickr = require('..')();
var assert = require('assert');

describe('flickr.photosets.editPhotos', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photosets.editPhotos({ photoset_id: '_', primary_photo_id: '_', photo_ids: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "photoset_id"', function () {

		assert.throws(function () {
			flickr.photosets.editPhotos({ api_key: '_', primary_photo_id: '_', photo_ids: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photoset_id"';
		});

	});

	it('requires "primary_photo_id"', function () {

		assert.throws(function () {
			flickr.photosets.editPhotos({ api_key: '_', photoset_id: '_', photo_ids: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "primary_photo_id"';
		});

	});

	it('requires "photo_ids"', function () {

		assert.throws(function () {
			flickr.photosets.editPhotos({ api_key: '_', photoset_id: '_', primary_photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photo_ids"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photosets.editPhotos({ api_key: '_',
  photoset_id: '_',
  primary_photo_id: '_',
  photo_ids: '_' });

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});