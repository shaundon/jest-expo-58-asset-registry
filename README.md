# jest-expo 58: "Module "1" is missing from the asset registry"

A blank SDK 58 app (`create-expo-app --template blank-typescript`) with `jest-expo` as the
only Jest config, and one test that renders an `@expo/vector-icons` icon.

```sh
npm install
npx jest
```

Expected: the test passes. Actual:

```
● renders an icon

  Module "1" is missing from the asset registry
```

See `Icon.test.tsx`.
