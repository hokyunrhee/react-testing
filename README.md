TDD 방식을 이용하여 만든 간단한 Counter App

## Installing and setting up Jest for testing

```bash
npm install -D jest @testing-library/react @testing-library/jest-dom @testing-library/dom babel-jest
```

babel.config.js : configuration file to instruct babel-jest to use the custom preset for Next.js.
```js
module.exports = {
  presets: ["next/babel"]
};
```

jest.config.js
```js
module.exports = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
  }
};
```

package.json
```
...
"scripts": {
    ...
    "test": "jest"
},
...
```

## Mocking static assets

\_\_mocks__/fileMock.js
```js
module.exports = "placeholder-file";
```

\_\_mocks__/fileMock.js
```js
module.exports = {};
```

## Adding tests

\_\_tests__/HomeTest.js
```jsx
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "../pages/index";

test("Check for Getting Started Text", () => {
  const { getByText } = render(<Home />);
  expect(getByText("Get started by editing")).toBeInTheDocument();
});
```

## .eslintr.js env 수정
jest 글로벌 변수를 추가하지 않으면 eslint 규칙에 걸리게 됩니다.
```js
module.exports = {
  ...
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  ...
};

```

[참고 링크 1](https://circleci.com/blog/next-testing/)
[참고 링크 2](https://medium.com/frontend-digest/setting-up-testing-library-with-nextjs-a9702cbde32d)
