require('dotenv').config();
const fs = require('fs');
const path = require('path');
const got = require('got');

const LIMIT = 250;

const checkins = [];

const start = (offset = 0) => {
  console.log('Requesting checkins at offset: ' + offset);
  console.log( process.env.ACCESS_TOKEN)
  // got('https://api.foursquare.com/v2/users/self/checkins?ACCESS_TOKEN=fsq3KARkE90WSZINdoRutwBZWOEmcd9XmJTY8KmQxqtgY48=&v=20161201', {
    // responseType: 'json',
    // searchParams: {
    //   oauth_token: process.env.ACCESS_TOKEN,
    //   // limit: LIMIT,
    //   // offset,
    //   v: '20161201',
    //   // m: 'swarm'
    // }
  // }).then(({body}) => {
    body = {"meta":{"code":200,"requestId":"61af1f73943fca5c5fa4e9b8"},"notifications":[{"type":"notificationTray","item":{"unreadCount":0}}],"response":{"checkins":{"count":2,"items":[{"id":"61af106c50d21b1993baa1d7","createdAt":1638862956,"type":"checkin","entities":[],"shout":"Eat with friends","canonicalUrl":"https:\/\/foursquare.com\/user\/486040197\/checkin\/61af106c50d21b1993baa1d7","canonicalPath":"\/user\/486040197\/checkin\/61af106c50d21b1993baa1d7","timeZoneOffset":-360,"editableUntil":1638949356000,"venue":{"id":"4f11ce82e4b07e9ecad0480c","name":"Uchi","contact":{"phone":"7135224808","formattedPhone":"(713) 522-4808","twitter":"uchihouston"},"location":{"address":"904 Westheimer Rd","crossStreet":"at Grant St","lat":29.744871641612512,"lng":-95.39070916220318,"labeledLatLngs":[{"label":"display","lat":29.744871641612512,"lng":-95.39070916220318},{"label":"entrance","lat":29.744793,"lng":-95.390712}],"postalCode":"77006","cc":"US","city":"Houston","state":"TX","country":"United States","contextLine":"Houston, TX","contextGeoId":-1922608132,"formattedAddress":["<span itemprop=\"streetAddress\">904 Westheimer Rd<\/span> (at Grant St)","<span itemprop=\"addressLocality\">Houston<\/span>, <span itemprop=\"addressRegion\">TX<\/span> <span itemprop=\"postalCode\">77006<\/span>"]},"canonicalUrl":"https:\/\/foursquare.com\/v\/uchi\/4f11ce82e4b07e9ecad0480c","canonicalPath":"\/v\/uchi\/4f11ce82e4b07e9ecad0480c","categories":[{"id":"4bf58dd8d48988d111941735","name":"Japanese Restaurant","pluralName":"Japanese Restaurants","shortName":"Japanese","icon":{"prefix":"https:\/\/ss3.4sqi.net\/img\/categories_v2\/food\/japanese_","mapPrefix":"https:\/\/ss3.4sqi.net\/img\/categories_map\/food\/default","suffix":".png"},"primary":true}],"verified":false,"stats":{"tipCount":174,"usersCount":3599,"checkinsCount":7229},"url":"http:\/\/uchirestaurants.com\/houston\/","urlSig":"tBxS9xdgmW0JeH5dXUBXt8HTsYk=","hasMenu":true,"reservations":{"url":"http:\/\/www.opentable.com\/single.aspx?rid=76246&ref=9601","provider":"opentable","id":"76246"},"menu":{"type":"Menu","label":"Menu","anchor":"View Menu","url":"https:\/\/foursquare.com\/v\/uchi\/4f11ce82e4b07e9ecad0480c\/menu","mobileUrl":"https:\/\/foursquare.com\/v\/4f11ce82e4b07e9ecad0480c\/device_menu","canonicalPath":"\/v\/uchi\/4f11ce82e4b07e9ecad0480c\/menu"},"allowMenuUrlEdit":true,"beenHere":{"lastCheckinExpiredAt":0}},"likes":{"count":0,"groups":[]},"like":false,"sticker":{"id":"52a65980000000000000001c","name":"Toro","image":{"prefix":"https:\/\/igx.4sqi.net\/img\/sticker\/","sizes":[60,94,150,300],"name":"\/sushi_3098cc.png"},"stickerType":"unlockable","group":{"name":"collectible","index":26},"pickerPosition":{"page":1,"index":2},"teaseText":"Check in at Japanese restaurants to unlock this sticker.","unlockText":"No wasabi too hot, no ikizukuri too bold. You slayed the dragon roll and lived to tell the tale.","bonusText":"Use at Sushi or Japanese Restaurants for a bonus.","points":2,"bonusStatus":"Use once per week. Recharges Sunday at midnight."},"isMayor":false,"photos":{"count":1,"items":[{"id":"61af10ee7b754c2945e2e787","createdAt":1638863086,"source":{"name":"Swarm for iOS","url":"https:\/\/www.swarmapp.com"},"prefix":"https:\/\/fastly.4sqi.net\/img\/general\/","suffix":"\/486040197_STtcle9bNO6JKlC_BrgkZkVLeD-HMsOOQXnfYVUJkSk.jpg","width":1920,"height":1440,"user":{"id":"486040197","firstName":"Xinyun","lastName":"Liu","gender":"male","countryCode":"US","relationship":"self","canonicalUrl":"https:\/\/foursquare.com\/user\/486040197","canonicalPath":"\/user\/486040197","photo":{"prefix":"https:\/\/fastly.4sqi.net\/img\/user\/","suffix":"\/blank_boy.png","default":true},"isAnonymous":false},"visibility":"public"}],"layout":{"name":"single"}},"posts":{"count":0,"textCount":0},"comments":{"count":0},"source":{"name":"Swarm for iOS","url":"https:\/\/www.swarmapp.com"}},{"id":"5c2acb2682a750002bcb159f","createdAt":1546308390,"type":"checkin","canonicalUrl":"https:\/\/foursquare.com\/user\/486040197\/checkin\/5c2acb2682a750002bcb159f","canonicalPath":"\/user\/486040197\/checkin\/5c2acb2682a750002bcb159f","timeZoneOffset":-360,"venue":{"id":"4aca84e9f964a5203cc220e3","name":"Rice University","contact":{"phone":"7133480000","formattedPhone":"(713) 348-0000","twitter":"riceuniversity","facebook":"28331765549","facebookUsername":"RiceUniversity","facebookName":"Rice University Official Page"},"location":{"address":"6100 Main St","crossStreet":"btwn Rice & University","lat":29.71739789823348,"lng":-95.40086527312086,"labeledLatLngs":[{"label":"display","lat":29.71739789823348,"lng":-95.40086527312086}],"postalCode":"77005","cc":"US","city":"Houston","state":"TX","country":"United States","contextLine":"Houston, TX","contextGeoId":-1697148206,"formattedAddress":["<span itemprop=\"streetAddress\">6100 Main St<\/span> (btwn Rice &amp; University)","<span itemprop=\"addressLocality\">Houston<\/span>, <span itemprop=\"addressRegion\">TX<\/span> <span itemprop=\"postalCode\">77005<\/span>"]},"canonicalUrl":"https:\/\/foursquare.com\/v\/rice-university\/4aca84e9f964a5203cc220e3","canonicalPath":"\/v\/rice-university\/4aca84e9f964a5203cc220e3","categories":[{"id":"4bf58dd8d48988d1ae941735","name":"University","pluralName":"Universities","shortName":"University","icon":{"prefix":"https:\/\/ss3.4sqi.net\/img\/categories_v2\/education\/default_","mapPrefix":"https:\/\/ss3.4sqi.net\/img\/categories_map\/education\/default","suffix":".png"},"primary":true}],"verified":true,"stats":{"tipCount":20,"usersCount":4634,"checkinsCount":12738},"url":"http:\/\/www.rice.edu","urlSig":"t3lY2Ik5\/NtdUEbEYE2SZcVYaG8=","venueRatingBlacklisted":true,"beenHere":{"lastCheckinExpiredAt":0}},"likes":{"count":0,"groups":[]},"like":false,"isMayor":false,"photos":{"count":0,"items":[]},"posts":{"count":0,"textCount":0},"comments":{"count":0},"source":{"name":"Swarm for iOS","url":"https:\/\/www.swarmapp.com"}}]}}}
    
    // console.log(body)
    const { items } = body.response.checkins;

    if (!items || !items.length){
      console.log('No more items.');
      const FILE = path.resolve(__dirname, '../data/checkins.json');
      console.log('DONE: writing file ' + FILE);
      fs.writeFileSync(FILE, JSON.stringify(checkins, null, '\t'));
      return;
    };

    const firstCreatedAt = items[0].createdAt;
    const date = new Date(firstCreatedAt*1000);
    console.log(`Batch #${offset}: ${date.toDateString()}`);

    items.forEach((item, i) => {
      try {
        const {venue, createdAt, timeZoneOffset} = item;
        if (!venue) return;
        const {id, name, location} = venue;
        if (!location) return;
        const {lat, lng, country, cc} = location;
        const itemDate = new Date(createdAt*1000);
        checkins.push({id, name, lat, lng, country, cc, createdAt, timeZoneOffset});
      } catch (e){
        console.warn(item);
      }
    });

    FILE = path.resolve(__dirname, '../data/checkins.json');
    console.log('DONE: writing file ' + FILE);
    fs.writeFileSync(FILE, JSON.stringify(checkins, null, '\t'));
    return;
    
    // start(offset+LIMIT);
  // }).catch((e) => console.warn(e));
};

start();
