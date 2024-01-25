---
page-title: "Latest / Best Web Clipper - Help - Obsidian Forum"
url: https://forum.obsidian.md/t/latest-best-web-clipper/49980
date: "2024-01-25 12:33:38"
---
> I’m looking for the best and most useful web clipper as a person who won’t be paying into Readwise. I know there’s a free option for Kindle that I’ll be exploring, but I’m seeing several web / chrome extensions available. None of them have a ton of reviews, and I’d ideally like something that’s as safe/secure as possible while being useful within Obsidian.
> 
> options I’m seeing so far with at least 4 reviews
> 
> -   [Glasp 865](https://glasp.co/welcome) - appears to be all public, my preference at this stage would be something more private
> -   [Obsidian Clipper 2.9k](https://chrome.google.com/webstore/detail/obsidian-clipper/mphkdfmipddgfobjhphabphmpdckgfhb)
> -   [Obsidian Web 1.2k](https://chrome.google.com/webstore/detail/obsidian-web/edoacekkjanmingkbkgjndndibhkegad)
> -   [Fleeting notes 405](https://chrome.google.com/webstore/detail/fleeting-notes/gcplhmogdjioeaenmehmapbdonklmdnc) - though development appears to be heading more towards apple notes
> -   [Matter 417](https://chrome.google.com/webstore/detail/matter/knjbgabkeojmfdhindppcmhhfiembkeb)
> -   [Markdown 667](https://chrome.google.com/webstore/detail/markdownload-markdown-web/pcmpcfapbekmbjjkdalcgopdkipoggdi)
> 
> I’m in the early days of getting more familiar with markdown, but would like to be able to quickly capture and have a process for reviewing to organize/link/expand upon web clippings.
> 
> I’d love to hear what’s been most reliable and useful for obsidian users.

---

I’m looking for the best and most useful web clipper as a person who won’t be paying into Readwise. I know there’s a free option for Kindle that I’ll be exploring, but I’m seeing several web / chrome extensions available. None of them have a ton of reviews, and I’d ideally like something that’s as safe/secure as possible while being useful within Obsidian.

options I’m seeing so far with at least 4 reviews

-   [Glasp 865](https://glasp.co/welcome) - appears to be all public, my preference at this stage would be something more private
-   [Obsidian Clipper 2.9k](https://chrome.google.com/webstore/detail/obsidian-clipper/mphkdfmipddgfobjhphabphmpdckgfhb)
-   [Obsidian Web 1.2k](https://chrome.google.com/webstore/detail/obsidian-web/edoacekkjanmingkbkgjndndibhkegad)
-   [Fleeting notes 405](https://chrome.google.com/webstore/detail/fleeting-notes/gcplhmogdjioeaenmehmapbdonklmdnc) - though development appears to be heading more towards apple notes
-   [Matter 417](https://chrome.google.com/webstore/detail/matter/knjbgabkeojmfdhindppcmhhfiembkeb)
-   [Markdown 667](https://chrome.google.com/webstore/detail/markdownload-markdown-web/pcmpcfapbekmbjjkdalcgopdkipoggdi)

I’m in the early days of getting more familiar with markdown, but would like to be able to quickly capture and have a process for reviewing to organize/link/expand upon web clippings.

I’d love to hear what’s been most reliable and useful for obsidian users.

-   #### created
    
    Dec '22
    
-   [
    
    #### last reply
    
    ](https://forum.obsidian.md/t/latest-best-web-clipper/49980/7)
    
    [](https://forum.obsidian.md/t/latest-best-web-clipper/49980/7)Mar '23
    
-   14.5k
    
    #### views
    
-   4
    
    #### users
    
-   13
    
    #### likes
    
-   10
    
    #### links
    

Markdownload is the one I’m testing at the moment. I’m on a Mac and it took me quite a while to figure out how to sync the folder within Downloads into a folder within my vault. But otherwise, it seems to be working quite well.

By useful within Obsidian I meant either having the markdown file within a template where I can easily populate metadata, aliases, tags… or I was imagining being able to possibly make those tweaks immediately when I’m on the web browser before it’s sent to my vault.

The best you can do with MarkDownload is edit the metadata/content before saving the “clip” from the extension.

There are some template vars available if you expand “Custom Text” in the preferences pane.

---

For the title, as well as the front- and back-matter custom text, you can use the following text replacement values. Please note that not all websites will provide all values

```
{title} - Article Title
{pageTitle} - Title of the actual page
{length} - Length of the article, in characters
{excerpt} - Article description or short excerpt from the content
{byline} - Author metadata
{dir} - Content direction
{date:FORMAT} - The current date and time. Check the format reference
{keywords} - Meta keywords (if present). Comma separated by default.
{keywords:SEPARATOR} - Meta keywords (if present) separated by SEPARATOR. For example, to separate by space, use {keywords: }
```

There is also support for all meta tags not mentioned above, should the page you are clipping support them. For example, try {og:image} or any other widely supported meta tags

URL information:

```
{baseURI} - The url of the article
{origin} - The origin of the URL, that is its scheme, its domain and its port.
{host} - The domain (that is the hostname) followed by (if a port was specified) a ':' and the port of the URL.
{hostname} - The domain of the URL.
{port} - The port number of the URL.
{protocol} - The protocol scheme of the URL, including the final ':'.
{pathname} - An initial '/' followed by the path of the URL, not including the query string or fragment.
{search} - The URL's parameter string; if any parameters are provided, this string includes all of them, beginning with the leading ? character.
{hash} - A '#' followed by the fragment identifier of the URL.
```

Additionally, you can ‘parameterize’ any of the text variables (other than date and keywords) by using the following syntax:

```
{variable:pascal} - PascalCase: Every word capital
{variable:camel} - camelCase: every word capital except the first word
{variable:kebab} - kebab-case: hyphens between words, all lowercase
{variable:snake} - snake_case: underscores between words, all lowercase
```

You can make your own! I recently published an article that explains how.

[https://link.medium.com/7sDFwvpG0vb 513](https://link.medium.com/7sDFwvpG0vb)

Your clipper can be general-purpose (e.g. send highlighted text to Obsidian) or site- specific (e.g. save actor names and other details from IMDb).

I’m using it to quicky save meeting details from web mail and task notes from our JIRA-like system.

I love clicking on the Obsidian icon that was inserted into the page and then instantly seeing a new well formatted note appear in my Vault.

Enjoy!!

This topic was automatically closed 90 days after the last reply. New replies are no longer allowed.