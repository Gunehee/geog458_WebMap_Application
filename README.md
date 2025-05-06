# Web Map Application
This project is called a 'Web Map Application,' using a raw data set and visulaize two thematic maps of COVID-19 in 2020. Map 1 is indicating the US Covid rates in 2020 with layer by rates per county. The Map 2 indicating the US Covid counts in 2020 with different number of cases within a county. 
The data I used for this project are came from [The New York Times](https://github.com/nytimes/covid-19-data/blob/43d32dde2f87bd4dafbb7d23f5d9e878124018b8/live/us-counties.csv) and [the U.S. Census Bureau](https://www.census.gov/geographies/mapping-files/time-series/geo/carto-boundary-file.html).

# US Covid rates map in 2020 - Map 1

![Rates map](https://github.com/Gunehee/geog458_WebMap_Application/blob/main/img/Map1Ratesmap.png)

This is a choropleth map of the US using data in 2020 that visualize Covid rates in each county. Depending on the range of rates, each county has a different color. You can view the rate of people of each county by moving your mouse on the map. The primary function of this map is to show the Covid cases through data elements by area. I used [the U.S. Census Bureau](https://data.census.gov/table?g=0100000US$050000&d=ACS+5-Year+Estimates+Data+Profiles&tid=ACSDP5Y2018.DP05&hidePreview=true) as a data source for map 1.

[Here](http://127.0.0.1:5500/map1.html) is a link to the map 1 (Rates map)

# US Covid counts map in 2020 - Map 2

![Counts map](https://github.com/Gunehee/geog458_WebMap_Application/blob/main/img/Map2Countsmap.png)

This is a proportional symbols map that visulaize counts the number of cases in the US by county. Each different size of circles indicate the scale of cases. You can view the number of COVID cases by clicking the circle.The primary function of this map is to show the specific number of cases in certain points through symbolism. I used [the U.S. Census Bureau](https://www.census.gov/geographies/mapping-files/time-series/geo/carto-boundary-file.html) as a data source for map 2.

[Here](http://127.0.0.1:5500/map2.html) is a link to the map 2 (Counts map)



