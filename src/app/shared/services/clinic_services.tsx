
export const fetchPost = async () => {
  const res = await fetch('https://stagl-api.medicaldepartures.com/keendex/v1/search?page=1&size=8&query=&sort=recommended&device=desktop', {
    headers: {
      'X-Site-Id': '1',
      'X-Locale': 'en-US',
    },
    cache: 'no-store'
  });
  return res.json();
};

export const fetchPostActivity = async () => {
  const submitData = { "activity": { "visitorId": "5zQQo62024241706079213523", "site": "1", "page": "DD: Home Page", "activity": "DD: User landed page", "navigatorDetails": { "appVersion": "5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0", "language": "en-US" }, "ipAddress": { "ip_address": "175.176.67.156", "city": "Cebu City", "city_geoname_id": "", "country": "Philippines", "country_code": "PH", "country_geoname_id": "", "longitude": 123.893, "latitude": 10.3099, "region": "Central Visayas", "region_iso_code": "", "region_geoname_id": "", "postal_code": "6000", "country_is_eu": false, "continent": "", "continent_code": "AS", "continent_geoname_id": "", "security": {}, "timeStamp": "2024-02-16T09:25:28.489Z" } } };
  const res = await fetch('https://api.medicaldepartures.com/medid/v2/user-activity', {
    method: 'POST',
    body: JSON.stringify(submitData),
    headers: {
      'X-Site-Id': '1',
      'X-Locale': 'en-US',
      'content-type': 'application/json'
    },
    cache: 'no-store'
  });
  return res.json();
};


export const fetchApi = async () => {
  const res = await fetch('https://ipapi.co/json/', {
    cache: 'no-store'
  });
  const result = res.json();
  console.log(JSON.stringify(result))
  return result;
};

export const fetchZoho = async () => {
  const res = await fetch('https://salesiq.zohopublic.com/visitor/v2/channels/website?widgetcode=6d9bfec226ae552c4d07bb4d3857e73e7e79dce73aa1e78ab48bbca6f686255dc1917e5fdca22c384739309bcf5f6aa1&internal_channel_req=true&last_modified_time=1699078755792&version=V26&browser_language=en&current_domain=https%3A%2F%2Fdentaldepartures.com&pagetitle=Dental%20Departures', {
   
  });
  const result = res.json();
  return result;
};

