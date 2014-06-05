# About
This application uses Ruby on Rails as the backend language and EmberJS on the front end. Rails controllers have been wrapped up into an API which the Ember application is then able to CRUD in realtime. 

## General Requirements
Here is the stack the application is built on 

* Ruby 2.1.1
* Rails 4.1.1
* Node 0.10.28
* npm 1.4.13 (Package manager)
* ember-cli (Ember command line utility)
* Postgres (Database)

### Try it for yourself! 

To test out this application in your own Ruby on Rails and EmberJS environment run these commands

```

git clone https://github.com/rralston/emberjs.git

cd emberjs/rails 

bundle install

open config/database.yml -a textmate 

```

Configure the default: &default with your postgres DB username & password

```

rake db:drop db:create db:migrate db:seed

rails server

```

Now in a new terminal window

```

cd emberjs/ember

bower install

ember server --proxy http://localhost:3000

```

Now go to http://0.0.0.0:4200/ in your browser and explore the app

#### Testing

This application has been tested on the following stacks

Ruby | Rails | Node | npm | ember-cli
------------ | ------------- | ------------- | ------------- | -------------
ruby-1.9.3-p194 | 4.1.0.rc1 | 0.10.26 | 1.4.7 | 0.0.28
ruby-1.9.3-p448 | 4.1.1 | 0.10.28 | 1.4.13
ruby-1.9.3-p484 |
ruby-2.1.0 |
ruby-2.1.1 |

And rigorously tested on the follow browsers

| Chrome | Firefox | Internet Explorer | Opera | Safari |
|:---:|:---:|:---:|:---:|:---:|
| <a href="http://he4rtofcourage.deviantart.com/art/Chrome-poni-305866510"><img width=115 src="http://fc05.deviantart.net/fs70/i/2012/154/9/b/chrome_poni_by_he4rtofcourage-d523s3y.png" alt="Chrome browser pony logo"></a> | <a href="http://noreasontohope.deviantart.com/art/My-Little-Browser-Firefox-260640031"><img width=115 src="http://th08.deviantart.net/fs70/PRE/i/2013/142/8/9/my_little_browser__firefox_by_noreasontohope-d4b6f4v.png" alt="Firefox browser pony logo"></a> | <a href="http://mcsadat.deviantart.com/art/ie-just-don-t-know-what-went-wrong-306422360"><img width=115 src="http://fc03.deviantart.net/fs71/i/2012/156/0/b/ie_just_don__t_know_what_went_wrong_by_mcsadat-d52fp08.png" alt="Internet Explorer browser pony logo"></a> | <a href="http://parallaxmlp.deviantart.com/art/My-Little-Opera-306933368"><img width=115 src="http://th05.deviantart.net/fs71/PRE/i/2012/159/c/9/my_little_opera_by_parallaxmlp-d52qnaw.png" alt="Opera browser pony logo"></a> | <a href="http://parallaxmlp.deviantart.com/art/My-Little-Safari-307396501"><img width=115 src="http://th08.deviantart.net/fs70/PRE/i/2012/246/b/e/my_little_safari_by_parallaxmlp-d530knp.png" alt="Safari browser pony logo"></a> |