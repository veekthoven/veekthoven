---
title: How I [Finally] created my personal website
description: >
 While building this website, i struggled with making decisions about what tools to use. In this article, i share the tools i used and my rationale for using them. Hopefully, I am going to save someone the agony of making the same decision. 
postedAt: 2020-07-10T19:50:00.000Z
image: 
 url: https://veekthoven.com/article-1.png
 caption: Photo created with carbon.now.sh
tags:
 - Nuxt
 - Vue
 - jamstack
---
Building a personal website/portfolio was something I’ve always struggled to do like most developers. Most developers don’t have personal websites not because it is not necessary or because it is difficult to build, I think the only explanation to this irony is just indiscipline; Most people, like me, find it difficult to do stuff that doesn’t immediately translate to them getting money. It gets even more difficult when you have project owners breathing down your neck to deliver and when you have multiple deadlines to meet. At such times, spending time doing *seemingly* trivial things is just difficult.

 

Anyway, I finally did it, and I am thankful I did. Funny enough, it took me just about a total of 5 hours to build it, though not on one sitting. So, it was just the decision to start that was so hard.

 

As a developer, one of the hardest things to do – aside naming things, of course – is deciding which tools to use, especially when you have a lot of them that achieve the same thing, and perfectly so. I spent a significant amount of time deciding what to use. 

 

So, I just want to share the tools I used and my rationale for using them, hopefully I am going to save someone the agony of making the same decision.

 

Let’s get to it.

 

### Language/ Framework

