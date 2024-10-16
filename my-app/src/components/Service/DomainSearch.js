import React from 'react';
import './DomainSearch.css'; // Import the CSS file

import piggyIcon from '../../Assets/ICONS/Host and Domain/Porkbun.png'; 
import godaddyIcon from '../../Assets/ICONS/Host and Domain/GoDaddy.png';
import namecheapIcon from '../../Assets/ICONS/Host and Domain/namecheap-logo.png';

const DomainSearch = () => {
  return (
    <div className="domain-search-container">
      <h2 className="search-label">
        <span className="highlight">SEARCH</span> FOR YOUR <span className="highlight">NEW DOMAIN</span> HERE
      </h2>
      <div className="domain-icon-container">
        <a href="https://porkbun.com/tld/shop?coupon=GETDOTSHOP24&utm_source=Google&utm_medium=PMaxAds&utm_campaign=DotShop2024&gad_source=1&gclid=CjwKCAjwpbi4BhByEiwAMC8JnUgReRm0xkfKtrqzzscMyIKPG0S50RBvPraNsS3b6BklT0Tk1MD1qxoCr3IQAvD_BwE" target="_blank" rel="noopener noreferrer">
          <img src={piggyIcon} alt="Piggy Bank" className="domain-icon" />
        </a>
        <a href="https://www.godaddy.com/en-ph/offers/domain?isc=sem3year&countryview=1&currencyType=USD&cdtl=c_17620102975.g_139478736418.k_kwd-350064496.a_702587063945.d_c.ctv_g&bnb=b&gad_source=1&gclid=CjwKCAjwpbi4BhByEiwAMC8JnV0-JRiKGA-Xl8rOJbvpTxSEyMcEj7M1wyKxUdatn_RCntmuPIqi-hoCn8MQAvD_BwE" target="_blank" rel="noopener noreferrer">
          <img src={godaddyIcon} alt="GoDaddy" className="domain-icon" />
        </a>
        <a href="https://www.namecheap.com/domains/domain-name-search/?gad_source=1&gclid=CjwKCAjwpbi4BhByEiwAMC8JnSZ9wP3Ec2N8PFOxpbDe9rh-ZCTZSoB86RSpmj_WhDA8VlgcDpqfchoC-4EQAvD_BwE" target="_blank" rel="noopener noreferrer">
          <img src={namecheapIcon} alt="Namecheap" className="domain-icon" />
        </a>
      </div>
    </div>
  );
};

export default DomainSearch;
