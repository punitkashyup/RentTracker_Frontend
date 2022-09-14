Mobile, desktop and website Apps with the same code
Build Status Dependency Status devDependency Status

This project shows how the source code can be architectured to run on multiple devices. As of now, it is able to run as:

iOS & Android Apps (based on react-native)
a Website App in any browser (based on react)
A demo for the Website App is available here.

Screenshots
Mobile Apps (iOS & Android)
Mobile Apps

Desktop Apps (NW & Electron)
Desktop App

Website App
Website App

Libraries/tools
This project uses libraries and tools like:

How to build/run the projects
General requirements before running any specific project
npm install to install all the dependencies, React and React Native among others.
With some versions of npm (>=v3.3.10 <=v3.6.0)
Some builds from npm included bugs while npm install. So if you are using a npm version within the range form 3.3.10 to 3.6.0 included, you must run npm install twice. Those versions including npm v3.3.12 are the ones bundled by default with node from version v5.1.0 to v5.5.0.

npm install npm
npm install npm run it twice, because of the packages won't be installed after the first run #10985
The Mobile Apps (iOS & Android)
Requirements for React Native
iOS
OS X
Xcode 6.3 or higher is recommended (Xcode only runs on Mac).
Homebrew is the recommended way to install node, watchman, and flow.
brew install node
brew install watchman. We recommend installing watchman, otherwise you might hit a node file watching bug.
brew install flow. If you want to use flow.
Android
Follow the official documentation guide here: http://facebook.github.io/react-native/docs/getting-started.html#android-setup (includes experimental Windows & Linux support)
Running the Mobile Apps
iOS
Open iosApp.xcodeproj and hit run in Xcode.
Hit cmd+R in your iOS simulator to reload the app and see your change!
Android
Open an emulator. (Genymotion or run android avd)
Run the react-native run-android in the root of this project.
If trying to run on a device, read the following guide: http://facebook.github.io/react-native/docs/running-on-device-android.html#content
Congratulations! You've just successfully run the project as an iOS or Android App.

The Website App
Requirements for React
There isn't any additional requirements since you already installed the deps with npm install.

Quick start
npm run build to build the project (at least the first time)
npm run serve-web to preview in the browser at http://localhost:8000/index.web.html or http://localhost:8000/webpack-dev-server/index.web.html with webpack-dev-server and hot reload enabled
Congratulations! You've just successfully run the project as a Website App.

The Desktop App
You can either run the project with NW or electron.

Requirements for NW
To run the project, you are supposed to run something like:

/path/to/nw .

On OSX, the executable binary is in a hidden directory within the .app file. The easier solution to install it is to download the app on http://nwjs.io/ then copying it to your application folder. You will now be able to run:

/Applications/nwjs.app/Contents/MacOS/nwjs .

You can also setup an alias to call the binary.

alias nw="/Applications/nwjs.app/Contents/MacOS/nwjs"

Quick start with NW
npm run build to build the project (at least the first time)
npm run serve-nw to launch the desktop app and enable livereload
Congratulations! You've just successfully run the project as a Desktop App.

Quick start with Electron
npm run build to build the project (at least the first time)
npm run serve-electron to launch the desktop app and enable livereload
Congratulations! You've just successfully run the project as a Desktop App.

Run the tests
To run the tests, simply run:

npm test
Tests
