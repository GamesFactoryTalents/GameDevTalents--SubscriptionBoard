# Games Job Fair applicants List

## Installation to netlify

### Get zoho credenitials
You can use the same refresh token as tbform project is using, it is okay

0. Go to https://api-console.zoho.eu/ and create a Self-Client there
1. "Generate code" for "ZohoRecruit.modules.ALL", put whatever to "Scope description" 
2. Get refresh token via
```
curl --location --request POST 'https://accounts.zoho.eu/oauth/v2/token?grant_type=authorization_code&code=<generatedCode>&client_id=<client_id>&client_secret=<client_secret>&redirect_uri=https://www.com'
```

### Install to netlify 

1. Make sure the code is in the internet-accessible git repository. Can be a private GitHub one
2. On netlify make a site for this repository. Choose whichever domain you like
3. If netlify isn't able to detect build command and directory, use these:
- build command: `npm run build`
- publish direcory: `build/` 
4. In the site settings (e.g. https://app.netlify.com/sites/tblist/settings/deploys#environment ) set the following environment variables:
```
CLIENT_ID - from Zoho Credentials
CLIENT_SECRET - from Zoho Credentials
REFRESH_TOKEN - refresh token obtained in the previous section
JOB_OPENING_ID - an id of job opening from whoch to show candidates
TARGET_STATUS - candidates of which status to list
```
5. Rebuild the site. This is all


## Development notes

Building the app needs two steps:
1. Fetch from Zoho a list of candidates for the given job id and status
2. Build the react app with this list

### npm run generate

This requires the following environment vars to be set:
- `REFRESH_TOKEN`
- `CLIENT_ID`
- `CLIENT_SECRET`
- `JOB_OPENING_ID`
- `TARGET_STATUS`

So the full command line on Linux or Mac would look as

```
REFRESH_TOKEN=abc123 CLIENT_ID=cli123 CLIENT_SECRET=clisec123 JOB_OPENING_ID=someJobOpeningId TARGET_STATUS="Submitted-to-FGCD" npm run generate
```

### npm start
After the generation was done `npm start` will start the local development server on the port 3000

### npm run build
This script both fetches data from zoho AND builds the optimized production build

# Setting up a job opening id and status to show candidates for
Just set `JOB_OPENING_ID` and `TARGET_STATUS` environment variables

# Choosing different set of fields to show

1. In `generateCandidates.js` edit mapping of zoho field names to grid field names in `ZOHO_TO_GRID_MAPPING`
2. Edit set of AgGridColumn tags in `src/App.js`
