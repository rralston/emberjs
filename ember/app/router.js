var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
	this.route('about');
  	this.resource('speakers', function() {
    	this.route('show', {path: ':speaker_id'});
  	});
  	this.resource('filmmakers', function() {
    	this.resource('sign_up', function() {});
  	});
});

export default Router;
