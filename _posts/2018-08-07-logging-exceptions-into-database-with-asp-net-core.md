---
id: 4
slug: logging-exceptions-into-database-with-asp-net-core
published: true
title: Logging Exceptions into Database with Asp.Net Core
date: '2018-08-07 14:14:20 +0530'
date_gmt: '2018-08-07 14:14:20 +0530'
image: '/04/featured.jpg'
category: Asp.Net Core
tags:
  - Asp.Net Core
  - '.Net Core'
  - Asp.Net Core 2.1
  - Asp.Net Core 2.2
---

Each and every project requires exceptions to be logged in database. In this tutorial we are going to implement one of the method of database logger using Exception filter in Asp.Net core MVC project.

First let's create LogEntry Model:

```
#Models/LogEntry.cs
public class LogEntry
{
    public int Id { get; set; }
    public DateTime TimeStamp { get; set; }
    public string RequestId { get; set; }
    public string Message { get; set; }
    public string Type { get; set; }
    public string Source { get; set; }
    public string StackTrace { get; set; }
    public string RequestPath { get; set; }
    public string User { get; set; }
    public string ActionDescriptor { get; set; }
    public string IpAddress { get; set; }
}
```

Next create a separate DbContext for exception logging. Why separate DbContext? Okay There are some scenarios where there will be an exception thrown while executing SQL command, if we use same DbContext to log the exception, Entity Framework cannot save the LogEntry to database, since the object which incurred the exception would still be available on DbContext. When we save the LogEntry, both the objects would be sent to database, again it throws the exception and LogEntry would not be saved.

Let's create LogDbContext:

```
#Data/LogDbContext.cs

public class LogDbContext : DbContext
{
public LogDbContext(DbContextOptions options
:base(options)
{
}
public DbSet LogEntries { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
    }

}

```

Now we create Exception filter extension to catch and log the exception into database.

```
#Filters/DblExceptionFilter.cs

public class DblExceptionFilter : ExceptionFilterAttribute
{
private readonly LogDbContext \_context;
public DblExceptionFilter(LogDbContext context)
{
\_context = context;
}
public override void OnException(ExceptionContext context)
{
LogEntry log = new LogEntry
{
TimeStamp = DateTime.UtcNow,
ActionDescriptor = context.ActionDescriptor.DisplayName,
IpAddress = context.HttpContext.Connection.RemoteIpAddress.ToString(),
Message = context.Exception.Message,
RequestId = Activity.Current?.Id ?? context.HttpContext.TraceIdentifier,
RequestPath = context.HttpContext.Request.Path,
Source = context.Exception.Source,
StackTrace = context.Exception.StackTrace,
Type = context.Exception.GetType().ToString(),
User = context.HttpContext.User.Identity.Name
};
\_context.LogEntries.Add(log);
\_context.SaveChanges();
}
}

```

Now let's add the `DblExceptionFilter` into service block in `starup.cs` class.

```
public void ConfigureServices(IServiceCollection services)
{
    ...
    services.AddScoped<DblExceptionFilter>();
    ...
}
```

Then create a `BaseController` class that is derived from Controller base class and add `DblExceptionFilter` as service.

```
#Controllers/BaseController.cs
using System;
using ExceptionDbLogger.Filters;
using Microsoft.AspNetCore.Mvc;

namespace ExceptionDbLogger.Controllers
{
[ServiceFilter(typeof(DblExceptionFilter))]
public class BaseController : Controller
{
}
}

```

So where ever you create a custom controller for your application just derive that controller from `BaseController`. Where there is an unhandled exceptions occurs, that will be logged into database.

Hope this tutorial is helpful. Source code of this implementation is available [here](https://github.com/vinothvkr/ExceptionDbLogger) in my Github profile. If you have questions, post it on comment below.
