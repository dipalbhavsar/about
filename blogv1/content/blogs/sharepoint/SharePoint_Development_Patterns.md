---
title: SharePoint Development Patterns, Part 2
date: "2020-05-29T10:30:03.284Z"
description: "Deep drive to learn how working with the SharePoint Framework differs from traditional SharePoint development and development."
pageImage: "tech_sharepoint_128.png"
pageCategory: "SharePoint"
pageTags: ["technology", "sharepoint"]
pageAuthor: "Dipal Bhavsar"
pageMenu: "Technology"
---
In previous section, I explained about SharePoint Framework.

In this post, I am going to take a look at different patterns available for SharePoint development and development.

So let’s get started and look at the different development, customization and extensibility options we have in SharePoint today. Since Microsoft has introduced this new SharePoint Framework model, they have not deprecated or removed any of the previous options.

<p style="font-size: 25px;">Development and Deployment in the SharePoint Framework</p>

Let me explore the SharePoint Framework a bit more, then compare it to each of the other options and how they differ.

Let’s first start by looking at the SharePoint Framework. SharePoint Framework customizations execute within the client. They are script-based, not compiled and thus they run in the context of the current page. This is also the only way to customize SharePoint’s modern pages in a supported way.
Because SharePoint Framework based customizations run in the context of the current page and not in some IFRAME, they are responsive and accessible and by nature, mobile friendly.

Customizations deployed for use with the SharePoint Framework are uploaded to the tenant’s app catalog site making the customizations available across any site within the tenant.

With the initial release, the only thing developers could build with the SharePoint Framework are client-side web parts. However, later, Microsoft introduced extensions. These provided parity with some existing customization options we had in previous models. They include things like application customizers (aka script link & delegate controls), field customizers (aka client-side rendering or CSR and JSLink) and command sets (aka custom actions). Recentrly, Microsoft also has announce one more capability as Library.

Now let’s look at each of the other types of SharePoint development.

<p style="font-size: 25px;">Development & Deployment with traditional Farm Solutions</p>
 
Now let’s compare the SharePoint Framework to the farm or full-trust solutions.

<table border=1 style="width:95%" align="center">
    <tr><th>SharePoint Framework</th><th>Farm Solutions</th></tr>
    <tr><td>Client-side execution model</td><td>Server-side execution model</td></tr>
    <tr><td>Render and execute in page context</td><td>Fully server side execution</td></tr>
    <tr><td>Only way to costomize modern pages</td><td>Only supported on-premises environment</td></tr>
    <tr><td>Open source cross-platform tooling</td><td>Built in Visual Studio on Windows</td></tr>
    <tr><td>Support first & third party development</td><td></td></tr>
    <tr><td>Scoped to tenant or site </td><td>Scoped to farm</td></tr>
    <tr><td>Limited to creating client-side web parts, UI extentions and Libraries</td><td>Build web parts, timer jobs, event receiver, features receivers, etc.</td></tr>
</table>

Farm solutions are typically comprised of compiled code that runs on the .NET Framework. They also consist of some amount of declarative markup, specifically XML, that tells SharePoint under what conditions the code should run. They are deployed using solution packages, *.WSP files, and features.

Farm solutions, because they run on the server in the context of the SharePoint farm process, have full access to the SharePoint server-side API. Therefore developers can use these types of solutions to do anything supported by the API with custom code.

Because farm solutions are fully trusted customizations or highly trusted solutions, they are not permitted in hosted SharePoint environments such as SharePoint Online in Office 365. As such, they are limited to on-premises deployments.

And again, due to the server-side and full-trust nature of these types of customizations, farm solutions are almost exclusively built using Visual Studio by developers who are on Windows.

Farm solutions are scoped to the entire farm, well they can be scoped all the way up to the entire SharePoint farm, but depending on the customizations in the farm solution, they can be scoped at the web application, site collection or as granular as an individual site.

Farm solutions are the core of all types of customizations going way back to the beginning in SharePoint. This means we use them to create server-side web parts, timer jobs, event receivers, feature receivers and other sorts of controls. These are all things the SharePoint Framework does not have the ability to create.

