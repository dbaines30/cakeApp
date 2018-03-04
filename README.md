# cakeApp
Come and get your cakes, lovely.

The application has been written using the Ionic platform. This provides cross platform support, including Cordova and Progressive Web Apps out of the box.

You can also compile the code to platform specific binaries for publication on the relevant app stores.

# Download
From a command prompt clone this repo using the follwing command.

`git clone https://github.com/dbaines30/cakeApp`

Then move to the new directory.

`cd cakeApp`

# Installation
To install the required libraries you can use `npm` or `yarn` package managers. `Yarn` will almost certainly give faster results.

## NPM
`npm install`

## YARN
`yarn`

# Running the application
To start the application singly use the following command. 

## Mobile emulation mode:
You can select 3 different mobile systems to view the application side by side.

`ionic serve --lab`

## Desktop mode: 

`ionic serve`

# ToDo:
1. Testing - No time to setup unit testing. Specifically the CakesService should be tested as a minimum.
2. Input validation - User input should be validated for new Cakes.
3. Notification - User should be notified of success when saving Cake. Probably provided via Toast popup.
4. Desktop Experience - The app does not use the desktop space very well. On larger screen the cake list should use a card based view to see the cakes in a flow layout.
5. Lots and lots more.
