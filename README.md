# user.js deployment script
Implements a custom user.js with [Arkenfox](https://github.com/arkenfox/user.js) as a base with various overrides applied

## Relevant files
- `chrome/userChrome.css`
  - Adds custom CSS rules that are applied to the makeup of the actual browser window. Currently it:
    - Hides the visiblity of the tab bar and sidebar.
- `user-overrides.js`
  - Implements modified `user_prefs` that are overlayed ontop of Arkenfox as well as stock Firefox that are tailored to my liking
- `deploy.sh`
  - Script that does currently two things:
    1. Download Arkenfoxes `updater.sh` and `prefsCleaner.sh` scripts, then execute those scripts from within the specified profile directory
    2. Deploy the `userChrome.css` file into the specified profile directory
  - The script does not determin where the target profile is so the full path must be specified as a command line argument (preferably surrounded by quotes)

## Notable extensions to install
(mostly for as a personal reminder)

- [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/)
  - its good for you!
- [Tree Style Tabs](https://addons.mozilla.org/en-US/firefox/addon/tree-style-tab/)
  - Because `userChrome.css` hides the tab bar, this extension can be used as an alternative.