<p style="font-size: 25px;">Development & Deployment with Sandboxed Solutions</p>

<table border=1 style="width:95%" align="center">
    <tr><th>SharePoint Framework</th><th>Sendbox Solutions</th></tr>
    <tr><td>Client-side execution model</td><td>Server-side execution model</td></tr>
    <tr><td>Render and execute in page context</td><td></td></tr>
    <tr><td>Only way to costomize modern pages</td><td>Declarative only solutions available in SharePoint OnLine</td></tr>
    <tr><td>Open source cross-platform tooling</td><td>Built in Visual Studio on Windows</td></tr>
    <tr><td>Support first & third party development</td><td></td></tr>
    <tr><td>Responsive, accessible & mobile friendly</td><td></td></tr>
    <tr><td>Scoped to tenant or site </td><td>Scoped to site collection</td></tr>
    <tr><td>Limited to creating client-side web parts, UI extentions and Libraries</td><td>Build features & declarative solutions</td></tr>
</table>
 
After farm solutions came sandboxed solutions, introduced by Microsoft to let developers create server-side compiled solutions run in a hosted environment.

Initially sandboxed solutions, like farm solutions which they were derived from, consisted of both declarative and compiled code. The idea was to give customers a way to customize & extend their site collections without the full trust risks from farm solutions. 

However, this changed over time to the tune that Microsoft removed support for compiled-code sandboxed solutions in SharePoint Online in Office 365. You can still do declarative sandboxed solutions in Office 365, just no managed code. Also, like farm solutions, sandboxed solutions are created using the Office and SharePoint developer tools Microsoft offers as an extension to Visual Studio, the version of Visual Studio proper that runs on Windows.

Also, like farm solutions, sandboxed solutions are created using the Office and SharePoint developer tools Microsoft offers as an extension to Visual Studio, the version of Visual Studio proper that runs on Windows.

Sandboxed solutions are scoped to the site collection they are installed and activated within. Unlike farm solutions that can be activated at a farm or web application scope, the widest scope possible for a sandboxed solution is a site collection. This is true for declarative solutions today as well as when we could still do compiled code based solutions when they were supported in SharePoint Online.

We used to do a lot more with sandboxed solutions when compiled code was supported however, isn’t supported anymore. 
Therefore, sandboxed solutions can be used today to provision declarative solutions such as site columns, content types, list templates and instances. We can also use them to provision files like ASPX pages with no code in them as well as JavaScript, CSS and image files to deploy custom client-side customizations to a SharePoint site.

<p style="font-size: 25px;">Development & Deployment with Add-ins</p>

<table border=1 style="width:95%" align="center">
    <tr><th>SharePoint Framework</th><th>SharePoint Add-Ins</th></tr>
    <tr><td>Client-side execution model</td><td>Client or Server side execution model</td></tr>
    <tr><td>Render and execute in page context</td><td>Client side API</td></tr>
    <tr><td>Only way to costomize modern pages</td><td></td></tr>
    <tr><td>Open source cross-platform tooling</td><td>Execution context externalized from SharePoint using IFrame</td></tr>
    <tr><td>Support first & third party development</td><td>Build with Visual Studio on Windows</td></tr>
    <tr><td>Responsive, accessible & mobile friendly</td><td></td></tr>
    <tr><td>Scoped to tenant or site </td><td>Scoped to tenant and site</td></tr>
    <tr><td>Limited to creating client-side web parts, UI extentions and Libraries</td><td>Build web parts, remote event receivers, workflows and more</td></tr>
</table>
 
After solutions came SharePoint Add-ins, initially called apps. 

These are available in two flavors, the SharePoint Hosted Add-in and the Provider Hosted Add-in.

For <b>SharePoint Hosted Add-ins</b>, they run exclusively within a client-side context. Any custom business logic has to be implemented using JavaScript as the files deployed to SharePoint while stored in SharePoint, are not run on the server. They are rendered in the client and run there.

