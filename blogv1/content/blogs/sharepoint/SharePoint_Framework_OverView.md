---
title: SharePoint Framework Overview
date: "2020-04-28T22:12:03.284Z"
description: "Learn about the things to pay attention to, and what to automate while reviewing code so that you can increase the speed and the quality of code reviews in your organization."
---

First off, let me welcome you in the world of SharePoint, client side development. Now a days, SharePoint Framework is much interesting since it has open wide range of offering with different technology stacks. This would be a big first step to learning the SharePoint Framework and I’m happy to help you on the road ahead.

If you have taken a look at the Microsoft's documentation, it has provided you a step wise process to learn how to start with the development starting with setting up the development environment. Here, probably we are repeating the same steps with wide information behind a purpose of the each step that covers installation, development, execution and deployment of SharePoint's client side web-parts. So let's start with overview and then gradually move which supportive NPM packages that need to be installed for the development.

<p style="font-size: 30px;">What is SharePoint Framework?</p>

Microsoft introduced the SharePoint Framework in May 2016. This is not only make client-side customization easier, but it includes APIs and dynamic ways of deploying.
Provides full support for client-side customization

Although, since beginning of SharePoint can satisfy basic collaboration and communication needs of organizations out of the box, soon after implementing a solution, many organizations may opt for going beyond the core functionality. For example, companies may want to modify dashboards and menus or integrate a SharePoint solution with other software or implement core branding, etc. All these changes can be implemented with customization.

SharePoint supports all kind of customization and integration with other systems. The new feature provides an ability to deploy a bundle that contains full fledged functionality that ease to develop and customize, same we could do for the previous version.

<p style="font-size: 20px;">Execution is current context</p>

Developed web-parts will always run in the current web context. In previous versions, most of all the web parts usually runs in context of IFRAME which was overhead to the process and execution time.This means not only will they load faster, but they will run within the context of the current user and using the current connection in the browser. 

<p style="font-size: 20px;">Responsive & accessible user interface</p>

Developed web parts are rendered in the current page DOM and not in an IFRAME, they will not have the same properties associated with them as IFRAMES have. One of the biggest benefits to this is that the customization will be responsive and accessible by nature.

<p style="font-size: 20px;">Endless ability to access data from anywhere</p>

SharePoint provides data communication through it's dedicated REST API within it's lists and libraries. Apart from, it also flexible to fetch data from any product of Microsoft umbrella i.e. OneDrive, Exchange, Dynamic365, etc. through Microsoft Graph API. SharePoint also support to access data from other API's too.

<p style="font-size: 20px;">Free to choose different development stack</p>

Unlike previous version of SharePoint, it has elected to go with a very different development model for the SharePoint Framework customization.

Traditional SharePoint developers are used to using tools like Visual Studio to create SharePoint solutions or add-ins. With the SharePoint Framework, Microsoft has elected to embrace and adopt what is commonly referred to as the modern web development stack and tool-chain.

This approach opens the platform up to more developers because it is not limited to Windows; the tools are cross-platform. You can use any text editor you prefer. Popular open source tools are used to solve different parts of the build tool-chain from project scaffolding, building, serving, packaging all the way to deploying. This includes tools like Yeoman, Gulp, and Webpack, runtime like Node.js, package managers like NPM and editors like Visual Studio Code or Sublime.

<p style="font-size: 20px;">Classic and modern experience</p>

When creating customization with the SharePoint Framework, you want to make sure you are not excluding your users from using them in legacy SharePoint sites.

Another aspect of the SharePoint Framework is that the customization you create will work not only in the new current modern pages, but they will also work in the traditional classic web part pages as well as publishing pages.

In next section we will learn how SharePoint framework development is different from traditional development.