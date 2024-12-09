---
id: 5
slug: allow-action-method-to-be-accessed-only-by-anonymous-user-in-asp-net-core-mvc
published: true
title: Allow action method to be accessed only by anonymous user in Asp.Net Core MVC
date: '2018-08-31 15:36:05 +0530'
date_gmt: '2018-08-31 15:36:05 +0530'
image: '/05/featured.jpg'
category: Asp.Net Core
tags:
  - Asp.Net Core
  - Asp.Net Core 2.1
  - Asp.Net Core 2.2
---

In this tutorial let's see how to allow a controller/action method to be accessed only by an anonymous user in Asp.Net Core MVC project.

In every project we globally restrict the application to access only authenticated users. But where ever requires `[AllowAnonymous]` attribute is used to allow anonymous access.

In some scenario page should be accessed only to anonymous users and logged in users should not. In this case Asp.Net Core has no built in filter, so we are going to implement the custom filter attribute to do the magic.

First create a class file `AnonymousOnlyFilter.cs`

```
public class AnonymousOnlyFilter : ActionFilterAttribute
{
    public override void OnActionExecuting(ActionExecutingContext context)
    {
        if (context.HttpContext.User.Identity.IsAuthenticated)
        {
            context.Result = new RedirectToActionResult("Index", "Home","");
        }
    }
}
```

In this class we are deriving `ActionFilterAttribute` class and overriding `OnActionExecuting` method to check if the user is authenticated.

If user is authenticated, that request will be redirected to the Home page.

To see the filter in action, use the filter attribute to a Controller or an Action method.

```
public class HomeController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
    [AnonymousOnlyFilter]
    public IActionResult About()
    {
        ViewData["Message"] = "Your application description page.";
        return View();
    }

    [AnonymousOnlyFilter]
    public IActionResult Contact()
    {
        ViewData["Message"] = "Your contact page.";
        return View();
    }

    [AnonymousOnlyFilter]
    public IActionResult Privacy()
    {
        return View();
    }

}

```

Hope this guide is helpful for you.
