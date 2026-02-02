---
title: VisionScribe AI Image Caption
description: A lightweight FastAPI web app that generates AI captions from uploaded images, plus a social-ready caption mode with tone, emojis, and hashtags.
date: 2023-01-10 08:01:35 +0300
label: 
image: '/images/project-visionscribe/caption%20demo.jpg'
image_full: true
---
# AI Image (VisionScribe) Captioning System
<a id="readme-top"></a>

<p align="center">
  <br>
  <img src="/images/project-visionscribe/banner.png">
  <br>
</p>

<h3 align="center">AI Image Captioning System</h3>

<p align="center">
  A lightweight FastAPI web app that generates AI captions from uploaded images, plus a social-ready caption mode with tone, emojis, and hashtags.
  <br>
  <a href="https://github.com/17addisonlin/AI-Powered-Image-Captioning-System"><strong>Explore the docs »</strong></a>
  <br>
  English
</p>

<p align="center">
  <img src="https://img.shields.io/badge/python-3.11%2B-3776AB?logo=python&logoColor=white">
  <img src="https://img.shields.io/badge/FastAPI-009688?logo=fastapi&logoColor=white">
  <img src="https://img.shields.io/badge/PyTorch-EE4C2C?logo=pytorch&logoColor=white">
  <img src="https://img.shields.io/badge/Transformers-FFD21E?logo=huggingface&logoColor=000">
  <img src="https://img.shields.io/badge/License-MIT-4caf50.svg">
  <img src="https://img.shields.io/badge/PRs-welcome-55EB99.svg">
</p>

<p align="center">
  <a href="https://github.com/17addisonlin/AI-Powered-Image-Captioning-System">View Repository</a>
  &nbsp; | &nbsp;
  <a href="https://github.com/17addisonlin/AI-Powered-Image-Captioning-System/issues/new?labels=bug">Report Bug</a>
  &nbsp; | &nbsp;
  <a href="https://github.com/17addisonlin/AI-Powered-Image-Captioning-System/issues/new?labels=enhancement">Request Feature</a>
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

This project is a lightweight web app that generates AI captions from uploaded images. It supports a standard caption mode and a social caption mode with tone, emojis, and hashtags.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
* [![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white)](https://pytorch.org/)
* [![Transformers](https://img.shields.io/badge/Transformers-FFD21E?style=for-the-badge&logo=huggingface&logoColor=000)](https://huggingface.co/docs/transformers/index)
* [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Features

- Upload images and generate AI captions
- Social caption mode with tone, emojis, and hashtags
- Clean UI with preview and drag-and-drop upload
- FastAPI backend with vision-language models

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

### Prerequisites

- Python 3.11 (recommended)
- Conda or venv

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/17addisonlin/AI-Powered-Image-Captioning-System.git
   cd AI-Powered-Image-Captioning-System
   ```
2. Create and activate an environment
   ```sh
   conda create -n captioning python=3.11 -y
   conda activate captioning
   ```
3. Install dependencies
   ```sh
   pip install -r requirements.txt
   ```

### Running Locally

1. Start the server
   ```sh
   uvicorn main:app --reload
   ```
2. Open `http://127.0.0.1:8000`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

1. Upload an image in Caption mode to get a short description.
2. Switch to Social mode to generate a social-ready caption.
3. Choose tone and toggle emojis/hashtags if desired.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Troubleshooting

- **Slow startup:** models download on first run; allow extra time.
- **Dependency errors:** verify you are using the `captioning` environment.
- **Blank caption:** try a different image or reduce image size.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Security & Privacy Notes

- Images are processed locally by your server; nothing is uploaded unless you deploy it.
- If you deploy publicly, add authentication and rate limiting.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Roadmap

- [ ] Enhance UI
- [ ] Add features
- [ ] Add dark/white toggle background

See the [open issues](https://github.com/17addisonlin/AI-Powered-Image-Captioning-System/issues) for a full list of proposed features and known issues.

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

Project Link: [https://github.com/17addisonlin/AI-Powered-Image-Captioning-System](https://github.com/17addisonlin/AI-Powered-Image-Captioning-System)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Acknowledgments

* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
* [Hugging Face Transformers](https://huggingface.co/docs/transformers/index)
* [PyTorch](https://pytorch.org/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
