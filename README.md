# syft.js
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fmatthew-mcateer%2Fsyft.js.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fmatthew-mcateer%2Fsyft.js?ref=badge_shield)


## Resources

  - [Setup Repo](./readmes/setup.md)
  - [Interactive Console](./readmes/interactive-console.md)
  - [Contribute](./readmes/contribute.md)
  - [TypeScript Style Guidelines](./readmes/style-guidelines.md)
  - [MNIST Tutorial](https://github.com/OpenMined/tutorials/tree/master/beginner/Syft.js/getting-started-mnist-model)

## install with npm from github
```
$ npm install --save OpenMined/syft.js#master
```

TypeScript example:
```javascript
import * as syft from 'syft'
```

JavaScript example:
```javascript
const syft = require('syft')

let t = await syft.FloatTensor.create([
  [1,2],
  [3,4]
])

console.log(await t.toString())
```


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fmatthew-mcateer%2Fsyft.js.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fmatthew-mcateer%2Fsyft.js?ref=badge_large)