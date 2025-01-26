// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){

    //for submitting a hostname only that doesn't include http://, we will add it on so the code below will act as if it was submitted with it
    //and continue as normal
    if (!url.startsWith("https://") && !url.startsWith("http://")) {
        url = "http://" + url;
    }

    //URL object makes it easier to parse URLs,
    url = new URL(url);
    //creating a new variable just grabbing the hostname and removing the protocol and path (www.example.com)
    const hostname = url.hostname;

    //split the hostname into an array form each '.' (e.g www.example.com = ['www', 'example', 'com'])
    const parts = hostname.split('.');
    //empty variable to assign domain name to
    let domain = ''

    //if the beginning of the parts array = 'www' then return next index (most likely the domain name)
    if (parts[0] === 'www') {
        domain = parts[1]
    //else the domain name will be at index 0 so return that instead
    } else {
        domain = parts[0];
    }

    return domain;

  }

  const websiteOne = "https://www.cnet.com"
  console.log(domainName(websiteOne));
  const websiteTwo = "https://google.com"
  console.log(domainName(websiteTwo));
