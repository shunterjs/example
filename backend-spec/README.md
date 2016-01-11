
# Example Shunter Application Back End Specification

If a back end doesn't exist in the language or framework of your choice, feel free to create one. Your application will need to comply with this specification.


## Naming

If you want your back end to be housed under this GitHub organisation, you'll need to name it using the following pattern. If you're using a framework, you should include this in the repo name as well.

```
example-backend-<language>
example-backend-<language>-<framework>
```

Examples:

```
example-backend-node
example-backend-ruby-sinatra
```


# Structure

You should use a directory structure that makes sense in the language/framework context you have decided on, however you must include a `Procfile` which defines a single `web` process that runs the application. E.g:

```
web: node .
```


## Data

The application must not rely on a database, instead loading data from JSON. The JSON data to use can be found in [`data/venues.json`](data/venues.json). There are also images in the `data` folder, these should be copied into your application as well.


## Endpoints

The application must implement the following endpoints. All other endpoints should error with a `404` status code.

### Home (`/`)

```
HTTP/1.1 200 OK
Content-Type: application/x-shunter+json

{
    "layout": {
        "template": "home"
    },
    "data": {
        "title": "Lunch Places",
        "venues": [
            <venue>,
            <venue>,
            <venue>
        ]
    }
}
```

Where each `<venue>` is a venue object (you can find venue data in [`data/venues.json`](data/venues.json)).

### Venue (`/<slug>`)

```
HTTP/1.1 200 OK
Content-Type: application/x-shunter+json

{
    "layout": {
        "template": "venue"
    },
    "data": {
        "title": "<venue-name> - Lunch Places",
        "venue": <venue>
    }
}
```

Where `<venue>` is the venue data that corresponds to `<slug>`, and `<venue-name>` corresponds to the `name` property of that venue (you can find venue data in [`data/venues.json`](data/venues.json)).

### Venue Image (`/<slug>.jpg`)

```
HTTP/1.1 200 OK
Content-Type: image/jpg
...
```

Where the image served matches the given `<slug>` (you can find images in the [`data` folder](data)).


### Random (`/random`)

```
HTTP/1.1 302 Found
Location: /<slug>
```

Where `<slug>` is a random slug taken from the venue data (you can find venue data in [`data/venues.json`](data/venues.json)).
