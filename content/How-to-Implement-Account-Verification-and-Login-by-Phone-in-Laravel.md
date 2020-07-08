---
title: How to Implement Account Verification and Login by Phone in Laravel
description: >
 At times, you might want to create an app that uses a phone number/password pair as a means of authentication, as opposed to the normal email/password pair. At such times, verifying that your users are giving you a valid an functional phone numbers is important. This article teaches you to do so.
postedAt: 2019-04-11T23:00:00.000Z
image: 
 url: https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=100
 caption: Photo by @pawel_czerwinski on Unsplash.
tags:
 - PHP
 - Laravel
 - Twilio
---
At times, you might want to create an app that uses a phone number/password pair as a means of authentication, as opposed to the normal email/password pair. In some other cases, you are not necessarily using phone numbers as a means of authentication, but having a phone number is critical to your app. In such situations, it is very important you verify that the phone numbers your users provide are valid and functional. One way to do this is to give them a call and tell them a code that they will have to provide to your app. If you use Gmail, then you are probably familiar with the voice call verification it uses. In this article, I showed you how to achieve that using Laravel and Twilio’s excellent service.

I wrote the post originally for Twilio's blog. You can read it [here](https://www.twilio.com/blog/implement-account-verification-login-by-phone-laravel-php) 