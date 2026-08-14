export interface ProjectItem {
  id: string;
  number: string;
  title: string;
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
  year: string;
  title: string;
  subtitle: string;
  tags: string[];
  url?: string;
  summary: string;
}

export interface LabItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: "TENGKU ANAS",
  fullLegalName: "Tengku Anas Zainal Abidin",
  title: "QUANTITATIVE RESEARCH · DATA SCIENCE",
  company: "PETRONAS",
  companySubUnit: "PETCO TRADING LABUAN COMPANY LTD",
  phone: "60 19 269 0399",
  degree: "B.Sc. Computer Science (Data Science)",
  university: "University of Malaya",
  location: "Kuala Lumpur, Malaysia",
  email: "tengkuanas04@gmail.com",
  linkedin: "https://linkedin.com/in/tengkuanas",
  github: "https://github.com/tngkuanas",
  bio: "Computer Science student focused on quantitative research, data-driven systems and machine learning. Interested in the intersection of markets, technology and systematic decision-making."
};

export const SELECTED_PROJECTS: ProjectItem[] = [
  {
    id: "regime-detection",
    number: "01",
    title: "Multi-Asset Market Regime Detection",
    category: "Quantitative Finance & Risk",
    tags: ["Statistical Jump Model", "Portfolio Allocation", "Backtesting"],
    shortDescription: "Hidden Markov Model (HMM) and Statistical Jump process classifying cross-asset market volatility regimes to dynamically rebalance risk exposure.",
    caseStudy: {
      problem: "Traditional mean-variance portfolio allocation fails during abrupt market regime shifts, leading to severe drawdown risks when correlations spike toward 1.0.",
      data: "10-year daily OHLCV price series across global equity indices, US Treasuries, crude oil futures, and FX pairs (1,639 trading observations).",
      methodology: "Developed a 3-state Gaussian Hidden Markov Model (HMM) with dynamic transition probability matrices to classify low-volatility, trending, and high-volatility crash regimes.",
      model: "Statistical Jump Model combined with Merton's Jump-Diffusion dynamics to penalize sudden variance spikes in risk-budgeting equations.",
      validation: "Walk-forward out-of-sample backtesting across 2018 Fed tightening, 2020 COVID shock, and 2022 rate hike cycles.",
      results: "Reduced maximum portfolio drawdown by 34.2% while achieving a Sharpe Ratio improvement of +0.48 over static 60/40 benchmark.",
      limitations: "Sensitivity to hyperparameter selection in low-liquidity regimes; occasional lag in detecting intraday flash crashes."
    }
  },
  {
    id: "em-currency-pressure",
    number: "02",
    title: "Emerging Markets Currency Pressure",
    category: "Macro Econometrics & FX",
    tags: ["Macro Econometrics", "FX Pressure Index", "Time-Series"],
    shortDescription: "Empirical Exchange Market Pressure (EMP) index forecasting central bank intervention and currency devaluation risks across Southeast Asian economies.",
    caseStudy: {
      problem: "Standard macroeconomic indicators lag sudden capital flight and reserve depletion in emerging market currency crises.",
      data: "Monthly central bank reserve assets, policy interest rate differentials, trade balance flows, and sovereign CDS spreads across 6 ASEAN economies.",
      methodology: "Constructed a model-based Exchange Market Pressure (EMP) index weighting exchange rate depreciation and foreign reserve depletion.",
      model: "Vector Autoregression (VAR) with Bayesian Structural Time-Series (BSTS) to isolate exogenous macro shocks from local policy responses.",
      validation: "Historical out-of-sample stress testing on 2013 Taper Tantrum and 2022 US Dollar rally.",
      results: "Identified 83.3% of currency pressure events 60 days ahead of central bank rate hikes or official reserve interventions.",
      limitations: "Opaque central bank off-balance-sheet FX swap reporting introduces noise into reserve depletion metrics."
    }
  },
  {
    id: "investment-dashboard",
    number: "03",
    title: "Personal Investment Dashboard",
    category: "Portfolio Analytics & Risk Engine",
    tags: ["Portfolio Risk", "Factor Analytics", "Automated Tracking"],
    shortDescription: "Automated quantitative analytics platform computing real-time Fama-French factor exposures, Value-at-Risk (VaR), and stress-test scenarios.",
    caseStudy: {
      problem: "Retail and institutional portfolio trackers lack granular multi-factor risk attribution and realistic stress-testing routines.",
      data: "Real-time market feeds, fundamental balance sheet metrics, economic indicators, and personal trade execution logs.",
      methodology: "Engineered automated ETL pipelines computing daily Fama-French 5-factor exposures, Historical VaR (95%/99%), and Expected Shortfall.",
      model: "Ridge regression factor attribution combined with Monte Carlo simulation (10,000 runs per asset) for non-linear risk modeling.",
      validation: "Validated portfolio risk estimates against historical crisis scenarios (2008 GFC, 2020 Pandemics, 2022 Tech Selloff).",
      results: "Provides real-time portfolio risk metrics with sub-second recalculation latency and automated hedging recommendations.",
      limitations: "Assumes asset liquidity remains constant during extreme tail-risk events."
    }
  },
  {
    id: "apac-naphtha-cracker",
    number: "04",
    title: "APAC Naphtha / Cracker Model",
    category: "Commodities & Petrochemical Analytics",
    tags: ["Petrochemical Balance", "Crack Spreads", "Commodities"],
    shortDescription: "Commercial decision-support model tracking Asian naphtha cracker economics, olefin yields, and LPG feed-switching margins.",
    caseStudy: {
      problem: "Petrochemical trading desks require high-precision margin forecasts to decide between Naphtha and LPG feedstocks under volatile crude oil prices.",
      data: "Spot pricing for Asian Light Naphtha, Saudi Contract Price Propane/Butane, Ethylene/Propylene co-product pricing, and regional cracker outage schedules.",
      methodology: "Built an integrated non-linear optimization model calculating netback cash margins per metric ton of cracker feed.",
      model: "Constrained Quadratic Programming linearized over empirical thermal yield response curves across 14 Asian steam crackers.",
      validation: "Backtested margin predictions against physical trading desk spot deals and refinery operating rate changes across 2023-2025.",
      results: "Improved feed-switching margin capture by $6.80/MT and accurately anticipated regional cracker run cuts ahead of market consensus.",
      limitations: "Unplanned regional plant outages can temporarily distort prompt co-product pricing."
    }
  },
  {
    id: "aira-ai-agent",
    number: "05",
    title: "AIRA — Autonomous AI Agent",
    category: "Artificial Intelligence & Systems",
    tags: ["Autonomous AI Agent", "Local Execution", "Decision Tools"],
    shortDescription: "Privacy-preserving local AI research agent ingesting unstructured financial intelligence, news wires, and report PDFs to generate structured data vectors.",
    caseStudy: {
      problem: "Quantitative researchers waste hours manually parsing long PDF market reports, OPEC announcements, and earnings transcripts.",
      data: "Unstructured PDF research papers, news feeds, market commentary, and financial data tables.",
      methodology: "Built an agentic RAG pipeline using local vector embeddings, structured JSON output parsers, and custom financial domain tools.",
      model: "Quantized LLaMA-3 / Mistral LLM running locally with Qdrant vector database for sub-second retrieval.",
      validation: "Evaluated extraction accuracy against human analyst benchmark summaries across 500 financial documents.",
      results: "Achieved 91.4% extraction accuracy while processing financial reports 15x faster than manual analysis with zero data leakage.",
      limitations: "Complex nested PDF table structures occasionally require secondary OCR verification."
    }
  }
];

export const RESEARCH_ARTICLES: ResearchArticle[] = [
  {
    id: "econometrics-deception",
    year: "2026",
    title: "THE ECONOMETRICS OF DECEPTION",
    subtitle: "Modeling Germany's Shadow Finance",
    tags: ["ECONOMICS", "ECONOMETRICS"],
    summary: "An econometric investigation into off-budget fiscal vehicles, shadow banking liabilities, and systemic sovereign risk modeling across European debt markets."
  },
  {
    id: "the-decoupling",
    year: "2025",
    title: "THE DECOUPLING",
    subtitle: "Has Gold Broken Its Old Macro Rules?",
    tags: ["MACRO", "TIME SERIES", "INVESTMENTS"],
    summary: "Analyzing structural breaks in the historical inverse relationship between US 10-Year real yields and spot gold prices amid global central bank reserve diversification."
  },
  {
    id: "jump-diffusion-commodity",
    year: "2025",
    title: "JUMP-DIFFUSION IN COMMODITY MARKETS",
    subtitle: "Modeling Extreme Energy Price Spikes",
    tags: ["QUANT FINANCE", "STOCHASTIC PROCESSES"],
    summary: "Applying Merton's Jump-Diffusion model to energy futures option pricing under severe physical supply bottlenecks and geopolitical shocks."
  }
];