This was a major decision because this will eventually decide the rest of the tools. The option was between PHP (Laravel) or JavaScript (Vue). If I go with Laravel, I have to start thinking about what cloud hosting platform to use, server set up and so on. If I go with Vue, I could easily just use the amazing [Jamstack](https://jamstack.org/) and host it on any static website hosting platform like Netlify, Vercel and so on.

 

After much thought, I felt like using Laravel would be an overkill. The amount of complexity Laravel would introduce to my toolchain would be unnecessary. I just wanted a straight-to-the-point website with few pages and a blog functionality, *Dassall.* Nothing too fancy.

 

So, I went with my beloved [Vue.js](https://vuejs.org/).

 

### Static Site Generation

I wanted a blazing fast website. I mean, there’s no serious thing going on apart from telling people about me. The most complex thing here should be the blog section, so the website should be fast. My best bet for the speed I am looking for is a statically generated site, that is, a website whose pages are pre-rendered ahead of each request at build time. This is another reason I picked Vue over Laravel – Speed. Not because Laravel is normally slow of course. But you can’t compare the speed of a Laravel app (No matter how optimized it is) with a static website.

 

In the world of Vue, deciding which framework to use for SSG is a no brainer. I used [NuxtJs](https://nuxtjs.org/).

 

### Blog Section

This is where things became interesting.
 

I needed some sort of content management system (CMS) to manage my blog. This would *normally* require a database or at least connecting to an API to fetch/store content. But these would be me going back to that same complexity I ran away from. I didn’t want to do that.

The core maintainers of nuxt are really a hardworking set of guys. Always creating awesome modules to solve common problems when using nuxt.

Prior to building my website, I stumbled on a tweet from [@nuxt_js](https://twitter.com/nuxt_js) introducing a module called [@nuxt/content](https://github.com/nuxt/content).

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Introducing @nuxt/content ✍️<br><br>The content/ directory for your Nuxt app, acting as a git-based headless CMS.<br><br>✅ Vue components in Markdown<br>✅ Powerful QueryBuilder API<br>✅ Handles MD, CSV, YAML, JSON<br>✅ Blazing fast hot reload in dev<br>✅ Syntax highlighting<a href="https://t.co/lkUMhx6Mmg">https://t.co/lkUMhx6Mmg</a> <a href="https://t.co/eCZCT5Occa">pic.twitter.com/eCZCT5Occa</a></p>&mdash; Nuxt.js (@nuxt_js) <a href="https://twitter.com/nuxt_js/status/1263795755954909184?ref_src=twsrc%5Etfw">May 22, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

 It has awesome features. It allows you to write in a content/ directory and fetch your Markdown, JSON, YAML and CSV files through a MongoDB like API, acting as a Git-based Headless CMS


You get to write your posts in Markdown thereby eliminating the need for a real backend, database or calling an external API. This markdown files are stored in the same project, so fetching them would be ultra-fast! – Something I was looking for.

So, for the blog section, I used @nuxt/content created by the awesome guys at Nuxt. 


### Images

The website is text-focused, so I made sure there was just one image (of me) in the homepage. That image is photographed by my friend [Oshey](https://twitter.com/oshey_mahn). Oshey is a rapper as well, enjoy his latest album [here](https://soundcloud.com/oshey_mahn/sets/thefireinme).
 

Each blog post has a featured image that I usually just hotlink from [unsplash.com](https://unsplash.com/). Unsplash is a website dedicated to sharing stock photography under the Unsplash license.

So, the images are courtesy of Oshey’s and unsplash.com’s benevolence.

 

### Styling

For styling the website, I had 3 options: Vanilla CSS, Bootstrap or TailwindCSS.

I went with the latter because I am beginning to have a thing for utility-first CSS frameworks. Styling HTML with TailwindCSS feels like writing inline CSS; you get to stay in the HTML without having to write a single line of CSS 99% of the time. So, there’s no switching between HTML files and CSS files.

 

### SEO

Since I am going to be writing a lot of technical content, I needed to make sure the website is search engine optimized so that my articles will appear at the top of search engine result pages (SERP’s). Nuxt comes with this functionality baked in, however, you would still need to provide the correct data to be used in the meta data in the head section, once again, Nuxt uses one of their official plugins called [vue-meta](https://vue-meta.nuxtjs.org/) to make this a cinch.

  

I also had to include a sitemap for the website. For that, I used this module: https://github.com/nuxt-community/sitemap-module.

 

### Analytics

Maybe this is an overkill, but I wanted to be seeing the analytics of the traffic I get. For that I used google analytics. For this, i used this https://github.com/nuxt-community/analytics-module.

 

### Branded Emails

You probably have noticed my email: [holla@veekthoven.com](mailto:holla@veekthoven.com). There are many services that offer this. I went with Zoho.com. I’ve been using them for a while and I’ve not had any regrets. Their basic version is quite generous. Just 300NGN/month or $1/month.  I highly recommend.
 

### Newsletter

Something I always wanted to do was to build a newsletter email list. There’s no better time to do it than now that I have content to be sending to my subscribers.

For this, I used convertkit.com. They also have a generous free-tier plan. That is what I am using.

 

### Domain Name

I bought the domain name (veekthoven.com) from [Qservers.net](https://www.qservers.net/) for just 3900NGN. Great guys with a responsive customer support. I recommend.
 

### Hosting

For the first week of launching my website, it was hosted on Netlify. But I started noticing a bug on the article pages. All effort to fix that issue proved abortive, so I decided to try changing the host and see if it could be a Netlify issue. I switched to Vercel (formerly ZEIT) the creators of Next.js, and to my surprise, the error disappeared. I still can’t explain this mystery.

### Miscellaneous

There are little note-worthy packages and tools I used.

I created two little node commands that help me create and publish articles easily. All I have to do is to fire up my terminal and run 

```bash
node create-post –-title=”Post title”
```

and it will create a markdown file titled post-title.md with a boiler plate for me to start writing my blog post. And when I am done writing, all I need do it is run

```bash
node publish-post
```

and voila, my post is published for the world to see. Awesome *sturvs!*

For that node command, I used two NPM packages: [slug](https://github.com/Trott/slug) and [yargs](http://yargs.js.org/). Below is the code for both commands.

 
```js[create-post.js]
var slug = require('slug')

const { exec } = require("child_process");

var argv = require('yargs')
	.usage('Usage: $0 --title=[String]')
	.demandOption(['title'])
	.argv;

let title = slug(argv.title)
 
exec(`cp example.md content/${title}.md`)
```


```js[publish-post.js]
const { exec } = require("child_process");

exec('git add . && git commit -m "new article" && git push')
```
 

I wanted to give my readers an estimate of the time it will take them to read a post. I used an NPM package called [reading-time](https://github.com/ngryman/reading-time) for that.

 

Also, to display the time a blog post was published in a human-readable format, I used  [moment.js](https://momentjs.com/)

 

That’s it y’all! 