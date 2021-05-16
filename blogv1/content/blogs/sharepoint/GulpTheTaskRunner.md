---
title: Gulp - the Task Runner, Part 7
date: "2020-11-06T10:30:00.000Z"
description: "It helps you perform actions like run linting, copy or move files, compile, deploy, launch testing or debugging tools among other tasks."
pageImage: "tech_sharepoint_128.png"
pageCategory: "SharePoint"
pageTags: ["Technology", "SharePoint"]
pageAuthor: "Dipal Bhavsar"
pageMenu: "Technology"
---

In the last section, we covered the tool that use to create the scaffolding for a new SharePoint Framework project: Yeoman. In this section we’re going to tackle Gulp; a tool with a funny name.

In the introductory post, I briefly mentioned a task runner tool called Gulp. Most development environments have some sort of a task runner. You might have heard of Make, Grunt or if you have a Microsoft background you have likely heard of MSBuild.

These task runners help you perform actions like run linting, copy or move files, compile, deploy, launch testing or debugging tools among other tasks.

Gulp is another one of these task runners that is very popular. Gulp runs tasks you create, tasks that are defined using javascript. This is the task runner Microsoft selected for SharePoint Framework projects.
 
Gulp prefers code over configuration for defining tasks. This differs from tools like Grunt and MSBuild that prefer configuration over code. For example, MSBuild tasks are defined using XML which instruct the MSBuild executable what to do. This approach limits you to only performing operations that the task runner supports.

Gulp’s approach of using code instead provides a minimal API to tasks you write in JavaScript that can do anything you could express with code.

Gulp is very fast because unlike other task runners, it doesn’t write intermediate files to disk during tasks. Instead, it leverages Node’s streams to keep files in memory to avoid a lot of the I/O when working with the disk.

The tasks you write can leverage plugins or reusable bits of code other developers have published that perform common tasks. For instance, there’s a plugin for processing your LESS or SASS code to CSS, another for merging all your CSS into a single file and yet another for minifying the resulting file.

Gulp and all of its plugins are built on top of Node.js. Install gulp via as global NPM packages
Just like the other tools in our SharePoint Framework toolchain, you install it on your machine as a global NPM package using npm install -g gulp.

<p style="font-size: 25px;">Gulp + SharePoint Framework</p>

Microsoft created many different tasks for the SharePoint Framework that are published as NPM packages. These packages are referenced in the package.jsonthat their SharePoint Yeoman generator creates so they will be downloaded to your project the first time you run NPM install.

That means there’s nothing extra to install at this point. The way Microsoft load tasks into Gulp for SharePoint Framework projects is quite unique when you compare it to how most people use Gulp, but for better or worse, this is how they do it.

The gulpfile.js in the root of the project is what gulp will use to see what tasks are available. The way the SharePoint engineering team set this up is that that the Gulp file loads tasks from packages you downloaded as part of running npm install when creating the project scaffolding with Yeoman.

Knowing what Gulp commands are available can be a bit tricky but they added one argument to get a list of all the commands available. If you run gulp --tasks from within a project’s root folder, the default Gulp task will write all the tasks that have been loaded by the SharePoint Framework team.

That about sums it up for the task runner used in SharePoint Framework projects. Tomorrow we will look at the last tool that makes up the build toolchain: Webpack!

Today's installment is actually from one of the lessons in the Mastering the SharePoint Framework - Starter Bundle course. This is a free resource you can subscribe to today, or you check out a preview of the course by watching the lesson associated with today's email course installment: