# React Conditional

## A simple conditional component with support for fallback for your react projects.

## Installation

### npm

```
  npm i @pandeymangg/react-conditional
```

### yarn

```
  yarn add @pandeymangg/react-conditional
```

## Usage

```
  // Import in your project
  import { Conditional } from '@pandeymangg/react-conditional';

  export const Component = ({age}: {age: number}) => {
    return (
      <div>
        <Conditional
          condition={age > 13}
          fallback={
            <h1>You are not eligible!</h1>
          }
        >
          <h1>You are eligible!</h1>
        </Conditional>
    </div>
    )
  }
```
