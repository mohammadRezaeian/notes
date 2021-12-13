---
layout: post
title: "Google's OAuth2 APIs"
tags: [API, Backend]
toc: true
icon: google.svg
notfull: 1
keywords: "apis request http apis application programming interface dialogflow google sdk google cloud gcp apis credentials REST postman gapi gsi sign in with google new version service account endpoint location detect intent roles tokens oauth2 oauth"
---

{% assign img-url = '/img/post/api' %}

Google's documentation is like an ocean. It's not easy to find a right one to start. This note contains only basic things that I've already worked with. Trying your own hand at Google's APIs will help you understand more.

👉 Github: [dinhanhthi/google-api-playground](https://github.com/dinhanhthi/google-api-playground) (private).
👉 Note: [Google's Dialogflow APIs](/google-dialogflow-api/)

::: warning
This note focuses on the **Server-side Web Apps** (and a little bit on the **JS Web Apps**) only.
:::

## A simple A-Z JS App using OAuth2



## A simple A-Z Server-side App using OAuth2



## Refresh an access token using HTTP/REST

👉 [Official tutorial](https://developers.google.com/identity/protocols/oauth2/web-server#offline).

Request an APIs need an *access token* <= access token expire in a period of time <= need *refresh token* (obtained on the 1st time user gives the acess to your app) <= ==We can generate a "new" access token from refresh token==.



## References

1. [Using OAuth 2.0 to Access Google APIs  |  Google Identity](https://developers.google.com/identity/protocols/oauth2) -- There are APIs for **Server-side Web Apps**, **JS Web Apps**, **Mobile & Desktop Apps**, **TV & Device Apps** and **Service Accounts**.

