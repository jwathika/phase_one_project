# Moringa phase_one_project

# Languages used

Javascript, HTML, CSS

# Description

Get top programmers as provided by wakatime's dashboard in a given area.

API - https://wakatime.com/api/v1/leaders

Dashboard - https://wakatime.com/leaders

Country specific dashboard - https://wakatime.com/leaders?country_code=KE

Just append ?country_code=(shortcode e.g KE for Kenya) after the URL

# Features

1. Able to search different countries
2. Search amongst the top ranked
3. See the top languages per user
4. Sort according to name, hours e.t.c

# Users

1. People who might be looking for developers
   2 .You can see the most used languages amongst developers
2. See active developers in your area

# Challenges:

1. Data from API was hard to sort
2. Search query not passing to backend from frontend
3. API can't be fetched using Node>v.20
4. Limited API, can't use POST, PUT, DELETE

# Future fixes:

1. Better the frontend
2. Able to see developers GitHub
3. Pagination

# Usage:

Ensure you have node<=19 and npm installed

```
git clone https://github.com/jwathika/phase_one_project && cd phase_one_project
```

```
npm install
```

```
npm dev
```

Then open http://localhost:3000 on your browser
