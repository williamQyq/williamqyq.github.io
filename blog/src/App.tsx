import React from 'react';
import './App.css';
import './assets/css/waves.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <section className="blue">
        <h1>Yuqing Qiao</h1>
        <p>Dublin, CA 94568 | (978) 943-2374</p>
        <p>qyqfiles@hotmail.com | linkedin.com/in/yuqing-qiao/ | github.com/williamQyq</p>
        <div className="curve"></div>
      </section>

      <section>
        <h2>Summary</h2>
        <div className='glass-card'>
          <p>
            A productive software engineer with 4 years of experience in software system design, who has been working on storage drive data replication and application development for Browser/Linux/Windows using Java/TypeScript/Python scripting languages. Currently seeking internship opportunities for Summer/Fall 2024.
          </p>
        </div>
      </section>

      <section className="bubble">
        <h2>Full Stack Software Engineer </h2>
        <p>Nov 2019 - July 2023 (3 years and 8 months), Hollis, NH </p>
        <div className='glass-card'>
          <ul>
            <li>
              <p>Developed a MERN application on AWS EC2 using Docker, optimizing warehouse order workflows, and bolstering service reliability for an inventory of 10,000+ products.</p>
            </li>

            <li>
              <p>
                Designed the Mongoose schema and relation diagram, and implemented real-time data synchronization using MongoDB Change Stream and Socket.IO. Reduced the latency by 50% between the sales team and the warehouse during new product record entries.
              </p>
            </li>

            <li>
              <p>
                Architected REST APIs using JWT for secure data access management and transitioned legacy authentication to OAuth2.0, enhancing security for internal workspace employees.
              </p>
            </li>
            <li>
              <p>
                Developed a chat assistant using AWS Amplify, OpenAI API, and AWS Lambda, providing technical support answers for sales and enabling swift responses to customer inquiries.
              </p>
            </li>

            <li>
              <p>Implemented an NFS and Partimage solution leveraging network-attached storage (NAS) for OS cloning and transmission across client machines, yielding $160k in cost savings and enhancing annual processing capacity to 24,000 devices valued at $14M.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="dark">
        <h1>...Projects...</h1>
        <h2>Distributed System Paxos </h2>
        <p>Sept - Dec 2023(3 months), Northeastern University</p>
        <div className='glass-card'>
          <ul>
            <li>
              <p>
                Created TCP and UDP servers for a key-value store, enabling PUT, GET, and DELETE operations via socket communication in Java.
              </p>
            </li>

            <li>
              <p>
                Developed multi-threaded servers utilizing RPC communication, and established a system with 5 replicas and a 2-phase Protocol for server consistency maintenance.
              </p>
            </li>


          </ul>
        </div>
      </section>

      <section className="red">
        <h1>Ahoy, matey!</h1>
        <div className='glass-card'>
          <p>
            Greetings! I'm Yuqing, a Computer Science major currently pursuing a Master's degree at Northeastern University. I have a keen interest in Site Reliability and Distributed Systems, and have taken related courses to deepen my knowledge in these areas.

            Before pursuing my Master's, I accumulated nearly four years of experience as a Software Developer at an E-commerce company in New Hampshire. I developed and deployed a React front-end and Node.js backend application system to streamline the warehouse order processing flow. This involved coordinating with a team of 10 across sales and shipping departments. This project was particularly rewarding as we improved the sales order documentation efficiency by 50% and effectively managed a warehouse inventory of over 15,000 electronic products.

            While I thoroughly enjoy my work, I am eager to delve deeper into large-scale system development. My previous role enabled me to develop key skills in system development and communication. Having enhanced my expertise through additional coursework, I am now seeking a challenging and dynamic role focused on system development, where I can contribute to both the maintenance and revenue growth of the company.
          </p>
        </div>

        <div className="wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
      <div className="spacer layer1"></div>


      <div className="spacer layer2"></div>

      <section className="ocean">
        <div className="blob-content">
          <h1>Thanks for connecting!</h1>
        </div>
        <div className="spacer layer2 flip"></div>

      </section>
    </div>
  );
}

export default App;
