---
title: 'Keeping Data Private'
slug: 'keeping-data-private'
lang: 'en'
date: '2020-05-26'
author: 'Robert Charles Hay'
---

I found an interesting whitepaper today explaining the functionality of a peer to peer encrypted messaging service built into the chrome browser; The functionality leverages the RTVDataChannel and RTCPeerConnection apis. What I liked about it is that other than needing a server to setup the IP addresses of each client - the messaging is done exclusively from browser to browser. Of course the limitations of this technology are that if you don't have the webpage opened at the time you aren't able to subscribe to the sent messages and read them - also they will dissapear when you close the window. I wonder if using a web worker in the background there would be a way to persist the information even when the user isn't active? pretty exciting stuff.

Today I reorganized our Google Cloud infrastructure to exist in Montreal datacenters (because I want to keep all information within Canada). This means that I had to relegate the cloud functions to the nether realm. I don't think this should be a problem and will help keep pricing down as I will need to worry about one less Google service being billed. How does a developer even protect themselves from someone spamming a cloud function? I know I can protect the response with a token validating middleware, but the function is still invoked even if the credentials fail... whats to stop a malicious party from just spamming the endpoint? ... maybe getting rid of those things was a good call for more than one reason.

Charles Hay
<br>Founder, habichat

