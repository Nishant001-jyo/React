import React from "react";
import Card from "./components/Card";
import User from "./components/User";

const jobOpenings = [
  {
    id: 1,
    brandLogo: "🟦",
    companyName: "TechNova",
    datePosted: "2 days ago",
    post: "AI/ML Engineer",
    tag1: "Python",
    tag2: "Machine Learning",
    pay: "₹8–12 LPA",
    location: "Chandigarh",
  },
  {
    id: 2,
    brandLogo: "🟩",
    companyName: "Infosys",
    datePosted: "3 days ago",
    post: "Software Developer",
    tag1: "Java",
    tag2: "Spring Boot",
    pay: "₹6–10 LPA",
    location: "Bengaluru",
  },
  {
    id: 3,
    brandLogo: "🟧",
    companyName: "Amazon",
    datePosted: "4 days ago",
    post: "Data Scientist",
    tag1: "Python",
    tag2: "SQL",
    pay: "₹12–18 LPA",
    location: "Hyderabad",
  },
  {
    id: 4,
    brandLogo: "🟪",
    companyName: "Microsoft",
    datePosted: "5 days ago",
    post: "AI Engineer",
    tag1: "Azure",
    tag2: "GenAI",
    pay: "₹15–22 LPA",
    location: "Noida",
  },
  {
    id: 5,
    brandLogo: "🟥",
    companyName: "TCS",
    datePosted: "6 days ago",
    post: "Full Stack Developer",
    tag1: "React",
    tag2: "Node.js",
    pay: "₹5–9 LPA",
    location: "Pune",
  },
  {
    id: 6,
    brandLogo: "🟨",
    companyName: "Deloitte",
    datePosted: "7 days ago",
    post: "Data Analyst",
    tag1: "SQL",
    tag2: "Power BI",
    pay: "₹6–10 LPA",
    location: "Gurugram",
  },
  {
    id: 7,
    brandLogo: "🟦",
    companyName: "Accenture",
    datePosted: "8 days ago",
    post: "ML Engineer",
    tag1: "Python",
    tag2: "TensorFlow",
    pay: "₹7–13 LPA",
    location: "Mumbai",
  },
  {
    id: 8,
    brandLogo: "🟩",
    companyName: "Google",
    datePosted: "9 days ago",
    post: "Software Engineer",
    tag1: "C++",
    tag2: "DSA",
    pay: "₹18–28 LPA",
    location: "Bengaluru",
  },
  {
    id: 9,
    brandLogo: "🟧",
    companyName: "Wipro",
    datePosted: "10 days ago",
    post: "Backend Developer",
    tag1: "Python",
    tag2: "FastAPI",
    pay: "₹5–8 LPA",
    location: "Chennai",
  },
  {
    id: 10,
    brandLogo: "🟪",
    companyName: "Flipkart",
    datePosted: "11 days ago",
    post: "Data Engineer",
    tag1: "Python",
    tag2: "Spark",
    pay: "₹9–15 LPA",
    location: "Bengaluru",
  },
];

const App = () => {
  return (
    <main className="app">

      {/* Header */}
      <header className="header">
        <div>
          <h1>Find Your Dream Job</h1>
          <p>Explore the latest opportunities from top companies.</p>
        </div>

        <User />
      </header>

      {/* Job Stats */}
      <section className="job-info">
        <div>
          <strong>{jobOpenings.length}</strong>
          <span>Jobs Available</span>
        </div>

        <div>
          <strong>10+</strong>
          <span>Top Companies</span>
        </div>

        <div>
          <strong>5+</strong>
          <span>Job Categories</span>
        </div>
      </section>

      {/* Job Cards */}
      <section className="parent">
        {jobOpenings.map((job) => (
          <Card
            key={job.id}
            job={job}
          />
        ))}
      </section>

    </main>
  );
};

export default App;