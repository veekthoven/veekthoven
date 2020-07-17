---
title: How to create Sublime Text 3 snippets
description: >
 When writing code, every keystroke counts. Mastering shortcuts or using snippets for your text editor or IDE will save you a significant amount of time in the long run. In this article, I will show you how to create snippets for my favourite text editor, Sublime Text.
postedAt: "2020-07-17T15:10:34.301Z" 
image: 
 url: https://images.unsplash.com/photo-1512317049220-d3c6fcaf6681?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=100
 caption: Photo by @ilyapavlov on Unsplash.
tags:
 - Sublime Text
 - Tooling
---
When writing code, there are certain fragments of code you usually write over and over again. At first, you might not notice you are repeating yourself, but over time you notice that you spend a significant amount of time writing that same fragment. I don't know about you, but it wears me out a lot!

When I am coding, every keystroke matters. What if there is a way I can write this fragments somewhere and then copy/paste them when I need them. That'd definitely go a long way. Even better, what if there's how I can configure my text editor or IDE to automatically insert that snippet for me when I need it? If you use sublime text, there's a way out.

*Enters Sublime Text Snippets.*

With sublime text snippets, you get to define a snippet and map it to a shortcut on your computer which you will type and insert the snippet. This makes my life easy as a developer!

The most basic example in Sublime text is the Lorem ipsum snippets.

Open a sublime text tab, type **lorem** then press the tab key. See the magic?

<img src="/lorem.gif" class="rounded-lg w-full mb-3" alt="Lorem ipsum generator">

### Creating your first sublime text snippet
To create your first snippet in Sublime Text, go to **Tools > Developer > New Snippet**. A new untitled file will open that includes boilerplate for you to start coding out your snippet:

```xml
<snippet>
	<content><![CDATA[
Hello, ${1:this} is a ${2:snippet}.
]]></content>
	<!-- Optional: Set a tabTrigger to define how to trigger the snippet -->
	<!-- <tabTrigger>hello</tabTrigger> -->
	<!-- Optional: Set a scope to limit where the snippet will trigger -->
	<!-- <scope>source.python</scope> -->
</snippet>
```

### Anatomy of a Sublime Text Snippet
A sublime text snippet is basically an XML file with the extension **.sublime-snippet**. For example, you could have a **conclusion.sublime-snippet** that inserts a conclusion paragraph to your blog posts, assuming you write your blog posts with sublime text.

A sublime text snippet usually takes the following structure
```xml[conclusion.sublime-snippet]
<snippet>
    <content><![CDATA[This article is written by ${1:Victor} on ${2:31st March, 2020 }]]></content>
    
    <!-- Optional: Tab trigger to activate the snippet -->
    <tabTrigger>conclusion</tabTrigger>
    
    <!-- Optional: Scope the tab trigger will be active in -->
    <scope>source.html</scope>
    
    <!-- Optional: Description to show in the menu -->
    <description>Inserts a blog post conclusion</description>
</snippet>
```
The **snippet** element contains all the definitions of the snippet. Let's take a look at each of the elements.

### content
This is where we define that actual snippet to be expanded. The content must be defined in a **`<![CDATA[`** and **`]]>`** section. Your snippets won’t work if you don’t do this!

When writing your own snippets, take note of the following rules 

1. If you're writing a language like PHP and you want the get a literal $, you have to escape it like this: **\$**. This is because a dollar sign has a special meaning in sublime text snippets. Escaping them tells sublime text not to interpret it with that special meaning but to insert it as is.

2. When writing a snippet that contains indentation, always use tabs instead of spaces. The tabs will be transformed into spaces when the snippet is inserted if the sublime text option **translateTabsToSpaces** is set to true.

You probably noticed the words surrounded by a dollar sign, braces, and prefixed by a number. This specifies a **Field Marker**, which controls the cursor position after the snippet is invoked.

After the snippet is expanded, the cursor moves automatically to the first field marker, that is **${1:Victor}**, giving you the option to either edit the word or leave the default which is **Victor** in this case. Pressing tab again moves the cursor to the next numbered field marker, **${2:31st March, 2020 }** and it continues like that until there are no field markers left.

A common use case here is defining a HTML anchor tag:

```xml
<content><![CDATA[<a href="${1:https://twitter.com/veekthoven}">${2:My twitter Page}</a>]]></content>
```
See it in action:

<img src="/example.gif" class="rounded-lg w-full mb-3" alt="Anchor tag generator">

As you can see in this example, when you expand your snippet, **https://twitter.com/veekthoven** is highlighted. You can then change **https://twitter.com/veekthoven** to something else, or you can just press Tab & jump ahead to the next field marker.

Awesome, isn't it?

### tabTrigger
In this element, you define the sequence of keys you will press to insert this snippet. The snippet will expand as soon as you hit the **Tab** key after typing this sequence. In the above example, I used the word **example** as the trigger.

### scope
Scope defines the context where your snippet can be triggered. Basically, it defines the programming language/file types where your snippet can be used. This is usually defined to avoid collisions since the same tabTriggers can be defined to expand different snippets for different file types. Unfortunately, you can't just write **html** as the scope for a HTML file, for example. There is a systematic way of writing scopes for different file types.

The easiest way of getting the scope for a particular file type is opening such a file and type the following key sequence **Ctrl + Alt + Shift + P** or go to **Tools > Developer > Show Scope Name**. Otherwise, you can see a list of scopes for various file types [on this gist.](https://gist.github.com/J2TeaM/a54bafb082f90c0f20c9)

### description
The text enclosed by this element is used when showing the snippet in the Snippets menu. If it is not available, Sublime Text defaults to the name of the snippet. strangely, this is not included in the boilerplate when you try creating a snippet by going to **Tools > Developer > New Snippet**.

It is optional but i strongly advise you to provide it.

### Saving your snippets
After writing your snippet, save it as a file ending with the **.sublime-snippet**. On Mac, user-created snippets are saved at the following directory:

```
~/Library/Application Support/Sublime Text 3/Packages/User
```

That is the basics of creating a sublime text snippet.

Checkout [this GitHub repo](https://github.com/veekthoven/sublime-snippets) created by me where i store all the snippets i have created over time. You might find them useful. You can even submit a pull request and add yours.

Now go ahead, create some snippets and save yourself some time.