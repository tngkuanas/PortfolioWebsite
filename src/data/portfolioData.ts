export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  shortDescription: string;
  caseStudy: {
    problem: string;
    data: string;
    methodology: string;
    model: string;
    validation: string;
    results: string;
    limitations: string;
  };
}

export interface ResearchArticle {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  tags: string[];
  summary: string;
  link?: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  company: string;
  role: string;
  location: string;
  summary: string;
}

export interface LabItem {
  id: string;
  number: string;
  title: string;
  question: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: 'Tengku Anas Zainal Abidin',
  shortName: 'Tengku Anas',
  title: 'Computer Science Student',
  tagline: 'Quant · Data Science · AI',
  statement: 'Computer Science student focused on quantitative research, data science and AI. Interested in markets, systematic decision-making and building data-driven systems.',
  email: 'tengkuanas04@gmail.com',
  linkedin: 'https://linkedin.com/in/tengkuanas',
  github: 'https://github.com/tngkuanas',
  location: 'Kuala Lumpur, Malaysia',
  education: 'University of Malaya — B.Sc. Computer Science (Data Science)',
};

export const SELECTED_PROJECTS: ProjectItem[] = [
  {
    id: 'market-regime',
    number: '01',
    title: 'Multi-Asset Market Regime Detection',
    subtitle: 'Statistical Jump Model · Portfolio Allocation · Backtesting',
    category: 'Quantitative Finance',
    tags: ['Jump Model', 'Regime Switching', 'Portfolio Allocation'],
    shortDescription: 'Detecting cross-asset volatility regimes and testing whether regime-aware allocation improves portfolio risk.',
    caseStudy: {
      problem: 'Asset correlations and volatility profiles change abruptly during market stress, causing standard static allocation models to fail.',
      data: 'Daily historical prices, implied volatility indices, and cross-asset correlation metrics across equities and commodities.',
      methodology: 'Formulated a statistical jump model to classify discrete market states into low, medium, and high-volatility regimes.',
      model: 'Expectation-Maximization state estimation coupled with regime-dependent covariance matrix calculation.',
      validation: 'Evaluated out-of-sample portfolio Sharpe ratios and maximum drawdown reduction across historical crisis periods.',
      results: 'Demonstrated improved drawdown control during market turbulence while preserving upside participation during stable trends.',
      limitations: 'Transition probabilities rely on stationary state assumptions which can delay detection during novel shock events.'
    }
  },
  {
    id: 'em-currency',
    number: '02',
    title: 'Emerging Markets Currency Pressure',
    subtitle: 'Macro Econometrics · FX Pressure Index · Time-Series',
    category: 'Macro Analytics',
    tags: ['Econometrics', 'FX Index', 'Time-Series'],
    shortDescription: 'Building an early-warning model for currency pressure using macroeconomic and commodity indicators.',
    caseStudy: {
      problem: 'Detecting early warning signals of currency pressure in emerging Asian markets before capital flight accelerates.',
      data: 'Foreign exchange reserves, central bank interest rate differentials, trade balances, and spot/forward FX rates.',
      methodology: 'Constructed a composite Exchange Market Pressure (EMP) index weighting reserve changes and interest rate movements.',
      model: 'Vector Autoregression (VAR) model capturing cross-border spillovers and macroeconomic transmission shocks.',
      validation: 'Historical backtesting against past currency depreciation episodes in Southeast Asia.',
      results: 'Identified mounting pressure windows 2-4 weeks ahead of significant central bank reserve interventions.',
      limitations: 'Offshore unhedged capital flows and informal currency interventions are difficult to quantify with public data.'
    }
  },
  {
    id: 'investment-dashboard',
    number: '03',
    title: 'Personal Investment Dashboard',
    subtitle: 'Portfolio Risk · Factor Analytics · Automated Tracking',
    category: 'Portfolio Analytics',
    tags: ['Risk Analytics', 'Factor Exposure', 'Local Workspace'],
    shortDescription: 'A local analytics system for tracking portfolio performance, exposure and risk.',
    caseStudy: {
      problem: 'Retail portfolio tools lack transparent factor decomposition and custom downside risk analytics.',
      data: 'API integrations for price feeds, fundamental financial data, and benchmark indices.',
      methodology: 'Implemented multi-factor regression analysis to break down portfolio returns into market, size, value, and momentum exposures.',
      model: 'Parametric and historical Value at Risk (VaR) estimation with downside semi-deviation metrics.',
      validation: 'Reconciled factor weights against benchmark indices and stress-tested portfolio responses to historic rate hikes.',
      results: 'Streamlined portfolio rebalancing decisions and highlighted unintended concentration risks.',
      limitations: 'Factor sensitivities fluctuate over short time horizons, requiring periodic rolling regression windows.'
    }
  },
  {
    id: 'naphtha-cracker',
    number: '04',
    title: 'APAC Naphtha / Cracker Model',
    subtitle: 'Petrochemical Balance · Crack Spreads · Commodities',
    category: 'Commodity Analytics',
    tags: ['Commodity Balance', 'Crack Spreads', 'Refining Yields'],
    shortDescription: 'Models physical refining yields and regional naphtha supply-demand dynamics for Asia-Pacific petrochemical markets.',
    caseStudy: {
      problem: 'Predicting regional naphtha crack spread fluctuations driven by refinery maintenance cycles and steam cracker feedstock switching.',
      data: 'Refinery throughputs, regional shipping fixture data, cracker operating rates, and LPG-naphtha price spreads.',
      methodology: 'Built a physical supply-demand balance sheet tracking regional refinery output against ethylene plant feedstock appetite.',
      model: 'Linear yield optimization model balancing naphtha versus LPG economics for regional crackers.',
      validation: 'Compared model spread forecasts against historical spot physical deals in Singapore and North Asia.',
      results: 'Provided actionable fundamental context for short-term naphtha crack spread direction.',
      limitations: 'Unplanned refinery outages and shipping delays introduce short-term noise to balance projections.'
    }
  },
  {
    id: 'aira-agent',
    number: '05',
    title: 'AIRA — Financial Research Assistant',
    subtitle: 'Local LLM · Document Analysis · Decision Support',
    category: 'Artificial Intelligence',
    tags: ['Local AI', 'Document Parsing', 'Decision Support'],
    shortDescription: 'A privacy-first local assistant designed to parse financial documents, extract tables, and summarize market reports.',
    caseStudy: {
      problem: 'Extracting key metrics and structured insights from lengthy earnings reports and commodity market updates quickly.',
      data: 'Financial PDFs, equity earnings transcripts, and commodity research briefings.',
      methodology: 'Combined local document parsing with a lightweight retrieval pipeline running entirely on local hardware.',
      model: 'Quantized open-source LLM integrated with local vector embeddings for contextual search.',
      validation: 'Tested extraction accuracy against manually annotated tables and key financial disclosures.',
      results: 'Reduced report synthesis time while maintaining total data privacy without sending documents to cloud APIs.',
      limitations: 'Complex multi-page nested tables can occasionally misalign during raw text extraction.'
    }
  }
];

