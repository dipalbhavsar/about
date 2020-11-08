---
title: Webpack - the Pre-Processor & Bundler, Part 8
date: "2020-11-07T10:30:00.000Z"
description: "Webpack is a module loader that you run prior to packaging your SharePoint Framework project. It takes modules with dependencies and generates static assets representing those modules."
pageImage: "tech_sharepoint_128.png"
pageCategory: "SharePoint"
pageTags: ["Technology", "SharePoint"]
pageAuthor: "Dipal Bhavsar"
pageMenu: "Technology"
---

In this section we will cover about Webpack.

SharePoint Framework customizations run client-side which means they are JavaScript based. Just like server-side projects, our SharePoint Framework projects usually consist of multiple source files.

Today’s JavaScript development has evolved to adopt concepts such as modules to handle dependencies between different components. The challenge is modules were not introduced into JavaScript until just recently and thus, not all browsers know how to handle modules.

While there are many different ways you can address this challenge, the way we do it with the SharePoint Framework is with Webpack.

Webpack is a module loader that you run prior to packaging your SharePoint Framework project. It takes modules with dependencies and generates static assets representing those modules.

This bundling of assets isn’t limited to just JavaScript files. Webpack can also bundle CSS files and images like PNGs or JPEGs.

Webpack differs from other module loaders in a few ways.

One thing it can do is code splitting which is the process of breaking things into multiple chunks. Maybe you want a bundle that contains all the vendor JavaScript you are using like JQuery or react while another bundle has just your application code? Or maybe you have a big application and what it broken into multiple bundles so you can lazy load one part only if the user goes to that part of the app. That is where code splitting comes into play.

Webpack also introduces a concept of loaders. A loader can transform code prior to bundling it. A loader we will leverage in our SharePoint Framework projects is the TypeScript loader. We want to transpile the TypeScript to JavaScript prior to bundling the JavaScript into a single file.

The other aspect you will find useful with webpack is plugins. Plugins let you extend Webpack to meet your needs. For instance, you can have a plugin that minifies your code, removes duplicate code, or does other things to your code as part of the bundling process.

Webpack is built on top of Node.js. In addition, unlike other tools we’re using in our development toolchain, we do not need to explicitly install Webpack. Webpack is referenced by the packages Microsoft includes within the default scaffolding defined by the generator.

Webpack’s bundling process is controlled using a JavaScript configuration file. Microsoft’s build process is creating this file in memory during the build so there’s nothing for us to do. That is good and bad… good because it’s one less thing to worry about, but it’s bad because it’s a little harder to configure it. Then again, most of the time you can just let it do the default stuff.

At this point, we have reached an end to the look at each of the different tools in the development toolchain. 
