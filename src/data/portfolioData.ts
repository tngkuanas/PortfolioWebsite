import type { Project, ExperienceItem, ResearchInterest } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "TENGKU ANAS",
  fullLegalName: "Tengku Anas Zainal Abidin",
  title: "QUANT/DATA SCIENTIST",
  company: "PETRONAS",
  companySubUnit: "PETCO TRADING LABUAN COMPANY LTD",
  phone: "+60 19 269 0399",
  degree: "BACHELOR OF COMPUTER SCIENCE (DATA SCIENCE)",
  university: "UNIVERSITY OF MALAYA",
  location: "MENARA PERMATA SAPURA, KUALA LUMPUR, MY",
  email: "TENGKUANAS04@GMAIL.COM",
  linkedin: "https://linkedin.com/in/tengkuanas",
  github: "https://github.com/tengkuanas",
  bio: "Quantitative Data Scientist specializing in energy derivative analytics, commodity supply-demand equilibrium, physical refining yield optimization, and high-frequency time-series forecasting. Currently driving quant modelling at PETRONAS / PETCO Trading Labuan Company Ltd.",
  serialNumber: "TAZA-QNT-2026",
  registryCode: "WM-88219-KL"
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-petronas",
    role: "Quant / Data Scientist",
    company: "PETRONAS — PETCO Trading Labuan Company Ltd",
    location: "Kuala Lumpur, Malaysia",
    period: "Present",
    description: "Leading quantitative research, energy market econometrics, and trading analytics models across crude oil, refined products, and petrochemical complexes.",
    highlights: [
      "Engineered machine learning and econometric time-series architectures predicting global crude oil crack spreads and regional supply-demand imbalances.",
      "Developed physical crude slate optimization algorithms integrating real-time refining constraints, vessel tracking, and prompt paper pricing.",
      "Built automated data pipelines processing multi-terabyte satellite AIS maritime flows, refinery turnaround schedules, and macroeconomic signals.",
      "Delivered real-time quantitative decision-support systems utilized by commercial trading desks and executive risk committees."
    ],
    technologies: ["Python", "R", "Polars", "PyTorch", "Statsmodels", "LightGBM", "PostgreSQL", "Apache Airflow", "Docker", "FastAPI"],
    keyImpact: "Improved crack spread forecast precision by 24% and optimized multi-millions in commercial crude slate selection."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "brent-dubai-arbitrage",
    title: "Brent-Dubai Arbitrage Model",
    category: "Derivative Analytics & Spread Modeling",
    shortDescription: "Quantitative model forecasting the Brent-Dubai EFS (Exchange of Futures for Swaps) spread using physical crude differential mathematics.",
    fullDescription: "An advanced econometrics and machine learning hybrid model designed to predict the Brent-Dubai crude oil arbitrage window. The system ingests real-time paper quotes (ICE Brent vs. Dubai swaps), physical crude grade premiums (Sokol, Murban, Arab Light), freight rate matrices (VLCC/Suezmax routes), and regional refining margin indicators.",
    technologies: ["Python", "XGBoost", "Statsmodels", "Pandas", "Scikit-Learn", "FastAPI"],
    metrics: [
      { label: "Directional Accuracy", value: "81.4%" },
      { label: "Arbitrage Window Alpha", value: "+14.2 bps" },
      { label: "Data Refresh Rate", value: "Real-time / 5m" }
    ],
    methodology: "Kalman filter dynamic regression combined with gradient-boosted error correction on prompt physical vs paper spreads.",
    githubUrl: "https://github.com/tengkuanas/brent-dubai-arbitrage",
    demoUrl: "#",
    featured: true
  },
  {
    id: "diesel-demand-forecasting",
    title: "Diesel Demand Forecasting",
    category: "Time-Series Econometrics",
    shortDescription: "High-frequency macroeconomic and mobility time-series econometric framework predicting regional middle distillate consumption.",
    fullDescription: "A multi-layered forecasting engine combining industrial production indices, regional freight vehicle mobility data, weather anomalies, and customs trade flows to forecast Asian diesel/gasoil demand. Handles structural breaks and seasonal holiday shifts seamlessly.",
    technologies: ["Python", "Prophet", "LightGBM", "Polars", "PostgreSQL", "Docker"],
    metrics: [
      { label: "MAPE (30-day Horizon)", value: "1.82%" },
      { label: "Outperformance vs Baseline", value: "+38%" },
      { label: "Regional Coverage", value: "12 APAC Markets" }
    ],
    methodology: "Hierarchical time-series reconciliation (HTS) using Bayesian structural time-series with exogenous economic covariates.",
    githubUrl: "https://github.com/tengkuanas/diesel-demand-forecasting",
    demoUrl: "#",
    featured: true
  },
  {
    id: "refinery-run-model",
    title: "Refinery Run Model",
    category: "Yield & Linear Programming Optimization",
    shortDescription: "Mathematical LP & machine learning hybrid for crude slate yield optimization across multi-refinery complexes.",
    fullDescription: "Modeled complex petroleum refining distillation units (CDU, VDU, FCC, Hydrocracker) to optimize crude purchasing decisions. Calculates precise product yields (LPG, Gasoline, Jet, Diesel, Fuel Oil) under fluctuating crude assays and processing unit constraints.",
    technologies: ["Python", "PuLP / SciPy", "TensorFlow", "DuckDB", "Plotly"],
    metrics: [
      { label: "Yield Error Variance", value: "< 0.4%" },
      { label: "Optimization Solve Time", value: "1.2 seconds" },
      { label: "Slate Configurations Evaluated", value: "10,000+" }
    ],
    methodology: "Non-linear programming (NLP) linearized via piece-wise response surfaces derived from neural network assay surrogate models.",
    githubUrl: "https://github.com/tengkuanas/refinery-run-model",
    demoUrl: "#",
    featured: true
  },
  {
    id: "global-balance-model",
    title: "Global Balance Model",
    category: "Supply-Demand Matrix Mathematics",
    shortDescription: "Worldwide petroleum supply-demand balance tracker integrating real-time satellite inventory estimates and trade flow matrix math.",
    fullDescription: "A macro commodity matrix framework tracking global crude oil and refined product stocks across OECD commercial storage, Floating Storage (vessel AIS data), and SPR reserves. Provides early warning signals on market tightness or impending gluts.",
    technologies: ["Python", "GeoPandas", "PyTorch", "Redis", "DuckDB", "React"],
    metrics: [
      { label: "Global Stock Estimate Error", value: "±2.1M bbls" },
      { label: "Monitored Floating Storage Vessels", value: "4,500+" },
      { label: "Update Frequency", value: "Hourly AIS Ingestion" }
    ],
    methodology: "Constrained mass-balance matrix reconciliation using ensemble Kalman filtering over satellite synthetic aperture radar (SAR) tank lid shadow data.",
    githubUrl: "https://github.com/tengkuanas/global-balance-model",
    demoUrl: "#",
    featured: true
  },
  {
    id: "steam-cracker-run-forecasting",
    title: "Steam Cracker Run Forecasting",
    category: "Petrochemical Feed Optimization",
    shortDescription: "Petrochemical feed selection & thermal yield predictive engine under changing cracking margins.",
    fullDescription: "Predicts ethylene, propylene, and butadiene yields for steam cracking units based on feed slate variability (Naphtha, LPG, Ethane, Propane). Integrates live feed price differentials to recommend optimal cracker operating rates.",
    technologies: ["Python", "Scikit-Learn", "FastAPI", "Polars", "TailwindCSS"],
    metrics: [
      { label: "Olefin Yield Forecast Accuracy", value: "98.7%" },
      { label: "Margin Maximization Sensitivity", value: "$4.50 / MT" }
    ],
    methodology: "Kinetic thermal cracking regression models coupled with constrained quadratic programming for feed blend switching.",
    githubUrl: "https://github.com/tengkuanas/steam-cracker-run-forecasting",
    demoUrl: "#",
    featured: false
  },
  {
    id: "apac-naphtha-cracker-margin",
    title: "APAC Naphtha Cracker Margin Model",
    category: "Crack Spread & Petrochemical Analytics",
    shortDescription: "Regional olefin crack spread simulator & feed economics calculator for Asian petrochemical complexes.",
    fullDescription: "Simulates regional Asian naphtha cracker economics vs alternative feeds like LPG (Propane/Butane). Computes cash margins, co-product credits, and regional import parity tariffs across Japan, Korea, Taiwan, and SEA hubs.",
    technologies: ["R", "Shiny", "Python", "Polars", "ECharts"],
    metrics: [
      { label: "Spread Correlation to Spot Margin", value: "0.94" },
      { label: "Co-Product Pricing Feeds", value: "18 Spot Benchmarks" }
    ],
    methodology: "Monte Carlo simulation of co-product netbacks under stochastically generated crude oil price pathways.",
    githubUrl: "https://github.com/tengkuanas/apac-naphtha-cracker-margin",
    demoUrl: "#",
    featured: false
  },
  {
    id: "aira-ai-agent",
    title: "AIRA / AI Agent",
    category: "Autonomous Energy Market Intelligence",
    shortDescription: "Autonomous Intelligent Research Assistant tailored for real-time commodity news parsing, satellite AIS tracking summary, and quantitative sentiment signal extraction.",
    fullDescription: "An AI agentic system engineered specifically for quantitative commodity research. AIRA ingests unstructured market intelligence—OPEC+ commentary, refinery outage reports, satellite vessel rerouting notices—and translates them into structured quantitative feature vectors for automated trading models.",
    technologies: ["Python", "LangChain", "OpenAI / Anthropic API", "Vector DB (Qdrant)", "FastAPI", "WebSockets"],
    metrics: [
      { label: "News-to-Signal Latency", value: "< 850 ms" },
      { label: "Signal Extraction F1-Score", value: "0.91" },
      { label: "Automated Daily Briefings", value: "100% Autonomous" }
    ],
    methodology: "Retrieval-Augmented Generation (RAG) coupled with specialized domain fine-tuning and structured financial JSON output validation.",
    githubUrl: "https://github.com/tengkuanas/aira-ai-agent",
    demoUrl: "#",
    featured: true
  }
];

