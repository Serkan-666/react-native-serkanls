# react-native-serkanls

serkanls first package

## Installation

```sh
npm install react-native-serkanls
npm install react-native-nfc-manager
```

## IOS Setup

```sh
cd ios
pod install
cd ..
```

/ios/Info.plist
```js
<key>NFCReaderUsageDescription</key>
<string>Bla Bla</string>
<key>com.apple.developer.nfc.readersession.iso7816.select-identifiers</key>
<array>
    <string>A0000002471001</string>
</array>
```

/ios/[folderName].entitlements
```js
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>aps-environment</key>
    <string>development</string>
    <key>com.apple.developer.nfc.readersession.formats</key>
    <array>
        <string>TAG</string>
    </array>
</dict>
</plist>
```
## Android Setup


## Usage


```js
import { multiply } from 'react-native-serkanls';

// ...

const result = multiply(3, 7);
```


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)

