import Image from "next/image"
import Link from "next/link"
import { Tweet } from 'react-tweet'
const { JSDOM } = require('jsdom');
const { Readability } = require('@mozilla/readability');

async function extractContentFromURL(url) {
  const response = await fetch(url);
  const html = await response.text();
  const dom = new JSDOM(html, { url: url });
  const reader = new Readability(dom.window.document);
  const article = reader.parse();

  return {
      title: article.title,
      content: article.content
  };
}

export default async function Project() {
  const {title, content} = await extractContentFromURL("https://www.airgradient.com/blog/lessons-learned-plastic-injection-mold-making")
  
  return (
    <>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  )
}
