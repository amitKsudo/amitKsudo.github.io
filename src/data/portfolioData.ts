import { Certification, EducationInfo, ProjectItem, SkillItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Amit Kumar',
  title: 'Data Analyst (Fresher)',
  location: 'Delhi, India',
  phone: '+91-8588077331',
  email: 'amitdehlvi@gmail.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  bio: 'Recent B.A. (History) graduate from the University of Delhi with a strong foundation in Data Analytics. Proficient in Python, SQL, Microsoft Excel, Google Workspace, Pandas, NumPy, Matplotlib, Seaborn, and data visualization. Hands-on experience through academic coursework, self-driven projects, and professional certifications.',
  tagline: 'Bridging curious historical inquiry with rigorous quantitative analysis to uncover honest stories inside messy datasets.',
  status: 'Open to Fresher / Entry-Level Data Analyst Roles',
};

export const EDUCATION: EducationInfo = {
  degree: 'Bachelor of Arts (History)',
  major: 'History',
  minorOrElective: 'Computer Science (Generic Elective)',
  institution: 'University of Delhi',
  timeline: 'August 2023 – June 2026',
  highlights: [
    'Completed core academic modules in Computer Science: algorithms, data structures, and computational thinking.',
    'Developed strong analytical and critical synthesis skills through historical research and primary document interrogation.',
    'Applied Python and SQL to academic datasets to automate tabular analysis and statistical reporting.',
  ],
};

