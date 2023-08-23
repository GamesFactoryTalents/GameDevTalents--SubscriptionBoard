const countries = [
  {
    "label": "Afghanistan"
  },
  {
    "label": "Åland Islands"
  },
  {
    "label": "Albania"
  },
  {
    "label": "Algeria"
  },
  {
    "label": "American Samoa"
  },
  {
    "label": "Andorra"
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
    "label": "Austria"
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
    "label": "Belarus"
  },
  {
    "label": "Belgium"
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
    "label": "Bosnia and Herzegovina"
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
    "label": "Bulgaria"
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
    "label": "Croatia"
  },
  {
    "label": "Cuba"
  },
  {
    "label": "Curaçao"
  },
  {
    "label": "Cyprus"
  },
  {
    "label": "Czech Republic"
  },
  {
    "label": "Côte d'Ivoire"
  },
  {
    "label": "Denmark"
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
    "label": "Estonia"
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
    "label": "Faroe Islands"
  },
  {
    "label": "Fiji"
  },
  {
    "label": "Finland"
  },
  {
    "label": "France"
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
    "label": "Germany"
  },
  {
    "label": "Ghana"
  },
  {
    "label": "Gibraltar"
  },
  {
    "label": "Greece"
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
    "label": "Guernsey"
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
    "label": "Hungary"
  },
  {
    "label": "Iceland"
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
    "label": "Ireland"
  },
  {
    "label": "Isle of Man"
  },
  {
    "label": "Israel"
  },
  {
    "label": "Italy"
  },
  {
    "label": "Jamaica"
  },
  {
    "label": "Japan"
  },
  {
    "label": "Jersey"
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
    "label": "Latvia"
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
    "label": "Liechtenstein"
  },
  {
    "label": "Lithuania"
  },
  {
    "label": "Luxembourg"
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
    "label": "Malta"
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
    "label": "Moldova"
  },
  {
    "label": "Monaco"
  },
  {
    "label": "Mongolia"
  },
  {
    "label": "Montenegro"
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
    "label": "Netherlands"
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
    "label": "North Macedonia"
  },
  {
    "label": "Northern Mariana Islands"
  },
  {
    "label": "Norway"
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
    "label": "Poland"
  },
  {
    "label": "Portugal"
  },
  {
    "label": "Puerto Rico"
  },
  {
    "label": "Qatar"
  },
  {
    "label": "Romania"
  },
  {
    "label": "Russian Federation"
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
    "label": "San Marino"
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
    "label": "Serbia"
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
    "label": "Slovakia"
  },
  {
    "label": "Slovenia"
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
    "label": "Spain"
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
    "label": "Svalbard and Jan Mayen"
  },
  {
    "label": "Sweden"
  },
  {
    "label": "Switzerland"
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
    "label": "Ukraine"
  },
  {
    "label": "United Arab Emirates"
  },
  {
    "label": "United Kingdom"
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

module.exports = countries;
