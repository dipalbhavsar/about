---
title: Yeoman - the Project Creator, Part 6
date: "2020-09-10T10:30:00.000Z"
description: "Onetime installation for successfully run the project -Quick start with sample"
pageImage: "tech_sharepoint_128.png"
pageCategory: "SharePoint"
pageTags: ["Technology", "SharePoint"]
pageAuthor: "Dipal Bhavsar"
pageMenu: "Technology"
---

In the last section, we have gone through Node.js, NPM, version manager and it's installation. 

This section is mostly cover about Yeoman. It is also related about installation, though it is  easier as I classify this as something you don’t need to learn a whole lot about, rather it’s just one of those “install and mostly forget about it” type things.

Yeoman helps you kickstart new projects with a simple command line tool. By simply running yo and the name of a generator, Yeoman will ask you a few questions before building out the project scaffolding. This ensures you have the same starting point with every SharePoint Framework project.

Think of it as the alternative to Visual Studio’s File => New Project dialog if you’re coming from a traditional SharePoint or .NET Framework development background.

Yeoman is built on top of Node.js. In fact, you install it on your machine as a global NPM package using the command npm install -g yo.

Yeoman is just the engine. Once that is installed you then need to get a generator. A generator is a plugin that you run with Yeoman that knows how to ask specific questions before creating the project scaffolding.

<p style="font-size: 25px;">Yeoman + SharePoint Framework</p>

Microsoft created a generator for the SharePoint Framework that they have published for our use. This is what you will use to create new client-side web part projects.

The generator is in a Microsoft-scoped package named @microsoft/generator-sharepoint. You will install this the same way you installed yeoman, as a globally installed NPM package.

Just run npm install @microsoft/generator-sharepoint -g to tell NPM to install the package globally. Once installed, running it is then as simple as executing yo @microsoft/sharepoint from the command line. The generator will first ask you a few questions about your project. Then it will scaffold the project by creating the folders & files you will need based on the questions you answered.

After the project structure is complete, it will then run NPM install to acquire all the packages referenced in the package.json file that you will need. This includes things like the SharePoint workbench, gulp tasks you will use and other libraries you need to get started.

You can tell the generator to avoid this last step of downloading all the packages by including the flag --skip-install. This is useful if you want to defer downloading all the packages later or if you want to use a different package manager other than NPM.

In the v1.5.1 release of the SharePoint Framework, Microsoft introduced the --package-manager flag that allowed us to specify with package manager the generator should run so you could do this all in one step if you liked.

That’s all there is to Yeoman… just install it with a generator and you are good to go… nothing more to learn! In tomorrow’s installment in the series, I’ll introduce you to Gulp, the tool with a funny name that will do a lot of work for you!