export const SKILLS: SkillItem[] = [
  // Languages
  {
    name: 'Python',
    category: 'Languages',
    level: 'Proficient',
    context: 'Scripting, ETL workflows, data manipulation with Pandas & NumPy, exploratory statistical data visualization.',
    tag: 'Core'
  },
  {
    name: 'SQL',
    category: 'Languages',
    level: 'Proficient',
    context: 'Data querying, aggregations, GROUP BY, multi-table JOINs, subqueries, and table constraint design.',
    tag: 'Core'
  },
  // Libraries
  {
    name: 'Pandas',
    category: 'Libraries',
    level: 'Proficient',
    context: 'Dataframe manipulation, handling missing values, groupby operations, datetime parsing, and reshaping.',
    tag: 'Data Wrangling'
  },
  {
    name: 'NumPy',
    category: 'Libraries',
    level: 'Hands-on',
    context: 'Numerical computing, array indexing, vectorized operations, and descriptive mathematical summaries.',
  },
  {
    name: 'Matplotlib',
    category: 'Libraries',
    level: 'Hands-on',
    context: 'Exploratory visualization: distribution histograms, bar charts, box plots, and multi-series line charts.',
  },
  {
    name: 'Seaborn',
    category: 'Libraries',
    level: 'Proficient',
    context: 'Statistical data visualization: correlation heatmaps, distribution plots, pairplots, and informative categorical visuals.',
    tag: 'Visualization'
  },
  // Database
  {
    name: 'MySQL',
    category: 'Databases',
    level: 'Hands-on',
    context: 'Relational schema design, table constraints, DDL/DML, and running diagnostic queries on local databases.',
    tag: 'Relational DB'
  },
  // Tools
  {
    name: 'Microsoft Excel',
    category: 'Tools',
    level: 'Certified',
    context: 'Pivot tables, VLOOKUP/XLOOKUP, conditional formatting, dynamic charts, and summary KPI dashboards.',
    tag: 'Certified'
  },
  {
    name: 'Google Sheets',
    category: 'Tools',
    level: 'Proficient',
    context: 'Collaborative analysis, QUERY and FILTER functions, data validation, and automated cross-sheet lookups.',
  },
  {
    name: 'VS Code',
    category: 'Tools',
    level: 'Proficient',
    context: 'Primary integrated development environment for Python scripts, SQL file authoring, and workspace navigation.',
  },
  {
    name: 'Jupyter Notebook & Colab',
    category: 'Tools',
    level: 'Proficient',
    context: 'Iterative data analysis notebooks, documenting exploratory steps, sharing visual analysis reports.',
  },
  {
    name: 'Google Workspace',
    category: 'Tools',
    level: 'Proficient',
    context: 'Docs, Sheets, Slides, and Drive for stakeholder documentation, executive summaries, and reporting.',
  },
  // Methodologies
  {
    name: 'Exploratory Data Analysis (EDA)',
    category: 'Methodologies',
    level: 'Proficient',
    context: 'Distributions, trend analysis, categorical segmentation, outlier identification, and univariate/bivariate checks.',
    tag: 'Analytical'
  },
  {
    name: 'Data Cleaning & Wrangling',
    category: 'Methodologies',
    level: 'Proficient',
    context: 'Auditing nulls, imputing missing data, deduplication, type casting, date normalization, and string sanitation.',
    tag: 'Core Strength'
  },
  {
    name: 'Descriptive Statistics',
    category: 'Methodologies',
    level: 'Hands-on',
    context: 'Measures of central tendency (mean, median, mode), spread (variance, standard deviation, IQR), and percentile metrics.',
  },
  {
    name: 'Data Visualization',
    category: 'Methodologies',
    level: 'Proficient',
    context: 'Designing honest, clutter-free charts with clear baselines, informative titles, and intuitive color choices.',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-python-guvi',
    title: 'Python Programming Course: Beginner to Advanced',
    issuer: 'GUVI Geek Networks (an HCL company)',
    platform: 'GUVI / IIT Madras Research Park',
    topics: ['Python Syntax', 'Data Structures (Lists, Dicts, Tuples)', 'File I/O', 'OOP Basics', 'Algorithm Design'],
    description: 'Comprehensive certification covering foundational programming through practical algorithmic problem solving in Python.',
    certificateUrl: '',
    credentialId: 'GUVI-PY-CERT',
  },
  {
    id: 'cert-excel-upgrad',
    title: 'Introduction to Data Analysis using Excel',
    issuer: 'upGrad',
    platform: 'upGrad Learning Platform',
    topics: ['Data Cleaning in Excel', 'Pivot Tables & Pivot Charts', 'Lookup Functions (VLOOKUP, INDEX-MATCH)', 'Data Summarization'],
    description: 'Hands-on business analytics certification focused on transforming raw tabular records into structured summary models and decision reports.',
    certificateUrl: '',
    credentialId: 'UPGRAD-EXCEL-DA',
  },
  {
    id: 'cert-sql-harvard',
    title: "CS50's Introduction to Databases with SQL",
    issuer: 'CS50 / Harvard University',
    platform: 'edX',
    topics: ['Relational Database Design', 'Complex SELECT Queries', 'Aggregate Functions', 'Subqueries & Views', 'Data Normalization'],
    description: 'Rigorous coursework on relational databases, schema normalization, writing performant queries, and managing multi-entity datasets.',
    certificateUrl: '',
    credentialId: 'CS50-SQL-EDX',
  },
  {
    id: 'cert-ai-coursera',
    title: 'Introduction to AI',
    issuer: 'Google',
    platform: 'Coursera',
    topics: ['Artificial Intelligence Fundamentals', 'Machine Learning Concepts', 'Data Ethics & Responsibility', 'Real-world Applications'],
    description: 'Foundational study of modern intelligent computing principles, data pipelines for machine learning, and technological applications.',
    certificateUrl: '',
    credentialId: 'COURSERA-GOOGLE-AI',
  },
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'netflix-data-analysis',
    title: 'Netflix Data Analysis',
    category: 'Exploratory Data Analysis',
    description: 'Cleaned and analyzed Netflix catalog data using Python, Pandas, and SQL. Queried datasets, performed exploratory data analysis, and created visualizations using Matplotlib and Seaborn to identify trends and insights.',
    bullets: [
      'Cleaned and analyzed Netflix data using Python, Pandas, and SQL.',
      'Queried datasets, performed exploratory data analysis, and created visualizations using Matplotlib & Seaborn to identify trends and insights.',
      'Handled missing values and normalized duration formats across film and episodic formats.'
    ],
    techStack: ['Python', 'Pandas', 'SQL', 'Seaborn', 'Matplotlib', 'MySQL'],
    linkUrl: '',
    linkText: 'Project Link / GitHub',
  },
  {
    id: 'academic-projects',
    title: 'Academic Data Analysis Projects',
    category: 'University Coursework',
    description: 'Completed academic exercises at the University of Delhi using NumPy, Pandas, and SQL for data manipulation, querying, and statistical analysis.',
    bullets: [
      'Completed academic exercises using NumPy, Pandas, and SQL for data manipulation, querying, and statistical analysis.',
      'Performed DataFrame merging, indexing, descriptive statistics, and data cleaning.',
      'Implemented Python data structures and Cisco Packet Tracer networking simulations.'
    ],
    techStack: ['Python', 'NumPy', 'Pandas', 'SQL', 'Cisco Packet Tracer', 'Statistics'],
    linkUrl: '',
    linkText: 'Project Link / Repository',
  },
];

export const CORE_COMPETENCIES = [
  { name: 'Analytical Thinking', detail: 'Deconstructing ambiguous problems into systematic data questions.' },
  { name: 'Problem Solving', detail: 'Locating data discrepancies and building clean, reproducible fixes.' },
  { name: 'Critical Thinking', detail: 'Checking assumptions and avoiding misleading chart interpretations.' },
  { name: 'Attention to Detail', detail: 'Validating null counts, schema types, and outlier integrity before reporting.' },
  { name: 'Clear Communication', detail: 'Translating technical SQL/Python findings into straightforward human language.' },
  { name: 'Teamwork & Continuous Learning', detail: 'Eager to absorb mentorship, adopt team standards, and pick up new tools.' },
];
