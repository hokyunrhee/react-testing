This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

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

[참고 링크 1](https://circleci.com/blog/next-testing/)
[참고 링크 2](https://medium.com/frontend-digest/setting-up-testing-library-with-nextjs-a9702cbde32d)
