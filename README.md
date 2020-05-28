# Notification Wizard

## Using

Clone this repo by running:

```
git clone git@github.com:pawanjangid24/notification-wizard.git
```

Enter the project folder and install the dependencies:

```
npm install
```

To start a development server and use the `example` app to load the component, type:

```
npm start
```

Open `http://localhost:8000`.

---

## Styles

This component was made to work as plug and play. For that, a handcrafted style was added to it and is used as inline CSS.

You can change this style by overriding the default inline styles or disable all inline styles and use your own styles.

### Overriding

For this, use the `style` prop to pass an object with your styles. Your object must be something like this:

```js
var style = {
  NotificationItem: { // Override the notification item
    DefaultStyle: { // Applied to every notification, regardless of the notification level
      margin: '10px 5px 2px 1px'
    },

    success: { // Applied only to the success notification item
      color: 'red'
    }
  }
}

