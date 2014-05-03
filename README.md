What the hell is this?
======================

It is a direct copy of meteor's built-in `application-configuration` 
package with one change: 

_it allows you to specify a mongo database to connect via your settings json file._

*NOTE: Versions of this package follow meteor release versions for simplifying compatibility tracking.*

How to Use
==========

(because this has the same name as the built-in package we want to override we have to do this differently)

Edit your smart.json to include this under the packages section:

```
"application-configuration": {
  "git": "https://github.com/usefulio/meteor-application-configuration.git",
  "tag": "v0.8.1"
}
```

Change the tag to whatever meteor version you want that there is a release of this package for.


Tell meteor to use it:

```
meteor add application-configuration
```

In your settings file:

```
{
	"mongo_url": "mongodb://<dbusername>:<dbpassword>@<databaseurl>:<databaseport>/<databasename>?autoReconnect=true"
	, "mongo_oplog_url": "mongodb://<oplogusername>:<oplogpassword>@<databaseurl>:<databaseport>/local?authSource=admin"
}
```

When you deploy:

```
mrt deploy applicationname.com --settings path/to/your/settings/file.json
```

If you don't set `mongo_url` and/or `mongo_oplog_url` meteor will fall back to using the environment variables, as usual.