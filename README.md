# electron-boilerplate-sqlite

An Electron based app for viewing your iMessage archive

```
git clone https://github.com/sjmelia/electron-boilerplate-sqlite.git
cd iMessage-Tools
npm install
npm start
```

## Featuers:
- Can open and display an iMessage database!
- Support for picture messages!
- Supports group chats!
- Display ssent and message read times (if available)!

## Todo:

- config file ✔
- Automatically load default database
- Select different iMessage database ✔
- Support for iMessage "reactions"
- Add name of message sender somewhere ✔
- Figure out how the heck group chats work ✔ (mostly)
- Video attachment support
- Make links open in default browser window
- Enable searching in message log
- Mass attachment export
- Load contacts from address book for easier identification
- **PRINTING TO PDF**

## Building a release package

Releases can only be built on the target platform.

`npm run release`

## Using native modules

If you wish to use native modules, you must run `npm run postinstall` after first install of the module.
