# @chainlink/anchor-adapter

## 1.3.0

### Minor Changes

- af5e5d832: update anchor EA to derive the USD/bETH price using the new method. This new method relies on pulling the stETH/ETH price from the pool's Curve contract. Because of this, a new optional environment variable named 'STETH_POOL_CONTRACT_ADDRESS' has been added with a default of '0xdc24316b9ae028f1497c275eb9192a3ea0f67022'

### Patch Changes

- Updated dependencies [ab17812c7]
  - @chainlink/ea-bootstrap@1.11.2
  - @chainlink/token-allocation-adapter@1.1.3
  - @chainlink/ea-test-helpers@1.1.0
  - @chainlink/terra-view-function-adapter@1.1.15

## 1.2.4

### Patch Changes

- 9041e0252: refactorted config into folder, moved ea presets into adapter folders, changed validator to accept ea presets
- Updated dependencies [341f2bd4d]
- Updated dependencies [07c013666]
- Updated dependencies [9041e0252]
  - @chainlink/ea-bootstrap@1.11.1
  - @chainlink/token-allocation-adapter@1.1.0
  - @chainlink/terra-view-function-adapter@1.1.14
  - @chainlink/ea-test-helpers@1.1.0

## 1.2.3

### Patch Changes

- @chainlink/token-allocation-adapter@1.1.1

## 1.2.2

### Patch Changes

- Updated dependencies [b858d0b9f]
  - @chainlink/token-allocation-adapter@1.1.0

## 1.2.1

### Patch Changes

- Updated dependencies [eecdac90b]
  - @chainlink/ea-bootstrap@1.11.0
  - @chainlink/token-allocation-adapter@1.0.38
  - @chainlink/ea-test-helpers@1.1.0
  - @chainlink/terra-view-function-adapter@1.1.13

## 1.2.0

### Minor Changes

- 8c00ee1fd: add and set default values for env vars

### Patch Changes

- Updated dependencies [57be274ff]
- Updated dependencies [540e563a9]
- Updated dependencies [72f96124d]
  - @chainlink/ea-bootstrap@1.10.6
  - @chainlink/ea-test-helpers@1.1.0
  - @chainlink/token-allocation-adapter@1.0.37
  - @chainlink/terra-view-function-adapter@1.1.12

## 1.1.25

### Patch Changes

- Updated dependencies [4865d3b46]
  - @chainlink/ea-bootstrap@1.10.5
  - @chainlink/token-allocation-adapter@1.0.36
  - @chainlink/ea-test-helpers@1.0.1
  - @chainlink/terra-view-function-adapter@1.1.11

## 1.1.24

### Patch Changes

- Updated dependencies [4d6b8a050]
  - @chainlink/ea-bootstrap@1.10.4
  - @chainlink/token-allocation-adapter@1.0.35
  - @chainlink/ea-test-helpers@1.0.1
  - @chainlink/terra-view-function-adapter@1.1.10

## 1.1.23

### Patch Changes

- Updated dependencies
  - @chainlink/ea-bootstrap@1.10.3
  - @chainlink/token-allocation-adapter@1.0.34
  - @chainlink/ea-test-helpers@1.0.1
  - @chainlink/terra-view-function-adapter@1.1.9

## 1.1.22

### Patch Changes

- Updated dependencies [452ba71f0]
  - @chainlink/ea-bootstrap@1.10.2
  - @chainlink/token-allocation-adapter@1.0.33
  - @chainlink/ea-test-helpers@1.0.1
  - @chainlink/terra-view-function-adapter@1.1.8

## 1.1.21

### Patch Changes

- Updated dependencies [4476ff385]
  - @chainlink/ea-bootstrap@1.10.1
  - @chainlink/token-allocation-adapter@1.0.32
  - @chainlink/ea-test-helpers@1.0.1
  - @chainlink/terra-view-function-adapter@1.1.7

## 1.1.20

### Patch Changes

- de5d083e8: removed throw when input is invalid. Validator handles internally
- Updated dependencies [de5d083e8]
- Updated dependencies [de5d083e8]
- Updated dependencies [99ed864d0]
- Updated dependencies [de5d083e8]
  - @chainlink/ea-bootstrap@1.10.0
  - @chainlink/token-allocation-adapter@1.0.31
  - @chainlink/terra-view-function-adapter@1.1.6
  - @chainlink/ea-test-helpers@1.0.1

## 1.1.19

### Patch Changes

- Updated dependencies [6b3fa8c3c]
- Updated dependencies [da1207541]
- Updated dependencies [1b6d4f1dd]
  - @chainlink/token-allocation-adapter@1.0.30
  - @chainlink/ea-bootstrap@1.9.1
  - @chainlink/ea-test-helpers@1.0.1
  - @chainlink/terra-view-function-adapter@1.1.5

## 1.1.18

### Patch Changes

- Updated dependencies [a74101705]
- Updated dependencies [703b60579]
  - @chainlink/ea-bootstrap@1.9.0
  - @chainlink/token-allocation-adapter@1.0.29
  - @chainlink/ea-test-helpers@1.0.1
  - @chainlink/terra-view-function-adapter@1.1.4

## 1.1.17

### Patch Changes

