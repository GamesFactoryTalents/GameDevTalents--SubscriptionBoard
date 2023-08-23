const countries = [
  {
    "label": "Afghanistan"
  },
  {
    "label": "Åland Islands",
    "region": "Europe"
  },
  {
    "label": "Albania",
    "region": "Europe"
  },
  {
    "label": "Algeria"
  },
  {
    "label": "American Samoa"
  },
  {
    "label": "Andorra",
    "region": "Europe"
  },
  {
    "label": "Angola"
  },
  {
    "label": "Anguilla"
  },
  {
    "label": "Antarctica"
  },
  {
    "label": "Antigua and Barbuda"
  },
  {
    "label": "Argentina"
  },
  {
    "label": "Armenia"
  },
  {
    "label": "Aruba"
  },
  {
    "label": "Australia"
  },
  {
    "label": "Austria",
    "region": "Europe"
  },
  {
    "label": "Azerbaijan"
  },
  {
    "label": "Bahamas"
  },
  {
    "label": "Bahrain"
  },
  {
    "label": "Bangladesh"
  },
  {
    "label": "Barbados"
  },
  {
    "label": "Belarus",
    "region": "Europe"
  },
  {
    "label": "Belgium",
    "region": "Europe"
  },
  {
    "label": "Belize"
  },
  {
    "label": "Benin"
  },
  {
    "label": "Bermuda"
  },
  {
    "label": "Bhutan"
  },
  {
    "label": "Bolivia"
  },
  {
    "label": "Bonaire, Sint Eustatius and Saba"
  },
  {
    "label": "Bosnia and Herzegovina",
    "region": "Europe"
  },
  {
    "label": "Botswana"
  },
  {
    "label": "Bouvet Island"
  },
  {
    "label": "Brazil"
  },
  {
    "label": "British Indian Ocean Territory"
  },
  {
    "label": "Brunei Darussalam"
  },
  {
    "label": "Bulgaria",
    "region": "Europe"
  },
  {
    "label": "Burkina Faso"
  },
  {
    "label": "Burundi"
  },
  {
    "label": "Cabo Verde"
  },
  {
    "label": "Cambodia"
  },
  {
    "label": "Cameroon"
  },
  {
    "label": "Canada"
  },
  {
    "label": "Cayman Islands"
  },
  {
    "label": "Central African Republic"
  },
  {
    "label": "Chad"
  },
  {
    "label": "Chile"
  },
  {
    "label": "China"
  },
  {
    "label": "Christmas Island"
  },
  {
    "label": "Cocos (Keeling) Islands"
  },
  {
    "label": "Colombia"
  },
  {
    "label": "Comoros"
  },
  {
    "label": "Congo"
  },
  {
    "label": "Cook Islands"
  },
  {
    "label": "Costa Rica"
  },
  {
    "label": "Croatia",
    "region": "Europe"
  },
  {
    "label": "Cuba"
  },
  {
    "label": "Curaçao"
  },
  {
    "label": "Cyprus",
    "region": "Europe"
  },
  {
    "label": "Czech Republic",
    "region": "Europe"
  },
  {
    "label": "Côte d'Ivoire"
  },
  {
    "label": "Denmark",
    "region": "Europe"
  },
  {
    "label": "Djibouti"
  },
  {
    "label": "Dominica"
  },
  {
    "label": "Dominican Republic"
  },
  {
    "label": "Ecuador"
  },
  {
    "label": "Egypt"
  },
  {
    "label": "El Salvador"
  },
  {
    "label": "Equatorial Guinea"
  },
  {
    "label": "Eritrea"
  },
  {
    "label": "Estonia",
    "region": "Europe"
  },
  {
    "label": "Eswatini"
  },
  {
    "label": "Ethiopia"
  },
  {
    "label": "Falkland Islands (Malvinas)"
  },
  {
    "label": "Faroe Islands",
    "region": "Europe"
  },
  {
    "label": "Fiji"
  },
  {
    "label": "Finland",
    "region": "Europe"
  },
  {
    "label": "France",
    "region": "Europe"
  },
  {
    "label": "French Guiana"
  },
  {
    "label": "French Polynesia"
  },
  {
    "label": "French Southern Territories"
  },
  {
    "label": "Gabon"
  },
  {
    "label": "Gambia"
  },
  {
    "label": "Georgia"
  },
  {
    "label": "Germany",
    "region": "Europe"
  },
  {
    "label": "Ghana"
  },
  {
    "label": "Gibraltar",
    "region": "Europe"
  },
  {
    "label": "Greece",
    "region": "Europe"
  },
  {
    "label": "Greenland"
  },
  {
    "label": "Grenada"
  },
  {
    "label": "Guadeloupe"
  },
  {
    "label": "Guam"
  },
  {
    "label": "Guatemala"
  },
  {
    "label": "Guernsey",
    "region": "Europe"
  },
  {
    "label": "Guinea"
  },
  {
    "label": "Guinea-Bissau"
  },
  {
    "label": "Guyana"
  },
  {
    "label": "Haiti"
  },
  {
    "label": "Heard Island and McDonald Islands"
  },
  {
    "label": "Holy See"
  },
  {
    "label": "Honduras"
  },
  {
    "label": "Hong Kong"
  },
  {
    "label": "Hungary",
    "region": "Europe"
  },
  {
    "label": "Iceland",
    "region": "Europe"
  },
  {
    "label": "India"
  },
  {
    "label": "Indonesia"
  },
  {
    "label": "Iran"
  },
  {
    "label": "Iraq"
  },
  {
    "label": "Ireland",
    "region": "Europe"
  },
  {
    "label": "Isle of Man"
  },
  {
    "label": "Israel"
  },
  {
    "label": "Italy",
    "region": "Europe"
  },
  {
    "label": "Jamaica"
  },
  {
    "label": "Japan"
  },
  {
    "label": "Jersey",
    "region": "Europe"
  },
  {
    "label": "Jordan"
  },
  {
    "label": "Kazakhstan"
  },
  {
    "label": "Kenya"
  },
  {
    "label": "Kiribati"
  },
  {
    "label": "Kuwait"
  },
  {
    "label": "Kyrgyzstan"
  },
  {
    "label": "Lao Democratic Republic"
  },
  {
    "label": "Latvia",
    "region": "Europe"
  },
  {
    "label": "Lebanon"
  },
  {
    "label": "Lesotho"
  },
  {
    "label": "Liberia"
  },
  {
    "label": "Libya"
  },
  {
    "label": "Liechtenstein",
    "region": "Europe"
  },
  {
    "label": "Lithuania",
    "region": "Europe"
  },
  {
    "label": "Luxembourg",
    "region": "Europe"
  },
  {
    "label": "Macao"
  },
  {
    "label": "Madagascar"
  },
  {
    "label": "Malawi"
  },
  {
    "label": "Malaysia"
  },
  {
    "label": "Maldives"
  },
  {
    "label": "Mali"
  },
  {
    "label": "Malta",
    "region": "Europe"
  },
  {
    "label": "Marshall Islands"
  },
  {
    "label": "Martinique"
  },
  {
    "label": "Mauritania"
  },
  {
    "label": "Mauritius"
  },
  {
    "label": "Mayotte"
  },
  {
    "label": "Mexico"
  },
  {
    "label": "Micronesia, Federated States of"
  },
  {
    "label": "Moldova",
    "region": "Europe"
  },
  {
    "label": "Monaco",
    "region": "Europe"
  },
  {
    "label": "Mongolia"
  },
  {
    "label": "Montenegro",
    "region": "Europe"
  },
  {
    "label": "Montserrat"
  },
  {
    "label": "Morocco"
  },
  {
    "label": "Mozambique"
  },
  {
    "label": "Myanmar"
  },
  {
    "label": "Namibia"
  },
  {
    "label": "Nauru"
  },
  {
    "label": "Nepal"
  },
  {
    "label": "Netherlands",
    "region": "Europe"
  },
  {
    "label": "New Caledonia"
  },
  {
    "label": "New Zealand"
  },
  {
    "label": "Nicaragua"
  },
  {
    "label": "Niger"
  },
  {
    "label": "Nigeria"
  },
  {
    "label": "Niue"
  },
  {
    "label": "Norfolk Island"
  },
  {
    "label": "North Macedonia",
    "region": "Europe"
  },
  {
    "label": "Northern Mariana Islands"
  },
  {
    "label": "Norway",
    "region": "Europe"
  },
  {
    "label": "Oman"
  },
  {
    "label": "Pakistan"
  },
  {
    "label": "Palau"
  },
  {
    "label": "Palestine"
  },
  {
    "label": "Panama"
  },
  {
    "label": "Papua New Guinea"
  },
  {
    "label": "Paraguay"
  },
  {
    "label": "Peru"
  },
  {
    "label": "Philippines"
  },
  {
    "label": "Pitcairn"
  },
  {
    "label": "Poland",
    "region": "Europe"
  },
  {
    "label": "Portugal",
    "region": "Europe"
  },
  {
    "label": "Puerto Rico"
  },
  {
    "label": "Qatar"
  },
  {
    "label": "Romania",
    "region": "Europe"
  },
  {
    "label": "Russian Federation",
    "region": "Europe"
  },
  {
    "label": "Rwanda"
  },
  {
    "label": "Réunion"
  },
  {
    "label": "Saint Barthélemy"
  },
  {
    "label": "Saint Helena, Ascension and Tristan da Cunha"
  },
  {
    "label": "Saint Kitts and Nevis"
  },
  {
    "label": "Saint Lucia"
  },
  {
    "label": "Saint Martin (French part)"
  },
  {
    "label": "Saint Pierre and Miquelon"
  },
  {
    "label": "Saint Vincent and the Grenadines"
  },
  {
    "label": "Samoa"
  },
  {
    "label": "San Marino",
    "region": "Europe"
  },
  {
    "label": "Sao Tome and Principe"
  },
  {
    "label": "Saudi Arabia"
  },
  {
    "label": "Senegal"
  },
  {
    "label": "Serbia",
    "region": "Europe"
  },
  {
    "label": "Seychelles"
  },
  {
    "label": "Sierra Leone"
  },
  {
    "label": "Singapore"
  },
  {
    "label": "Sint Maarten (Dutch part)"
  },
  {
    "label": "Slovakia",
    "region": "Europe"
  },
  {
    "label": "Slovenia",
    "region": "Europe"
  },
  {
    "label": "Solomon Islands"
  },
  {
    "label": "Somalia"
  },
  {
    "label": "South Africa"
  },
  {
    "label": "South Korea"
  },
  {
    "label": "South Georgia and the South Sandwich Islands"
  },
  {
    "label": "South Sudan"
  },
  {
    "label": "Spain",
    "region": "Europe"
  },
  {
    "label": "Sri Lanka"
  },
  {
    "label": "Sudan"
  },
  {
    "label": "Suriname"
  },
  {
    "label": "Svalbard and Jan Mayen",
    "region": "Europe"
  },
  {
    "label": "Sweden",
    "region": "Europe"
  },
  {
    "label": "Switzerland",
    "region": "Europe"
  },
  {
    "label": "Syria"
  },
  {
    "label": "Taiwan"
  },
  {
    "label": "Tajikistan"
  },
  {
    "label": "Tanzania"
  },
  {
    "label": "Thailand"
  },
  {
    "label": "Timor-Leste"
  },
  {
    "label": "Togo"
  },
  {
    "label": "Tokelau"
  },
  {
    "label": "Tonga"
  },
  {
    "label": "Trinidad and Tobago"
  },
  {
    "label": "Tunisia"
  },
  {
    "label": "Turkey"
  },
  {
    "label": "Turkmenistan"
  },
  {
    "label": "Turks and Caicos Islands"
  },
  {
    "label": "Tuvalu"
  },
  {
    "label": "Uganda"
  },
  {
    "label": "Ukraine",
    "region": "Europe"
  },
  {
    "label": "United Arab Emirates"
  },
  {
    "label": "United Kingdom",
    "region": "Europe"
  },
  {
    "label": "United States Minor Outlying Islands"
  },
  {
    "label": "United States"
  },
  {
    "label": "Uruguay"
  },
  {
    "label": "Uzbekistan"
  },
  {
    "label": "Vanuatu"
  },
  {
    "label": "Venezuela"
  },
  {
    "label": "Viet Nam"
  },
  {
    "label": "Virgin Islands, British"
  },
  {
    "label": "Virgin Islands, U.S."
  },
  {
    "label": "Wallis and Futuna"
  },
  {
    "label": "Western Sahara"
  },
  {
    "label": "Yemen"
  },
  {
    "label": "Zambia"
  },
  {
    "label": "Zimbabwe"
  }
];

export default countries;