export const RESEARCH_TOPICS: ResearchInterest[] = [
  {
    id: "quant-finance",
    title: "Quantitative Finance",
    summary: "Mathematical modeling of financial derivatives, statistical arbitrage, and risk-neutral pricing frameworks tailored to commodity asset classes.",
    keyTopics: ["Stochastic Volatility Models", "Black-Scholes & Jump Diffusion", "Risk-Neutral Valuation", "VaR & Expected Shortfall"],
    equationSample: "dS_t = \\mu S_t dt + \\sigma S_t dW_t + J_t dq_t",
    equationDescription: "Merton's Jump-Diffusion process accounting for sudden commodity supply shocks."
  },
  {
    id: "commodity-trading",
    title: "Commodity Trading",
    summary: "Physical and paper market microstructure, location differentials, quality bank math, and cross-barrel crack spread mechanics.",
    keyTopics: ["EFS & Crack Spreads", "Physical Assay Pricing", "Tanker Freight Economics", "Storage Contango & Backwardation"],
    equationSample: "\\text{Crack Spread} = P_{\\text{Product}} \\times Y_{\\text{Product}} - P_{\\text{Crude}} - \\text{Freight} - \\text{Refining Cost}",
    equationDescription: "Netback refining margin formulation per barrel processed."
  },
  {
    id: "energy-markets",
    title: "Energy Markets",
    summary: "Global oil & gas fundamentals, OPEC policy equilibrium, refining slate dynamics, and energy transition decarbonization curves.",
    keyTopics: ["OPEC Production Quotas", "Refinery Turnaround Cycles", "Petrochemical Feed Switching", "Global Maritime Trade Flows"],
    equationSample: "\\Delta \\text{Inventory}_t = \\sum \\text{Imports}_t + \\text{Production}_t - \\sum \\text{Exports}_t - \\text{Demand}_t",
    equationDescription: "Fundamental petroleum mass balance equation."
  },
  {
    id: "time-series-forecasting",
    title: "Time-Series Forecasting",
    summary: "High-frequency econometric models, state-space representations, dynamic linear models, and neural temporal architectures.",
    keyTopics: ["Kalman Filtering", "ARIMAX & VAR", "Bayesian Structural Time Series", "Temporal Fusion Transformers"],
    equationSample: "x_k = A x_{k-1} + B u_k + w_k, \\quad z_k = H x_k + v_k",
    equationDescription: "Kalman Filter state update equation for noise-corrupted commodity pricing signals."
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    summary: "Supervised and unsupervised learning applications for high-dimensional financial feature matrices and non-linear physical response curves.",
    keyTopics: ["Gradient Boosted Trees (XGBoost/LightGBM)", "Surrogate Neural Networks", "Feature Attribution (SHAP)", "Dimension Reduction"],
    equationSample: "\\mathcal{L}^{(t)} = \\sum_{i=1}^n l(y_i, \\hat{y}_i^{(t-1)} + f_t(x_i)) + \\Omega(f_t)",
    equationDescription: "Objective function balancing empirical loss and tree model complexity."
  },
  {
    id: "data-science",
    title: "Data Science",
    summary: "Architecting enterprise-grade data pipelines, vector databases, satellite geospatial processing, and high-performance columnar analytical engines.",
    keyTopics: ["Polars & Apache Arrow", "GIS Maritime Vessel Analytics", "High-Throughput ETL", "LLM Agentic RAG"],
    equationSample: "\\text{Cosine Similarity} = \\frac{\\mathbf{A} \\cdot \\mathbf{B}}{\\|\\mathbf{A}\\| \\|\\mathbf{B}\\|}",
    equationDescription: "Vector embedding similarity metric for automated market news intelligence retrieval."
  }
];
