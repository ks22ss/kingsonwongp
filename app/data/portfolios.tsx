
import { PortfolioItemProps } from '@/app/interfaces/Portfolio'

export const PortfolioItems : PortfolioItemProps[]  = [
  {
    title: 'Retailer - Promoters Management System',
    tags: ['FullStack', 'React', 'Spring','Java', 'PostgreSQL', 'AWS'],
    problems:`- Lacking Wholesalers IT Integration
    - Require delivery sales data within day
    - Large amount of promoters off work near 9:00pm - 10:00pm,
      increase server loads
    `,
    solutions:`- Develop an application capable of retrieving daily work data from promoters in real-time. 
    - To ensure optimal server performance and prevent overload, a queue system will be implemented as a buffer, 
           allowing each order to be processed sequentially. While low latency is not a requirement, this approach will effectively manage server load. 
    - Additionally, the application will provide promoters with a user-friendly dashboard, 
          enabling them to perform CRUD (Create, Read, Update, Delete) operations in case of any erroneous submissions.
    `,
    image:"/s1.png"
  },
  {
    title: 'Asset Management - Client Securities Position ETL',
    tags: ['ETL', 'Backend', 'AWS','BI', 'PostgreSQL','SAM', 'Lambda', 'S3'],
    problems:`- Data, with similar schema, coming from multiple sources within organization
    - Display information on a business intelligence platform is needed to oversee the business
    - Need data display daily
    `,
    solutions:`- Build a ETL Pipeline , call it Adapter, consolidate all data source into database
    - Design Dashboards and Cards of Business Intelligence Platform `,
    image:"/s2.png"
  },
  {
    title: 'Ecommerce - Order Management System',
    tags: ['NextJS', 'PostgreSQL', 'GCP'],
    problems:`- Startup using spreadsheet to record sales in offline business
    - Each person have a different schema to record sales, lack standardization`,
    solutions:`- Build a order management system, easy to use, capture all sales activities from sales team.
    - Management can also get sales data from google spreadsheet as well`,
    image:"/s3.png"
  },
  {
    title: 'Web Project - Loan Lending Platform',
    tags: ['NextJS', 'Sanity CMS', 'HubSpot CRM', 'Cloudfront CDN', 'AWS'],
    problems:`- using SEO, SEM drive traffic to website, capture leads
    - A nice Landing Page
    - A Blog for SEM keyword target
    - place to handle customer leads
    `,
    solutions:`- Because we need a blog for SEO purpose, Server side rending is recommended. NextJS is best suit for this scenario.
    - Use HubSpot, a CRM integrated into website, capture all the leads
    - For Blog, use open-source CMS Sanity, easy to use, pay-as-you-go
    - Hosting the website in Cloudfront CDN, use AWS ACM register a SSL certificate, and HKDNS register a domain name`,
    image:"/s4.png"
  },
  {
    title: 'Web3 Project - HKMA eHKD use case: Home Equity Tokenization Prototype (VSFG Part)',
    tags: ['FullStack', 'React', 'Spring','Java', 'PostgreSQL', 'AWS'],
    problems:`- Collaborate with BCG, ZA Bank, HKT, Safeheron, PWG to build a home equity token platform
    - Customer can tokenize their real world asset (Property), create a RWA token and use that as collateral to borrow money from lender
    - Customer receive eHKD (a digital currency) and spend it 
    - Customer will repay their eHKD and get back the real world asset token
    `,
    solutions:`- Build a frontend application to handle tokenization request
    - Build a API Server to handle request from ZA Bank
    - Allow HKT Server to call our API Server to get customer information
    - Build a Database store all tokenization information
    - Build a Admin Dashboard handle all the background work from VSFG
    - Build a Blockchain Listener to sync Database data with Polygon Blockchain using Alchemy API
    - Use Safeheron as a custodian to store all the tokenized asset`,
    image:"/s5.png"
  }
]
