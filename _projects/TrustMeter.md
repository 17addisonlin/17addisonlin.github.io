---
title: TrustMeter AI Based Checker
description: A lightweight FastAPI web app that classifies news articles as real or fake and fact-checks single statements with Wikipedia-backed evidence.
date: 2023-01-10 08:01:35 +0300
label: 
image: '/images/Project-TrustMeter/cover1.jpg'
images:
  - '/images/Project-TrustMeter/cover1.jpg'
  - '/images/Project-TrustMeter/cover2.jpg'
image_full: true
---
# AI Based (TrustMeter) News and Fact-Checking
<a id="readme-top"></a>

<p align="center">
  <br>
  <img src="/images/Project-TrustMeter/banner3.png">
  <br>
</p>

<h3 align="center">TrustMeter: Fake News Detection + Fact Check</h3>

<p align="center">
  A lightweight FastAPI web app that classifies news articles as real or fake and fact-checks single statements with Wikipedia-backed evidence.
  <br>
  <a href="https://github.com/17addisonlin/AI-Powered-Fake-News-Detection"><strong>Explore the docs »</strong></a>
  <br>
  English
</p>

<p align="center">
  <img src="https://img.shields.io/badge/python-3.11%2B-3776AB?logo=python&logoColor=white">
  <img src="https://img.shields.io/badge/FastAPI-009688?logo=fastapi&logoColor=white">
  <img src="https://img.shields.io/badge/PyTorch-EE4C2C?logo=pytorch&logoColor=white">
  <img src="https://img.shields.io/badge/Transformers-FFD21E?logo=huggingface&logoColor=000">
  <img src="https://img.shields.io/badge/Kaggle-Dataset-20BEFF?logo=kaggle&logoColor=white">
  <img src="https://img.shields.io/badge/Wikipedia-Evidence-000000?logo=wikipedia&logoColor=white">
  <img src="https://img.shields.io/badge/License-MIT-4caf50.svg">
  <img src="https://img.shields.io/badge/PRs-welcome-55EB99.svg">
</p>

<p align="center">
  <a href="https://github.com/17addisonlin/AI-Powered-Fake-News-Detection">View Repository</a>
  &nbsp; | &nbsp;
  <a href="https://github.com/17addisonlin/AI-Powered-Fake-News-Detection/issues/new?labels=bug">Report Bug</a>
  &nbsp; | &nbsp;
  <a href="https://github.com/17addisonlin/AI-Powered-Fake-News-Detection/issues/new?labels=enhancement">Request Feature</a>
</p>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#features">Features</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#running-locally">Running Locally</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#troubleshooting">Troubleshooting</a></li>
    <li><a href="#security--privacy-notes">Security & Privacy Notes</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project

TrustMeter is a lightweight FastAPI web app that helps evaluate news credibility. It provides two capabilities:
- **News detection**: classify articles or URLs as real or fake with confidence.
- **Statement fact-check**: verify a single claim as Supported / Refuted / Not enough info with evidence.

**Dataset and accuracy note:** performance depends heavily on the training dataset. Different datasets will yield different results. The current dataset is not up to date, which can introduce inaccurate information and bias.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
* [![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white)](https://pytorch.org/)
* [![Transformers](https://img.shields.io/badge/Transformers-FFD21E?style=for-the-badge&logo=huggingface&logoColor=000)](https://huggingface.co/docs/transformers/index)
* [![scikit-learn](https://img.shields.io/badge/scikit--learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white)](https://scikit-learn.org/)
* [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Features

- Text and URL input for news classification
- Statement fact-checking with Wikipedia evidence
- Confidence scores for predictions
- FastAPI backend with transformer models
- Clean, mobile-friendly UI

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

### Prerequisites

- Python 3.11 (recommended)
- venv
- Kaggle API token (for downloading the dataset)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/17addisonlin/AI-Powered-Fake-News-Detection.git
   cd AI-Powered-Fake-News-Detection
   ```
2. Create and activate a virtual environment
   ```sh
   python -m venv venv
   source venv/bin/activate
   ```
3. Install dependencies
   ```sh
   pip install -r requirements.txt
   ```
4. Download the dataset (Kaggle)
   ```sh
   pip install kaggle
   kaggle datasets download -d clmentbisaillon/fake-and-real-news-dataset -p data --unzip
   ```
5. Train the classifier
   ```sh
   python scripts/train.py --data_dir data
   ```

### Running Locally

1. Start the server
   ```sh
   uvicorn app.main:app --reload
   ```
2. Open `http://127.0.0.1:8000`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

- **News detection**: paste a news article or a URL and click **Analyze**.
- **Fact-check**: enter a single statement and click **Check statement**.
- **API endpoints**:
  - `POST /predict/` for news classification
  - `POST /fact-check/` for statement verification

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Troubleshooting

- **Slow startup:** models download on first run; allow extra time.
- **Training is slow:** reduce `--max_length` or `--batch_size` in `scripts/train.py`.
- **Fact-check not responding:** first call downloads the NLI model and can take a few minutes.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Security & Privacy Notes

- Text and URLs are processed locally by your server unless you deploy publicly.
- Fact-checking uses Wikipedia, so it requires internet access at runtime.
- If you deploy publicly, add authentication and rate limiting.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Roadmap

- [ ] Improve dataset quality and recency
- [ ] Add more evidence sources beyond Wikipedia
- [ ] Improve explainability and claim highlighting
- [ ] Add exportable reports

See the [open issues](https://github.com/17addisonlin/AI-Powered-Fake-News-Detection/issues) for a full list of proposed features and known issues.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing

Contributions are welcome. If you have improvements or bug fixes, please open an issue or submit a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

Addison Lin - [LinkedIn](https://www.linkedin.com/in/addison-lin-227)

Project Link: [https://github.com/17addisonlin/AI-Powered-Fake-News-Detection](https://github.com/17addisonlin/AI-Powered-Fake-News-Detection)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Acknowledgments

* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
* [Hugging Face Transformers](https://huggingface.co/docs/transformers/index)
* [PyTorch](https://pytorch.org/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