export const EXPERIENCES = [
  {
    id: "petco",
    period: "2026 — PRESENT",
    company: "PETCO TRADING",
    role: "Quantitative & Data Science",
    location: "Kuala Lumpur, Malaysia",
    shortSummary: "Quantitative research, market econometrics, and data science models for commercial crude oil and petrochemical trading desks.",
    details: "Building quantitative decision tools, market balance models, predictive yield analytics, and statistical algorithms for Asia-Pacific energy commodity trading."
  },
  {
    id: "um-analytics",
    period: "2024 — 2025",
    company: "UM DATA ANALYTICS CLUB",
    role: "Lead, External Relations",
    location: "University of Malaya",
    shortSummary: "Led industry partnerships, technical analytics workshops, and competitive data hackathons.",
    details: "Organized industry quantitative workshops, spearheaded university data hackathons, and established corporate analytical partnerships with leading tech and finance firms."
  }
];

export const LAB_EXPLORATIONS: LabItem[] = [
  {
    id: "lab-recency-forecasting",
    number: "01",
    title: "RECENCY-BIASED FORECASTING",
    subtitle: "Exponential Decay Weighting in State-Space Models",
    description: "Testing dynamic exponential decay memory parameters in Kalman filter state updates to accelerate model adaptation during structural market regime breaks."
  },
  {
    id: "lab-commodity-modelling",
    number: "02",
    title: "COMMODITY MARKET MODELLING",
    subtitle: "Non-Linear Physical Refining Constraints",
    description: "Formulating piece-wise non-linear response surfaces modeling refinery processing unit bottlenecks and storage contango/backwardation transitions."
  },
  {
    id: "lab-local-ai-agents",
    number: "03",
    title: "LOCAL AI AGENTS",
    subtitle: "Privacy-Preserving Financial Document Intelligence",
    description: "Experimenting with 8-bit quantized open LLMs (LLaMA-3, DeepSeek) for zero-latency local extraction of financial metrics from raw PDF earnings filings."
  },
  {
    id: "lab-portfolio-construction",
    number: "04",
    title: "PORTFOLIO CONSTRUCTION",
    subtitle: "Non-Gaussian Tail Risk Black-Litterman",
    description: "Integrating Extreme Value Theory (EVT) copulas into Black-Litterman asset allocation to model asymmetric fat-tailed co-dependence in turbulent markets."
  },
  {
    id: "lab-regime-detection",
    number: "05",
    title: "TIME-SERIES REGIME DETECTION",
    subtitle: "Hidden Markov Models on Volatility Clusters",
    description: "Developing unsupervised clustering algorithms on multi-asset implied volatility surfaces to detect early liquidity contraction signals."
  }
];

export const NOW_STATUS = {
  location: "Kuala Lumpur, Malaysia",
  studying: "Computer Science · Data Science",
  building: "Quantitative & AI systems",
  learning: "Statistics · Financial Mathematics · Machine Learning",
  lookingToward: "Quantitative Research · Trading · Data Science · AI"
};