export const RESEARCH_ARTICLES: ResearchArticle[] = [
  {
    id: 'econometrics-deception',
    title: 'The Econometrics of Deception',
    subtitle: 'Exploring statistical anomaly detection in financial time-series data',
    year: '2025',
    tags: ['Econometrics', 'Anomaly Detection'],
    summary: 'Notes on Benfords law, structural breaks, and statistical tests for identifying unexpected distribution shifts in market data.'
  },
  {
    id: 'gold-decoupling',
    title: 'The Decoupling: Has Gold Broken Its Old Macro Rules?',
    subtitle: 'Analyzing real yields and structural shifts in precious metals',
    year: '2025',
    tags: ['Macro', 'Commodities'],
    summary: 'Observations on why traditional inverse relationships between gold prices and US real yields have evolved due to central bank reserve flows.'
  },
  {
    id: 'jump-diffusion',
    title: 'Jump-Diffusion Models in Commodity Markets',
    subtitle: 'Comparing continuous Brownian motion vs jump models in energy price spikes',
    year: '2024',
    tags: ['Commodities', 'Stochastic Modeling'],
    summary: 'Comparing standard continuous price models against Merton jump-diffusion models for handling rapid supply shock volatility.'
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'petco',
    period: '2026',
    company: 'PETCO TRADING',
    role: 'QUANTITATIVE & DATA SCIENCE INTERN',
    location: 'Kuala Lumpur',
    summary: 'Worked on quantitative commodity balance models, refining yield tracking, and market analytics for the trading desk.'
  },
  {
    id: 'um-dac',
    period: '2024 — 2025',
    company: 'UM DATA ANALYTICS CLUB',
    role: 'TECHNICAL LEAD',
    location: 'University of Malaya',
    summary: 'Led technical workshops on data analysis, machine learning fundamentals, and quantitative modeling projects for student developers.'
  }
];

export const LAB_EXPLORATIONS: LabItem[] = [
  {
    id: 'lab-1',
    number: '01',
    title: 'RECENCY-BIASED FORECASTING',
    question: 'How much should a model remember?',
    description: 'Testing exponential decay parameters in time-series forecasting when market regimes shift rapidly.'
  },
  {
    id: 'lab-2',
    number: '02',
    title: 'COMMODITY MODELLING',
    question: 'Forecasting physical constraints in refining.',
    description: 'Building simplified balance models for regional feedstock switching between Naphtha and LPG.'
  },
  {
    id: 'lab-3',
    number: '03',
    title: 'LOCAL AI TOOLS',
    question: 'Building financial research tools that run locally.',
    description: 'Experimenting with small local language models to parse earnings transcripts without third-party APIs.'
  },
  {
    id: 'lab-4',
    number: '04',
    title: 'PORTFOLIO CONSTRUCTION',
    question: 'Testing alternative approaches to tail risk.',
    description: 'Evaluating mean-semivariance optimization vs. standard Markowitz models during market drawdowns.'
  }
];

export const NOW_STATUS = {
  location: 'Kuala Lumpur, Malaysia',
  studying: 'Computer Science · Data Science',
  building: 'Quantitative & AI tools',
  learning: 'Statistics & Financial Math',
  lookingToward: 'Quant, Trading & AI roles',
};