- Updated dependencies [1b54ee913]
- Updated dependencies [1b54ee913]
  - @chainlink/terra-view-function-adapter@1.1.3
  - @chainlink/ea-bootstrap@1.8.0
  - @chainlink/token-allocation-adapter@1.0.28
  - @chainlink/ea-test-helpers@1.0.1

## 1.1.16

### Patch Changes

- Updated dependencies [dfc4545b3]
  - @chainlink/ea-bootstrap@1.7.1
  - @chainlink/token-allocation-adapter@1.0.27
  - @chainlink/ea-test-helpers@1.0.1
  - @chainlink/terra-view-function-adapter@1.1.2

## 1.1.15

### Patch Changes

- Updated dependencies [85360aa9]
  - @chainlink/ea-bootstrap@1.7.0
  - @chainlink/token-allocation-adapter@1.0.26
  - @chainlink/ea-test-helpers@1.0.1
  - @chainlink/terra-view-function-adapter@1.1.1

## 1.1.14

### Patch Changes

- @chainlink/token-allocation-adapter@1.0.25

## 1.1.13

### Patch Changes

- Updated dependencies [f272a595]
- Updated dependencies [1d55bbde]
- Updated dependencies [ccf9d4fa]
  - @chainlink/ea-bootstrap@1.6.0
  - @chainlink/terra-view-function-adapter@1.1.0
  - @chainlink/token-allocation-adapter@1.0.24
  - @chainlink/ea-test-helpers@1.0.1

## 1.1.12

### Patch Changes

- Updated dependencies [9b3cd511]
  - @chainlink/ea-bootstrap@1.5.0
  - @chainlink/token-allocation-adapter@1.0.23
  - @chainlink/ea-test-helpers@1.0.1
  - @chainlink/terra-view-function-adapter@1.0.14

## 1.1.11

### Patch Changes

- @chainlink/token-allocation-adapter@1.0.22

## 1.1.10

### Patch Changes

- @chainlink/token-allocation-adapter@1.0.21

## 1.1.9

### Patch Changes

- @chainlink/token-allocation-adapter@1.0.20

## 1.1.8

### Patch Changes

- @chainlink/token-allocation-adapter@1.0.19

## 1.1.7

### Patch Changes

- @chainlink/token-allocation-adapter@1.0.18

## 1.1.6

### Patch Changes

- Updated dependencies [1b015ae2]
  - @chainlink/ea-bootstrap@1.4.0
  - @chainlink/token-allocation-adapter@1.0.17
  - @chainlink/ea-test-helpers@1.0.1
  - @chainlink/terra-view-function-adapter@1.0.13

## 1.1.5

### Patch Changes

- Updated dependencies [39e18f66]
  - @chainlink/ea-bootstrap@1.3.6
  - @chainlink/token-allocation-adapter@1.0.16
  - @chainlink/ea-test-helpers@1.0.1
  - @chainlink/terra-view-function-adapter@1.0.12

## 1.1.4

### Patch Changes

- Updated dependencies
  - @chainlink/ea-bootstrap@1.3.5
  - @chainlink/token-allocation-adapter@1.0.15
  - @chainlink/ea-test-helpers@1.0.1
  - @chainlink/terra-view-function-adapter@1.0.11

## 1.1.3

### Patch Changes

- Updated dependencies [790b2fa4]
  - @chainlink/ea-bootstrap@1.3.4
  - @chainlink/token-allocation-adapter@1.0.14
  - @chainlink/ea-test-helpers@1.0.1
  - @chainlink/terra-view-function-adapter@1.0.10

## 1.1.2

### Patch Changes

- Updated dependencies [946b778c]
  - @chainlink/ea-bootstrap@1.3.3
  - @chainlink/token-allocation-adapter@1.0.13
  - @chainlink/ea-test-helpers@1.0.1
  - @chainlink/terra-view-function-adapter@1.0.9

## 1.1.1

### Patch Changes

- Updated dependencies [a212f2cb2]
- Updated dependencies
  - @chainlink/ea-bootstrap@1.3.2
  - @chainlink/token-allocation-adapter@1.0.12
  - @chainlink/ea-test-helpers@1.0.1
  - @chainlink/terra-view-function-adapter@1.0.8

## 1.1.0

### Minor Changes

- 5bd4a7a0: make terra contract address param optional

## 1.0.1

### Patch Changes

- Updated dependencies [9e3e1cbb6]
- Updated dependencies [a3b352bb5]
- Updated dependencies [97bbbfc69]
  - @chainlink/ea-bootstrap@1.3.1
  - @chainlink/token-allocation-adapter@1.0.11
  - @chainlink/ea-test-helpers@1.0.1
  - @chainlink/terra-view-function-adapter@1.0.7

## 1.0.0

### Major Changes

- 10c20e90: First anchor adapter implementation

### Minor Changes

- beedc2bf: Remove required API KEY from anchor adapter

### Patch Changes

- Updated dependencies [b78f8e06]
- Updated dependencies [c93e5654]
- Updated dependencies [ccff5d7f]
  - @chainlink/ea-bootstrap@1.3.0
  - @chainlink/token-allocation-adapter@1.0.10
  - @chainlink/ea-test-helpers@1.0.1
  - @chainlink/terra-view-function-adapter@1.0.6
