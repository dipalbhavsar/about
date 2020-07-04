---
title: SPFx Development with Node.js and TypeScript, Part 4
date: "2020-07-01T00:00:00.000Z"
description: "What components and technologies are required to build the toolchain and how?"
pageImage: "tech_sharepoint_128.png"
pageCategory: "SharePoint"
pageTags: ["Technology", "SharePoint"]
pageAuthor: "Dipal Bhavsar"
pageMenu: "Technology"
---

In previous section we have covered what tools and frameworks were required to do SharePoint Framework development. We should not stop here. 

Developer could have different categories, some of them are having little or some experience with client side technologies or tools, some of them are having core .Net, Java or I say, strong object oriented technology experience or some of them are having mix of technologies experience.

Let's explore what other tools are required in order to develop SharePoint client side webpart. 

We will go deep about tools and technologies. I also drew some parallels to the tools you are familiar with as a traditional SharePoint or .NET developer. In this section, I want to emphasis about each of the different components that make up the build toolchain - let's make it simplify.  

why do we need all this stuff?

Microsoft could have done a much better job in explaining this from the start, but they didn’t nor have they done a good job of clearing it up. So in this installment, I want to take a minute and tell you what you need to know and what you can ignore as part of this build & development toolchain.

Let me start by saying you do not need to become an expert or well versed in all these things. While you may need them, some you can install & ignore they are even used.

In my opinion, you only need to be understand how to use NPM and TypeScript. You need to get familiar with TypeScript as that is the language you will be writing and as for NPM, you need to get familiar with it as that’s the tool you will use when you want to update your toolchain as well as find, install and update external libraries you are going to use in your projects.

Presently, you don't need to worry about the things like Node.js, Yeoman, Gulp, and Webpack. Sure, you can learn a lot about them, but you can get by just fine with just installing them and letting the tools Microsoft provides to run & configure them for you.

You NEED to know NPM and TypeScript
You need to know NPM and how it works for one simple reason: you will use this in every single project to acquire, manage and upgrade dependencies in your SharePoint Framework project. It has become the standard for reusable package and Node.js package distribution for web developers.

Sure we have NuGet, but it wasn’t until recently that NuGet was supported off a Windows environment… and that support is quite limited at that. Plus, NuGet can only handle package distribution. There is no concept of installing global utilities in NuGet.

So because you will use NPM in every single project, I think you need to learn the commands.
Furthermore, you do need to learn TypeScript. OK, you don’t have to learn TypeScript, but you really should… at least in my opinion. It's sort of like back in the day when every code sample Microsoft was shipping early on was C# and all the VB developers were constantly asking for VB.NET samples.

Microsoft will continue to use TypeScript as their language of choice for client-side development so you might as well get familiar with it if you are going to work in the SharePoint Framework space. But if you want to stick with pure JavaScript, you can do that too just tag things with any type, configure the TypeScript compiler to not report errors and warnings on certain things or just ignore them when you compile as all JavaScript is valid TypeScript.

You can install, but then essentially ignore Node.js, Gulp, Yeoman, and Webpack
Really? Yup! Here’s why: first, the only reason you need Node.js is that all the other tools (NPM, Gulp, Yeoman, Webpack and the TypeScript compiler) are all built on Node.js. Therefore you need it to run these tools. But once installed, you don’t care about it anymore. You don’t write a Node.js program at any time… you just install it and forget about it.

Gulp, as you see, is used to run tasks like building or deploying code. While you can learn to build your own custom tasks, you do not need to. Microsoft has given you all the tasks you need for most SharePoint Framework development so you just need to know how to type the command to get it going. For instance, to start the local workbench environment, just type gulp serve.

Yeoman is very much like Gulp in this sense. You need it to scaffold up your projects, but you do not need to know how to write your own generators. Instead, you just need to know how to run the generator which can be boiled down to three keystrokes at the command prompt: yo<enter>.

As for Webpack, I’m going to explain more detail how this is used, but this is by far the easiest to ignore. Why? Because first, you never even install it! Microsoft’s default setup is to include a copy of Webpack in every single project scaffolding. Now, I’m not saying that’s a good practice… I’m not sure it is, but I'm not saying it. ;) Webpack needs a configuration file which is created by Microsoft’s build process in memory. Therefore you never see it, you never call it, and Microsoft does all the configuration of it for you.

Hopefully, this has cleared up some things that were a bit intimidating or gave you pause. In future installments, I’ll look at each of these things in a bit more detail and explain why you need them, how you install them and how they work. We will start tomorrow with Node.js & NPM. See you then!
