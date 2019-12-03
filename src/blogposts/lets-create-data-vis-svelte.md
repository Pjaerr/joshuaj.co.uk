---
isHidden: false
path: "/blog/lets-create-data-vis-svelte"
date: "2019-11-25"
title: "Lets Create: A Data Visualization using Svelte"
description: "In this article we'll create a data visualization using the Svelte.js framework that shows, on a map of the UK, which regions have contributed most to English Premier League title wins since its creation in 1992."
---

If you haven't heard of [Svelte](https://svelte.dev/), it is a relatively new JavaScript framework that challenges the norm by being shifting the bulk of the work from the browser to the compile step.

In doing that, it brings many benefits, most notably, the ability to ship less code to the browser (as you don't need the entire library like with frameworks such as React or Vue). It does a bunch more stuff like scrapping the virtual DOM but I won't be talking about any of that as, in my opinion, the main benefit of Svelte is how easy it is to get started and how nice it is to use from a development perspective.

## What are we going to build?

So now we have gotten the intro out of the way, let's talk about what we're going to build and why.

When learning a new language/framework it is often de-facto to just build a todo app as it covers most bases and lets you see its usage within a sort of real-world application but to me a todo app is really boring, I use one everyday but I don't really want to build one. That's where this idea comes in.

We're going to create a _Data Visualization_ using Svelte. This data visualization will show, on a map of the UK & Ireland, which regions have contributed most to the English Premier League title wins since its creation in 1992. The main reason I chose this topic is that there is so much data available, but it is also scoped small enough for an article (hopefully 🤞).

You can find a demo of this data visualization at the following link: LINK_HERE

or you can just view the gif below:

## Setup 🛠️

I won't go too deep into setting up Svelte as there are already guides on this, but the steps below should be enough to get started:

1. Run `npx degit sveltejs/template premier-league-data-vis`
2. Run `cd premier-league-data-vis`
3. Run `npm install`
4. Delete the contents of the default `App.svelte` and `main.js` files.
5. Run `npm run dev`

## The Data 📊

For this project we will need the following data:

- Each team that has won the premier league since its creation in 1992.
- For each team that has won, the season they won and the squad that played in the season they won.
- A list of players from the UK and Ireland who had atleast 1 appearance for a winning team and the region they were born in.

To get the football data I will be using the following [website](https://www.worldfootball.net/winner/eng-premier-league/) and then for each player I will just search for the region they are from.

Our data will look something like the following,

Every player:

```javascript
;[
  {
    name: "Marc Albrighton",
    regions: ["Staffordshire"],
  },
]
```

and each season:

```javascript
{
  "season": "2015/2016",
  "winner": "Leicester City",
  "players": [
    {
      "name": "Marc Albrighton",
      "appearances": 38
    }
  ]
}
```

Fortunately, you don't have to go through and grab all of the data as I have already done so.

In your project, create a folder in `src` called `Data` and then create the following files:

- `Players.js` - This will have every player and the region[s] they are from.
- `Titles.js` - This will have each premier league season, the team that won it and the squad they won it with.
- `Regions.js` - We'll get to this in the next section, but this will hold each region of our map.

You can then populate these files with the data at the following link: [https://github.com/Pjaerr/Svelte-Data-Vis-Premier-League/src/Data](https://github.com/Pjaerr/Svelte-Data-Vis-Premier-League/src/Data)

## The Map 🗺️

Now we have our data, we need the map. For this project I will be using a map of the UK and Ireland that I found [here](https://mapsvg.com/maps/united-kingdom-counties/). We can download this map as an SVG but we won't be directly using it as an SVG. For our purposes we need each `<path>` within the SVG to be seperated out. This is where our `Regions.js` file comes in.

Feel free to just copy the contents of the file from Github to speed things up, but if you feel like spending the time, you should do the following:

1. Open up the downloaded SVG in a text editor.
2. In the `Regions.js` file, we want to export a default array that has objects inside of it, these objects will have a name and an svgPath property.
3. For each `<path>` in the SVG, create an object in the `Regions.js` file with the name of the region and the svgPath.

Your `Regions.js` file should look something like this:

```javascript
export default [
  {
    svgPath: "M642.97,979.16L643.67,982.94L647.4,986...",
    name: "Bedfordshire"
  },
  {
    svgPath:"M612.68,1061.2L613.28,1059L614.67,1058.64L...",
    name: "Berkshire"
  },
  ...
]
```

## The <MapContainer> Component 🗺️ → 📦

This is our first _component_, but before we begin, let's write the code that will actually hold our application.

Edit the `main.js` file to include the following code:

```javascript
import App from "./App.svelte"

//Here we use intro:true so that transitions run on initial load.
const app = new App({
  target: document.body,
  intro: true,
})

export default app
```

This is our entry file, this is the only file that is not actually written in the "Svelte" syntax (I say that loosely as Svelte is very similar to JavaScript).

We create a new instance of our `App.svelte` component and tell it to add itself to the body of the page using `target: document.body`. We then tell it that we want any animations/transitions on this component and its children to happen when we first load the component. (By default Svelte only plays animations/transitions when a component is mounted for a second time). We do this by adding the `intro: true` property, this is important as we want to animate the map by drawing it when you first load the page.

Once you have done this, you won't see anything on the page as you need to edit the `App.svelte` file. As a test, let's pull in our Regions and put their names onto the screen using a Svelte `#each` loop.

In the `App.svelte` file:

```html
<script>
  import Regions from "./Data/Regions.js"
</script>

{#each Regions as { name }}
<h1>{name}</h1>
{/each}
```

Here we import the Regions array from `Regions.js` as you do with normal JavaScript, we then create an `#each` loop and then for each item in the Regions array, we put an `<h1>` tag onto the page with the name of the region inside.

Your page should have reloaded and you should now seen the name of each region on the page.

Now we have our basic setup, let's actually create our `<MapContainer>` component. This component will just be an SVG that lets us put any valid SVG code inside of it and it will be used to house the svgPaths of our regions. This way we can seperate our regions (which are just svg paths) from their parent SVG element.

Start by creating a folder called `Components` inside of the `src` folder. Inside of that folder, create a new file called `MapContainer.svelte`

In the `MapContainer.svelte` file:

```html
<script>
  let width = "100%"
  let height = "100%"
</script>

<svg width="{width}" height="{height}"></svg>
```

This a is a very simple component that defines a width and height and then creates and SVG element with that width and height. Obviously nothing will display on the page as there is nothing inside of the SVG and we haven't even imported it into our `App.svelte` file.

Let's make it so we can pass in a width and height to our component when we create it. You do this by placing `export` in front of variables within the JavaScript. This tells Svelte that we wish to provide values when we instantiate the component.

We can also simplify the usage of the width and height as attributes because they are named the same by just removing the `width=` part on the svg element.

```html
<script>
  export let width = "100%"
  export let height = "100%"
</script>

<svg {width} {height}></svg>
```

If no value is given for width or height, they will fallback to `"100%"`, you can also choose not to provide a default value and in that case it will default to `undefined` when nothing is provided.

Let's remove the example code and put it on our page,

In the `App.svelte` file:

```html
<script>
  import MapContainer from "./Components/MapContainer.svelte"
</script>

<MapContainer width="800px" height="600px" />
```

You should now be able to see an empty SVG element on the page if you inspect it using dev tools. Let's turn this into something more useful!

First let's remove the export from our width and height variables, we will be deciding this based on the elements inside of the SVG later on so we don't need to provide any values.

Next, let's create something called a `<slot>` inside of our SVG element. A slot is a feature of Svelte that allows us to decide where elements placed inside of a component when it is created should appear _inside_ the actual component.

In the `MapContainer.svelte` file:

```html
<script>
  let width = "100%"
  let height = "100%"
</script>

<svg {width} {height}>
  <g class="regions">
    <slot />
  </g>
</svg>
```

This means that we can do something like the following in the `App.svelte` file:

```html
<script>
  import MapContainer from "./Components/MapContainer.svelte"
</script>

<MapContainer>
  <rect width="300" height="100" style="fill:red" />
</MapContainer>
```

Inside of our component, it will turn into:

```html
<svg {width} {height}>
  <g class="regions">
    <rect width="300" height="100" style="fill:red" />
  </g>
</svg>
```

as the contents inside of `<MapContainer> </MapContainer>` are placed inside of the `<slot>`.

You should now see a red rectangle on the screen.

Using what we've written, let's get our map onto the page.

Let's add our `#each` loop back into the `App.svelte` file, but this time we will pull through and put the svgPath onto the page and inside of our `MapContainer` component.

```html
<script>
  import MapContainer from "./Components/MapContainer.svelte"
  import Regions from "./Data/Regions.js"
</script>

<MapContainer>
  {#each Regions as { name, svgPath }}
  <path d="{svgPath}" />
  {/each}
</MapContainer>
```

You should now see the full map on the page. What we've just done is essentially re-create the original SVG but as Svelte components.

You may notice that the map is too big, we can do two things to help us with this. In our `MapContainer.svelte` file above the svg element, we can add some CSS to scale the map.

```html
<style>
  .regions {
    transform: scale(0.75);
  }
</style>
```

This will make it so our map fits within the SVG element, but let's say we didn't know that scaling by `0.75` is the right number (cause it might not be if the contents inside of the svg are different) then we need to make sure the width and height of the svg scale to fit the content inside of it.

To do this we can use the `onMount` function in Svelte to run some code when our component is added to the page. This code should get the bounding box of our SVG once it has content inside of it and then update the width and height to match it.

In the `MapContainer.svelte` file:

```html
<script>
  import { onMount } from "svelte"

  let svg
  let width = "100%"
  let height = "100%"

  onMount(() => {
    let svgBoundingBox = svg.getBBox()

    width = svgBoundingBox.x + svgBoundingBox.width + svgBoundingBox.x
    height = svgBoundingBox.y + svgBoundingBox.height + svgBoundingBox.y
  })
</script>

<style>
  .regions {
    transform: scale(0.75);
  }
</style>

<svg {width} {height} bind:this="{svg}">
  <g class="regions">
    <slot />
  </g>
</svg>
```

We import `onMount` from Svelte and then we pass it a function to run. This function does what we described above and, when the width and height change, Svelte automatically re-renders our svg element with the updated values.

One extra thing you may have noticed is that we have a new variable called `svg` and `bind:this={svg}` on our svg element. All this does is store a reference to the actual svg element inside of the `svg` variable. In our use case, this is like doing `let svg = document.getElementById("mySvg")` if our element had the id of "mySvg". This allows us to call `getBBox()` on our svg element.

And That's it! It might seem like a lot of effort just to get our SVG onto the page when we could have just put it directly onto the page but this allows us to directly manage our regions outside of the SVG, which is important as you'll find out in the next section.

## The Basic <MapRegion> Component 🗺️ → 📦 → 📍

Now we have our SVG as a component, I think it only makes sense to make our paths into components.

Create a new component called `MapRegion.svelte` and make it take an svgPath that it will output onto the page.

In the `MapRegion.svelte` file:

```html
<script>
  export let svgPath
</script>

<path d="{svgPath}" />
```

and then in our `App.svelte` file, import our new component and replace the direct path:

```html
<MapContainer>
  {#each Regions as { name, svgPath }}
  <MapRegion {svgPath} />
  {/each}
</MapContainer>
```

We can now do some cool things, let's say we wanted to be able to specify a fill colour for our path, we'd simply export a variable and then use that variable like so:

In the `MapRegion.svelte` file:

```html
<script>
  export let svgPath
  export let fillColour = "#333"
</script>

<path d="{svgPath}" fill="{fillColour}" />
```

In the `App.svelte` file:

```html
<MapContainer>
  {#each Regions as { name, svgPath }}
  <MapRegion {svgPath} fillColour="red" />
  {/each}
</MapContainer>
```

We can also do the same thing for stroke colour and stroke width like so:

In our `MapRegion.svelte` file:

```html
<script>
  export let svgPath
  export let fillColour = "#333"
  export let strokeColour = "#fff"
  export let strokeWidth = "1px"
</script>

<path
  d="{svgPath}"
  fill="{fillColour}"
  stroke="{strokeColour}"
  style="stroke-width: {strokeWidth}"
/>
```

In our `App.svelte` file:

```html
<MapContainer>
  {#each Regions as { name, svgPath }}
  <MapRegion
    {svgPath}
    fillColour="red"
    strokeColour="white"
    strokeWidth="1px"
  />
  {/each}
</MapContainer>
```

This is our very basic `<MapRegion>` component. In the next section we'll spice things up a bit by adding a svelte transition to our map regions so they draw themselves.

## Adding Transitions to our <MapRegion> Component 🗺️ → 📦 → 📍 → 💫

One of the coolest parts about Svelte is how easy it makes animation. This is mostly because it treats it as first-class functionality.

We are going to make use of animation by using the Transition directive.

To get up and running, all we need to do is import the _draw_ transition at the top of our file:

`import { draw } from "svelte/transition";`

and then add an attribute to our SVG path that tells it to draw itself:

```html
<path
  transition:draw
  d="{svgPath}"
  class="path"
  fill="{fillColour}"
  stroke="{strokeColour}"
  style="stroke-width: {strokeWidth}"
/>
```

That results in our SVG that draws itself, although it is each path drawing itself individually:

![Basic Draw Transition](/lets-create-data-vis-svelte/basic-draw-transition.gif)

but we can make it better, let's start by specifying the speed at which we want to draw each path, we do this by changing our attribute to be:

`transition:draw={{ duration: 1500 }}`

where `1500` is the time in milliseconds the animation should take.

Now it's kind of hard to see the actual animation because of the conflicting colours. Let's flip the stroke colour and fill colour for the duration of the animation. We first start by defining a new variable in our script tags.

`let transitionEnded = false;`

and then on our path, we can add an event listener that will set our new variable to true once our transition has ended. Svelte handles all of this for us as it knows when our draw transition finishes.

`on:introend={() => (transitionEnded = true)}`

Now let's add a condition to our fill and stroke attributes to flip the colours if transitionEnded is false.

```html
<path 
transition:draw={{ duration: 1500 }} on:introend={ () => (transitionEnded = true)}
d={svgPath}
class="path"
fill={transitionEnded ? fillColour : strokeColour}
stroke={transitionEnded ? strokeColour : fillColour}
style="stroke-width: {strokeWidth}" />
```

As a final touch, let's add a CSS transition to our fill attribute so that when the fill colour is set, it doesn't just flash onto the screen.

Add the following CSS rule to the `<style>` tags:

```html
<style>
  .path {
    transition: fill 0.5s ease;
  }
</style>
```

If everything has gone smoothly, we should end up with something that looks like the following, excluding the choppy gif of course:

![Final Draw Transition](/lets-create-data-vis-svelte/finished-draw-transition.gif)

## Adding Interactivity 🖱️ ➡️ 🗺️

Now our map has some animations, let's take it a step further and make it interactive. In this section we will be making each `<MapRegion>` respond to clicks and log its name to the console.

First navigate to the `<MapRegion>` component and add an empty `on:click` event to the svg path.

```html
<path 
on:click
transition:draw={{ duration: 1500 }} on:introend={ () => (transitionEnded = true)}
d={svgPath}
class="path"
fill={transitionEnded ? fillColour : strokeColour}
stroke={transitionEnded ? strokeColour : fillColour}
style="stroke-width: {strokeWidth}" />
```

This says we don't want to handle the `on:click` event in our `<MapRegion>` component, rather we want to bubble it up and instead handle it wherever our `<MapRegion>` component is used.

We can do this easily by adding the same `on:click` event to our `<MapRegion>` component but instead of it being empty we want to print the name of the component to the console.

In the `App.svelte` file:

```html
<MapContainer>
  {#each Regions as { name, svgPath }}
  <MapRegion
    on:click={() => { console.log(name + ' clicked!') }}
    {svgPath}
    fillColour="red"
    strokeColour="white"
    strokeWidth="1px"
  />
  {/each}
</MapContainer>
```

If you open the browser and click on the different regions of the map, you should see the name of that region in the console.

Now let's make it a bit more obvious by storing which region was last clicked and showing it on the page inside of a `<h1>`

Start by creating a variable in the `App.svelte` file:

`let activeRegion;`

and then in the `on:click` event handler replace the console.log with:

`activeRegion = name;`

Finally, add a `<h1>` to the page that just contains the active region:

```html
<main class="app">
  <h1>{activeRegion}</h1>
  <div class="map-container">
    <MapContainer>
      {#each Regions as { name, svgPath }}
        <MapRegion
          on:click={() => {
            activeRegion = name;
          }}
          {svgPath}
          fillColour="red"
          strokeColour="white"
          strokeWidth="1px" />
      {/each}
    </MapContainer>
  </div>
</main>
```

If you check the browser, you'll notice that it says `undefined`, this is because we haven't set any text by default, you can just set the default text of `activeRegion` to be something like "No region selected".

Now if you click on any of the regions you'll see that it shows the region we last clicked. Although this seems simple it is a key part of how Svelte works. Svelte treats every top-level variable in your `<script>` tags as that component's state and when that state is updated, it will re-render the HTML with the updated state. This is all done for us automatically but it is important to be aware of!

As a finishing touch before we move onto the next section, let's just add a tiny bit of CSS so that our regions are highlighted when you hover over them and a condition in our `App.svelte` file so that the active region stays highlighted.

Add the following CSS in the `<MapRegion>` component:

```css
.path:hover {
    fill: #333;
  }
```

and then in the `App.svelte` file add the following ternary condition to the `fillColour` property of the `<MapRegion>` component:

```html
{#each Regions as { name, svgPath }}
  <MapRegion
    on:click={() => {
      activeRegion = name;
    }}
    {svgPath}
    fillColour={activeRegion === name ? '#333' : 'red'}
    strokeColour="white"
    strokeWidth="1px" />
{/each}
```

this says that if the active region is equal to the name of the region being rendered, then fill it in with the grey colour, if not, fill it in red as normal.

If you've done everything correctly, you should have something that looks like the following:

![Interactive Map](/lets-create-data-vis-svelte/interactive-map.gif)

## Making Sense of the Data 🔢

In this section we will be taking our data that we gathered right at the beginning of the article and making into something that we can use and visualise in our application.

The end goal of this data visualization is to have a map where each region is coloured in based on their contribution to premier league title wins and when the user clicks on a region they will be shown more information about that region and its contribution specifically.

We'll do this by first converting our region data into something more usable by joining them with the players who are from that region and then we will figure out what the colour of each region should be based on the combined number of appearances of each player that is from the region. Finally we will create a function that returns a region object with all of its data.

Let's start by making a new file called `Data.js` inside of the `Data` folder and importing all of our specific data files into it:

```javascript
import Players from "./Players";
import Regions from "./Regions";
import Titles from "./Titles";
```
Next, we want to convert the objects from the `Regions.js` file into something more usable by creating a new object for each region with the following structure:

```typescript
{
    name: string,
    players: [
        {
            name: string,
            seasons: [
                {
                    year: string,
                    team: string,
                    appearances: number
                }
            ]
        }
    ],
    appearances: number
}
```

We can do this by:
1. Looping through the array that is exported from `Regions.js`
2. For each object in that array we want to create a new object with the above structure
3. Inside of that loop, we want to loop through the array that is exported from the `Players.js` file
6. For each player, if it is from the region being looped through, add it to the new region object.
5. For each player, loop through the array that is exported from the `Titles.js` file and add every season they have won to their object.

Now don't worry if that sounded complicated, it's because it is! This could be made easier if the data was already formatted how we wanted it but that isn't often the case if we are working with external APIs so this is a good exercise. The code for this can be found below.

In the `Data.js` file:

```javascript
const regions = Regions.map(region => {
  //Create the initial new region object
  const newRegionObject = {
    name: region.name,
    players: [],
    appearances: 0
  };

  //For each of the players in the array exported from Players.js
  for (const player of Players) {
    //If the player is from the current region
    if (player.regions.includes(region.name)) {
      //Create the initial player object
      const playerObject = {
        name: player.name,
        seasons: []
      };

      //For each of the titles
      for (const title of Titles) {
        //For each of the players who won the title
        for (const winningPlayer of title.players) {
          //If the winning player is the same as our player
          if (player.name === winningPlayer.name) {
            //Add the current title to the player object
            playerObject.seasons.push({
              year: title.season,
              team: title.winner,
              appearances: winningPlayer.appearances
            });

            //Increment the overall appearances of the region by the player we just added
            newRegionObject.appearances += winningPlayer.appearances;
          }
        }
      }

      //Add the player to the region object
      newRegionObject.players.push(playerObject);
    }
  }

  return newRegionObject;
});
```

For reference an example output of this would be:

```javascript
{
  name: "Derbyshire",
  appearances: 73,
  players: [
    {
      name: "Gary Cahill",
      seasons: [
        {
          appearances: 36,
          team: "Chelsea FC",
          year: "2014/2015"
        },
        {
          appearances: 37,
          team: "Chelsea FC",
          year: "2016/2017"
        }
      ]
    }
  ]
}
```

Next let's calculate what the colour of the region should be and then store it on the region object as an rgb value. I will be using the following colour palette where the higher a region's contribution, the further down (ie. greener) it will be:

![Colour Palette](/lets-create-data-vis-svelte/colour-palette.png)