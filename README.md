# IPL Dashboard

A data visualization app for analysing and visualising various aspects of the Indian Premier League by making use of [this dataset.](https://www.kaggle.com/harsha547/indian-premier-league-csv-dataset)

Working Demo : [here](https://ipl-data-viz.herokuapp.com/)

## List of Frameworks/Libraries used

1.  Core : React - Found it to be the best among Angular,Vue.Data Visualization involves lot of Dom Re-renders and due to the concept of virtual dom , re-renders are very fast in React.
2.  UI : Ant design - Very rich react component library
3.  Data-viz: Recharts - Provides react wrappers over famous data visualiztion library D3 library.

## Bonus Points

1.  Make it offline usable - The app saves the component state(implemented in season component) in the localstorage ,then rehydrates the app on refresh from the localStorage rather from fetching data from the api(in this case static json file).
2.  Make it responsive - Made it responsive.
3.  Optimize load time - Load time can be optimized by rendering the initial page at server side .But since shortage of time could not do it.