In the case of <b>Provider Hosted Add-ins</b>, these are more open-ended. The developer, or provider, of the add-in, deploys a web application external to SharePoint and thus, can use any web development techniques at their disposal.

Regardless of the type of add-in you create, any time your add-in needs to communicate with SharePoint will do it using one of the client-side APIs Microsoft has included in SharePoint; either the CSOM or robust REST API.

When an add-in is manifested within a SharePoint site as a client part, it is done so using an IFRAME. This is due to the fact the add-in execution context is externalized from SharePoint, running either in the provider hosted web application or within the special SharePoint site that hosts the SharePoint Hosted add-in.

SharePoint add-ins were typically built by developers using Visual Studio on Windows. This is because Microsoft only created extensions for Visual Studio with designers for configuring an add-in and creating the add-in package file.

While Provider Hosted Add-ins could be authored using any technology for any hosting platform, we saw most developers using the Microsoft stack and host their provider hosted add-in web applications using IIS web servers on-premises or in Microsoft Azure websites.

When you, as the developer, package up a SharePoint add-in, you take the resulting package file and upload it to the SharePoint tenant’s app catalog. Once this is done, the SharePoint add-in can then be installed within any SharePoint site in that tenant associated with that app catalog. Therefore, it is scoped to the tenant as far as where it can be used, but its functionality is scoped to the site to where it was installed.

Developers can use SharePoint add-ins to create web parts, but not web parts the way we used to with solutions. Instead, these are created as web pages that are surfaced within SharePoint sites using IFRAMES.

Developers can also create event custom workflows, declarative workflows based on Workflow Manager and deploy those with add-ins. While the logic and implementation are hosted in a web application external from SharePoint, add-ins can also register remote event receivers.

<p style="font-size: 25px;">Development & Deployment with JavaScript Injection</p>

<table border=1 style="width:95%;" align="center" >
    <tr><th>SharePoint Framework</th><th>JavaScript Injection</th></tr>
    <tr><td>Client-side execution model</td><td>Client-side execution model</td></tr>
    <tr><td>Render and execute in page context</td><td>Client side API</td></tr>
    <tr><td>Only way to costomize modern pages</td><td></td></tr>
    <tr><td>Open source cross-platform tooling</td><td>Build/implement with any build toolchain</td></tr>
    <tr><td>Support first & third party development</td><td></td></tr>
    <tr><td>Responsive, accessible & mobile friendly</td><td></td></tr>
    <tr><td>Scoped to tenant or site </td><td>Scoped to SharePoint page</td></tr>
    <tr><td>Limited to creating client-side web parts, UI extentions and Libraries</td><td>Implemented manually, no automated deployment story</td></tr>
</table>
 
The last type of customization is JavaScript injection which is used to customize existing SharePoint sites. Developers can use the content editor web part or more recently the script editor web part to get the customizations onto the page.

Because of the very nature of JavaScript injection, these customizations will always execute within a client-side context. This means they leverage the user’s context and are rendered in the native page DOM.
By extension, because JavaScript injection involves client-side based development, these customizations have can leverage the client-side API, using either the CSOM or REST API, to leverage SharePoint data in the customizations.

JavaScript injection does not involve specific developer tools. All developers need is a text editor and a way to upload the files to SharePoint. This is typically done using the browser, so developers are free to use any tool that they use to create their customizations when leveraging JavaScript injection.
These customizations are added to each SharePoint page on a page-by-page basis that means that these customizations are scoped to a specific page.

Because JavaScript injection customizations are done on a manual basis, typically there's no packaging model, there's no deployment model, and there's no provisioning model that Microsoft provides.
Sure, SharePoint developers can build some sort of a customized solution but for the most part, these are usually customizations that are implemented on a case-by-case basis and they usually are implemented manually.

Today,  we looked at the previous options for SharePoint customization and extensibility and we compared them to the SharePoint Framework. By now you should have an idea where the SharePoint Framework fits, and where it doesn't fit.

In next post, we will go through SharePoint Framework development toolchain.
