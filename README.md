What the hell is this?
======================

It is a direct copy of meteor's built-in `application-configuration` 
package with one change: 

_it allows you to specify a mongo database to connect via your settings json file._

*NOTE: Versions of this package follow meteor release versions for simplifying compatibility tracking.*

How to Use
==========

```
mrt add application-configuration
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