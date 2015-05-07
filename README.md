# nurl
Node-based Curl-like Command Line Interface Installed through NPM

### `nurl http://github.com`

## What is nurl?
Nurl is basically a port of the Curl CLI to Node. It implements Request under the hood.

## Why nurl?
Curl is annoying to install on Windows. Nurl is a lot easier because it uses NPM.

### Installation
`npm intall -g nurl`

### Usage
####`nurl <url>`

Queries a URL for you and outputs what's returned.

##### Example
    > nurl http://ipecho.net/plain
    50.172.64.1

#### `ippublic`

Queries `ipecho.net` and returns your public IP.

##### Example
    > ippublic
    50.172.64.1
