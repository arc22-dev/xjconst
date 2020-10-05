# xjconst node js cli

## about package

this is is simple url shortener nodejs cli made by `@anishh.arc` user in instagram, it contains simple and easy commands to generate short urls form long urls with time expirations and user limits

## installation

```
npm install xjconst
```
or in short
```
npm i xjconst
```
or globally
```
npm i -g xjconst
```

## usage

`xjconst --help` for help and options

`xjconst --version` for checking version

`xjconst -n YOURNAME` to hello your name (required)

### more options

same as `-n YOURNAME` for `-c URL` for creating url, `-s SHORTKEY` or `-s URLID` for searching into database

alternatively you can use `--name` for `-n` , `--create` for `-c` and `--search` for `-s`

### advance options

use while shortening url with `-c` or `--create` if needed for expirations

`-d` or `--day` and numeric days example `-d 1` for 1 day
`-h` or `--hour` and numeric hour example `-h 1` for 1 hour
`-m` or `--minute` and numeric minute example `-m 1` for 1 minute
`-u` or `--user` and numeric users allowed example `-u 11` for 11 users

### examples

creating a short url

```
xjconst -n . -c https://github.com/arc22-dev/xjconst
```

creating a short url with expiration

```
xjconst -n . -c https://github.com/arc22-dev/xjconst -d 1 -h 1 -m 1 -u 11
```

searching urls `all`

```
xjconst -n . -s all
```

in a short url example `xjconst02.cf/digit6` "digit6" is a short url key and their id must be numeric and unique like 1, 2, 3... etc.

```
xjconst -n . -s digit6
```

or by id

```
xjconst -n . -s 5
```

## message

everyone's suggestions are welcome, this cli is in a demonstrating stage several release will come out shortly with good servers anf features, do follow.

*[@anishh.arc](https://instagram.com/anishh.arc) - instagram*