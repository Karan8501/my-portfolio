export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  coverImage?: string;
  language: 'en' | 'hi'; // English or Hindi
  content: string; // Markdown content
  tags: string[];
}

export const blogs: BlogPost[] = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js 14",
    excerpt: "A comprehensive guide to building modern web applications with Next.js 14 and React Server Components.",
    date: "2024-01-15",
    language: "en",
    tags: ["Next.js", "React", "Web Development"],
    coverImage: "https://placehold.co/800x400/1a1a1a/ffffff?text=Next.js+14",
    content: `
# Getting Started with Next.js 14

Next.js 14 introduces a stable App Router, simplified data fetching, and improved performance. In this guide, we'll explore the key features and how to leverage them in your projects.

## Key Features

1. **Server Actions**: Mutate data directly from the server.
2. **Partial Prerendering**: Combine static and dynamic content.
3. **Metadata API**: Simplified SEO management.

\`\`\`javascript
// Example of a Server Component
async function getData() {
  const res = await fetch('https://api.example.com/data')
  return res.json()
}

export default async function Page() {
  const data = await getData()
  return <main>{data.message}</main>
}
\`\`\`

## Conclusion

Next.js 14 keeps pushing the boundaries of what's possible in web development.
    `
  },
  {
    slug: "scalable-microservices-hindi",
    title: "स्केलेबल माइक्रोसर्विसेज कैसे बनाएं",
    excerpt: "आधुनिक आर्किटेक्चर में माइक्रोसर्विसेज का महत्व और उन्हें स्केलेबल बनाने के तरीके।",
    date: "2024-02-10",
    language: "hi",
    tags: ["Microservices", "System Design", "Backend"],
    coverImage: "https://placehold.co/800x400/1a1a1a/ffffff?text=Microservices",
    content: `
# स्केलेबल माइक्रोसर्विसेज (Scalable Microservices)

माइक्रोसर्विसेज आर्किटेक्चर आज के समय में बड़े और जटिल ऍप्लिकेशन्स को बनाने का एक मानक तरीका बन गया है।

## मुख्य सिद्धांत

1. **Decoupling (डिकपलिंग)**: हर सर्विस स्वतंत्र होनी चाहिए।
2. **Scalability (स्केलेबिलिटी)**: जरुरत के अनुसार सर्विस को स्केल करना।
3. **Resilience (लचीलापन)**: एक सर्विस के फेल होने पर पूरा सिस्टम बंद नहीं होना चाहिए।

\`\`\`python
# Python में एक साधारण Flask सर्विस
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello():
    return "नमस्ते दुनिया!"

if __name__ == '__main__':
    app.run()
\`\`\`

## निष्कर्ष

सही टूल्स और डिजाइन्स के साथ, आप एक मजबूत और स्केलेबल सिस्टम बना सकते हैं।
    `
  }
];
