This beautiful theme from the [webstax](https://main--webstaxx.netlify.app/) gives you the styling and scaffolding for your next e-commerce site. You can customize to your heart's content and add the tooling for cart, transactions, product, and more. This theme uses:

- [Webstax](https://main--webstaxx.netlify.app/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Prettier](https://prettier.io/)
- [React Helmet](https://github.com/nfl/react-helmet)

Take a look at the screenshot below or preview the live site here: https://lottoscloset.netlify.app/
![full page screenshot](lottoscloset_netlify_app.jpeg)

## Project Structure

Here is a bit of an overview of the directory structure of the project:

| Directory | Description |
| :---- | :---- |
| `src/components/` | Stores reusable elements across the site. (e.g. BlogPreview element) |
| `src/pages/` | Stores routes for a user to go to based on each `.js` file and nested folder (e.g. `src/pages/about.js` creates a route `/about` in the web app) |
| `src/helpers` | Stores mock data for the blog or product list and general utility functions. |

### Making changes to the Hero component

On the homepage of the website and a few other places, there is a full-width image component. We refer to this as the `<Hero/>` component. Here is a bit of an overview of what its API looks like:

```jsx
<Hero
  maxWidth='500px' // how big the image's maxumim should be
  image={'/banner1.png'} // the source location for the image
  title={'Essentials for a cold winter'} // the main text displayed
  subtitle={'Discover Autumn Winter 2024'} // text found below the main text
  ctaText={'shop now'} // the presented text for a user to click on
  ctaAction={goToShop} // the location the call-to-action text directs users
/>
```

You can see it in action under [`src/pages/index.js`](./src/pages/index.js) or see the component in [`src/components/Hero/Hero.js`](./src/components/Hero/Hero.js).

### Making content changes to the Header or Footer

The project contains a file named `src/config.json`. Inside of this file describes the content of the header links (`headerLinks`) as well as the footer links (`footerLinks`). For the header, each element in the array has a base structure of:

```json
{
  "menuLabel": "The label that is given to a user",
  "menuLink": "The URL that this should take a user to"
}
```

If you want the menu item to have a dropdown, you can also add a `category` key with the value being an array of the categories and their containing elements, here's what the base could look like:

```json
{
  "menuLabel": "The label that is given to a user",
  "menuLink": "The URL that this should take a user to",
  "category": [
    {
      "categoryLabel": "Label you want the category to have",
      "submenu": [
        {
          "menuLabel": "A label underneath the category",
          "menuLink": "The associated link to this label"
        }
      ]
    }
  ]
}
```

The footer works in a similar way. It assumes each element in the array has a heading and an array of associated links to direct folks to:

```json
"footerLinks": [
    {
      "subTitle": "Label of the column in the footer",
      "links": [
        {
          "text": "Text to display to the user",
          "link": "URL of where to take the user to when clicked"
        },
      ]
    }
]
```