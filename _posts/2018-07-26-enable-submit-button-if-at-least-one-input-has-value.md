---
id: 3
slug: enable-submit-button-if-at-least-one-input-has-value
published: true
title: Enable submit button if at least one input has value
date: '2018-07-26 13:52:24 +0530'
date_gmt: '2018-07-26 13:52:24 +0530'
image: '/03/featured.jpg'
category: JQuery
tags:
  - JavaScript
  - JQuery
---

There are some scenarios where submit button is enabled if at least one input has value. This tutorial will show you how to enable the submit button if you enter something into a text box, select drop down and check a check box.

Let's have a simple Html form:

```
<form class="cc-form">
  <input type="email" id="email" class="email" name="email">
  <input type="text" id="name" class="name" name="name">
  <input type="text" id="city" class="city" name="city">
  <select name="dropdown" id="dropdown" class="dropdown">
    <option value="" selected>Choose...</option>
    <option value="1">...</option>
  </select>
  <input name="checkbox" type="checkbox" value="true">
  <button type="submit" id="search">Search</button>
</form>
```

jQuery:

```
$(document).ready(function(){
  validateButton();
  $('.cc-form input:text').keyup(validateButton);
  $('.cc-form select').change(validateButton);
  $('.cc-form input:checkbox').change(validateButton);
});

function validateButton() {
var validation = true;
$('.cc-form input:text, .cc-form select').each(function(){
    if ($.trim($(this).val()).length > 0) {
validation = false;
}
});

$('.cc-form input:checkbox').each(function() {
    if($(this).filter(':checked').length > 0) {
validation = false;
}
});

if(validation){
$('#search').attr('disabled', 'disabled');
} else {
$('#search').removeAttr('disabled', 'disabled');
}
}

```

On document ready function `validateButton();` is being called, so on page load, form will be validated and if there is no value, button will be disabled.

When ever keyup event occurs on any input text type `$('.cc-form input:text').keyup(validateButton);` calls the `validateButton();` and validates the form.

If dropdown change event occurs `$('.cc-form select').change(validateButton);` will call `validateButton();` function.

Finally if a checkbox is checked or unchecked, change event `$('.cc-form input:checkbox').change(validateButton);` fires up and call our `validateButton();` function.

Let's see what our `validateButton();` does.

When ever the function called, it will set the variable `validation` to true to disable the button if there is no value. `$('.cc-form input:text, .cc-form select').each(function(){ });` select input and select fields then loop it. `$.trim($(this).val()).length > 0` if any field has value greater than 0 `validation` variable set to false.

Line previously `$('.cc-form input:checkbox').each(function(){});` select the check boxes and do the same.

Finally if `validation` variable is true `$('#search').attr('disabled', 'disabled');` disabled property is added to search button to disable it. Else `$('#search').removeAttr('disabled', 'disabled');` disabled property is being removed and search button is enabled.

Hope this tutorial was helpful. Working demo can be found [here](https://vinothvkr.github.io/demo/js-submitbutton/). If required source code is available [here](https://github.com/vinothvkr/demo/blob/master/js-submitbutton/index.html) in Github.
